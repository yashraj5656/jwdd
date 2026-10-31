// pages/list-your-business/featured.jsx
"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import FeaturedPayment from "@/components/FeaturedPayment";
import "./featured.css";

export default function FeaturedListing() {
  const [formData, setFormData] = useState(null);

  // Cloudinary image state
  const [heroImageUrl, setHeroImageUrl] = useState("");
  const [galleryImageUrls, setGalleryImageUrls] = useState(["", "", ""]);
  const [uploading, setUploading] = useState(false);

  // Upload a single file to /api/upload → returns Cloudinary secure_url
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

  const removeGalleryImage = (index) => {
    setGalleryImageUrls((prev) => {
      const next = [...prev];
      next[index] = "";
      return next;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (uploading) {
      alert("Please wait — an image is still uploading.");
      return;
    }

    if (!heroImageUrl) {
      alert("Please upload a hero image before continuing.");
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
      services: f.services.value,
      portfolio: f.portfolio.value,
      reason: f.reason.value,
      heroImage: heroImageUrl,
      galleryImages: galleryImageUrls.filter(Boolean),
      plan: "featured",
    });
  };

  const planFeatures = [
    "Featured placement in listings",
    "Featured planner badge",
    "WhatsApp & call inquiries",
    "Portfolio & gallery section",
    "Priority support",
  ];

  return (
    <>
      <Head>
        <title>Featured Wedding Planner Listing | JaipurWeddingPlanner.in</title>
        <meta
          name="description"
          content="Apply for the Featured listing plan on JaipurWeddingPlanner.in — featured placement, verified badge, portfolio & priority support for Rajasthan wedding planners."
        />
        <meta name="theme-color" content="#faf7f2" />
      </Head>

      <div className="jwp-home jwp-featured-page">
        {/* ---------- Hero ---------- */}
       {/*} <header className="jwp-featured-hero">
          <div className="jwp-featured-hero-overlay" />
          <div className="jwp-container jwp-featured-hero-inner">
            <span className="jwp-eyebrow jwp-hero-eyebrow">
              Listing Plan · Featured
            </span>
            <span className="jwp-hero-rule" />
            <h1>
              Featured Wedding <em>Planner Plan</em>
            </h1>
            <p>
              Featured placement, a verified Featured badge, portfolio gallery &
              priority support — for planners ready to stand out.
            </p>
            <div className="jwp-hero-actions">
              <a href="#apply" className="jwp-button jwp-button-gold">
                Apply for Featured <span>↗</span>
              </a>
              <Link href="/list-your-business" className="jwp-text-link">
                Compare all plans <span>→</span>
              </Link>
            </div>
            <div className="jwp-hero-footnote">
              <span /> ₹4,999 / month · No commission · Rajasthan focused
            </div>
          </div>
          <div className="jwp-hero-side-note">FEATURED · ₹4,999 / MO</div>
        </header>*/}

        <main>
          {/* ---------- Features strip ---------- */}
          {/*<section className="jwp-featured-includes">
            <div className="jwp-container jwp-featured-includes-inner">
              <div className="jwp-featured-includes-head">
                <span className="jwp-eyebrow">What’s included</span>
                <h2>
                  Featured <em>plan features</em>
                </h2>
              </div>
              <ul className="jwp-featured-includes-list">
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
                      Apply for <em>Featured Listing</em>
                    </>
                  )}
                </h2>
                <p>
                  {formData
                    ? "Complete payment to submit your Featured listing."
                    : "All fields are required. Your details are only used to set up your listing and are reviewed before going live."}
                </p>
              </div>

              {!formData ? (
                <form className="jwp-featured-form" onSubmit={handleSubmit}>
                  <div className="jwp-featured-form-grid">
                    {/* Column 1 — business basics */}
                    <div className="jwp-featured-form-col">
                      <label className="jwp-featured-field">
                        <span>Business Name</span>
                        <input name="business" required />
                      </label>

                      <label className="jwp-featured-field">
                        <span>Contact Person</span>
                        <input name="name" required />
                      </label>

                      <label className="jwp-featured-field">
                        <span>Phone / WhatsApp</span>
                        <input name="phone" type="tel" required />
                      </label>

                      <label className="jwp-featured-field">
                        <span>Email</span>
                        <input name="email" type="email" required />
                      </label>

                      <label className="jwp-featured-field">
                        <span>City</span>
                        <input name="city" required />
                      </label>

                      <label className="jwp-featured-field">
                        <span>Years of Experience</span>
                        <select name="experience" required defaultValue="">
                          <option value="" disabled>
                            Select experience
                          </option>
                          <option>0–2 Years</option>
                          <option>3–5 Years</option>
                          <option>5–10 Years</option>
                          <option>10+ Years</option>
                        </select>
                      </label>
                    </div>

                    {/* Column 2 — services & pitch */}
                    <div className="jwp-featured-form-col">
                      <label className="jwp-featured-field">
                        <span>Main Services</span>
                        <textarea
                          name="services"
                          rows="4"
                          placeholder="Décor, catering, photography, destination weddings…"
                          required
                        />
                      </label>

                      <label className="jwp-featured-field">
                        <span>Portfolio Link</span>
                        <input
                          name="portfolio"
                          placeholder="Website / Instagram / Portfolio URL"
                          required
                        />
                      </label>

                      <label className="jwp-featured-field">
                        <span>Why Should We Feature You?</span>
                        <textarea
                          name="reason"
                          rows="5"
                          placeholder="Tell us what makes your studio stand out — signature style, notable weddings, awards, client reviews…"
                          required
                        />
                      </label>
                    </div>
                  </div>

                  {/* ---------- IMAGES (NEW) ---------- */}
                  <div className="jwp-featured-form-col" style={{ marginTop: 28 }}>
                    <span className="jwp-featured-field">
                      <span>Images</span>
                    </span>

                    {/* Hero image */}
                    <label className="jwp-featured-field">
                      <span>Hero Image (1) — required</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleHeroUpload}
                        disabled={uploading}
                      />
                      {heroImageUrl && (
                        <div
                          style={{
                            marginTop: 10,
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                          }}
                        >
                          <img
                            src={heroImageUrl}
                            alt="Hero preview"
                            style={{
                              width: 100,
                              height: 70,
                              objectFit: "cover",
                              borderRadius: 4,
                              border: "1px solid #e8dece",
                            }}
                          />
                          <small style={{ color: "#2e7d32" }}>
                            ✓ Uploaded
                          </small>
                        </div>
                      )}
                    </label>

                    {/* Gallery images */}
                    <div className="jwp-featured-field" style={{ marginTop: 20 }}>
                      <span>Gallery Images (up to 3)</span>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 12,
                          marginTop: 10,
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
                              <>
                                <img
                                  src={galleryImageUrls[i]}
                                  alt={`Gallery ${i + 1}`}
                                  style={{
                                    width: 52,
                                    height: 52,
                                    objectFit: "cover",
                                    borderRadius: 4,
                                    border: "1px solid #e8dece",
                                  }}
                                />
                                <button
                                  type="button"
                                  onClick={() => removeGalleryImage(i)}
                                  style={{
                                    background: "none",
                                    border: "none",
                                    color: "#b8860b",
                                    fontSize: 18,
                                    cursor: "pointer",
                                    padding: 4,
                                  }}
                                  aria-label="Remove image"
                                >
                                  ×
                                </button>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <p style={{ fontSize: 11, color: "#666", marginTop: 10 }}>
                      Hero image appears at the top of your profile. Gallery
                      images appear in the highlights section. Max 5 MB each.
                    </p>
                  </div>

                  <div className="jwp-featured-form-actions">
                    <button
                      type="submit"
                      className="jwp-button jwp-button-gold"
                      disabled={uploading}
                    >
                      {uploading
                        ? "Uploading…"
                        : "Continue to Payment"}{" "}
                      <span>→</span>
                    </button>
                    <p className="jwp-featured-form-note">
                      ✓ Secure checkout · Powered by Razorpay · No commission
                    </p>
                  </div>
                </form>
              ) : (
                <div className="jwp-featured-payment-card">
                  <div className="jwp-featured-payment-head">
                    <span className="jwp-eyebrow">Almost there</span>
                    <h3>
                      Payment for <em>Featured Listing</em>
                    </h3>
                    <p>
  Complete payment and <strong>{formData.business}</strong> will be live on
  JaipurWeddingPlanner.in immediately.
</p>
                  </div>

                  <div className="jwp-featured-payment-box">
                    <FeaturedPayment formData={formData} />
                  </div>

                  <div className="jwp-featured-secure">
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