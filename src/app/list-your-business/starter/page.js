// pages/list-your-business/starter.jsx
"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import StarterPayment from "@/components/StarterPayment";
import "./starter.css";

export default function StarterListing() {
  const [formData, setFormData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = e.target;

    setFormData({
      business: f.business.value,
      name: f.name.value,
      phone: f.phone.value,
      email: f.email.value,
      city: f.city.value,
      experience: f.experience.value,
      services: f.services.value,
      link: f.link.value,
    });
  };

  const planFeatures = [
    "Basic business listing",
    "Business name & city",
    "Listed under Rajasthan planners",
    "Business Profile Page",
  ];

  return (
    <>
      <Head>
        <title>Starter Listing Plan | JaipurWeddingPlanner.in</title>
        <meta
          name="description"
          content="Apply for the Starter listing plan on JaipurWeddingPlanner.in — get listed and start receiving visibility from real couples."
        />
        <meta name="theme-color" content="#faf7f2" />
      </Head>

      <div className="jwp-home jwp-starter-page">
        {/* ---------- Hero ---------- */}
        {/*<header className="jwp-starter-hero">
          <div className="jwp-starter-hero-overlay" />
          <div className="jwp-container jwp-starter-hero-inner">
            <span className="jwp-eyebrow jwp-hero-eyebrow">
              Listing Plan · Starter
            </span>
            <span className="jwp-hero-rule" />
            <h1>
              Starter <em>Listing Plan</em>
            </h1>
            <p>
              Get listed on JaipurWeddingPlanner.in and start receiving
              visibility from real couples planning weddings in Rajasthan.
            </p>
            <div className="jwp-hero-actions">
              <a href="#apply" className="jwp-button jwp-button-gold">
                Apply for Starter <span>↗</span>
              </a>
              <Link href="/list-your-business" className="jwp-text-link">
                Compare all plans <span>→</span>
              </Link>
            </div>
            <div className="jwp-hero-footnote">
              <span /> ₹799 / month · No commission · Rajasthan focused
            </div>
          </div>
          <div className="jwp-hero-side-note">STARTER · ₹799 / MO</div>
        </header>*/}

        <main>
          {/* ---------- What's included strip ---------- */}
          {/*<section className="jwp-starter-includes">
            <div className="jwp-container jwp-starter-includes-inner">
              <div className="jwp-starter-includes-head">
                <span className="jwp-eyebrow">What’s included</span>
                <h2>
                  Starter <em>plan features</em>
                </h2>
              </div>
              <ul className="jwp-starter-includes-list">
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
                      Apply for <em>Starter Plan</em>
                    </>
                  )}
                </h2>
                <p>
                  {formData
                    ? "Complete payment to submit your Starter listing."
                    : "All fields are required unless marked optional. Your details are only used to set up your listing."}
                </p>
              </div>

              {!formData ? (
                <form className="jwp-starter-form" onSubmit={handleSubmit}>
                  <div className="jwp-starter-form-grid">
                    {/* Column 1 — business basics */}
                    <div className="jwp-starter-form-col">
                      <label className="jwp-starter-field">
                        <span>Business Name</span>
                        <input name="business" required />
                      </label>

                      <label className="jwp-starter-field">
                        <span>Contact Person</span>
                        <input name="name" required />
                      </label>

                      <label className="jwp-starter-field">
                        <span>Phone / WhatsApp</span>
                        <input name="phone" type="tel" required />
                      </label>

                      <label className="jwp-starter-field">
                        <span>Email</span>
                        <input name="email" type="email" required />
                      </label>

                      <label className="jwp-starter-field">
                        <span>City</span>
                        <input name="city" required />
                      </label>

                      <label className="jwp-starter-field">
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

                    {/* Column 2 — services & link */}
                    <div className="jwp-starter-form-col">
                      <label className="jwp-starter-field">
                        <span>Services Offered</span>
                        <textarea
                          name="services"
                          rows="7"
                          placeholder="Briefly list your services (décor, catering, photography, etc.)"
                          required
                        />
                      </label>

                      <label className="jwp-starter-field">
                        <span>
                          Website / Instagram / Portfolio{" "}
                          <em className="jwp-starter-optional">(optional)</em>
                        </span>
                        <input
                          name="link"
                          placeholder="https://…"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="jwp-starter-form-actions">
                    <button type="submit" className="jwp-button jwp-button-gold">
                      Continue to Payment <span>→</span>
                    </button>
                    <p className="jwp-starter-form-note">
                      ✓ Secure checkout · Powered by Razorpay · No commission
                    </p>
                  </div>
                </form>
              ) : (
                <div className="jwp-starter-payment-card">
                  <div className="jwp-starter-payment-head">
                    <span className="jwp-eyebrow">Almost there</span>
                    <h3>
                      Payment for <em>Starter Listing</em>
                    </h3>
                    <p>
  Complete payment and <strong>{formData.business}</strong> will be live on
  JaipurWeddingPlanner.in immediately.
</p>
                  </div>

                  <div className="jwp-starter-payment-box">
                    <StarterPayment formData={formData} />
                  </div>

                  <div className="jwp-starter-secure">
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