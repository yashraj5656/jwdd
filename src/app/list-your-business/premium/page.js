"use client";
import Head from "next/head";
import { useState } from "react";
import PremiumPayment from "@/components/PremiumPayment";
import "./premium.css";

export default function PremiumListing() {
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
      website: f.website.value,
      portfolio: f.portfolio.value,
      budget: f.budget.value,
    });
  };

  return (
    <>
      <Head>
        <title>Premium Wedding Planner Listing | JaipurWeddingPlanner.in</title>
      </Head>

      <section className="premium-hero">
        <div className="container">
          <span className="premium-badges" style={{marginBottom:'1.5rem'}}>PREMIUM</span>
          <h1>Premium Wedding Planner Listing</h1>
          <p>Top homepage placement + unlimited leads</p>
        </div>
      </section>

      <section className="premium-form-section">
        <div className="container">
          <h2>Apply for Premium Listing</h2>

          {!formData ? (
            <form className="premium-form" onSubmit={handleSubmit}>
              <input name="business" placeholder="Business Name" required />
              <input name="name" placeholder="Owner Name" required />
              <input name="phone" placeholder="Phone / WhatsApp" required />
              <input name="email" type="email" placeholder="Email" required />
              <input name="city" placeholder="City" required />

              <select name="experience" required>
                <option value="">Years of Experience</option>
                <option>3–5 Years</option>
                <option>5–10 Years</option>
                <option>10+ Years</option>
              </select>

              <input name="website" placeholder="Website / Instagram" />
              <input name="portfolio" placeholder="Portfolio Link" />
              <input name="budget" placeholder="Avg Wedding Budget" />

              <button className="btn-premium" type="submit">
                Continue to Payment
              </button>
            </form>
          ) : (
            <>
<div className="payment-card">
  <p className="payment-note">
    Complete payment to submit your <strong>Premium</strong> listing.
  </p>

  <div className="payment-box">
    <PremiumPayment formData={formData} />
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
