// pages/royal-wedding-jaipur.jsx
"use client";

import Head from "next/head";
import Link from "next/link";
import "../destination.css"

export default function RoyalWeddingJaipur() {
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

From: JaipurWeddingPlanner.in — Royal Wedding Jaipur
`;

    const whatsappNumber = "916378380535";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "JaipurWeddingPlanner.in",
    image: "https://jaipurweddingplanner.in/logo.png",
    description:
      "Expert wedding planners in Jaipur specializing in royal weddings, palace venues, and luxurious celebrations.",
    url: "https://www.jaipurweddingplanner.in/royal-wedding-jaipur",
    telephone: "+91-XXXXXXXXXX",
    email: "info@jaipurweddingplanner.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    priceRange: "$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  };

  const whyJaipur = [
    "Majestic palaces and forts as venues",
    "Traditional Rajasthani ceremonies and attire",
    "Luxurious hospitality and royal feasts",
    "Cultural performances like folk dances and music",
    "Perfect for grand, themed royal celebrations",
  ];

  const venues = [
    { image: "/venues/rambagh-palace.jpg", title: "Rambagh Palace", alt: "Rambagh Palace royal wedding venue in Jaipur" },
    { image: "/venues/jai-mahal-palace.jpg", title: "Jai Mahal Palace", alt: "Jai Mahal Palace heritage royal wedding venue" },
    { image: "/venues/samode-palace.jpg", title: "Samode Palace", alt: "Samode Palace hilltop royal wedding venue" },
    { image: "/venues/raj-palace.jpg", title: "Raj Palace", alt: "Raj Palace opulent royal wedding venue Jaipur" },
    { image: "/venues/narain-niwas.jpg", title: "Narain Niwas Palace", alt: "Narain Niwas Palace boutique royal wedding venue" },
    { image: "/venues/itc-rajputana.jpg", title: "ITC Rajputana", alt: "ITC Rajputana luxury royal wedding venue Jaipur" },
  ];

  const services = [
    "Royal Theme Conceptualization",
    "Opulent Décor & Floral Arrangements",
    "Royal Banquet & Cuisine Planning",
    "Cultural Entertainment & Processions",
    "Royal Photography & Cinematography",
    "VIP Guest Management & Logistics",
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
    "Define your royal vision and budget",
    "Select a palace or fort venue",
    "Connect with our expert planners",
    "Customize themes, rituals, and entertainment",
    "Celebrate your royal union in style!",
  ];

  const testimonials = [
    { quote: "“Our royal wedding at Rambagh Palace felt like a fairy tale — every ritual was handled with grace.”", couple: "— Aditi & Rudra" },
    { quote: "“The décor, the feast, the folk performances — everything was fit for royalty. Flawless execution.”", couple: "— Tanya & Yash" },
    { quote: "“JaipurWeddingPlanner.in found us a planner who understood our royal vision and budget.”", couple: "— Nandini & Shiv" },
    { quote: "“From palace booking to the final send-off, the team made it completely stress-free.”", couple: "— Rhea & Kabir" },
  ];

  const benefits = [
    { icon: "✧", title: "High-Intent Leads", description: "Couples searching for royal weddings in Jaipur are ready to book — better quality inquiries." },
    { icon: "⌖", title: "Local Visibility", description: "Rank higher for “royal wedding Jaipur” and “palace wedding Jaipur” searches without heavy ad spend." },
    { icon: "✓", title: "Verified Planner Badge", description: "Stand out with a verified profile that builds trust with couples comparing planners." },
    { icon: "▧", title: "Showcase Your Work", description: "Display your portfolio, services, wedding photos, and testimonials in one place." },
    { icon: "↗", title: "Direct Inquiries", description: "Receive direct WhatsApp and call inquiries — no middlemen or commissions." },
    { icon: "₹", title: "Affordable Listing Plans", description: "One simple monthly fee. No commissions per booking. No hidden charges." },
  ];

  return (
    <>
      <Head>
        <title>Royal Wedding in Jaipur | Top Planners &amp; Palaces | JaipurWeddingPlanner.in</title>
        <meta
          name="description"
          content="Plan your majestic royal wedding in Jaipur with expert planners. Experience palace venues, traditional ceremonies, and luxury services for a regal celebration. Free consultation available."
        />
        <meta
          name="keywords"
          content="royal wedding Jaipur, Jaipur royal wedding planners, palace weddings Jaipur, luxury weddings Rajasthan, royal theme weddings"
        />
        <meta name="theme-color" content="#faf7f2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WeddingService",
              name: "Royal Wedding Jaipur",
              url: "https://jaipurweddingplanner.in/royal-wedding-jaipur",
              image: "https://jaipurweddingplanner.in/hero.jpg",
              description:
                "Royal wedding planning in Jaipur with palace venues, opulent décor, traditional ceremonies, and full wedding management.",
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
                  name: "Which palaces are best for a royal wedding in Jaipur?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Popular royal wedding venues in Jaipur include Rambagh Palace, Jai Mahal Palace, Samode Palace, Raj Palace, Narain Niwas Palace, and ITC Rajputana.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What does a royal wedding in Jaipur include?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A royal wedding typically includes palace venue booking, opulent décor, traditional Rajasthani ceremonies, royal banquets, cultural performances, and VIP guest management.",
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
            <span className="jwp-eyebrow jwp-hero-eyebrow">Live Your Fairy-Tale in the Pink City</span>
            <span className="jwp-hero-rule" />
            <h1>Royal Wedding <em>in Jaipur</em></h1>
            <p>
              Embrace the grandeur of Rajasthan with a royal wedding in Jaipur. Our experienced
              planners transform historic palaces and forts into enchanting venues for your special
              day — complete with opulent décor, traditional rituals, and impeccable service.
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
              <span /> Palaces · Royal themes · Jaipur
            </div>
          </div>
          <div className="jwp-hero-side-note">JAIPUR · RAJASTHAN · ROYAL</div>
        </header>

        <main>
          {/* ---------- Intro strip ---------- */}
          <section className="jwp-intro-strip">
            <div className="jwp-container jwp-intro-inner">
              <span className="jwp-intro-mark">✧</span>
              <p>
                Weddings fit for kings and queens. <strong>Timeless. Regal.</strong>
              </p>
              <span className="jwp-intro-location">A guide to Jaipur’s royal venues &amp; experts</span>
            </div>
          </section>

          {/* ---------- Why royal wedding in Jaipur (split layout) ---------- */}
          <section className="jwp-section jwp-why-section">
            <div className="jwp-container jwp-why-layout">
              <div className="jwp-why-heading">
                <span className="jwp-eyebrow">Why the Pink City</span>
                <h2>Why Choose Jaipur for Your <em>Royal Wedding?</em></h2>
                <p>
                  Jaipur’s royal heritage makes it the ideal destination for a wedding fit for kings
                  and queens. With magnificent palaces, intricate architecture, and vibrant culture,
                  your wedding becomes a blend of timeless tradition and modern luxury.
                </p>
                <blockquote className="jwp-destination-quote--inline">
                  Step into royalty — let Jaipur’s palaces host your eternal love story.
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

          {/* ---------- Royal venues (service-card grid) ---------- */}
          <section className="jwp-section jwp-section-light" id="venues">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">Where royalty celebrates</span>
                <h2>Popular Royal Wedding Venues <em>in Jaipur</em></h2>
                <p>
                  Handpicked palaces and heritage properties that give your celebration a truly regal
                  setting.
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

          {/* ---------- Royal planning services (planner-style card grid) ---------- */}
          <section className="jwp-section jwp-testimonials-section" id="services">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">Every detail, beautifully considered</span>
                <h2>Our Royal Wedding Planning <em>Services in Jaipur</em></h2>
                <p>
                  Connect with top planners who specialize in royal weddings. From venue booking to
                  custom royal themes, we ensure your wedding exudes regal splendor.
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

          {/* ---------- How to plan (5-step row) ---------- */}
          <section className="jwp-section jwp-process-section">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">Your celebration starts here</span>
                <h2>How to Plan Your <em>Royal Wedding in Jaipur</em></h2>
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
                  We help Rajasthan-based wedding planners get discovered by couples actively planning
                  a royal wedding in Jaipur.
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
                <span className="jwp-eyebrow">Plan with us</span>
                <h2>Plan Your <em>Royal Wedding in Jaipur</em></h2>
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
                  <option>Royal</option>
                  <option>Destination</option>
                  <option>Local</option>
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

          {/* ---------- About ---------- */}
          <section className="jwp-about-section">
            <div className="jwp-about-inner">
              <span className="jwp-eyebrow">A little about us</span>
              <h2>About <em>Us</em></h2>
              <p>
                JaipurWeddingPlanner.in connects couples with professional and verified wedding
                planners in Jaipur. From royal palace weddings to traditional Rajasthani ceremonies,
                we help you find the perfect experts for your big day.
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