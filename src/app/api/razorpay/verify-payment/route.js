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

    // ✅ Verify signature
    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json(
        { success: false, message: "Invalid signature" },
        { status: 400 }
      );
    }

    // ✅ Connect MongoDB
    await connectDB();

    // ✅ Save listing
    const listing = await Listing.create({
      plan: plan, // "featured" or "premium"
      ...formData,
      paymentId: razorpay_payment_id,
      status: "pending", // admin approval
    });

    return NextResponse.json({
      success: true,
      listingId: listing._id,
    });
  } catch (err) {
    console.error("VERIFY & SAVE ERROR:", err);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
