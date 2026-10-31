// pages/about.jsx
"use client";

import Head from "next/head";
import Link from "next/link";
import "./about.css";

export default function AboutUs() {
  const whatWeDo = [
    {
      title: "Connect Couples With Trusted Planners",
      description:
        "We match couples with verified, experienced wedding planners across Rajasthan.",
    },
    {
      title: "Help Planners Reach Genuine Leads",
      description:
        "Planners get discovered by couples who are actively planning their wedding — not casual browsers.",
    },
    {
      title: "Promote Transparency & Quality",
      description:
        "Every listing is reviewed. Verified badges, real reviews, and direct contact keep the directory honest.",
    },
    {
      title: "Support Royal & Destination Weddings",
      description:
        "From palace venues to multi-day celebrations, our planners specialise in Rajasthan’s signature wedding styles.",
    },
  ];

  return (
    <>
      <Head>
        <title>About Us | JaipurWeddingPlanner.in</title>
        <meta
          name="description"
          content="Learn about JaipurWeddingPlanner.in – our mission is to connect couples with trusted wedding planners in Rajasthan."
        />
        <meta name="theme-color" content="#faf7f2" />
      </Head>

      <div className="jwp-home jwp-about-page">
        {/* ---------- Hero ---------- */}
        <header className="jwp-about-hero">
          <div className="jwp-about-hero-overlay" />
          <div className="jwp-container jwp-about-hero-inner">
            <span className="jwp-eyebrow jwp-hero-eyebrow">
              A little about us
            </span>
            <span className="jwp-hero-rule" />
            <h1>
              About <em>JaipurWeddingPlanner.in</em>
            </h1>
            <p>
              A dedicated platform built to simplify wedding planning for
              couples — and help professional wedding planners across Rajasthan
              grow their business.
            </p>
            <div className="jwp-hero-actions">
              <Link href="/wedding-planner" className="jwp-button jwp-button-gold">
                Explore Planners <span>↗</span>
              </Link>
              <Link href="/list-your-business" className="jwp-text-link">
                List your business <span>→</span>
              </Link>
            </div>
            <div className="jwp-hero-footnote">
              <span /> Connecting couples &amp; planners across Rajasthan
            </div>
          </div>
          <div className="jwp-hero-side-note">
            JAIPUR · UDAIPUR · RAJASTHAN
          </div>
        </header>

        <main>
          {/* ---------- Intro strip ---------- */}
          <section className="jwp-intro-strip">
            <div className="jwp-container jwp-intro-inner">
              <span className="jwp-intro-mark">✧</span>
              <p>
                Thoughtfully built. <strong>Trusted by couples &amp; planners.</strong>
              </p>
              <span className="jwp-intro-location">
                A guide to Rajasthan’s wedding experts
              </span>
            </div>
          </section>

          {/* ---------- Story ---------- */}
          <section className="jwp-section jwp-section-light">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">Why we exist</span>
                <h2>
                  Our <em>Story</em>
                </h2>
              </div>
              <p className="jwp-about-para">
                Rajasthan is known for royal palaces, destination weddings, and
                rich traditions. Finding the right wedding planner, however, can
                be confusing and time-consuming — couples are left scrolling
                through social media, chasing reviews, and comparing quotes
                across half-a-dozen platforms.
              </p>
              <p className="jwp-about-para">
                JaipurWeddingPlanner.in bridges that gap. We bring verified
                wedding planners into one considered directory, so couples can
                compare portfolios, read real reviews, and reach out directly —
                and so planners can focus on what they do best instead of
                chasing visibility.
              </p>
            </div>
          </section>

          {/* ---------- Mission pull-quote ---------- */}
          <section className="jwp-about-mission">
            <div className="jwp-container jwp-about-mission-inner">
              <span className="jwp-eyebrow">Our mission</span>
              <span className="jwp-about-mission-mark">“</span>
              <p className="jwp-about-mission-quote">
                To make wedding planning stress-free, transparent, and reliable
                by connecting couples with verified and experienced wedding
                planners in Rajasthan.
              </p>
              <span className="jwp-about-mission-flourish">✧</span>
            </div>
          </section>

          {/* ---------- What we do ---------- */}
          <section className="jwp-section jwp-section-light">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">What we do</span>
                <h2>
                  Our Work, <em>Considered</em>
                </h2>
                <p>
                  Four things we care about — for couples and planners alike.
                </p>
              </div>
              <div className="jwp-about-values-grid">
                {whatWeDo.map((item, index) => (
                  <article className="jwp-about-value" key={item.title}>
                    <span className="jwp-about-value-number">
                      0{index + 1}
                    </span>
                    <span className="jwp-about-value-mark">✧</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- Closing note / CTA ---------- */}
          <section className="jwp-section jwp-section-light">
            <div className="jwp-container">
              <div className="jwp-planner-cta">
                <span className="jwp-eyebrow">Plan with confidence</span>
                <h3>Find your wedding planner — or be found.</h3>
                <p className="jwp-cta-copy">
                  Explore Rajasthan’s verified wedding planners, or list your
                  business and start receiving direct inquiries from couples
                  planning their celebration.
                </p>
                <div className="jwp-about-cta-actions">
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