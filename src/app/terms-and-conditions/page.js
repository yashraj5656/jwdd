// pages/terms-and-conditions.jsx
"use client";

import Head from "next/head";
import Link from "next/link";
import "./terms.css";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms &amp; Conditions | JaipurWeddingPlanner.in</title>
        <meta
          name="description"
          content="Terms & Conditions for using JaipurWeddingPlanner.in — covering couples, wedding planners, liability, and policy updates."
        />
        <meta name="theme-color" content="#faf7f2" />
      </Head>

      <div className="jwp-home jwp-terms-page">
        {/* ---------- Hero ---------- */}
        <header className="jwp-terms-hero">
          <div className="jwp-terms-hero-overlay" />
          <div className="jwp-container jwp-terms-hero-inner">
            <span className="jwp-eyebrow jwp-hero-eyebrow">
              Legal · Platform terms
            </span>
            <span className="jwp-hero-rule" />
            <h1>
              Terms &amp; <em>Conditions</em>
            </h1>
            <p>
              By using JaipurWeddingPlanner.in, you agree to the following terms
              and conditions.
            </p>
          </div>
        </header>

        <main>
          {/* ---------- Terms content ---------- */}
          <section className="jwp-section jwp-section-light">
            <div className="jwp-container">
              <div className="jwp-terms-content">
                {/* 01 — For Couples */}
                <article className="jwp-terms-block">
                  <div className="jwp-terms-block-head">
                    <span className="jwp-terms-index">01</span>
                    <h2>
                      For <em>Couples</em>
                    </h2>
                  </div>
                  <ul className="jwp-terms-list">
                    <li>
                      <span>✧</span> We act as a discovery platform, not an
                      event organizer
                    </li>
                    <li>
                      <span>✧</span> Final agreements are between couples and
                      planners
                    </li>
                    <li>
                      <span>✧</span> We do not guarantee pricing or availability
                    </li>
                  </ul>
                </article>

                {/* 02 — For Wedding Planners */}
                <article className="jwp-terms-block">
                  <div className="jwp-terms-block-head">
                    <span className="jwp-terms-index">02</span>
                    <h2>
                      For <em>Wedding Planners</em>
                    </h2>
                  </div>
                  <ul className="jwp-terms-list">
                    <li>
                      <span>✧</span> Information provided must be accurate and
                      genuine
                    </li>
                    <li>
                      <span>✧</span> Featured or paid listings do not guarantee
                      bookings
                    </li>
                    <li>
                      <span>✧</span> We reserve the right to approve or remove
                      listings
                    </li>
                  </ul>
                </article>

                {/* 03 — Liability */}
                <article className="jwp-terms-block">
                  <div className="jwp-terms-block-head">
                    <span className="jwp-terms-index">03</span>
                    <h2>
                      <em>Liability</em>
                    </h2>
                  </div>
                  <p className="jwp-terms-para">
                    JaipurWeddingPlanner.in is not responsible for disputes,
                    service quality, or agreements made between users and
                    planners.
                  </p>
                </article>

                {/* 04 — Updates */}
                <article className="jwp-terms-block">
                  <div className="jwp-terms-block-head">
                    <span className="jwp-terms-index">04</span>
                    <h2>
                      <em>Updates</em>
                    </h2>
                  </div>
                  <p className="jwp-terms-para">
                    These terms may be updated periodically without prior
                    notice.
                  </p>
                </article>

                {/* Footnote — link to privacy + contact */}
                <div className="jwp-terms-footnote">
                  <span className="jwp-terms-footnote-rule" />
                  <p>
                    Have a question about these terms? Write to us at{" "}
                    <a href="mailto:info@jaipurweddingplanner.in">
                      info@jaipurweddingplanner.in
                    </a>
                    .
                  </p>
                  <div className="jwp-terms-footnote-links">
                    <Link
                      href="/privacy-policy"
                      className="jwp-text-link jwp-text-link--dark"
                    >
                      Read our Privacy Policy <span>→</span>
                    </Link>
                    <Link
                      href="/about"
                      className="jwp-text-link jwp-text-link--dark"
                    >
                      Learn more about us <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}