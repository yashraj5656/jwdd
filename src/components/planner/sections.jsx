// components/planner/sections.jsx

// ---------------------------------------------------------------
// HERO SECTION
// Uses explicit <img> layer instead of backgroundImage — immune to
// CSS layout bugs and shows a fallback if the URL 404s.
// ---------------------------------------------------------------
export function HeroSection({
  listing,
  labels,
  whatsappNumber,
  telHref,
  weddingsPlanned,
  experience,
}) {
  const heroSrc =
    listing.heroImage || listing.image || "/plannerhero/Atelier.jpg";

  const nameParts = listing.name?.split(" ") || [];
  const firstPart = nameParts.slice(0, -1).join(" ");
  const lastPart = nameParts.slice(-1);

  return (
    <header className="jwp-planner-hero">
      {/* ✅ Explicit <img> — always renders if parent has height */}
      <img
        src={heroSrc}
        alt={listing.name || "Wedding planner hero"}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
        onError={(e) => {
          e.currentTarget.onerror = null; // prevent infinite loop
          e.currentTarget.src = "/plannerhero/Atelier.jpg";
        }}
      />

      {/* Dark overlay so text is readable */}
      <div
        className="jwp-planner-hero-overlay"
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
      />

      <div
        className="jwp-container jwp-planner-hero-inner"
        style={{ position: "relative", zIndex: 2 }}
      >
        <span className="jwp-eyebrow jwp-hero-eyebrow">
          {labels.eyebrow} · {listing.city || "Jaipur"}
        </span>
        <span className="jwp-hero-rule" />
        <h1>
          {firstPart} <em>{lastPart}</em>
        </h1>
        <p>
          {listing.reason ||
            `${listing.city}'s trusted wedding planner for luxury, royal & destination weddings — with end-to-end execution.`}
        </p>

        <div className="jwp-hero-actions">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="jwp-button jwp-button-gold"
          >
            WhatsApp Planner <span>↗</span>
          </a>
          <a href={telHref} className="jwp-text-link">
            Call Now <span>→</span>
          </a>
        </div>

        <div className="jwp-hero-footnote">
          <span /> {weddingsPlanned}+ weddings · {experience} · Based in{" "}
          {listing.city}
        </div>
      </div>

      <div
        className="jwp-hero-side-note"
        style={{ position: "relative", zIndex: 2 }}
      >
        {labels.sideNote}
        {listing.city?.toUpperCase()}
      </div>
    </header>
  );
}

