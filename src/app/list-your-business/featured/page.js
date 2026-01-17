"use client";
import Head from "next/head";
import { useState } from "react";
import FeaturedPayment from "@/components/FeaturedPayment";
import "./featured.css";

export default function FeaturedListing() {
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
      portfolio: f.portfolio.value,
      reason: f.reason.value,
    });
  };

  return (
    <>
      <Head>
        <title>Featured Wedding Planner Listing | JaipurWeddingPlanner.in</title>
      </Head>

      {/* HERO */}
      <header className="featured-hero">
        <div className="container">
          <span className="gold-star-seal">FEATURED LISTING</span>
          <h1>Featured Wedding Planner Plan</h1>
          <p>
            Featured placement, verified badge, portfolio & priority support.
          </p>
        </div>
      </header>

      {/* BENEFITS */}
      <section className="featured-benefits">
        <div className="container benefits-grid">
          <div>⭐ Featured Placement</div>
          <div>✅ Verified Badge</div>
          <div>📞 WhatsApp & Call Leads</div>
          <div>🖼 Portfolio Gallery</div>
          <div>⚡ Priority Support</div>
        </div>
      </section>

      {/* FORM */}
      <section className="section">
        <div className="container form-container">
          <h2>Apply for Featured Listing</h2>

          {!formData ? (
            <form className="featured-form" onSubmit={handleSubmit}>
              <input name="business" placeholder="Business Name" required />
              <input name="name" placeholder="Contact Person Name" required />
              <input name="phone" placeholder="Phone / WhatsApp" required />
              <input name="email" type="email" placeholder="Email" required />
              <input name="city" placeholder="City" required />

              <select name="experience" required>
                <option value="">Years of Experience</option>
                <option>0–2 Years</option>
                <option>3–5 Years</option>
                <option>5–10 Years</option>
                <option>10+ Years</option>
              </select>

              <textarea
                name="services"
                placeholder="List your main services"
                rows="4"
                required
              />

              <input
                name="portfolio"
                placeholder="Website / Instagram / Portfolio link"
                required
              />

              <textarea
                name="reason"
                placeholder="Why should we feature your business?"
                rows="4"
                required
              />

              <button className="btn-primary full" type="submit">
                Continue to Payment
              </button>
            </form>
          ) : (
            <>
<div className="payment-card">
  <p className="payment-note">
    Complete payment to submit your <strong>Featured</strong> listing.
  </p>

  <div className="payment-box">
    <FeaturedPayment formData={formData} />
  </div>

  <div className="secure-text">
    🔒 100% Secure Payment • Powered by Razorpay
  </div>
</div>

            </>
          )}
        </div>
      </section>
    </>
  );
}
