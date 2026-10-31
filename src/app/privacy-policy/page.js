// pages/privacy-policy.jsx
"use client";

import Head from "next/head";
import Link from "next/link";
import "./privacy.css";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | JaipurWeddingPlanner.in</title>
        <meta
          name="description"
          content="How JaipurWeddingPlanner.in collects, uses, and protects your personal information."
        />
        <meta name="theme-color" content="#faf7f2" />
      </Head>

      <div className="jwp-home jwp-privacy-page">
        {/* ---------- Hero ---------- */}
        <header className="jwp-privacy-hero">
          <div className="jwp-privacy-hero-overlay" />
          <div className="jwp-container jwp-privacy-hero-inner">
            <span className="jwp-eyebrow jwp-hero-eyebrow">
              Legal · Trust &amp; transparency
            </span>
            <span className="jwp-hero-rule" />
            <h1>
              Privacy <em>Policy</em>
            </h1>
            <p>
              At JaipurWeddingPlanner.in, we respect your privacy and are
              committed to protecting your personal information.
            </p>
          </div>
        </header>

        <main>
          {/* ---------- Policy content ---------- */}
          <section className="jwp-section jwp-section-light">
            <div className="jwp-container">
              <div className="jwp-privacy-content">
                {/* 01 — Information We Collect */}
                <article className="jwp-privacy-block">
                  <div className="jwp-privacy-block-head">
                    <span className="jwp-privacy-index">01</span>
                    <h2>
                      Information <em>We Collect</em>
                    </h2>
                  </div>
                  <ul className="jwp-privacy-list">
                    <li>
                      <span>✧</span> Name, phone number, and wedding details
                      submitted via forms
                    </li>
                    <li>
                      <span>✧</span> Business information provided by wedding
                      planners
                    </li>
                  </ul>
                </article>

                {/* 02 — How We Use Your Information */}
                <article className="jwp-privacy-block">
                  <div className="jwp-privacy-block-head">
                    <span className="jwp-privacy-index">02</span>
                    <h2>
                      How We Use <em>Your Information</em>
                    </h2>
                  </div>
                  <ul className="jwp-privacy-list">
                    <li>
                      <span>✧</span> To connect couples with suitable wedding
                      planners
                    </li>
                    <li>
                      <span>✧</span> To share inquiries with listed planners
                    </li>
                    <li>
                      <span>✧</span> To improve our platform and services
                    </li>
                  </ul>
                </article>

                {/* 03 — Data Protection */}
                <article className="jwp-privacy-block">
                  <div className="jwp-privacy-block-head">
                    <span className="jwp-privacy-index">03</span>
                    <h2>
                      Data <em>Protection</em>
                    </h2>
                  </div>
                  <p className="jwp-privacy-para">
                    We do not sell or misuse your data. Information is shared
                    only with relevant wedding planners for inquiry purposes.
                  </p>
                </article>

                {/* 04 — Contact */}
                <article className="jwp-privacy-block">
                  <div className="jwp-privacy-block-head">
                    <span className="jwp-privacy-index">04</span>
                    <h2>
                      Contact <em>Us</em>
                    </h2>
                  </div>
                  <p className="jwp-privacy-para">
                    For privacy-related questions, contact us at:
                  </p>
                  <a
                    href="mailto:info@jaipurweddingplanner.in"
                    className="jwp-privacy-contact-card"
                  >
                    <span className="jwp-privacy-contact-icon">✧</span>
                    <span className="jwp-privacy-contact-text">
                      <strong>info@jaipurweddingplanner.in</strong>
                      <em>Click to send an email</em>
                    </span>
                    <span className="jwp-privacy-contact-arrow">↗</span>
                  </a>
                </article>

                {/* Footer note — small, unobtrusive */}
                <div className="jwp-privacy-footnote">
                  <span className="jwp-privacy-footnote-rule" />
                  <p>
                    This policy was last reviewed for accuracy. For any
                    additional questions, please reach out using the email
                    above.
                  </p>
                  <Link href="/about" className="jwp-text-link jwp-text-link--dark">
                    Learn more about us <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}