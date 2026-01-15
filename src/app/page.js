// pages/index.jsx
"use client";
import Head from "next/head";



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
  
    const whatsappNumber = "916378380535"; // ← your WhatsApp number (with country code)
  
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  
    window.open(url, "_blank");
  };
  
  return (
    <>
      <Head>
        <title>Top Wedding Planners in Jaipur | JaipurWeddingPlanner.in</title>
        <meta
          name="description"
          content="Plan your dream wedding with trusted wedding planners in Jaipur. Free consultation available."
        />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WeddingService",
      "name": "Jaipur Wedding Planner",
      "url": "https://jaipurweddingplanner.in",
      "logo": "https://jaipurweddingplanner.in/logo.png",
      "image": "https://jaipurweddingplanner.in/hero.jpg",
      "description":
        "Top wedding planners in Jaipur offering royal destination weddings, décor, catering, photography and full wedding management.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      },
      "areaServed": ["Jaipur", "Udaipur", "Rajasthan"],
      "priceRange": "₹₹₹",
      "sameAs": [
        "https://www.instagram.com/jaipurweddingplanner",
        "https://www.facebook.com/jaipurweddingplanner"
      ]
    })
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a wedding planner cost in Jaipur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Wedding planner costs in Jaipur typically range from ₹1.5 lakh to ₹10+ lakh depending on services, scale, and venue."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer royal destination weddings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, we specialize in royal destination weddings at palaces and luxury venues across Jaipur and Udaipur."
          }
        }
      ]
    })
  }}
/>


      </Head>

      <header className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">Your Royal Dream Wedding Awaits</p>
          <h1>Top Wedding Planners in Jaipur</h1>
          <p>
            Plan your dream wedding with trusted & experienced wedding planners
            in Jaipur. Decoration, catering, photography & full management — all
            in one place.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Get Free Wedding Consultation
            </a>
          </div>
        </div>
      </header>

      <main>


      <section className="section light">
  <div className="container">
    <h2>Our Wedding Planning Services</h2>

    <div className="grid">
      <div className="service">
        <img src="/services/planning.jpg" alt="Complete Wedding Planning" />
        <h3>Complete Wedding Planning</h3>
      </div>

      <div className="service">
        <img src="/services/decoration.jpg" alt="Wedding Decoration & Theme Design" />
        <h3>Decoration & Theme Design</h3>
      </div>

      <div className="service">
        <img src="/services/catering.jpg" alt="Wedding Catering & Menu Planning" />
        <h3>Catering & Menu Planning</h3>
      </div>

      <div className="service">
        <img src="/services/entertainment.jpg" alt="Wedding Entertainment Management" />
        <h3>Entertainment Management</h3>
      </div>

      <div className="service">
        <img src="/services/photography.jpg" alt="Wedding Photography & Videography" />
        <h3>Photography & Videography</h3>
      </div>

      <div className="service">
        <img src="/services/destination.jpg" alt="Destination Weddings in Jaipur" />
        <h3>Destination Weddings in Jaipur</h3>
      </div>
    </div>
  </div>
</section>


<section className="section">
  <div className="container">
    <h2>Popular Wedding Planners in Jaipur</h2>

    <div className="cards">
      
      <div className="card">
        
        <span className="ribbon">Featured</span>
        <h3>Fiestro Events</h3>
        <p>Luxury themes & creative setups with excellent reviews.</p>
        <a href="/fiestro-events" className="card-link">
          View Details →
        </a><br></br><br></br>
        <span className="badge verified"> Verified Planner</span>

      </div>

      <div className="card">
        <span className="ribbon">Featured</span>
        <h3>Shaandaar Events</h3>
        <p>Personalized planning with stunning décor.</p>
        <a href="/shaandaar-events" className="card-link">
          View Details →
        </a>
      </div>

      <div className="card">
        {/*<span className="ribbon">Featured</span>*/}
        <h3>The Wedding Toli</h3>
        <p>Highly rated full-service wedding planner.</p>
       {/* <a href="/planners/the-wedding-toli" className="card-link">
          View Details →
        </a>*/}
      </div>

      <div className="card">
       {/*<span className="ribbon">Featured</span>*/}
        <h3>Wedding Vision</h3>
        <p>Bespoke weddings with strong customer satisfaction.</p>
       {/* <a href="/planners/wedding-vision" className="card-link">
          View Details →
        </a>*/}
      </div>

      <div className="card">
       {/*<span className="ribbon">Featured</span>*/}
        <h3>Dot&Dot Events</h3>
        <p>Detail-focused planning with creative execution.</p>
        {/*<a href="/planners/dot-and-dot-events" className="card-link">
          View Details →
        </a>*/}
      </div>
    </div>
  </div>
</section>