// ---------------------------------------------------------------
// STATS SECTION
// ---------------------------------------------------------------
export function StatsSection({ stats }) {
  if (!stats?.length) return null;
  return (
    <section className="jwp-planner-stats">
      <div className="jwp-container jwp-planner-stats-inner">
        {stats.map((stat) => (
          <div className="jwp-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// ABOUT SECTION
// ---------------------------------------------------------------
export function AboutSection({ listing }) {
  return (
    <section className="jwp-section jwp-section-light">
      <div className="jwp-container">
        <div className="jwp-section-heading">
          <span className="jwp-eyebrow">A little about the studio</span>
          <h2>
            About <em>{listing.name}</em>
          </h2>
        </div>
        <p className="jwp-detail-about">
          {listing.reason ||
            `${listing.name} is a wedding planning company based in ${listing.city}, offering culturally rich décor, premium venues, and end-to-end execution.`}
        </p>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// RATING SECTION
// ---------------------------------------------------------------
export function RatingSection({ rating, reviewCount }) {
  const safeRating = Number(rating) || 0;
  const safeCount = Number(reviewCount) || 0;
  const full = Math.min(5, Math.max(0, Math.floor(safeRating)));
  const stars = "★".repeat(full) + "☆".repeat(5 - full);

  return (
    <section className="jwp-section jwp-rating-section">
      <div className="jwp-container">
        <div className="jwp-rating-card">
          <div className="jwp-rating-left">
            <span className="jwp-rating-score">{safeRating.toFixed(1)}</span>
            <span className="jwp-rating-stars">{stars}</span>
          </div>
          <div className="jwp-rating-right">
            <p>
              Rated by <strong>{safeCount}+ verified couples</strong>
            </p>
            <span className="jwp-rating-source">
              Based on real wedding experiences
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// SERVICES SECTION
// ---------------------------------------------------------------
export function ServicesSection({ services }) {
  if (!services?.length) return null;
  return (
    <section className="jwp-section jwp-section-light">
      <div className="jwp-container">
        <div className="jwp-section-heading">
          <span className="jwp-eyebrow">
            Every detail, beautifully considered
          </span>
          <h2>
            Premium <em>Services Offered</em>
          </h2>
        </div>
        <ul className="jwp-detail-services">
          {services.map((service) => (
            <li key={service}>
              <span>✧</span> {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// PORTFOLIO SECTION — with per-image error handling
// ---------------------------------------------------------------
export function PortfolioSection({ highlights }) {
  if (!highlights?.length) return null;

  return (
    <section className="jwp-section jwp-planners-section">
      <div className="jwp-container">
        <div className="jwp-section-heading">
          <span className="jwp-eyebrow">Moments we’ve crafted</span>
          <h2>
            Wedding <em>Highlights</em>
          </h2>
        </div>
        <div className="jwp-portfolio-grid">
          {highlights.map((img, i) => (
            <div className="jwp-portfolio-image" key={img.src || i}>
              <img
                src={img.src}
                alt={img.alt || `Portfolio image ${i + 1}`}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/plannerhero/Atelier.jpg";
                }}
              />
              <span className="jwp-image-corner">✧</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// SIGNATURE STYLES SECTION
// ---------------------------------------------------------------
export function SignatureStylesSection({ styles }) {
  if (!styles?.length) return null;
  return (
    <section className="jwp-section jwp-section-light">
      <div className="jwp-container">
        <div className="jwp-section-heading">
          <span className="jwp-eyebrow">A signature approach</span>
          <h2>
            Signature <em>Wedding Styles</em>
          </h2>
        </div>
        <div className="jwp-planner-grid">
          {styles.map((style, index) => (
            <article className="jwp-planner-card" key={style.title}>
              <div className="jwp-planner-number">0{index + 1}</div>
              <div className="jwp-planner-ornament">✧</div>
              <h3>{style.title}</h3>
              <p>{style.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// TESTIMONIALS SECTION
// ---------------------------------------------------------------
export function TestimonialsSection({ testimonials }) {
  if (!testimonials?.length) return null;

  const gridClass =
    testimonials.length >= 3
      ? "jwp-testimonial-grid jwp-testimonial-grid--three"
      : "jwp-testimonial-grid jwp-testimonial-grid--two";

  return (
    <section className="jwp-section jwp-testimonials-section">
      <div className="jwp-container">
        <div className="jwp-section-heading">
          <span className="jwp-eyebrow">Kind words, lasting memories</span>
          <h2>
            Words From <em>Our Couples</em>
          </h2>
        </div>
        <div className={gridClass}>
          {testimonials.map((item, i) => (
            <article className="jwp-testimonial-card" key={item.couple || i}>
              <div className="jwp-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <span className="jwp-quote-mark">“</span>
              <p>{item.quote}</p>
              <strong>{item.couple}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------
// PROCESS SECTION
// ---------------------------------------------------------------
export function ProcessSection({ steps }) {
  if (!steps?.length) return null;
  return (
    <section className="jwp-section jwp-process-section">
      <div className="jwp-container">
        <div className="jwp-section-heading">
          <span className="jwp-eyebrow">Your celebration starts here</span>
          <h2>
            Our Wedding Planning <em>Process</em>
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
  );
}

// ---------------------------------------------------------------
// CTA SECTION
// ---------------------------------------------------------------
export function CTASection({ plan, whatsappNumber }) {
  const note =
    plan === "premium"
      ? "✓ Verified premium planner · Direct WhatsApp · No commission"
      : plan === "featured"
      ? "✓ Featured planner · Direct WhatsApp · No commission"
      : "✓ Direct WhatsApp · No commission";

  return (
    <section className="jwp-section jwp-section-light">
      <div className="jwp-container">
        <div className="jwp-planner-cta">
          <span className="jwp-eyebrow">Let’s begin</span>
          <h3>Plan Your Dream Wedding</h3>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="jwp-button jwp-button-gold"
          >
            Get Consultation <span>↗</span>
          </a>
          <p>{note}</p>
        </div>
      </div>
    </section>
  );
}