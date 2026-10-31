// components/planner/PlannerProfile.jsx
"use client";

import {
  HeroSection,
  StatsSection,
  AboutSection,
  RatingSection,
  ServicesSection,
  PortfolioSection,
  SignatureStylesSection,
  TestimonialsSection,
  ProcessSection,
  CTASection,
} from "./sections";

const PLAN_FEATURES = {
  starter:  { portfolio: false, signatureStyles: false, testimonials: false },
  featured: { portfolio: true,  signatureStyles: true,  testimonials: false },
  premium:  { portfolio: true,  signatureStyles: true,  testimonials: true  },
};

const PLAN_LABELS = {
  starter:  { eyebrow: "Wedding Planner",           sideNote: "WEDDING · PLANNER" },
  featured: { eyebrow: "Featured Planner",          sideNote: "MODERN · LUXURY · " },
  premium:  { eyebrow: "Verified Premium Planner",  sideNote: "PREMIUM · ROYAL · " },
};

export default function PlannerProfile({ listing }) {
  const plan = listing.plan || "starter";
  const features = PLAN_FEATURES[plan] ?? PLAN_FEATURES.starter;
  const labels = PLAN_LABELS[plan] ?? PLAN_LABELS.starter;

  // --- Services (comma string → array) ---
  const services = (listing.services || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  // --- Highlights: prefer Cloudinary galleryImages, fall back to portfolio string ---
  const highlights = listing.galleryImages?.length
    ? listing.galleryImages.map((src, i) => ({
        src,
        alt: `${listing.name} wedding ${i + 1}`,
      }))
    : (listing.portfolio || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .map((src, i) => ({
          src,
          alt: `${listing.name} wedding ${i + 1}`,
        }));

  // --- Numeric fields: safe coercion (fixes string ratings crashing toFixed) ---
  const rating =
    Number(listing.rating) ||
    (plan === "premium" ? 4.9 : plan === "featured" ? 4.1 : 3.4);
  const reviewCount = Number(listing.reviewCount) || 20;
  const weddingsPlanned = Number(listing.weddingsPlanned) || 80;
  const experience = listing.experience || "7+ Years";

  const stats = [
    { value: `${weddingsPlanned}+`, label: "Weddings Planned" },
    { value: `${rating.toFixed(1)} ★`, label: "Average Rating" },
    { value: experience, label: "Experience" },
    { value: listing.city || "Jaipur", label: "Based Team" },
  ];

  const signatureStyles =
    plan === "premium"
      ? [
          { title: "Royal Palace Weddings", description: "Grand heritage venues with regal décor and traditional elegance." },
          { title: "Luxury Destination Weddings", description: "End-to-end planning for premium destination celebrations." },
          { title: "Modern Minimal Celebrations", description: "Clean aesthetics, curated themes, and refined experiences." },
        ]
      : [
          { title: "Traditional Celebrations", description: "Culturally rich ceremonies with authentic décor." },
          { title: "Luxury Venues", description: "Regal settings styled to honour royal craftsmanship." },
          { title: "Destination Weddings", description: "End-to-end execution across regions." },
        ];

// Prefer real testimonials stored on the listing; fall back to nothing.
// For premium listings with no testimonials yet, show a generic block so the
// section still renders (optional — remove the fallback if you prefer hiding).
const storedTestimonials = Array.isArray(listing.testimonials)
  ? listing.testimonials.filter((t) => t?.quote && t?.couple)
  : [];

const testimonials =
  plan === "premium" && storedTestimonials.length === 0
    ? [
        {
          quote: `${listing.name} planned our wedding flawlessly — every detail felt effortless and considered.`,
          couple: "— A couple from Jaipur",
        },
      ]
    : storedTestimonials;

  const processSteps = [
    "Consultation & Vision Planning",
    "Concept, Budget & Venue Finalization",
    "Design, Vendors & Timeline Setup",
    "On-Ground Execution & Guest Management",
  ];

  const whatsappNumber = listing.phone?.replace(/\D/g, "") || "";
  const telHref = listing.phone ? `tel:${listing.phone}` : "#";

  return (
    <div className={`jwp-home jwp-planner-detail jwp-planner-${plan}`}>
      <HeroSection
        listing={listing}
        labels={labels}
        whatsappNumber={whatsappNumber}
        telHref={telHref}
        weddingsPlanned={weddingsPlanned}
        experience={experience}
      />

      <main>
        <StatsSection stats={stats} />
        <AboutSection listing={listing} />
        <RatingSection rating={rating} reviewCount={reviewCount} />
        <ServicesSection services={services} />

        {features.portfolio && <PortfolioSection highlights={highlights} />}
        {features.signatureStyles && (
          <SignatureStylesSection styles={signatureStyles} />
        )}

        {features.testimonials && (
          <TestimonialsSection testimonials={testimonials} />
        )}

        <ProcessSection steps={processSteps} />

        <CTASection plan={plan} whatsappNumber={whatsappNumber} />
      </main>
    </div>
  );
}