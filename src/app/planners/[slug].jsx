// pages/planners/[slug].jsx
import Head from "next/head";
import { connectDB } from "@/lib/mongodb"; // your existing DB helper
import Listing from "@/models/Listing";
import PlannerProfile from "@/components/planner/PlannerProfile";

export default function PlannerPage({ listing }) {
  if (!listing) {
    return <div className="jwp-container">Planner not found</div>;
  }
  return (
    <>
      <Head>
        <title>{listing.name} – Wedding Planner in {listing.city}</title>
        <meta
          name="description"
          content={`${listing.name} is a ${
            listing.plan === "premium" ? "premium" : "trusted"
          } wedding planner in ${listing.city}. ${
            listing.services || ""
          }`.slice(0, 160)}
        />
        <meta name="theme-color" content="#faf7f2" />
      </Head>
      <PlannerProfile listing={listing} />
    </>
  );
}

// SSR — always fresh, good for SEO
export async function getServerSideProps({ params }) {
  await connectDB();

  // Try slug first, fall back to _id
  const slug = params.slug;
  let listing = await Listing.findOne({
    slug, // if you store slug
    status: "paid",
  }).lean();

  if (!listing) {
    // try by _id if slug looks like a Mongo ObjectId
    if (/^[a-f\d]{24}$/i.test(slug)) {
      listing = await Listing.findById(slug).lean();
    }
  }

  if (!listing) {
    return { notFound: true };
  }

  // Serialize for JSON
  return {
    props: { listing: JSON.parse(JSON.stringify(listing)) },
  };
}