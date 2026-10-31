// pages/how-it-works.jsx
"use client";

import Head from "next/head";
import Link from "next/link";
import "./how-it-works.css";

export default function HowItWorks() {
  const coupleSteps = [
    "Browse top wedding planners in Jaipur",
    "Compare services, styles, and expertise",
    "Submit your wedding requirements",
    "Get contacted by suitable planners",
    "Choose the planner that fits your vision & budget",
  ];

  const plannerSteps = [
    "List your wedding planning business",
    "Showcase your services, photos, and expertise",
    "Get genuine wedding inquiries from couples",
    "Convert inquiries into confirmed bookings",
    "Grow your brand visibility in Jaipur",
  ];

  return (
    <>
      <Head>
        <title>How It Works | JaipurWeddingPlanner.in</title>
        <meta
          name="description"
          content="Understand how JaipurWeddingPlanner.in works for couples and wedding planners."
        />
        <meta name="theme-color" content="#faf7f2" />
      </Head>

      <div className="jwp-home jwp-howit-page">
        {/* ---------- Hero ---------- */}
        <header className="jwp-howit-hero">
          <div className="jwp-howit-hero-overlay" />
          <div className="jwp-container jwp-howit-hero-inner">
            <span className="jwp-eyebrow jwp-hero-eyebrow">
              A simpler way to plan
            </span>
            <span className="jwp-hero-rule" />
            <h1>
              How It <em>Works</em>
            </h1>
            <p>
              A straightforward path for couples finding the right planner —
              and for planners finding the right couples. No middlemen, no
              commission, no guesswork.
            </p>
            <div className="jwp-hero-actions">
              <a href="#couples" className="jwp-button jwp-button-gold">
                For Couples <span>↓</span>
              </a>
              <a href="#planners" className="jwp-text-link">
                For Planners <span>↓</span>
              </a>
            </div>
            <div className="jwp-hero-footnote">
              <span /> Two paths, one trusted platform
            </div>
          </div>
          <div className="jwp-hero-side-note">COUPLES · PLANNERS · JAIPUR</div>
        </header>

        <main>
          {/* ---------- Intro strip ---------- */}
          <section className="jwp-intro-strip">
            <div className="jwp-container jwp-intro-inner">
              <span className="jwp-intro-mark">✧</span>
              <p>
                Thoughtfully designed. <strong>Effortlessly simple.</strong>
              </p>
              <span className="jwp-intro-location">
                A guide to Rajasthan’s wedding experts
              </span>
            </div>
          </section>

          {/* ---------- For Couples ---------- */}
          <section
            className="jwp-section jwp-section-light"
            id="couples"
          >
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">For couples</span>
                <h2>
                  Finding Your <em>Wedding Planner</em>
                </h2>
                <p>
                  Five simple steps — from first browse to final booking.
                </p>
              </div>

              <ol className="jwp-steps jwp-steps--five">
                {coupleSteps.map((step, index) => (
                  <li key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>

              <div className="jwp-centered-action">
                <Link
                  href="/wedding-planner"
                  className="jwp-button jwp-button-outline"
                >
                  Browse Planners <span>→</span>
                </Link>
              </div>
            </div>
          </section>

          {/* ---------- For Planners ---------- */}
          <section
            className="jwp-section jwp-howit-planners-section"
            id="planners"
          >
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">For wedding planners</span>
                <h2>
                  Growing Your <em>Wedding Business</em>
                </h2>
                <p>
                  Five steps — from listing your business to confirmed
                  bookings.
                </p>
              </div>

              <ol className="jwp-steps jwp-steps--five">
                {plannerSteps.map((step, index) => (
                  <li key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>

              <div className="jwp-centered-action">
                <Link
                  href="/list-your-business"
                  className="jwp-button jwp-button-outline"
                >
                  List Your Business <span>→</span>
                </Link>
              </div>
            </div>
          </section>

          {/* ---------- Closing statement / CTA ---------- */}
          <section className="jwp-section jwp-section-light">
            <div className="jwp-container">
              <div className="jwp-planner-cta">
                <span className="jwp-eyebrow">Our promise</span>
                <h3>
                  Quality leads. Transparency. Long-term growth.
                </h3>
                <p className="jwp-cta-copy">
                  We focus on quality leads, transparency, and long-term growth
                  for both couples and wedding planners.
                </p>
                <div className="jwp-howit-cta-actions">
                  <Link
                    href="/wedding-planner"
                    className="jwp-button jwp-button-gold"
                  >
                    Explore Planners <span>↗</span>
                  </Link>
                  <Link
                    href="/list-your-business"
                    className="jwp-button jwp-button-ghost"
                  >
                    List Your Business
                  </Link>
                </div>
                <p>✓ Verified listings · Direct contact · Rajasthan focused</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}