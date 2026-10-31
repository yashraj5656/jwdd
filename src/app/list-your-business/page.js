// pages/list-your-business.jsx
"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import "./lyb.css";

export default function ListYourBusiness() {
  const [visibility, setVisibility] = useState(100000);

  useEffect(() => {
    let start = 100000;
    const end = 199000;
    const interval = setInterval(() => {
      start += 30;
      setVisibility(start);
      if (start >= end) clearInterval(interval);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    {
      value: "3–5x",
      title: "More Leads",
      description:
        "Get direct calls & WhatsApp inquiries from couples actively searching for wedding planners in Rajasthan.",
    },
    {
      value: `${visibility.toLocaleString()}+`,
      title: "Monthly Visibility",
      description:
        "Your business is showcased to thousands of high-intent couples every month.",
    },
    {
      value: "High ROI",
      title: "Maximum Returns",
      description:
        "One-time yearly listing fee. No commissions. Keep 100% of your booking revenue.",
    },
  ];

  const benefits = [
    {
      icon: "✧",
      title: "High-Intent Leads",
      description:
        "Couples visiting our platform are actively planning their wedding — not casual browsers.",
    },
    {
      icon: "⌖",
      title: "Rajasthan-Focused Exposure",
      description:
        "Rank for local searches like “Wedding Planner in Jaipur” without heavy ad spending.",
    },
    {
      icon: "✓",
      title: "Verified Planner Badge",
      description:
        "Build instant trust with a verified listing that stands out from competitors.",
    },
    {
      icon: "₹",
      title: "No Commission",
      description:
        "One simple listing fee. You keep 100% of your booking revenue.",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "₹999",
      period: "Per Year",
      features: [
        "Basic business listing",
        "Business name & city",
        "Listed under Rajasthan planners",
        "Business Profile Page",
      ],
      cta: "Get Started",
      href: "/list-your-business/starter",
      featured: false,
    },
    {
      name: "Featured",
      price: "₹3,499",
      period: "Per Year",
      features: [
        "Featured placement in listings",
        "Featured planner badge",
        "WhatsApp & call inquiries",
        "Portfolio & gallery section",
        "Priority support",
      ],
      cta: "Get Featured",
      href: "/list-your-business/featured",
      featured: true,
    },
    {
      name: "Premium",
      price: "₹7,999",
      period: "Per Year",
      features: [
        "Top placement on homepage",
        "Featured + Verified badge",
        "Priority WhatsApp Leads",
        "SEO-optimized profile page",
        "First Recommended",
      ],
      cta: "Go Premium",
      href: "/list-your-business/premium",
      featured: false,
    },
  ];

  const steps = [
    "Submit your business details",
    "We verify your profile & services",
    "Your listing goes live on our platform",
    "Receive direct calls & WhatsApp inquiries",
  ];

  return (
    <>
      <Head>
        <title>List Your Wedding Planning Business | JaipurWeddingPlanner.in</title>
        <meta
          name="description"
          content="List your wedding planning business on JaipurWeddingPlanner.in and get high-quality leads from couples planning weddings in Rajasthan."
        />
        <meta name="theme-color" content="#faf7f2" />
      </Head>

      <div className="jwp-home jwp-lyb-page">
        {/* ---------- Hero ---------- */}
        <header className="jwp-lyb-hero">
          <div className="jwp-lyb-hero-overlay" />
          <div className="jwp-container jwp-lyb-hero-inner">
            <span className="jwp-eyebrow jwp-hero-eyebrow">
              For Rajasthan’s wedding professionals
            </span>
            <span className="jwp-hero-rule" />
            <h1>
              List Your Wedding <em>Planning Business</em>
            </h1>
            <p>
              Get discovered by couples actively looking for wedding planners in
              Rajasthan. No commissions. Direct inquiries. Real leads.
            </p>
            <div className="jwp-hero-actions">
              <a href="#plans" className="jwp-button jwp-button-gold">
                List Your Business <span>↗</span>
              </a>
              <a href="#why" className="jwp-text-link">
                Why list with us <span>↓</span>
              </a>
            </div>
            <div className="jwp-hero-footnote">
              <span /> Curated listings · No commission · Rajasthan focused
            </div>
          </div>
          <div className="jwp-hero-side-note">
            PLANNERS · RAJASTHAN · 2025
          </div>
        </header>

        <main>
          {/* ---------- Metrics strip ---------- */}
          <section className="jwp-lyb-metrics">
            <div className="jwp-container jwp-lyb-metrics-inner">
              {metrics.map((metric) => (
                <div className="jwp-lyb-metric" key={metric.title}>
                  <span className="jwp-lyb-metric-value">{metric.value}</span>
                  <h3>{metric.title}</h3>
                  <p>{metric.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ---------- Pricing ---------- */}
          <section className="jwp-section jwp-lyb-pricing-section" id="plans">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">Simple, transparent plans</span>
                <h2>
                  Listing Plans for <em>Wedding Planners</em>
                </h2>
                <p>
                  Choose a plan that fits your business size. No commissions. No
                  hidden charges.
                </p>
              </div>

              <div className="jwp-lyb-pricing-grid">
                {plans.map((plan) => (
                  <article
                    className={`jwp-lyb-plan${
                      plan.featured ? " jwp-lyb-plan--featured" : ""
                    }`}
                    key={plan.name}
                  >
                    {plan.featured && (
                      <span className="jwp-lyb-plan-tag">Most Popular</span>
                    )}
                    <div className="jwp-lyb-plan-head">
                      <span className="jwp-eyebrow">{plan.name}</span>
                      <h3>
                        {plan.price}
                        <span className="jwp-lyb-plan-period">
                          {plan.period}
                        </span>
                      </h3>
                    </div>
                    <ul className="jwp-lyb-plan-features">
                      {plan.features.map((f) => (
                        <li key={f}>
                          <span>✧</span> {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={plan.href}
                      className={`jwp-button ${
                        plan.featured
                          ? "jwp-button-gold"
                          : "jwp-button-outline"
                      }`}
                    >
                      {plan.cta} <span>→</span>
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- Benefits ---------- */}
          <section className="jwp-section jwp-section-light" id="why">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">A simpler way to grow</span>
                <h2>
                  Why <em>List With Us?</em>
                </h2>
                <p>
                  We help Rajasthan-based wedding planners get discovered by
                  couples who are actively planning their wedding — not just
                  browsing.
                </p>
              </div>
              <div className="jwp-lyb-benefit-grid">
                {benefits.map((b) => (
                  <article className="jwp-lyb-benefit-card" key={b.title}>
                    <span className="jwp-lyb-benefit-icon">{b.icon}</span>
                    <h3>{b.title}</h3>
                    <p>{b.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- How it works ---------- */}
          <section className="jwp-section jwp-lyb-process-section">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">Your growth starts here</span>
                <h2>
                  How It Works <em>for Planners</em>
                </h2>
              </div>
              <ol className="jwp-steps">
                {steps.map((step, index) => (
                  <li key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ---------- Final CTA ---------- */}
          <section className="jwp-section jwp-section-light">
            <div className="jwp-container">
              <div className="jwp-planner-cta">
                <span className="jwp-eyebrow">Grow your wedding business</span>
                <h3>Let more couples discover your work.</h3>

                <a href="#plans" className="jwp-button jwp-button-gold">
                  List Your Business <span>↗</span>
                </a>
                <p>✓ No commission · Direct leads · Rajasthan focused</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}