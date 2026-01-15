"use client";
import Head from "next/head";

export default function ShaandaarEvents() {
  return (
    <>
      <Head>
        <title>Shaandaar Events – Wedding Planner in Jaipur</title>
        <meta
          name="description"
          content="Shaandaar Events is a premium wedding planner in Jaipur known for personalized planning, elegant décor, and flawless execution."
        />
      </Head>

      {/* HERO */}
      <header className="planner-hero">
        <div className="planner-hero-content">
          <span className="badge">Featured Planner</span>
          <h1>Shaandaar Events</h1>
          <p>
            Personalized wedding planning with elegant décor, creativity, and
            attention to every detail.
          </p>
        </div>
      </header>

      <main>
        {/* ABOUT */}
        <section className="section">
          <div className="container">
            <h2>About Shaandaar Events</h2>
            <p>
              Shaandaar Events is a Jaipur-based wedding planning company that
              specializes in crafting beautiful, meaningful weddings. Known for
              their personalized approach, they focus on understanding the
              couple’s vision and turning it into a memorable celebration.
            </p>
            <p>
              Whether it’s a traditional Rajasthani wedding or a modern luxury
              affair, Shaandaar Events ensures smooth coordination and stunning
              execution.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section light">
          <div className="container">
            <h2>Services Offered</h2>
            <ul className="list">
              <li>✔ End-to-End Wedding Planning</li>
              <li>✔ Elegant Décor & Theme Styling</li>
              <li>✔ Venue Selection & Vendor Management</li>
              <li>✔ Catering & Guest Hospitality</li>
              <li>✔ Entertainment & Event Flow Management</li>
              <li>✔ Photography & Videography Coordination</li>
            </ul>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="section">
          <div className="container highlights">
            <div className="highlight-box">
              <h3>🎯 Approach</h3>
              <p>Highly personalized wedding planning</p>
            </div>
            <div className="highlight-box">
              <h3>✨ Style</h3>
              <p>Elegant, modern & traditional themes</p>
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
            <h2>Plan Your Wedding with Shaandaar Events</h2>
            <p>
              Get a beautifully planned wedding experience with a team that
              truly understands your vision.
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
