// pages/destination-wedding-jaipur.jsx
"use client";

import Head from "next/head";
import Link from "next/link";
import "../destination.css"

export default function DestinationWeddingJaipur() {
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

From: JaipurWeddingPlanner.in — Destination Wedding Jaipur
`;

    const whatsappNumber = "916378380535";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  const whyJaipur = [
    "Iconic venues like Amber Fort and City Palace",
    "Authentic Rajasthani cuisine and folk entertainment",
    "Easy accessibility with international airport",
    "Affordable luxury compared to other destinations",
    "Perfect for theme weddings: Royal, Vintage, or Bohemian",
  ];

  const venues = [
    { image: "/venues/amber-fort.jpg", title: "Amber Fort", alt: "Amber Fort destination wedding venue in Jaipur" },
    { image: "/venues/city-palace.jpg", title: "City Palace", alt: "City Palace royal wedding venue in Jaipur" },
    { image: "/venues/rambagh-palace.jpg", title: "Rambagh Palace", alt: "Rambagh Palace luxury wedding venue Jaipur" },
    { image: "/venues/jai-mahal-palace.jpg", title: "Jai Mahal Palace", alt: "Jai Mahal Palace heritage wedding venue Jaipur" },
    { image: "/venues/samode-palace.jpg", title: "Samode Palace", alt: "Samode Palace hilltop wedding venue near Jaipur" },
    { image: "/venues/fairmont-jaipur.jpg", title: "Fairmont Jaipur", alt: "Fairmont Jaipur contemporary luxury wedding venue" },
  ];

  const services = [
    "Venue Selection & Booking",
    "Custom Theme & Décor",
    "Multi-Cuisine Catering",
    "Entertainment & Cultural Shows",
    "Professional Photography",
    "Guest Management & Logistics",
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
    "Choose your wedding date and guest list",
    "Select a venue that matches your vision",
    "Connect with our planners for customized packages",
    "Finalize themes, menu, and entertainment",
    "Enjoy your royal destination wedding!",
  ];

  const testimonials = [
    { quote: "“Our destination wedding at Amber Fort was a dream. The planners handled every detail flawlessly.”", couple: "— Isha & Vikram" },
    { quote: "“A royal experience in the Pink City — décor, food, and guest management were outstanding.”", couple: "— Simran & Arjun" },
    { quote: "“JaipurWeddingPlanner.in connected us with the perfect planner within our budget.”", couple: "— Kavya & Dev" },
    { quote: "“From venue booking to the final farewell, everything was smooth and stress-free.”", couple: "— Meera & Nikhil" },
  ];

  const benefits = [
    { icon: "✧", title: "High-Intent Leads", description: "Couples searching for destination weddings in Jaipur are ready to book — better quality inquiries." },
    { icon: "⌖", title: "Local Visibility", description: "Rank higher for “destination wedding Jaipur” searches without heavy ad spend." },
    { icon: "✓", title: "Verified Planner Badge", description: "Stand out with a verified profile that builds trust with couples comparing planners." },
    { icon: "▧", title: "Showcase Your Work", description: "Display your portfolio, services, wedding photos, and testimonials in one place." },
    { icon: "↗", title: "Direct Inquiries", description: "Receive direct WhatsApp and call inquiries — no middlemen or commissions." },
    { icon: "₹", title: "Affordable Listing Plans", description: "One simple monthly fee. No commissions per booking. No hidden charges." },
  ];

  return (
    <>
      <Head>
        <title>Destination Wedding in Jaipur | Top Planners & Venues | JaipurWeddingPlanner.in</title>
        <meta
          name="description"
          content="Plan your perfect destination wedding in Jaipur with expert planners. Discover royal venues, themes, and packages for an unforgettable experience. Free consultation available."
        />
        <meta
          name="keywords"
          content="destination wedding Jaipur, Jaipur destination wedding planners, royal weddings Jaipur, wedding venues Jaipur"
        />
        <meta name="theme-color" content="#faf7f2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WeddingService",
              name: "Destination Wedding Jaipur",
              url: "https://jaipurweddingplanner.in/destination-wedding-jaipur",
              image: "https://jaipurweddingplanner.in/hero.jpg",
              description:
                "Destination wedding planning in Jaipur with royal venues, décor, catering, and full wedding management.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jaipur",
                addressRegion: "Rajasthan",
                addressCountry: "IN",
              },
              areaServed: ["Jaipur", "Udaipur", "Rajasthan"],
              priceRange: "₹₹₹",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What makes Jaipur a good destination for weddings?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Jaipur offers royal palaces, forts, heritage venues, authentic Rajasthani cuisine, easy airport access, and affordable luxury compared to other Indian destinations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which are the best venues for a destination wedding in Jaipur?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Popular venues include Amber Fort, City Palace, Rambagh Palace, Jai Mahal Palace, Samode Palace, and Fairmont Jaipur.",
                  },
                },
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
            <span className="jwp-eyebrow jwp-hero-eyebrow">Experience royalty on your special day</span>
            <span className="jwp-hero-rule" />
            <h1>Destination Wedding <em>in Jaipur</em></h1>
            <p>
              Turn your dream wedding into a royal affair in the Pink City. With stunning palaces,
              forts, and heritage sites, Jaipur offers the perfect backdrop for your destination
              wedding. Our trusted planners handle everything from venue selection to décor and
              entertainment.
            </p>
            <div className="jwp-hero-actions">
              <a href="#planners" className="jwp-button jwp-button-gold">
                Explore Wedding Planners <span>↗</span>
              </a>
              <a href="#inquiry" className="jwp-text-link">
                Plan with us <span>→</span>
              </a>
            </div>
            <div className="jwp-hero-footnote">
              <span /> Royal venues · Trusted planners · Jaipur
            </div>
          </div>
          <div className="jwp-hero-side-note">JAIPUR · RAJASTHAN · DESTINATION</div>
        </header>

        <main>
          {/* ---------- Intro strip ---------- */}
          <section className="jwp-intro-strip">
            <div className="jwp-container jwp-intro-inner">
              <span className="jwp-intro-mark">✧</span>
              <p>
                The Pink City, reimagined. <strong>Royal. Unforgettable.</strong>
              </p>
              <span className="jwp-intro-location">A guide to Jaipur’s wedding venues &amp; experts</span>
            </div>
          </section>

          {/* ---------- Why Jaipur (split layout like home "why" section) ---------- */}
          <section className="jwp-section jwp-why-section">
            <div className="jwp-container jwp-why-layout">
              <div className="jwp-why-heading">
                <span className="jwp-eyebrow">Why the Pink City</span>
                <h2>Why Choose Jaipur for Your <em>Destination Wedding?</em></h2>
                <p>
                  Jaipur blends rich history, vibrant culture, and majestic architecture for a
                  fairy-tale setting. From opulent palaces to scenic forts, it pairs tradition with
                  luxury for an unforgettable celebration.
                </p>
                <blockquote className="jwp-destination-quote jwp-destination-quote--inline">
                  Imagine exchanging vows amidst royal Rajasthani heritage — that’s the magic of a
                  destination wedding in Jaipur.
                </blockquote>
              </div>
              <ul className="jwp-check-list">
                {whyJaipur.map((reason) => (
                  <li key={reason}>
                    <span>✓</span> {reason}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ---------- Venues (service-card grid style) ---------- */}
          <section className="jwp-section jwp-section-light" id="venues">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">Where to celebrate</span>
                <h2>Popular Venues for Destination Weddings <em>in Jaipur</em></h2>
                <p>
                  Handpicked palaces, forts, and heritage properties that make Jaipur one of India’s
                  most iconic wedding destinations.
                </p>
              </div>
              <div className="jwp-service-grid">
                {venues.map((venue) => (
                  <article className="jwp-service-card" key={venue.title}>
                    <div className="jwp-service-image">
                      <img src={venue.image} alt={venue.alt} />
                      <span className="jwp-image-corner">✧</span>
                    </div>
                    <h3>{venue.title}</h3>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- Services (mirrors home "why choose us" check-list) ---------- */}
          <section className="jwp-section jwp-testimonials-section" id="services">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">Every detail, beautifully considered</span>
                <h2>Our Destination Wedding Planning <em>Services</em></h2>
                <p>
                  We connect you with experienced planners specializing in destination weddings. From
                  initial concept to flawless execution, our partners ensure every detail is perfect.
                </p>
              </div>
              <div className="jwp-planner-grid jwp-services-as-cards">
                {services.map((service, index) => (
                  <article className="jwp-planner-card" key={service}>
                    <div className="jwp-planner-number">0{index + 1}</div>
                    <div className="jwp-planner-ornament">✧</div>
                    <h3>{service}</h3>
                    <p>Handled end-to-end by our verified Jaipur partners.</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- Featured planners (home planner-card style) ---------- */}
          <section className="jwp-section jwp-planners-section" id="planners">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">A handpicked place to begin</span>
                <h2>Popular Wedding Planners <em>in Jaipur</em></h2>
                <p>
                  Explore wedding professionals ready to help create a celebration that feels like
                  yours.
                </p>
              </div>
              <div className="jwp-planner-grid">
                {planners.map((planner, index) => (
                  <article className="jwp-planner-card" key={planner.name}>
                    <div className="jwp-planner-number">0{index + 1}</div>
                    {planner.featured && <span className="jwp-featured">Featured</span>}
                    <div className="jwp-planner-ornament">✧</div>
                    <h3>{planner.name}</h3>
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

          {/* ---------- Testimonials (home style) ---------- */}
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

          {/* ---------- How to plan (home steps style, 5 steps) ---------- */}
          <section className="jwp-section jwp-process-section">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">Your celebration starts here</span>
                <h2>How to Plan Your <em>Destination Wedding in Jaipur</em></h2>
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

          {/* ---------- Benefits for planners (home style) ---------- */}
          <section className="jwp-section jwp-benefits-section">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">For Rajasthan’s wedding professionals</span>
                <h2>Why Wedding Planners Choose <em>JaipurWeddingPlanner.in</em></h2>
                <p className="jwp-planner-intro">
                  We help Rajasthan-based wedding planners get discovered by couples actively planning
                  a destination wedding in Jaipur.
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

          {/* ---------- Inquiry form (home form style) ---------- */}
          <section className="jwp-section jwp-section-light" id="inquiry">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">Plan with us</span>
                <h2>Plan Your Destination <em>Wedding in Jaipur</em></h2>
                <p>
                  Share a few details and we’ll connect you with planners who fit your vision and
                  budget.
                </p>
              </div>
              <form className="jwp-form" onSubmit={handleWhatsAppSubmit}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="tel" name="phone" placeholder="Phone / WhatsApp" required />
                <input type="date" name="date" required />
                <input type="text" name="budget" placeholder="Approximate Budget (e.g. ₹15–30 lakh)" />
                <select name="type" defaultValue="">
                  <option value="">Type of Wedding</option>
                  <option>Destination</option>
                  <option>Local</option>
                  <option>Royal</option>
                  <option>Traditional</option>
                </select>
                <button type="submit" className="jwp-button jwp-button-gold">
                  Send Inquiry <span>↗</span>
                </button>
              </form>
              <p className="jwp-centered-action jwp-form-note">
                ✓ Direct WhatsApp inquiry · No commission
              </p>
            </div>
          </section>

          {/* ---------- About (home style) ---------- */}
          <section className="jwp-about-section">
            <div className="jwp-about-inner">
              <span className="jwp-eyebrow">A little about us</span>
              <h2>About <em>Us</em></h2>
              <p>
                JaipurWeddingPlanner.in connects couples with professional and verified wedding
                planners in Jaipur. From royal destination weddings to traditional Rajasthani
                ceremonies, we help you find the perfect experts for your big day.
              </p>
              <p className="jwp-about-highlight">
                Our mission is simple: make wedding planning easy, stress-free and unforgettable.
              </p>
              <span className="jwp-about-flourish">✧</span>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}