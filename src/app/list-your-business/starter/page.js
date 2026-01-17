"use client";
import Head from "next/head";
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

  return (
    <>
      <Head>
        <title>Starter Listing Plan | JaipurWeddingPlanner.in</title>
      </Head>

      {/* HERO */}
      <section className="starter-hero">
        <div className="container">
          <h1>Starter Listing Plan</h1>
          <p>
            Get listed on JaipurWeddingPlanner.in and start receiving visibility
            from real couples.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="section">
        <div className="container form-container">
          <h2>Apply for Starter Plan</h2>

          {!formData ? (
            <form className="starter-form" onSubmit={handleSubmit}>
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
                rows="4"
                placeholder="Briefly list your services"
                required
              />

              <input
                name="link"
                placeholder="Website / Instagram / Portfolio link (optional)"
              />

              <button className="btn-primary full" type="submit">
                Continue to Payment
              </button>
            </form>
          ) : (
            <><div className="payment-card">
            <p className="payment-note">
              Complete payment to submit your <strong>Starter</strong> listing.
            </p>
          
            <div className="payment-box">
              <StarterPayment formData={formData} />
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
