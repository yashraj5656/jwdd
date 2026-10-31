// src/app/api/verify/route.js
import { NextResponse } from "next/server";
import crypto from "crypto";
import { connectDB } from "@/lib/mongodb";
import Listing from "@/models/Listing";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      formData,
      plan,
    } = body;

    // --- 1. Validate input shape ---
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { success: false, message: "Missing Razorpay fields" },
        { status: 400 }
      );
    }

    if (!process.env.RAZORPAY_KEY_SECRET) {
      console.error("RAZORPAY_KEY_SECRET is not set");
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    // --- 2. Verify signature ---
    const sign = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest("hex");

    // Constant-time compare to avoid timing leaks
    const sigBuffer = Buffer.from(razorpay_signature, "hex");
    const expectedBuffer = Buffer.from(expectedSignature, "hex");
    const valid =
      sigBuffer.length === expectedBuffer.length &&
      crypto.timingSafeEqual(sigBuffer, expectedBuffer);

    if (!valid) {
      console.error("Signature mismatch", {
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        received: razorpay_signature,
        expected: expectedSignature,
      });
      return NextResponse.json(
        { success: false, message: "Invalid signature" },
        { status: 400 }
      );
    }

    // --- 3. Connect DB ---
    await connectDB();

    // --- 4. Whitelist + normalize fields (never trust client shape) ---
    const allowed = [
      "name",
      "business",
      "phone",
      "email",
      "city",
      "experience",
      "services",
      "portfolio",
      "reason",
      "heroImage",
      "galleryImages",
    ];

    const safe = {};
    for (const key of allowed) {
      if (formData?.[key] != null) safe[key] = formData[key];
    }

    // Normalize services to a comma string (schema uses String, not array)
    if (Array.isArray(safe.services)) {
      safe.services = safe.services.join(", ");
    }

    // Ensure galleryImages is always an array of strings
    if (safe.galleryImages && !Array.isArray(safe.galleryImages)) {
      safe.galleryImages = [safe.galleryImages];
    }

    // Server-side slug generation (safe, collision-resistant enough for now)
    const baseSlug = (safe.name || safe.business || "planner")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    safe.slug = baseSlug;

    // --- 5. Upsert by orderId (idempotent) ---
    const listing = await Listing.findOneAndUpdate(
      { orderId: razorpay_order_id },          // ← idempotency key
      {
        $set: {
          plan: plan || formData?.plan || "featured",
          status: "paid",                      // ← publicly visible after payment
          ...safe,
          paymentId: razorpay_payment_id,
          orderId: razorpay_order_id,          // ← save this
        },
        $setOnInsert: {
          createdAt: new Date(),
        },
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    return NextResponse.json({
      success: true,
      listingId: listing._id,
      slug: listing.slug,
    });
  } catch (err) {
    console.error("VERIFY & SAVE ERROR:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}