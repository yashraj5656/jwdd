// src/app/wedding-planner/page.js
import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import Listing from "@/models/Listing";
import "./p.css";

export const metadata = {
  title: "Wedding Planners in Rajasthan | Verified & Trusted Experts",
  description:
    "Explore verified wedding planners in Rajasthan with services, ratings, photos and direct WhatsApp contact.",
};

const toArray = (str) =>
  (str || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

const profileHref = (listing) => `/planners/${listing.slug || listing._id}`;

const waLink = (phone) => {
  const digits = (phone || "").replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : null;
};

const renderStars = (rating) => {
  const full = Math.floor(parseFloat(rating) || 0);
  return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5 - full);
};

// ✅ async Server Component — no getServerSideProps needed
export default async function WeddingPlannerPage() {
  await connectDB();

  const all = await Listing.aggregate([
    { $match: { status: "paid" } },
    {
      $addFields: {
        planRank: {
          $switch: {
            branches: [
              { case: { $eq: ["$plan", "premium"] }, then: 1 },
              { case: { $eq: ["$plan", "featured"] }, then: 2 },
              { case: { $eq: ["$plan", "starter"] }, then: 3 },
            ],
            default: 4,
          },
        },
      },
    },
    { $sort: { planRank: 1, createdAt: -1 } },
  ]);

    const featured = JSON.parse(
      JSON.stringify(all.filter((l) => l.plan === "premium" || l.plan === "featured"))
    );
    const planners = JSON.parse(
      JSON.stringify(all.filter((l) => l.plan === "starter"))
    );
  return (
    <div className="jwp-home jwp-planners-page">
      <main>
        {/* ---------- Featured planners (premium only) ---------- */}
        <section className="jwp-section jwp-planners-section" id="featured">
          <div className="jwp-container">
            <div className="jwp-section-heading">
              <span className="jwp-eyebrow">A handpicked place to begin</span>
              <h2>
                Featured <em>Planners</em>
              </h2>
              <p>
                Handpicked premium planners trusted by couples across Rajasthan.
              </p>
            </div>

            <div className="jwp-featured-grid">
              {featured.map((planner, index) => {
                const wa = waLink(planner.phone);
                return (
                  <article className="jwp-planner-feature" key={planner._id}>
                    <span className="jwp-planner-number">
                      0{index + 1}
                    </span>

                    <div className="jwp-planner-feature-image">
                      <img
                        src={planner.heroImage || "/plannerhero/Atelier.jpg"}
                        alt={`${planner.name} ${planner.city || ""}`}
                      />
                      <span className="jwp-image-corner">✧</span>
                    </div>

                    <div className="jwp-planner-feature-body">
                      <div className="jwp-planner-feature-head">
                        <span className="jwp-eyebrow">Featured Planner</span>
                        {planner.plan === "premium" && (
                          <span className="jwp-verified">✓ Verified</span>
                        )}
                      </div>

                      <h3>{planner.name}</h3>

                      <div className="jwp-planner-rating">
                        <span className="jwp-stars">
                          {renderStars(planner.rating)}
                        </span>
                        <span className="jwp-rating-meta">
                          {planner.rating || "–"} ·{" "}
                          {planner.weddingsPlanned
                            ? `${planner.weddingsPlanned}+ weddings`
                            : "weddings"}
                        </span>
                      </div>

                      <p className="jwp-planner-desc">
                        {planner.reason ||
                          `${planner.name} is a premium wedding planner in ${
                            planner.city || "Rajasthan"
                          }.`}
                      </p>

                      <ul className="jwp-planner-services">
                        {toArray(planner.services).map((s) => (
                          <li key={s}>
                            <span>✧</span> {s}
                          </li>
                        ))}
                      </ul>

                      <div className="jwp-planner-actions">
                        <Link
                          href={profileHref(planner)}
                          className="jwp-button jwp-button-gold"
                        >
                          View Details <span>→</span>
                        </Link>
                        {wa && (
                          <a
                            href={wa}
                            target="_blank"
                            rel="noreferrer"
                            className="jwp-button jwp-button-outline"
                          >
                            WhatsApp
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- All planners ---------- */}
        <section className="jwp-section jwp-section-light" id="all-planners">
          <div className="jwp-container">
            <div className="jwp-section-heading">
              <span className="jwp-eyebrow">Every celebration, considered</span>
              <h2>
                All Wedding Planners <em>in Jaipur</em>
              </h2>
              <p>
                Browse the full directory of Rajasthan-based wedding planners,
                each with their own signature style.
              </p>
            </div>

            <div className="jwp-planner-grid">
              {planners.map((planner, index) => (
                <article className="jwp-planner-card" key={planner._id}>
                  <div className="jwp-planner-number">
                    {String(index + featured.length + 1).padStart(2, "0")}
                  </div>
                  <div className="jwp-planner-ornament">✧</div>
                  <h3>{planner.name}</h3>

                  <div className="jwp-planner-rating">
                    <span className="jwp-stars">
                      {renderStars(planner.rating)}
                    </span>
                    <span className="jwp-rating-meta">
                      {planner.rating || "–"} ·{" "}
                      {planner.weddingsPlanned
                        ? `${planner.weddingsPlanned}+ weddings`
                        : "weddings"}
                    </span>
                  </div>

                  <p>
                    {planner.reason ||
                      `${
                        planner.name
                      } plans weddings in ${planner.city || "Rajasthan"}.`}
                  </p>

                  <ul className="jwp-planner-services">
                    {toArray(planner.services).map((s) => (
                      <li key={s}>
                        <span>✧</span> {s}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={profileHref(planner)}
                    className="jwp-card-link"
                  >
                    View Details <span>→</span>
                  </Link>
                </article>
              ))}
            </div>

            <div className="jwp-centered-action">
              <a href="#featured" className="jwp-button jwp-button-outline">
                Back to Featured <span>↑</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}