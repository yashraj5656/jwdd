"use client";
import Head from "next/head";

export default function FiestroEvents() {
  return (
    <>
      <Head>
        <title>Fiestro Events – Wedding Planner in Jaipur</title>
        <meta
          name="description"
          content="Fiestro Events is a luxury wedding planner in Jaipur offering royal themes, premium décor, and full wedding management."
        />
      </Head>

      {/* HERO */}
      <header className="planner-hero">
        <div className="planner-hero-content">
          <span className="badge">Featured Planner</span>
          <h1>Fiestro Events</h1>
          <p>
            Luxury wedding planning with creative themes, premium décor, and
            flawless execution.
          </p>
        </div>
      </header>

      <main>
        {/* ABOUT */}
        <section className="section">
          <div className="container">
            <h2>About Fiestro Events</h2>
            <p>
              Fiestro Events is one of Jaipur’s most trusted luxury wedding
              planners, known for royal themes, elegant décor, and seamless
              coordination. From intimate weddings to grand palace
              celebrations, their team ensures perfection at every step.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section light">
          <div className="container">
            <h2>Services Offered</h2>
            <ul className="list">
              <li>✔ Complete Wedding Planning</li>
              <li>✔ Luxury Décor & Theme Design</li>
              <li>✔ Venue Selection & Management</li>
              <li>✔ Catering & Hospitality</li>
              <li>✔ Entertainment & Artist Management</li>
              <li>✔ Photography & Videography</li>
            </ul>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="section">
          <div className="container highlights">
            <div className="highlight-box">
              <h3>⭐ Experience</h3>
              <p>10+ years in luxury wedding planning</p>
            </div>
            <div className="highlight-box">
              <h3>🏰 Specialty</h3>
              <p>Royal & destination weddings</p>
            </div>
            <div className="highlight-box">
              <h3>📍 Location</h3>
              <p>Jaipur, Rajasthan</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section light">
          <div className="container center">
            <h2>Plan Your Wedding with Fiestro Events</h2>
            <p>
              Get expert guidance and a personalized wedding plan from one of
              Jaipur’s finest planners.
            </p>
            <a href="/#contact" className="btn-primary">
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
