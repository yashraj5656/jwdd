"use client";
import Head from "next/head";
import { useRouter } from "next/router";
import planners from "../../data/planners";

export default function PlannerDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const planner = planners.find((p) => p.slug === slug);

  if (!planner) return <p style={{ padding: "100px", textAlign: "center" }}>Planner not found</p>;

  return (
    <>
      <Head>
        <title>{planner.name} – Wedding Planner in Jaipur</title>
        <meta name="description" content={planner.description} />
      </Head>

      {/* HERO */}
      <header
        className="planner-hero"
        style={{
          background: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${planner.cover}) center / cover no-repeat`
        }}
      >
        <div className="planner-hero-content">
          <span className="badge">{planner.badge}</span>
          <h1>{planner.name}</h1>
          <p>{planner.description}</p>
        </div>
      </header>

      <main>
        {/* ABOUT */}
        <section className="section">
          <div className="container">
            <h2>About {planner.name}</h2>
            {planner.about.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="section light">
          <div className="container">
            <h2>Services Offered</h2>
            <ul className="list">
              {planner.services.map((service, i) => (
                <li key={i}>✔ {service}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="section">
          <div className="container highlights">
            <div className="highlight-box">
              <h3>🎯 Approach</h3>
              <p>{planner.highlights.approach}</p>
            </div>
            <div className="highlight-box">
              <h3>✨ Style</h3>
              <p>{planner.highlights.style}</p>
            </div>
            <div className="highlight-box">
              <h3>📍 Location</h3>
              <p>{planner.highlights.location}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section light">
          <div className="container center">
            <h2>Plan Your Wedding with {planner.name}</h2>
            <p>Get a personalized wedding plan from trusted professionals.</p>
            <a href="/#contact" className="btn-primary">
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
