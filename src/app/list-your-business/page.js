"use client";
import Head from "next/head";
import './lyb.css';

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

    const whatsappNumber = "91";
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


      <header className="heroo">
        <div className="hero-contenttt">
          <p className="hero-subtitleee">Experience Royalty on Your Special Day</p>
          <h1>List Your Wedding Planning Business</h1>
          <p>
          Get discovered by couples actively looking for <strong>wedding planners</strong> in
          Jaipur. No commissions. Direct inquiries. Real leads.
          </p>
          <div className="hero-actionsss">
          <a href="#plans" className="btn-primaryyy">
              List Your Business
            </a>
          </div>
        </div>
      </header>
     
 



      <section id="plans" className="pricing-sectionn">
  <div className="container">
    <h2>Listing Plans for Wedding Planners</h2>
    <p className="pricing-introo">
      Choose a plan that fits your business size. No commissions. No hidden
      charges.
    </p>

    <div className="pricing-gridd">
      {/* Starter */}
      <div className="pricing-cardd">
        <h3>Starter</h3>
        <p className="pricee">₹799</p>
        <p className="price-notee">Per Year</p>

        <ul className="pricing-featuress">
          <li>Basic business listing</li>
          <li>Business name & city</li>
          <li>Listed under Jaipur planners</li>
          <li>Business Profile Page</li>
        </ul>

        <a href="/list-your-business/starter" className="btn-outlinee">
          Get Started
        </a>
      </div>

      {/* Featured */}
      <div className="pricing-cardd featuredd">
        <span className="popular-tag">Most Popular</span>
        <h3>Featured</h3>
        <p className="pricee">₹4,999</p>
        <p className="price-notee">Per Year</p>

        <ul className="pricing-featuress">
          <li>Featured placement in listings</li>
          <li>Featured planner badge</li>
          <li>WhatsApp & call inquiries</li>
          <li>Portfolio & gallery section</li>
          <li>Priority support</li>
        </ul>

        <a href="/list-your-business/featured" className="btn-primary">
          Get Featured
        </a>
      </div>

      {/* Premium */}
      <div className="pricing-cardd">
        <h3>Premium</h3>
        <p className="pricee">₹9,999</p>
        <p className="price-notee">Per Year</p>

        <ul className="pricing-featuress">
          <li>Top placement on homepage</li>
          <li>Featured + Verified badge</li>
          <li>Unlimited WhatsApp leads</li>
          <li>SEO-optimized profile page</li>
          <li>First Recommended</li>
        </ul>

        <a href="/list-your-business/premium" className="btn-outlinee">
          Go Premium
        </a>
      </div>
    </div>
    {/*<p className="pricing-footer">
      Not sure which plan is right?{" "}
      <a href="/list-your-business">Talk to us on WhatsApp</a>
    </p>*/}
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

      {/* Form */}{/*}
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
      </section>*/}
    </>
  );
}
