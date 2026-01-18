"use client";
import Head from "next/head";
import Link from "next/link";
import './p.css';

export default function WeddingPlannerPage() {
  return (
    <>
      <Head>
        <title>Wedding Planners in Jaipur | Verified & Trusted Experts</title>
        <meta
          name="description"
          content="Explore verified wedding planners in Jaipur with services, ratings, photos and direct WhatsApp contact."
        />
      </Head>

      <header className="heroo">
        <div className="hero-contenttt">
          

          <h1>Wedding Planners in Jaipur</h1>
          <p>
          Compare <strong>verified wedding planners</strong> in Jaipur. View
          services, ratings, portfolios & connect instantly.
          </p>


        </div>
      </header>

  <section className="planner-page">
  <div className="container">


    {/* =========================
        FEATURED PLANNERS
    ========================== */}
    <section className="featured-section">
      <h2 className="section-title">
         Featured Planners
      </h2>
      <p className="section-subtitle">
        Handpicked premium planners trusted by couples across Jaipur
      </p>

      <div className="planner-grid featured-grid">
        {/* FEATURED CARD */}
        <div className="planner-card featured">
        <span className="ribbon">Featured</span>

          <div className="planner-image">
            <img src="/hero.jpg" alt="GoldenVows Events Jaipur" />
          </div>

          <div className="planner-content">
            <div className="planner-header">
              <h2>GoldenVows Events</h2>
              <span className="badge verified">Verified Planner</span>
            </div>

            <div className="planner-rating">
              ★★★★★ <span>4.9 • 120+ weddings</span>
            </div>

            <p className="planner-desc">
              Luxury wedding planners specializing in royal destination
              weddings, premium décor & flawless coordination.
            </p>

            <ul className="planner-services">
              <li>💍 Complete Wedding Planning</li>
              <li>🎨 Theme & Décor Design</li>
              <li>🍽 Catering Management</li>
              <li>🎶 Entertainment</li>
            </ul>

            <div className="planner-act">
              <Link href="/planners/GoldenVows-events" className="btn-pri">
                View Details
              </Link>
              <a href="https://wa.me/91XXXXXXXXXX" className="btn-out">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* =========================
        ALL PLANNERS
    ========================== */}
    <section className="normal-section">
      <h2 className="section-title">
        All Wedding Planners in Jaipur
      </h2>

      <div className="planner-grid">
        <div className="planner-card">
          <div className="planner-image">
            <img src="/hero.jpg" alt="Atelier Events Jaipur" />
          </div>

          <div className="planner-content">
            <h2>Atelier Events</h2>

            <div className="planner-rating">
              ★★★★☆ <span>4.7 • 80+ weddings</span>
            </div>

            <p className="planner-desc">
              Creative and budget-friendly wedding planning with a focus on
              personalization.
            </p>

            <ul className="planner-services">
              <li>🎊 Wedding Events</li>
              <li>🎨 Décor</li>
              <li>📋 Vendor Management</li>
            </ul>

            <div className="planner-actions">
              <Link href="/planners/Atelier-events" className="btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>

        {/* More normal cards */}
      </div>
    </section>
  </div>
</section>

    </>
  );
}
