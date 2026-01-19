"use client";
import Head from "next/head";
import "../profile.css";

export default function SaffronAuraEvents() {
  return (
    <>
      <Head>
        <title>Saffron Aura Events – Premium Wedding Planner in Jaipur</title>
        <meta
          name="description"
          content="Saffron Aura Events is a premium wedding planner in Jaipur offering royal themes, luxury décor, destination weddings & full management."
        />
      </Head>

      {/* HERO */}
      <header className="planner-hero">
        <div className="hero-contenttt">
          <p className="hero-subtitleee"></p>

          <h1>Saffron Aura Events</h1>
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
              <strong>60+</strong>
              <span>Weddings Planned</span>
            </div>
            <div>
              <strong>3.4 ★</strong>
              <span>Average Rating</span>
            </div>
            <div>
              <strong>7+ Years</strong>
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
            <h2>About Saffron Aura Events</h2>
            <p>
              Saffron Aura Events is a leading Jaipur-based wedding planner specializing in grand aesthetics, signature décor, and seamless coordination. Whether it’s an intimate gathering or a majestic destination wedding, they deliver elegant, worry-free experiences.
            </p>
          </div>
        </section>

        {/* RATING */}
        <section className="section rating-section">
          <div className="container">
            <div className="rating-box premium">
              <div className="rating-left">
                <span className="rating-score">3.4</span>
                <span className="rating-stars">★★★★★</span>
              </div>

              <div className="rating-right">
                <p>
                  Rated by <strong>20+ verified couples</strong>
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



        {/* FINAL CTA */}
        <section className="section light">
          <div className="container center">
            <h2>Plan Your Dream Wedding</h2>
            <p>
              Get a personalized consultation with one of Jaipur’s top 
              wedding planners.
            </p>
            <br />
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              className="btn-primary large"
            >
              Get Consultation
            </a>
          </div>
        </section>
      </main>
    </>
  );
}