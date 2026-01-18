"use client";
import Head from "next/head";
import "./planners.css";

export default function GoldenVowsEvents() {
  return (
    <>
      <Head>
        <title>GoldenVows Events – Premium Wedding Planner in Jaipur</title>
        <meta
          name="description"
          content="GoldenVows Events is a premium wedding planner in Jaipur offering royal themes, luxury décor, destination weddings & full management."
        />
      </Head>

      {/* HERO */}
      <header className="planner-hero premium-hero">
        <div className="planner-hero-content">
          <span className="badge verified"> Verified Planner</span>

          <h1>GoldenVows Events</h1>
          <p>
            Jaipur’s trusted premium wedding planner for luxury, royal &
            destination weddings.
          </p>

          <div className="hero-actions">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              className="btn-primary"
            >
              WhatsApp Planner
            </a>
            <a href="tel:+91XXXXXXXXXX" className="btn-outline">
              Call Now
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* TRUST STRIP */}
        <section className="trust-strip">
          <div className="container trust-grid">
            <div>
              <strong>90+</strong>
              <span>Weddings Planned</span>
            </div>
            <div>
              <strong>4.1 ★</strong>
              <span>Average Rating</span>
            </div>
            <div>
              <strong>8+ Years</strong>
              <span>Experience</span>
            </div>
            <div>
              <strong>Jaipur</strong>
              <span>Based Team</span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section">
          <div className="container">
            <h2>About GoldenVows Events</h2>
            <p>
              GoldenVows Events is a premium wedding planning company in Jaipur,
              known for elegant décor, royal venues, and seamless execution.
              From intimate celebrations to grand palace weddings, they
              deliver stress-free luxury experiences.
            </p>
          </div>
        </section>

        {/* RATING */}
        <section className="section rating-section">
          <div className="container">
            <div className="rating-box premium">
              <div className="rating-left">
                <span className="rating-score">4.1</span>
                <span className="rating-stars">★★★★★</span>
              </div>

              <div className="rating-right">
                <p>
                  Rated by <strong>80+ verified couples</strong>
                </p>
                <span className="rating-source">
                  Based on real wedding experiences
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section light">
          <div className="container">
            <h2>Premium Services Offered</h2>
            <ul className="list premium-list">
              <li>💍 Complete Wedding Planning</li>
              <li>🎨 Luxury Décor & Theme Design</li>
              <li>🏰 Palace & Destination Weddings</li>
              <li>🍽 Catering & Hospitality Management</li>
              <li>🎶 Entertainment & Celebrity Artists</li>
              <li>📸 Photography & Cinematic Films</li>
            </ul>
          </div>
        </section>

        {/* PORTFOLIO PREVIEW */}
        <section className="section">
          <div className="container">
            <h2>Wedding Highlights</h2>
            <div className="portfolio-grid">
              <img src="/hero.jpg" alt="Royal wedding Jaipur" />
              <img src="/hero.jpg" alt="Luxury decor wedding" />
              <img src="/hero.jpg" alt="Destination wedding Jaipur" />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section light">
          <div className="container center">
            <h2>Plan Your Dream Wedding</h2>
            <p>
              Get a personalized consultation with one of Jaipur’s top premium
              wedding planners.
            </p>
            <br />
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              className="btn-primary large"
            >
              Get Premium Consultation
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
