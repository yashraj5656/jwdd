// pages/list-your-business/premium.jsx
"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import PremiumPayment from "@/components/PremiumPayment";
import "./premium.css";

export default function PremiumListing() {
  const [formData, setFormData] = useState(null);

  // Cloudinary image state
  const [heroImageUrl, setHeroImageUrl] = useState("");
  const [galleryImageUrls, setGalleryImageUrls] = useState(["", "", ""]);
  const [uploading, setUploading] = useState(false);

  // Upload a single file via /api/upload (same route used by featured page)
  const uploadFile = async (file) => {
    const data = new FormData();
    data.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: data });
    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Upload failed");
    return json.url;
  };

  const handleHeroUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadFile(file);
      setHeroImageUrl(url);
    } catch (err) {
      alert("Hero image upload failed: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleGalleryUpload = async (index, file) => {
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadFile(file);
      setGalleryImageUrls((prev) => {
        const next = [...prev];
        next[index] = url;
        return next;
      });
    } catch (err) {
      alert("Gallery image upload failed: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!heroImageUrl) {
      alert("Please upload a hero image.");
      return;
    }

    const f = e.target;
    setFormData({
      business: f.business.value,
      name: f.name.value,
      phone: f.phone.value,
      email: f.email.value,
      city: f.city.value,
      experience: f.experience.value,
      website: f.website.value,
      portfolio: f.portfolio.value,
      budget: f.budget.value,
      // Attach Cloudinary URLs
      heroImage: heroImageUrl,
      galleryImages: galleryImageUrls.filter(Boolean),
      plan: "premium",
    });
  };

  const planFeatures = [
    "Top placement on homepage",
    "Featured + Verified badge",
    "Priority WhatsApp Leads",
    "SEO-optimized profile page",
    "First Recommended",
  ];

  return (
    <>
      <Head>
        <title>Premium Wedding Planner Listing | JaipurWeddingPlanner.in</title>
        <meta
          name="description"
          content="Apply for the Premium listing plan on JaipurWeddingPlanner.in — top homepage placement, verified badge, priority WhatsApp leads and SEO-optimized profile for Rajasthan wedding planners."
        />
        <meta name="theme-color" content="#faf7f2" />
      </Head>

      <div className="jwp-home jwp-premium-page">
        {/* ---------- Hero ---------- */}
       {/*} <header className="jwp-premium-hero">
          <div className="jwp-premium-hero-overlay" />
          <div className="jwp-container jwp-premium-hero-inner">
            <span className="jwp-eyebrow jwp-hero-eyebrow">
              Listing Plan · Premium
            </span>
            <span className="jwp-hero-rule" />
            <h1>
              Premium Wedding <em>Planner Listing</em>
            </h1>
            <p>
              Top homepage placement, priority WhatsApp leads, and a
              SEO-optimized profile — for planners ready to be first
              recommended.
            </p>
            <div className="jwp-hero-actions">
              <a href="#apply" className="jwp-button jwp-button-gold">
                Apply for Premium <span>↗</span>
              </a>
              <Link href="/list-your-business" className="jwp-text-link">
                Compare all plans <span>→</span>
              </Link>
            </div>
            <div className="jwp-hero-footnote">
              <span /> ₹9,999 / month · No commission · Top homepage placement
            </div>
          </div>
          <div className="jwp-hero-side-note">PREMIUM · ₹9,999 / MO</div>
        </header>*/}

        <main>
          {/* ---------- Features strip ---------- */}
          {/*<section className="jwp-premium-includes">
            <div className="jwp-container jwp-premium-includes-inner">
              <div className="jwp-premium-includes-head">
                <span className="jwp-eyebrow">What’s included</span>
                <h2>
                  Premium <em>plan features</em>
                </h2>
              </div>
              <ul className="jwp-premium-includes-list">
                {planFeatures.map((f) => (
                  <li key={f}>
                    <span>✧</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </section>*/}

          {/* ---------- Form / Payment ---------- */}
          <section className="jwp-section jwp-section-light" id="apply">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">
                  {formData ? "Final step" : "Tell us about your business"}
                </span>
                <h2>
                  {formData ? (
                    <>
                      Complete <em>Your Listing</em>
                    </>
                  ) : (
                    <>
                      Apply for <em>Premium Listing</em>
                    </>
                  )}
                </h2>
                <p>
                  {formData
                    ? "Complete payment to submit your Premium listing."
                    : "Required fields are marked. Optional fields help us tailor your profile before it goes live."}
                </p>
              </div>

              {!formData ? (
                <form className="jwp-premium-form" onSubmit={handleSubmit}>
                  <div className="jwp-premium-form-grid">
                    {/* Column 1 — contact basics */}
                    <div className="jwp-premium-form-col">
                      <span className="jwp-premium-form-col-title">
                        Contact Details
                      </span>

                      <label className="jwp-premium-field">
                        <span>Business Name</span>
                        <input name="business" required />
                      </label>

                      <label className="jwp-premium-field">
                        <span>Owner Name</span>
                        <input name="name" required />
                      </label>

                      <label className="jwp-premium-field">
                        <span>Phone / WhatsApp</span>
                        <input name="phone" type="tel" required />
                      </label>

                      <label className="jwp-premium-field">
                        <span>Email</span>
                        <input name="email" type="email" required />
                      </label>
                    </div>

                    {/* Column 2 — business details */}
                    <div className="jwp-premium-form-col">
                      <span className="jwp-premium-form-col-title">
                        Business Details
                      </span>

                      <label className="jwp-premium-field">
                        <span>City</span>
                        <input name="city" required />
                      </label>

                      <label className="jwp-premium-field">
                        <span>Years of Experience</span>
                        <select name="experience" required defaultValue="">
                          <option value="" disabled>
                            Select experience
                          </option>
                          <option>3–5 Years</option>
                          <option>5–10 Years</option>
                          <option>10+ Years</option>
                        </select>
                      </label>

                      <label className="jwp-premium-field">
                        <span>Avg Wedding Budget</span>
                        <input name="budget" placeholder="e.g. ₹15–30 lakh" />
                      </label>
                    </div>

                    {/* Column 3 — online presence */}
                    <div className="jwp-premium-form-col">
                      <span className="jwp-premium-form-col-title">
                        Online Presence
                      </span>

                      <label className="jwp-premium-field">
                        <span>
                          Website / Instagram{" "}
                          <em className="jwp-premium-optional">(optional)</em>
                        </span>
                        <input name="website" placeholder="https://…" />
                      </label>

                      <label className="jwp-premium-field">
                        <span>
                          Portfolio Link{" "}
                          <em className="jwp-premium-optional">(optional)</em>
                        </span>
                        <input name="portfolio" placeholder="https://…" />
                      </label>

                      <p className="jwp-premium-form-col-note">
                        Adding a portfolio link helps us verify your work before
                        publishing your Premium profile.
                      </p>
                    </div>
                  </div>

                  {/* ---------- Images ---------- */}
                  <div className="jwp-premium-form-col" style={{ marginTop: 24 }}>
                    <span className="jwp-premium-form-col-title">Images</span>

                    <label className="jwp-premium-field">
                      <span>Hero Image (1) — required</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleHeroUpload}
                        disabled={uploading}
                      />
                      {heroImageUrl && (
                        <small style={{ color: "#2e7d32" }}>
                          ✓ Uploaded: {heroImageUrl.split("/").pop()}
                        </small>
                      )}
                    </label>

                    <label className="jwp-premium-field">
                      <span>Gallery Images (up to 3)</span>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                        }}
                      >
                        {[0, 1, 2].map((i) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 10,
                            }}
                          >
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) =>
                                handleGalleryUpload(i, e.target.files?.[0])
                              }
                              disabled={uploading}
                              style={{ flex: 1 }}
                            />
                            {galleryImageUrls[i] && (
                              <small style={{ color: "#2e7d32" }}>✓</small>
                            )}
                          </div>
                        ))}
                      </div>
                    </label>

                    <p className="jwp-premium-form-col-note">
                      Hero image appears at the top of your profile. Gallery
                      images appear in the highlights section.
                    </p>
                  </div>

                  <div className="jwp-premium-form-actions">
                    <button
                      type="submit"
                      className="jwp-button jwp-button-gold"
                      disabled={uploading}
                    >
                      Continue to Payment <span>→</span>
                    </button>
                    <p className="jwp-premium-form-note">
                      ✓ Secure checkout · Powered by Razorpay · No commission
                    </p>
                  </div>
                </form>
              ) : (
                <div className="jwp-premium-payment-card">
                  <div className="jwp-premium-payment-head">
                    <span className="jwp-eyebrow">Almost there</span>
                    <h3>
                      Payment for <em>Premium Listing</em>
                    </h3>
                    <p>
  Complete payment and <strong>{formData.business}</strong> will be live on
  JaipurWeddingPlanner.in immediately.
</p>
                  </div>

                  <div className="jwp-premium-payment-box">
                    <PremiumPayment formData={formData} />
                  </div>

                  <div className="jwp-premium-secure">
                    <span>🔒</span> 100% Secure Payment · Powered by Razorpay
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}