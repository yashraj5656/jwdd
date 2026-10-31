// src/app/planners/[slug]/page.js
import { cache } from "react";
import { notFound } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import Listing from "@/models/Listing";
import PlannerProfile from "@/components/planner/PlannerProfile";
import "./planners.css";

// ✅ Per-request cached query — generateMetadata + PlannerPage share ONE DB call
const getListing = cache(async (slug) => {
  await connectDB();

  // Only paid listings are public
  let listing = await Listing.findOne({ slug, status: "paid" }).lean();

  // Fallback: allow ObjectId URL
  if (!listing && /^[a-f\d]{24}$/i.test(slug)) {
    listing = await Listing.findById(slug).lean();
    if (listing?.status !== "paid") listing = null;
  }

  return listing;
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const listing = await getListing(slug);
  if (!listing) return { title: "Planner not found" };

  return {
    title: `${listing.name} – Wedding Planner in ${listing.city}`,
    description:
      listing.reason ||
      `${listing.name} is a wedding planner in ${listing.city}.`,
    openGraph: {
      title: `${listing.name} – Wedding Planner in ${listing.city}`,
      description:
        listing.reason ||
        `${listing.name} is a wedding planner in ${listing.city}.`,
      images: listing.heroImage ? [{ url: listing.heroImage }] : [],
    },
  };
}

export default async function PlannerPage({ params }) {
  const { slug } = await params;
  const listing = await getListing(slug);
  if (!listing) notFound();

  // Pass only serializable fields the client needs
  const serialized = {
    name: listing.name,
    slug: listing.slug,
    plan: listing.plan,
    status: listing.status,
    city: listing.city,
    phone: listing.phone,
    experience: listing.experience,
    reason: listing.reason,
    services: listing.services,
    portfolio: listing.portfolio,
    heroImage: listing.heroImage,
    image: listing.image,
    galleryImages: listing.galleryImages || [],
    rating: listing.rating,
    reviewCount: listing.reviewCount,
    weddingsPlanned: listing.weddingsPlanned,
    testimonials: listing.testimonials || [],
  };

  return <PlannerProfile listing={serialized} />;
}