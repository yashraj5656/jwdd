// pages/wedding-planner-cost-jaipur.jsx
"use client";

import Head from "next/head";
import Link from "next/link";
import "../destination.css";

export default function WeddingPlannerCostJaipur() {
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const budget = form.budget.value;
    const type = form.type.value;

    const message = `
New Wedding Inquiry 💍

👤 Name: ${name}
📞 Phone: ${phone}
📅 Date: ${date}
💰 Budget: ${budget || "Not specified"}
🎊 Wedding Type: ${type || "Not specified"}

From: JaipurWeddingPlanner.in — Wedding Planner Cost Jaipur
`;

    const whatsappNumber = "916378380535";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the average cost of a wedding planner in Jaipur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The average cost of hiring a wedding planner in Jaipur ranges from ₹50,000 to ₹5,00,000 or more, depending on the scale of the wedding, services included, and planner's experience. For basic services, expect ₹50,000–₹1,50,000; for full-service luxury weddings, it can go up to ₹3,00,000–₹10,00,000.",
        },
      },
      {
        "@type": "Question",
        name: "What factors affect wedding planner costs in Jaipur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Factors include wedding size (guest count), venue type (local vs. destination), services required (partial vs. full planning), customization level, season (peak vs. off-peak), and the planner's reputation and experience.",
        },
      },
      {
        "@type": "Question",
        name: "Are there affordable wedding planner packages in Jaipur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, many planners offer budget-friendly packages starting from ₹50,000 for coordination services. Full packages for mid-range weddings are around ₹1,00,000–₹2,50,000, while premium royal or destination weddings can cost more.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get a free quote for wedding planning in Jaipur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Submit your requirements through our form, including budget, guest count, and wedding type. We'll connect you with verified planners for personalized quotes.",
        },
      },
    ],
  };

  const priceTiers = [
    "Basic Day-of Coordination: ₹50,000 – ₹1,00,000",
    "Partial Planning: ₹1,00,000 – ₹2,00,000",
    "Full-Service Planning: ₹2,00,000 – ₹5,00,000",
    "Destination / Royal Weddings: ₹3,00,000 – ₹10,00,000+",
  ];

  const factors = [
    { icon: "👥", title: "Guest Count", description: "More guests mean higher coordination costs and logistics." },
    { icon: "🏰", title: "Venue Type", description: "Palaces and forts add premium fees to the package." },
    { icon: "📅", title: "Season", description: "Peak wedding season (Oct–Feb) increases prices." },
    { icon: "🎨", title: "Customization", description: "Themed décor and unique elements raise costs." },
    { icon: "🛠️", title: "Services", description: "Full vs. partial planning impacts the final quote." },
    { icon: "⭐", title: "Experience", description: "Top-rated planners charge more for their expertise." },
  ];

  const packages = [
    { name: "Budget Package", price: "₹50,000 – ₹1,50,000", description: "Basic planning, vendor coordination, and day-of management." },
    { name: "Standard Package", price: "₹1,50,000 – ₹3,00,000", description: "Full planning including décor, catering, and entertainment." },
    { name: "Premium Package", price: "₹3,00,000 – ₹6,00,000", description: "Luxury services with custom themes and VIP handling." },
    { name: "Royal / Destination", price: "₹5,00,000+", description: "Palace venues, cultural shows, and international-level execution." },
  ];

  const planners = [
    { name: "Atelier Events", description: "Luxury themes & creative setups with excellent reviews.", href: "/planners/atelier-events", featured: true, verified: true },
    { name: "GoldenVows Events", description: "Personalized planning with stunning décor.", href: "/planners/goldenvows-events", featured: true, verified: false },
    { name: "Shaadi Sutra Co.", description: "Highly rated full-service wedding planner.", href: "/planners/shaadi-sutra-co" },
    { name: "Anantara Wedding Co.", description: "Bespoke weddings with strong customer satisfaction.", href: "/planners/anantara-wedding-co" },
    { name: "Velvet Knot Weddings", description: "Detail-focused planning with creative execution.", href: "/planners/velvet-knot-weddings" },
    { name: "RajViva Events", description: "Highly rated full-service wedding planner.", href: "/planners/rajviva-events" },
  ];

  const steps = [
    "Determine your overall wedding budget (typically 10–15% for planning)",
    "List must-have services and nice-to-haves",
    "Get quotes from multiple planners via our platform",
    "Compare packages and negotiate for best value",
    "Book early to lock in prices and availability",
  ];

  const testimonials = [
    { quote: "“The cost breakdown was completely transparent — no surprises at the end. Exactly what we budgeted.”", couple: "— Priya & Sameer" },
    { quote: "“We compared three quotes through JaipurWeddingPlanner.in and saved significantly on our package.”", couple: "— Aanchal & Rahul" },
    { quote: "“As a mid-range budget couple, we found a full-service planner well within our reach.”", couple: "— Shruti & Vivaan" },
    { quote: "“Honest pricing, no hidden charges, and a beautiful wedding. Highly recommended for cost-conscious couples.”", couple: "— Ananya & Rohan" },
  ];

  const benefits = [
    { icon: "✧", title: "High-Intent Leads", description: "Couples comparing pricing are close to booking — they convert faster." },
    { icon: "⌖", title: "Local Visibility", description: "Rank higher for “wedding planner cost Jaipur” searches without heavy ad spend." },
    { icon: "✓", title: "Verified Planner Badge", description: "Stand out with a verified profile that builds trust when couples compare quotes." },
    { icon: "▧", title: "Showcase Your Work", description: "Display your portfolio, services, and testimonials in one place." },
    { icon: "↗", title: "Direct Inquiries", description: "Receive direct WhatsApp and call inquiries — no middlemen or commissions." },
    { icon: "₹", title: "Affordable Listing Plans", description: "One simple monthly fee. No commissions per booking. No hidden charges." },
  ];

  return (
    <>
      <Head>
        <title>Wedding Planner Cost in Jaipur | Packages &amp; Pricing | JaipurWeddingPlanner.in</title>
        <meta
          name="description"
          content="Discover wedding planner costs in Jaipur, from budget packages to luxury services. Get average pricing, factors affecting costs, and free quotes from top planners."
        />
        <meta
          name="keywords"
          content="wedding planner cost Jaipur, Jaipur wedding planning prices, affordable wedding planners Jaipur, wedding packages Jaipur, wedding budget Jaipur"
        />
        <meta name="theme-color" content="#faf7f2" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WeddingService",
              name: "Wedding Planner Cost Jaipur",
              url: "https://jaipurweddingplanner.in/wedding-planner-cost-jaipur",
              description:
                "Transparent wedding planner pricing in Jaipur — from budget packages to luxury royal weddings.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jaipur",
                addressRegion: "Rajasthan",
                addressCountry: "IN",
              },
              areaServed: ["Jaipur", "Rajasthan"],
              priceRange: "₹₹₹",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://jaipurweddingplanner.in/" },
                { "@type": "ListItem", position: 2, name: "Wedding Planner Cost Jaipur", item: "https://jaipurweddingplanner.in/wedding-planner-cost-jaipur" },
              ],
            }),
          }}
        />
      </Head>

      <div className="jwp-home">
        {/* ---------- Hero ---------- */}
        <header className="jwp-hero">
          <div className="jwp-hero-overlay" />
          <div className="jwp-hero-content">
            <span className="jwp-eyebrow jwp-hero-eyebrow">Transparent Pricing for Your Dream Wedding</span>
            <span className="jwp-hero-rule" />
            <h1>Wedding Planner Cost <em>in Jaipur</em></h1>
            <p>
              Planning a wedding in Jaipur? Understand the costs involved with professional wedding
              planners. From affordable packages to premium royal setups, get insights into pricing,
              factors, and how to budget effectively for your big day.
            </p>
            <div className="jwp-hero-actions">
              <a href="#planners" className="jwp-button jwp-button-gold">
                Explore Wedding Planners <span>↗</span>
              </a>
              <a href="#inquiry" className="jwp-text-link">
                Get a free quote <span>→</span>
              </a>
            </div>
            <div className="jwp-hero-footnote">
              <span /> Transparent packages · Verified planners · Jaipur
            </div>
          </div>
          <div className="jwp-hero-side-note">JAIPUR · PRICING · PACKAGES</div>
        </header>

        <main>
          {/* ---------- Intro strip ---------- */}
          <section className="jwp-intro-strip">
            <div className="jwp-container jwp-intro-inner">
              <span className="jwp-intro-mark">✧</span>
              <p>
                Know what you’ll pay. <strong>Plan with confidence.</strong>
              </p>
              <span className="jwp-intro-location">A pricing guide to Jaipur’s wedding planners</span>
            </div>
          </section>

          {/* ---------- Understanding costs (split layout) ---------- */}
          <section className="jwp-section jwp-why-section">
            <div className="jwp-container jwp-why-layout">
              <div className="jwp-why-heading">
                <span className="jwp-eyebrow">What to expect</span>
                <h2>Understanding Wedding Planner <em>Costs in Jaipur</em></h2>
                <p>
                  Hiring a wedding planner in Jaipur saves you time and stress while ensuring a
                  flawless event. Costs vary based on your needs, but expect transparent pricing from
                  our verified partners.
                </p>
                <blockquote className="jwp-destination-quote--inline">
                  Average costs range from ₹50,000 for basic coordination to ₹5,00,000+ for full-service
                  luxury weddings.
                </blockquote>
              </div>
              <ul className="jwp-check-list">
                {priceTiers.map((tier) => (
                  <li key={tier}>
                    <span>✓</span> {tier}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ---------- Factors (planner-card grid) ---------- */}
          <section className="jwp-section jwp-section-light" id="factors">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">What shapes the quote</span>
                <h2>Factors Affecting Wedding Planner <em>Prices in Jaipur</em></h2>
                <p>
                  Every wedding is different — these are the six biggest drivers of what your planner
                  will quote.
                </p>
              </div>
              <div className="jwp-planner-grid jwp-services-as-cards">
                {factors.map((factor, index) => (
                  <article className="jwp-planner-card" key={factor.title}>
                    <div className="jwp-planner-number">0{index + 1}</div>
                    <div className="jwp-planner-ornament">{factor.icon}</div>
                    <h3>{factor.title}</h3>
                    <p>{factor.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- Packages (price cards) ---------- */}
          <section className="jwp-section jwp-planners-section" id="packages">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">Common packages</span>
                <h2>Popular Wedding Planner <em>Packages in Jaipur</em></h2>
                <p>
                  Typical packages offered by Jaipur’s top planners. These are approximate and can be
                  customized to your needs.
                </p>
              </div>
              <div className="jwp-planner-grid">
                {packages.map((pkg, index) => (
                  <article className="jwp-planner-card jwp-price-card" key={pkg.name}>
                    <div className="jwp-planner-number">0{index + 1}</div>
                    <div className="jwp-planner-ornament">✧</div>
                    <h3>{pkg.name}</h3>
                    <strong className="jwp-price">{pkg.price}</strong>
                    <p>{pkg.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- Top planners with cost insights ---------- */}
          <section className="jwp-section jwp-section-light" id="planners">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">A handpicked place to begin</span>
                <h2>Top Wedding Planners in Jaipur <em>with Cost Insights</em></h2>
                <p>
                  Compare approximate starting prices from verified planners on our platform.
                </p>
              </div>
              <div className="jwp-planner-grid">
                {planners.map((planner, index) => (
                  <article className="jwp-planner-card" key={planner.name}>
                    <div className="jwp-planner-number">0{index + 1}</div>
                    {planner.featured && <span className="jwp-featured">Featured</span>}
                    <div className="jwp-planner-ornament">✧</div>
                    <h3>{planner.name}</h3>
                    <strong className="jwp-price">{planner.cost}</strong>
                    <p>{planner.description}</p>
                    {planner.href && (
                      <Link href={planner.href} className="jwp-card-link">
                        View Details <span>→</span>
                      </Link>
                    )}
                    {planner.verified && <span className="jwp-verified">✓ Verified Planner</span>}
                  </article>
                ))}
              </div>
              <div className="jwp-centered-action">
                <Link href="/wedding-planner" className="jwp-button jwp-button-outline">
                  View All Wedding Planners <span>→</span>
                </Link>
              </div>
            </div>
          </section>

          {/* ---------- Testimonials ---------- */}
          <section className="jwp-section jwp-testimonials-section">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">Kind words, lasting memories</span>
                <h2>What Couples <em>Say About Us</em></h2>
              </div>
              <div className="jwp-testimonial-grid">
                {testimonials.map((item) => (
                  <article className="jwp-testimonial-card" key={item.couple}>
                    <div className="jwp-stars" aria-label="5 out of 5 stars">★★★★★</div>
                    <span className="jwp-quote-mark">“</span>
                    <p>{item.quote}</p>
                    <strong>{item.couple}</strong>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- How to budget (5-step row) ---------- */}
          <section className="jwp-section jwp-process-section">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">Plan your budget</span>
                <h2>How to Budget for Your <em>Wedding Planner in Jaipur</em></h2>
              </div>
              <ol className="jwp-steps jwp-steps--five">
                {steps.map((step, index) => (
                  <li key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ---------- Benefits for planners ---------- */}
          <section className="jwp-section jwp-benefits-section">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">For Rajasthan’s wedding professionals</span>
                <h2>Why Wedding Planners Choose <em>JaipurWeddingPlanner.in</em></h2>
                <p className="jwp-planner-intro">
                  We help Rajasthan-based wedding planners get discovered by couples actively
                  comparing wedding planning costs in Jaipur.
                </p>
              </div>
              <div className="jwp-benefit-grid">
                {benefits.map((benefit) => (
                  <article className="jwp-benefit-card" key={benefit.title}>
                    <span className="jwp-benefit-icon">{benefit.icon}</span>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </article>
                ))}
              </div>
              <div className="jwp-planner-cta">
                <span className="jwp-eyebrow">Grow your wedding business</span>
                <h3>Let more couples discover your work.</h3>
                <a href="/list-your-business" className="jwp-button jwp-button-gold">
                  List Your Wedding Planning Business <span>↗</span>
                </a>
                <p>✓ No commission • Direct leads • Rajasthan focused</p>
              </div>
            </div>
          </section>

          {/* ---------- Inquiry form ---------- */}
          <section className="jwp-section jwp-section-light" id="inquiry">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">Get a free quote</span>
                <h2>Request a <em>Personalized Quote</em></h2>
                <p>
                  Share a few details and we’ll connect you with planners who fit your vision and
                  budget.
                </p>
              </div>
              <form className="jwp-form" onSubmit={handleWhatsAppSubmit}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="tel" name="phone" placeholder="Phone / WhatsApp" required />
                <input type="date" name="date" required />
                <input type="text" name="budget" placeholder="Approximate Budget (e.g. ₹5–15 lakh)" />
                <select name="type" defaultValue="">
                  <option value="">Type of Wedding</option>
                  <option>Royal</option>
                  <option>Destination</option>
                  <option>Local</option>
                  <option>Traditional</option>
                </select>
                <button type="submit" className="jwp-button jwp-button-gold">
                  Get My Quote <span>↗</span>
                </button>
              </form>
              <p className="jwp-centered-action jwp-form-note">
                ✓ Direct WhatsApp inquiry · No commission
              </p>
            </div>
          </section>

          {/* ---------- About ---------- */}
          <section className="jwp-about-section">
            <div className="jwp-about-inner">
              <span className="jwp-eyebrow">A little about us</span>
              <h2>About <em>Us</em></h2>
              <p>
                JaipurWeddingPlanner.in connects couples with professional and verified wedding
                planners in Jaipur. From transparent pricing to royal palace weddings, we help you
                find the perfect experts for your big day — within your budget.
              </p>
              <p className="jwp-about-highlight">
                Our mission is simple: make wedding planning easy, transparent and unforgettable.
              </p>
              <span className="jwp-about-flourish">✧</span>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}