// pages/index.jsx
"use client";

import Head from "next/head";
import Link from "next/link";


export default function Home() {
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

From: JaipurWeddingPlanner.in
`;

    const whatsappNumber = "916378380535";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  const services = [
    { image: "/services/planning.jpg", title: "Complete Wedding Planning", alt: "Complete Wedding Planning" },
    { image: "/services/decoration.jpg", title: "Decoration & Theme Design", alt: "Wedding Decoration & Theme Design" },
    { image: "/services/catering.jpg", title: "Catering & Menu Planning", alt: "Wedding Catering & Menu Planning" },
    { image: "/services/entertainment.jpg", title: "Entertainment Management", alt: "Wedding Entertainment Management" },
    { image: "/services/photography.jpg", title: "Photography & Videography", alt: "Wedding Photography & Videography" },
    { image: "/services/destination.jpg", title: "Destination Weddings in Rajasthan", alt: "Destination Weddings in Jaipur" },
  ];

  const planners = [
    { name: "GoldenVows", description: "Personalized planning with stunning décor.", href: "/planners/goldenvows-events", featured: true, verified: true },
    { name: "Atelier Events", description: "Luxury themes & creative setups with excellent reviews.", href: "/planners/atelier-events", featured: true },
    { name: "RajViva Events", description: "Highly rated full-service wedding planner.", href: "/planners/rajviva-events" },
    { name: "Shaadi Sutra Co.", description: "Bespoke weddings with strong customer satisfaction.", href: "/planners/shaadi-sutra-co" },
    { name: "Mandap & Memories", description: "Detail-focused planning with creative execution.", href: "/planners/mandap-memories" },
  ];

  const testimonials = [
    { quote: "“GoldenVows Events managed our Jaipur wedding beautifully. Everything was perfectly coordinated from décor to catering.”", couple: "— Riya & Aman" },
    { quote: "“Atelier Events gave us a royal destination wedding experience. The décor and planning exceeded our expectations.”", couple: "— Neha & Karan" },
    { quote: "“Thanks to JaipurWeddingPlanner.in, we found the perfect planner within our budget. Highly recommended!”", couple: "— Pooja & Rohit" },
    { quote: "“From first consultation to the wedding day, everything was smooth and stress-free. Amazing service!”", couple: "— Anjali & Suresh" },
  ];

  const benefits = [
    { icon: "✧", title: "High-Intent Leads", description: "Couples visiting our platform are already searching for wedding planners in Rajasthan, meaning better quality inquiries and higher conversions." },
    { icon: "⌖", title: "Local Visibility", description: "Rank higher for Jaipur-specific searches like “Wedding Planner in Jaipur” without spending heavily on ads." },
    { icon: "✓", title: "Verified Planner Badge", description: "Stand out with a verified profile that builds instant trust with couples comparing multiple planners." },
    { icon: "▧", title: "Showcase Your Work", description: "Display your portfolio, services, wedding photos, and testimonials — all in one place." },
    { icon: "↗", title: "Direct Inquiries", description: "Receive direct WhatsApp and call inquiries — no middlemen or commissions." },
    { icon: "₹", title: "Affordable Listing Plans", description: "One simple monthly fee. No commissions per booking. No hidden charges." },
  ];

  return (
    <>
      <Head>
        <title>Top Wedding Planners in Rajasthan | JaipurWeddingPlanner.in</title>
        <meta name="description" content="Plan your dream wedding with trusted wedding planners in Rajasthan. Free consultation available." />
        <meta name="theme-color" content="#faf7f2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WeddingService",
              name: "Jaipur Wedding Planner",
              url: "https://jaipurweddingplanner.in",
              logo: "https://jaipurweddingplanner.in/logo.png",
              image: "https://jaipurweddingplanner.in/hero.jpg",
              description: "Top wedding planners in Rajasthan offering royal destination weddings, décor, catering, photography and full wedding management.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jaipur",
                addressRegion: "Rajasthan",
                addressCountry: "IN",
              },
              areaServed: ["Jaipur", "Udaipur", "Rajasthan"],
              priceRange: "₹₹₹",
              sameAs: [
                "https://www.instagram.com/jaipurweddingplanner.in",
                "https://www.facebook.com/jaipurweddingplanner",
              ],
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
                  name: "How much does a wedding planner cost in Jaipur?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Wedding planner costs in Jaipur typically range from ₹1.5 lakh to ₹10+ lakh depending on services, scale, and venue.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer royal destination weddings?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we specialize in royal destination weddings at palaces and luxury venues across Jaipur and Udaipur.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <div className="jwp-home">
        <header className="jwp-hero">
          <div className="jwp-hero-overlay" />
          <div className="jwp-hero-content">
            <span className="jwp-eyebrow jwp-hero-eyebrow">Your Royal Dream Wedding Awaits</span>
            <span className="jwp-hero-rule" />
            <h1>Top Wedding Planners <em>in Rajasthan</em></h1>
            <p>
              Plan your dream wedding with trusted & experienced wedding planners
              in Rajasthan. Decoration, catering, photography & full management — all
              in one place.
            </p>
            <div className="jwp-hero-actions">
              <a href="#planners" className="jwp-button jwp-button-gold">Explore Wedding Planners <span>↗</span></a>
              <a href="#services" className="jwp-text-link">Discover our services <span>↓</span></a>
            </div>
            <div className="jwp-hero-footnote"><span /> Curated wedding planning across Rajasthan</div>
          </div>
          <div className="jwp-hero-side-note">JAIPUR · UDAIPUR · RAJASTHAN</div>
        </header>

        <main>
          <section className="jwp-intro-strip">
            <div className="jwp-container jwp-intro-inner">
              <span className="jwp-intro-mark">✧</span>
              <p>Thoughtfully planned celebrations. <strong>Unforgettable beginnings.</strong></p>
              <span className="jwp-intro-location">A guide to Rajasthan’s wedding experts</span>
            </div>
          </section>

          <section className="jwp-section jwp-section-light" id="services">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">Every detail, beautifully considered</span>
                <h2>Our Wedding Planning <em>Services</em></h2>
                <p>From the first idea to the final celebration, find the expertise to bring your wedding vision to life.</p>
              </div>
              <div className="jwp-service-grid">
                {services.map((service) => (
                  <article className="jwp-service-card" key={service.title}>
                    <div className="jwp-service-image">
                      <img src={service.image} alt={service.alt} />
                      <span className="jwp-image-corner">✧</span>
                    </div>
                    <h3>{service.title}</h3>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="jwp-section jwp-planners-section" id="planners">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">A handpicked place to begin</span>
                <h2>Popular Wedding Planners <em>in Rajasthan</em></h2>
                <p>Explore wedding professionals ready to help create a celebration that feels like yours.</p>
              </div>
              <div className="jwp-planner-grid">
                {planners.map((planner, index) => (
                  <article className="jwp-planner-card" key={planner.name}>
                    <div className="jwp-planner-number">0{index + 1}</div>
                    {planner.featured && <span className="jwp-featured">Featured</span>}
                    <div className="jwp-planner-ornament">✧</div>
                    <h3>{planner.name}</h3>
                    <p>{planner.description}</p>
                    <a href={planner.href} className="jwp-card-link">View Details <span>→</span></a>
                    {planner.verified && <span className="jwp-verified">✓ Verified Planner</span>}
                  </article>
                ))}
              </div>
              <div className="jwp-centered-action">
                <Link href="/wedding-planner" className="jwp-button jwp-button-outline">View All Wedding Planners <span>→</span></Link>
              </div>
            </div>
          </section>

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

          <section className="jwp-section jwp-why-section">
            <div className="jwp-container jwp-why-layout">
              <div className="jwp-why-heading">
                <span className="jwp-eyebrow">A simpler way to plan</span>
                <h2>Why Choose <em>JaipurWeddingPlanner.in?</em></h2>
                <p>Finding the right wedding professional should feel as special as the celebration itself.</p>
              </div>
              <ul className="jwp-check-list">
                <li><span>✓</span> Local wedding experts</li>
                <li><span>✓</span> Customized wedding solutions</li>
                <li><span>✓</span> Multiple planner options</li>
                <li><span>✓</span> Save time & planning effort</li>
                <li><span>✓</span> Free consultation</li>
              </ul>
            </div>
          </section>

          <section className="jwp-section jwp-process-section">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">Your celebration starts here</span>
                <h2>How It <em>Works</em></h2>
              </div>
              <ol className="jwp-steps">
                <li><span>01</span><p>Submit your wedding requirement</p></li>
                <li><span>02</span><p>Get connected with suitable planners</p></li>
                <li><span>03</span><p>Discuss budget, vision & dates</p></li>
                <li><span>04</span><p>Finalize and enjoy your big day</p></li>
              </ol>
            </div>
          </section>

          <section className="jwp-section jwp-benefits-section">
            <div className="jwp-container">
              <div className="jwp-section-heading">
                <span className="jwp-eyebrow">For Rajasthan’s wedding professionals</span>
                <h2>Why Wedding Planners Choose <em>JaipurWeddingPlanner.in</em></h2>
                <p className="jwp-planner-intro">
                  We help Rajasthan-based wedding planners get discovered by couples who are
                  actively planning their wedding — not just browsing.
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
                <a href="/list-your-business" className="jwp-button jwp-button-gold">List Your Wedding Planning Business <span>↗</span></a>
                <p>✓ No commission • Direct leads • Rajasthan focused</p>
              </div>
            </div>
          </section>

          <section className="jwp-about-section">
            <div className="jwp-about-inner">
              <span className="jwp-eyebrow">A little about us</span>
              <h2>About <em>Us</em></h2>
              <p>
                JaipurWeddingPlanner.in connects couples with professional and
                verified wedding planners in Jaipur. From royal destination
                weddings to traditional Rajasthani ceremonies, we help you find
                the perfect experts for your big day.
              </p>
              <p className="jwp-about-highlight">
                Our mission is simple: make wedding planning easy, stress-free and
                unforgettable.
              </p>
              <span className="jwp-about-flourish">✧</span>
            </div>
          </section>

          {/* Existing WhatsApp inquiry form, kept available for when you want to enable it:
          <section className="jwp-section jwp-section-light" id="contact">
            <div className="jwp-container">
              <h2>Get in Touch</h2>
              <form className="jwp-form" onSubmit={handleWhatsAppSubmit}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="tel" name="phone" placeholder="Phone / WhatsApp" required />
                <input type="date" name="date" required />
                <input type="text" name="budget" placeholder="Approximate Budget" />
                <select name="type">
                  <option value="">Type of Wedding</option>
                  <option>Destination</option>
                  <option>Local</option>
                  <option>Royal</option>
                  <option>Traditional</option>
                </select>
                <button type="submit" className="jwp-button jwp-button-gold">Submit</button>
              </form>
            </div>
          </section>
          */}
        </main>
      </div>
    </>
  );
}
