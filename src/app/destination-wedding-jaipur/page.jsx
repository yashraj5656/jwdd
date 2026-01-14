// pages/destination-wedding-jaipur.jsx
"use client";
import Head from "next/head";

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
        <title>Destination Wedding in Jaipur | Top Planners & Venues | JaipurWeddingPlanner.in</title>
        <meta
          name="description"
          content="Plan your perfect destination wedding in Jaipur with expert planners. Discover royal venues, themes, and packages for an unforgettable experience. Free consultation available."
        />
        <meta name="keywords" content="destination wedding Jaipur, Jaipur destination wedding planners, royal weddings Jaipur, wedding venues Jaipur" />
      </Head>

      <header className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">Experience Royalty on Your Special Day</p>
          <h1>Destination Wedding in Jaipur</h1>
          <p>
            Turn your dream wedding into a royal affair in the Pink City. With stunning palaces, forts, and heritage sites, Jaipur offers the perfect backdrop for your destination wedding. Our trusted planners handle everything from venue selection to décor and entertainment.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Get Free Destination Wedding Consultation
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <h2>Why Choose Jaipur for Your Destination Wedding?</h2>
            <p>
              Jaipur, known as the Pink City, is a top choice for destination weddings in India. Its rich history, vibrant culture, and majestic architecture provide a fairy-tale setting. From opulent palaces to scenic forts, Jaipur blends tradition with luxury for an unforgettable celebration.
            </p>
            <p className="highlight">
              Imagine exchanging vows amidst royal Rajasthani heritage – that's the magic of a destination wedding in Jaipur.
            </p>
            <ul className="list">
              <li>✔ Iconic venues like Amber Fort and City Palace</li>
              <li>✔ Authentic Rajasthani cuisine and folk entertainment</li>
              <li>✔ Easy accessibility with international airport</li>
              <li>✔ Affordable luxury compared to other destinations</li>
              <li>✔ Perfect for theme weddings: Royal, Vintage, or Bohemian</li>
            </ul>
          </div>
        </section>

        <section className="section light">
          <div className="container">
            <h2>Popular Venues for Destination Weddings in Jaipur</h2>
            <div className="grid">
              <div className="service">🏰 Amber Fort – Historic grandeur with panoramic views</div>
              <div className="service">🕌 City Palace – Royal elegance in the heart of Jaipur</div>
              <div className="service">🌿 Rambagh Palace – Luxurious Taj hotel with gardens</div>
              <div className="service">🏛️ Jai Mahal Palace – Heritage property with modern amenities</div>
              <div className="service">🌅 Samode Palace – Serene hilltop location for intimate weddings</div>
              <div className="service">🌳 Fairmont Jaipur – Contemporary luxury with Rajasthani flair</div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Our Destination Wedding Planning Services in Jaipur</h2>
            <p>
              We connect you with experienced planners specializing in destination weddings. From initial concept to flawless execution, our partners ensure every detail is perfect.
            </p>
            <div className="grid">
              <div className="service">💒 Venue Selection & Booking</div>
              <div className="service">🎨 Custom Theme & Décor</div>
              <div className="service">🍽️ Multi-Cuisine Catering</div>
              <div className="service">🎉 Entertainment & Cultural Shows</div>
              <div className="service">📸 Professional Photography</div>
              <div className="service">🛎️ Guest Management & Logistics</div>
            </div>
          </div>
        </section>

        <section className="section light">
          <div className="container">
            <h2>Top Destination Wedding Planners in Jaipur</h2>
            <div className="cards">
              <div className="card">
                <h3>Fiestro Events</h3>
                <p>Experts in luxury destination setups with creative themes.</p>
              </div>
              <div className="card">
                <h3>Shaandaar Events</h3>
                <p>Specializing in royal palace weddings and personalized experiences.</p>
              </div>
              <div className="card">
                <h3>The Wedding Toli</h3>
                <p>Full-service planners for seamless destination events.</p>
              </div>
              <div className="card">
                <h3>Wedding Vision</h3>
                <p>Bespoke destination weddings with high client satisfaction.</p>
              </div>
              <div className="card">
                <h3>Dot&Dot Events</h3>
                <p>Detail-oriented for flawless Jaipur destination celebrations.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>How to Plan Your Destination Wedding in Jaipur</h2>
            <ol className="steps">
              <li>Choose your wedding date and guest list</li>
              <li>Select a venue that matches your vision</li>
              <li>Connect with our planners for customized packages</li>
              <li>Finalize themes, menu, and entertainment</li>
              <li>Enjoy your royal destination wedding!</li>
            </ol>
          </div>
        </section>

        <section className="section light" id="contact">
          <div className="container">
            <h2>Get Started with Your Jaipur Destination Wedding</h2>
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
            © 2026 JaipurWeddingPlanner.in — Destination Weddings Made Magical.
          </p>
        </div>
      </footer>
    </>
  );
}