<section className="section light">
  <div className="container">
    <h2>What Couples Say About Us</h2>

    <div className="cards testimonials">
      <div className="card testimonial-card">
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <p>
          “Shaandaar Events managed our Jaipur wedding beautifully. Everything
          was perfectly coordinated from décor to catering.”
        </p>
        <strong>— Riya & Aman</strong>
      </div>

      <div className="card testimonial-card">
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <p>
          “Fiestro Events gave us a royal destination wedding experience. The
          décor and planning exceeded our expectations.”
        </p>
        <strong>— Neha & Karan</strong>
      </div>

      <div className="card testimonial-card">
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <p>
          “Thanks to JaipurWeddingPlanner.in, we found the perfect planner
          within our budget. Highly recommended!”
        </p>
        <strong>— Pooja & Rohit</strong>
      </div>

      <div className="card testimonial-card">
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <p>
          “From first consultation to the wedding day, everything was smooth
          and stress-free. Amazing service!”
        </p>
        <strong>— Anjali & Suresh</strong>
      </div>
    </div>
  </div>
</section>





        <section className="section light">
          <div className="container">
            <h2>Why Choose JaipurWeddingPlanner.in?</h2>
            <ul className="list">
              <li>✔ Local Jaipur wedding experts</li>
              <li>✔ Customized wedding solutions</li>
              <li>✔ Multiple planner options</li>
              <li>✔ Save time & planning effort</li>
              <li>✔ Free consultation</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>How It Works</h2>
            <ol className="steps">
              <li>Submit your wedding requirement</li>
              <li>Get connected with suitable planners</li>
              <li>Discuss budget, vision & dates</li>
              <li>Finalize and enjoy your big day</li>
            </ol>
          </div>
        </section>




        <section className="section planner-benefits">
  <div className="container">
    <h2>Why Wedding Planners Choose JaipurWeddingPlanner.in</h2>
    <p className="planner-intro">
      We help Jaipur-based wedding planners get discovered by couples who are
      actively planning their wedding — not just browsing.
    </p>

    <div className="benefit-grid">
      <div className="benefit-card">
        <span className="benefit-icon">🎯</span>
        <h3>High-Intent Leads</h3>
        <p>
          Couples visiting our platform are already searching for wedding
          planners in Jaipur, meaning better quality inquiries and higher
          conversions.
        </p>
      </div>

      <div className="benefit-card">
        <span className="benefit-icon">📍</span>
        <h3>Local Jaipur Visibility</h3>
        <p>
          Rank higher for Jaipur-specific searches like “Wedding Planner in
          Jaipur” without spending heavily on ads.
        </p>
      </div>

      <div className="benefit-card">
        <span className="benefit-icon">✅</span>
        <h3>Verified Planner Badge</h3>
        <p>
          Stand out with a verified profile that builds instant trust with
          couples comparing multiple planners.
        </p>
      </div>

      <div className="benefit-card">
        <span className="benefit-icon">📸</span>
        <h3>Showcase Your Work</h3>
        <p>
          Display your portfolio, services, wedding photos, and testimonials —
          all in one place.
        </p>
      </div>

      <div className="benefit-card">
        <span className="benefit-icon">📞</span>
        <h3>Direct Inquiries</h3>
        <p>
          Receive direct WhatsApp and call inquiries — no middlemen or
          commissions.
        </p>
      </div>

      <div className="benefit-card">
        <span className="benefit-icon">💰</span>
        <h3>Affordable Listing Plans</h3>
        <p>
          One simple annual fee. No commissions per booking. No hidden charges.
        </p>
      </div>
    </div>

    <div className="planner-cta">
      <a href="/list-your-business" className="btn-primary">
        List Your Wedding Planning Business
      </a>
      <p className="cta-note">
        Limited slots available for Jaipur planners
      </p>
    </div>
  </div>
</section>






        <section className="section">
          <div className="container">
            <h2>About Us</h2>
            <p>
              JaipurWeddingPlanner.in connects couples with professional and
              verified wedding planners in Jaipur. From royal destination
              weddings to traditional Rajasthani ceremonies, we help you find
              the perfect experts for your big day.
            </p>
            <p className="highlight">
              Our mission is simple: make wedding planning easy, stress-free and
              unforgettable.
            </p>
          </div>
        </section>

        <section className="section light" id="contact">
          <div className="container">
            <h2>Get in Touch</h2>
            <form className="form" onSubmit={handleWhatsAppSubmit}>
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

  <button type="submit" className="btn-primary">
    Submit
  </button>
</form>

          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>📍 Jaipur, Rajasthan</p>

          <p className="copy">
            © 2026 JaipurWeddingPlanner.in — Weddings made memorable.
          </p>
          <nav className="footer-nav">
            <ul>
              <li><a href="/destination-wedding-jaipur">Destination Wedding in Jaipur</a></li>
              <li><a href="/royal-wedding-jaipur">Royal Wedding in Jaipur</a></li>
              <li><a href="/wedding-planner-cost-jaipur">Wedding Planner Cost in Jaipur</a></li>
              <li><a href="/wedding-planner-cost-udaipur">Wedding Planner Cost in Udaipur</a></li>
              <li><a href="/about-us">About Us</a></li>
<li><a href="/how-it-works">How It Works</a></li>
<li><a href="/privacy-policy">Privacy Policy</a></li>
<li><a href="/terms-and-conditions">Terms & Conditions</a></li>

            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}