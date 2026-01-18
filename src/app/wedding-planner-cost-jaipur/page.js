// pages/wedding-planner-cost-jaipur.jsx
"use client";
import Head from "next/head";

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
      
      From: JaipurWeddingPlanner.in
      `;
      
        const whatsappNumber = "916378380535"; // ← your WhatsApp number (with country code)
      
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          message
        )}`;
      
        window.open(url, "_blank");
      };
      
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the average cost of a wedding planner in Jaipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average cost of hiring a wedding planner in Jaipur ranges from ₹50,000 to ₹5,00,000 or more, depending on the scale of the wedding, services included, and planner's experience. For basic services, expect ₹50,000-₹1,50,000; for full-service luxury weddings, it can go up to ₹3,00,000-₹10,00,000."
        }
      },
      {
        "@type": "Question",
        "name": "What factors affect wedding planner costs in Jaipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Factors include wedding size (guest count), venue type (local vs. destination), services required (partial vs. full planning), customization level, season (peak vs. off-peak), and the planner's reputation and experience."
        }
      },
      {
        "@type": "Question",
        "name": "Are there affordable wedding planner packages in Jaipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many planners offer budget-friendly packages starting from ₹50,000 for coordination services. Full packages for mid-range weddings are around ₹1,00,000-₹2,50,000, while premium royal or destination weddings can cost more."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get a free quote for wedding planning in Jaipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Submit your requirements through our form, including budget, guest count, and wedding type. We'll connect you with verified planners for personalized quotes."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Wedding Planner Cost in Jaipur | Packages & Pricing | JaipurWeddingPlanner.in</title>
        <meta
          name="description"
          content="Discover wedding planner costs in Jaipur, from budget packages to luxury services. Get average pricing, factors affecting costs, and free quotes from top planners."
        />
        <meta name="keywords" content="wedding planner cost Jaipur, Jaipur wedding planning prices, affordable wedding planners Jaipur, wedding packages Jaipur, wedding budget Jaipur" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <header className="heroo">
        <div className="hero-contenttt">
          <p className="hero-subtitleee">Transparent Pricing for Your Dream Wedding</p>
          <h1>Wedding Planner Cost in Jaipur</h1>
          <p>
            Planning a wedding in Jaipur? Understand the costs involved with professional wedding planners. From affordable packages to premium royal setups, get insights into pricing, factors, and how to budget effectively for your big day.
          </p>
          <div className="hero-actionsss">
          <a href="/#planners" className="btn-primaryyy">
              Explore Wedding Planners
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <h2>Understanding Wedding Planner Costs in Jaipur</h2>
            <p>
              Hiring a wedding planner in Jaipur can save you time and stress while ensuring a flawless event. Costs vary based on your needs, but expect transparent pricing from our verified partners.
            </p>
            <p className="highlight">
              Average costs range from ₹50,000 for basic coordination to ₹5,00,000+ for full-service luxury weddings.
            </p>
            <ul className="list">
              <li>✔ Basic Day-of Coordination: ₹50,000 - ₹1,00,000</li>
              <li>✔ Partial Planning: ₹1,00,000 - ₹2,00,000</li>
              <li>✔ Full-Service Planning: ₹2,00,000 - ₹5,00,000</li>
              <li>✔ Destination/Royal Weddings: ₹3,00,000 - ₹10,00,000+</li>
            </ul>
          </div>
        </section>

        <section className="section light">
          <div className="container">
            <h2>Factors Affecting Wedding Planner Prices in Jaipur</h2>
            <div className="grid">
              <div className="service">👥 Guest Count: More guests mean higher coordination costs</div>
              <div className="service">🏰 Venue Type: Palaces and forts add premium fees</div>
              <div className="service">📅 Season: Peak wedding season (Oct-Feb) increases prices</div>
              <div className="service">🎨 Customization: Themed décor and unique elements raise costs</div>
              <div className="service">🛠️ Services: Full vs. partial planning impacts the quote</div>
              <div className="service">⭐ Experience: Top-rated planners charge more for expertise</div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Popular Wedding Planner Packages in Jaipur</h2>
            <p>
              Explore common packages offered by Jaipur's top planners. These are approximate and can be customized.
            </p>
            <div className="cards">
              <div className="card">
                <h3>Budget Package</h3>
                <p>₹50,000 - ₹1,50,000: Basic planning, vendor coordination, and day-of management.</p>
              </div>
              <div className="card">
                <h3>Standard Package</h3>
                <p>₹1,50,000 - ₹3,00,000: Full planning including décor, catering, and entertainment.</p>
              </div>
              <div className="card">
                <h3>Premium Package</h3>
                <p>₹3,00,000 - ₹6,00,000: Luxury services with custom themes and VIP handling.</p>
              </div>
              <div className="card">
                <h3>Royal/Destination Package</h3>
                <p>₹5,00,000+: Palace venues, cultural shows, and international-level execution.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section light">
          <div className="container">
            <h2>Top Wedding Planners in Jaipur with Cost Insights</h2>
            <div className="cards">
              <div className="card">
                <h3>Atelier Events</h3>
                <p>Affordable luxury starting at ₹1,00,000 for mid-scale weddings.</p>
              </div>
              <div className="card">
                <h3>GoldenVows Events</h3>
                <p>Personalized packages from ₹1,50,000 with stunning value.</p>
              </div>
              <div className="card">
                <h3>Velour Toli</h3>
                <p>Full-service from ₹2,00,000, great for budget-conscious couples.</p>
              </div>
              <div className="card">
                <h3>Wedding Vision</h3>
                <p>Bespoke options starting ₹2,50,000 with high ROI.</p>
              </div>
              <div className="card">
                <h3>Dot&Dot Events</h3>
                <p>Detail-focused plans from ₹1,20,000 upwards.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>How to Budget for Your Wedding Planner in Jaipur</h2>
            <ol className="steps">
              <li>Determine your overall wedding budget (typically 10-15% for planning)</li>
              <li>List must-have services and nice-to-haves</li>
              <li>Get quotes from multiple planners via our platform</li>
              <li>Compare packages and negotiate for best value</li>
              <li>Book early to lock in prices and availability</li>
            </ol>
          </div>
        </section>


      </main>


    </>
  );
}