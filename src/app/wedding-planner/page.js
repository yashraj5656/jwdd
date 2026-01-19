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

      {/*<header className="heroo">
        <div className="hero-contenttt">
        <p className="hero-subtitleee"></p>

          <h1>Wedding Planners in Jaipur</h1>
          <p>
          Compare <strong>verified wedding planners</strong> in Jaipur. View
          services, ratings, portfolios & connect instantly.
          </p>


        </div>
      </header>*/}

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
            <img src="/plannerhero/GoldenVows.jpg" alt="GoldenVows Events Jaipur" />
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

      
<div className="planner-grid featured-grid" style={{marginTop:'2rem'}}>
      <div className="planner-card featured">
         <span className="ribbon">Featured</span>

          <div className="planner-image">
            <img src="/plannerhero/Atelierhero.jpg" alt="Atelier Events Jaipur" />
          </div>

          <div className="planner-content">
            <div className="planner-header">
              <h2>Atelier Events</h2>
              {/*<span className="badge verified">Verified Planner</span>*/}
            </div>

            <div className="planner-rating">
              ★★★★★ <span>4.1 • 80+ weddings</span>
            </div>

            <p className="planner-desc">
            Elite wedding planners crafting regal destination weddings with bespoke décor and seamless execution.
            </p>

            <ul className="planner-services">
              <li>💍 Complete Wedding Planning</li>
              <li>🎨 Theme & Décor Design</li>
              <li>🍽 Catering Management</li>
              <li>🎶 Entertainment</li>
            </ul>

            <div className="planner-act">
              <Link href="/planners/Atelier-events" className="btn-pri">
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
            <img src="/plannerhero/Atelier.jpg" alt="RajViva Events" />
          </div>

          <div className="planner-content">
            <h2>RajViva Events</h2>

            <div className="planner-rating">
              ★★★★☆ <span>3.8 • 60+ weddings</span>
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
              <Link href="/planners/Profile/RajViva-Events" className="btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>




        <div className="planner-card">
          <div className="planner-image">
            <img src="/plannerhero/Atelier.jpg" alt="Shaadi Sutra Co." />
          </div>

          <div className="planner-content">
            <h2>Shaadi Sutra Co.</h2>

            <div className="planner-rating">
              ★★★★☆ <span>3.4 • 60+ weddings</span>
            </div>

            <p className="planner-desc">
            Specialists in luxury destination weddings, offering opulent styling and end-to-end flawless planning.
            </p>

            <ul className="planner-services">
              <li>🎊 Wedding Events</li>
              <li>🎨 Décor</li>
              <li>📋 Vendor Management</li>
            </ul>

            <div className="planner-actions">
              <Link href="/planners/Profile/Shaadi-Sutra-Co" className="btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>

        <div className="planner-card">
          <div className="planner-image">
            <img src="/plannerhero/Atelier.jpg" alt="Anantara Wedding Co." />
          </div>

          <div className="planner-content">
            <h2>Anantara Wedding Co.</h2>

            <div className="planner-rating">
              ★★★★☆ <span>3.4 • 80+ weddings</span>
            </div>

            <p className="planner-desc">
            Royal wedding experts delivering grand celebrations with premium décor and meticulous coordination.
            </p>

            <ul className="planner-services">
              <li>🎊 Wedding Events</li>
              <li>🎨 Décor</li>
              <li>📋 Vendor Management</li>
            </ul>

            <div className="planner-actions">
              <Link href="/planners/Profile/Anantara-Wedding-Co" className="btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>



        <div className="planner-card">
          <div className="planner-image">
            <img src="/plannerhero/Atelier.jpg" alt="Saffron Aura Events" />
          </div>

          <div className="planner-content">
            <h2>Saffron Aura Events</h2>

            <div className="planner-rating">
              ★★★★☆ <span>3.4 • 60+ weddings</span>
            </div>

            <p className="planner-desc">
            High-end wedding planners known for elegant destination weddings and impeccable event management.
            </p>

            <ul className="planner-services">
              <li>🎊 Wedding Events</li>
              <li>🎨 Décor</li>
              <li>📋 Vendor Management</li>
            </ul>

            <div className="planner-actions">
              <Link href="/planners/Profile/Saffron-Aura-Events" className="btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>


        <div className="planner-card">
          <div className="planner-image">
            <img src="/plannerhero/Atelier.jpg" alt="Velvet Knot Weddings" />
          </div>

          <div className="planner-content">
            <h2>Velvet Knot Weddings</h2>

            <div className="planner-rating">
              ★★★★☆ <span>3.4 • 60+ weddings</span>
            </div>

            <p className="planner-desc">
            Creators of majestic weddings, blending royal aesthetics, luxury décor, and perfect execution.
            </p>

            <ul className="planner-services">
              <li>🎊 Wedding Events</li>
              <li>🎨 Décor</li>
              <li>📋 Vendor Management</li>
            </ul>

            <div className="planner-actions">
              <Link href="/planners/Profile/Velvet-Knot-Weddings" className="btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>


        {/* More normal cards */}
        <div className="planner-card">
          <div className="planner-image">
            <img src="/plannerhero/Atelier.jpg" alt="Mandap & Memories" />
          </div>

          <div className="planner-content">
            <h2>Mandap & Memories</h2>

            <div className="planner-rating">
              ★★★★☆ <span>3.8 • 60+ weddings</span>
            </div>

            <p className="planner-desc">
            Premium wedding planning services focused on destination weddings with refined décor and precision.
            </p>

            <ul className="planner-services">
              <li>🎊 Wedding Events</li>
              <li>🎨 Décor</li>
              <li>📋 Vendor Management</li>
            </ul>

            <div className="planner-actions">
              <Link href="/planners/Profile/Mandap-&-Memories" className="btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</section>

    </>
  );
}
