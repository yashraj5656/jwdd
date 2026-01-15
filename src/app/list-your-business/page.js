"use client";
import Head from "next/head";

export default function ListYourBusiness() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const business = form.business.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const city = form.city.value;
    const experience = form.experience.value;

    const message = `
Wedding Planner Listing Request 📋

🏢 Business Name: ${business}
👤 Contact Person: ${name}
📞 Phone: ${phone}
📍 City: ${city}
🎯 Experience: ${experience}

From: JaipurWeddingPlanner.in
    `;

    const whatsappNumber = "916378380535";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <Head>
        <title>List Your Wedding Planning Business | JaipurWeddingPlanner.in</title>
        <meta
          name="description"
          content="List your wedding planning business on JaipurWeddingPlanner.in and get high-quality leads from couples planning weddings in Jaipur."
        />
      </Head>

      {/* Top Divider / Breadcrumb */}
      <section className="section light page-intro">
        <div className="container">
          <p className="breadcrumb">
            Home / <strong>List Your Business</strong>
          </p>
          <h1>List Your Wedding Planning Business</h1>
          <p className="intro-text">
            Get discovered by couples actively looking for wedding planners in
            Jaipur. No commissions. Direct inquiries. Real leads.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <h2>Why List With Us?</h2>

          <div className="benefit-grid">
            <div className="benefit-card">
              🎯
              <h3>High-Intent Leads</h3>
              <p>
                Couples visiting our platform are actively planning their
                wedding — not casual browsers.
              </p>
            </div>

            <div className="benefit-card">
              📍
              <h3>Jaipur-Focused Exposure</h3>
              <p>
                Rank for local searches like “Wedding Planner in Jaipur” without
                heavy ad spending.
              </p>
            </div>

            <div className="benefit-card">
              ✅
              <h3>Verified Planner Badge</h3>
              <p>
                Build instant trust with a verified listing that stands out from
                competitors.
              </p>
            </div>

            <div className="benefit-card">
              💰
              <h3>No Commission</h3>
              <p>
                One simple listing fee. You keep 100% of your booking revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works for planners */}
      <section className="section light">
        <div className="container">
          <h2>How It Works for Planners</h2>

          <ol className="steps">
            <li>Submit your business details</li>
            <li>We verify your profile & services</li>
            <li>Your listing goes live on our platform</li>
            <li>Receive direct calls & WhatsApp inquiries</li>
          </ol>
        </div>
      </section>

      {/* Form */}
      <section className="section" id="apply">
        <div className="container">
          <h2>Apply for Listing</h2>

          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="business"
              placeholder="Business Name"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Contact Person Name"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone / WhatsApp Number"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City (Jaipur / Udaipur etc.)"
              required
            />
            <select name="experience" required>
              <option value="">Years of Experience</option>
              <option>0–2 Years</option>
              <option>3–5 Years</option>
              <option>5–10 Years</option>
              <option>10+ Years</option>
            </select>

            <button type="submit" className="btn-primary">
              Apply via WhatsApp
            </button>

            <p className="form-note">
              Limited planner slots available to maintain quality.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
