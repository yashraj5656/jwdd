// pages/royal-wedding-jaipur.jsx
"use client";
import Head from "next/head";

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
    "@type": "LocalBusiness",
    "name": "JaipurWeddingPlanner.in",
    "image": "/path-to-logo.jpg", // Replace with actual logo path
    "description": "Expert wedding planners in Jaipur specializing in royal weddings, palace venues, and luxurious celebrations.",
    "url": "https://www.jaipurweddingplanner.in/royal-wedding-jaipur",
    "telephone": "+91-XXXXXXXXXX",
    "email": "info@jaipurweddingplanner.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "priceRange": "$$$", // Adjust based on typical pricing
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    } // Adjust if known
  };

  return (
    <>
      <Head>
        <title>Royal Wedding in Jaipur | Top Planners & Palaces | JaipurWeddingPlanner.in</title>
        <meta
          name="description"
          content="Plan your majestic royal wedding in Jaipur with expert planners. Experience palace venues, traditional ceremonies, and luxury services for a regal celebration. Free consultation available."
        />
        <meta name="keywords" content="royal wedding Jaipur, Jaipur royal wedding planners, palace weddings Jaipur, luxury weddings Rajasthan, royal theme weddings" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <header className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">Live Your Fairy-Tale in the Pink City</p>
          <h1>Royal Wedding in Jaipur</h1>
          <p>
            Embrace the grandeur of Rajasthan with a royal wedding in Jaipur. Our experienced planners transform historic palaces and forts into enchanting venues for your special day, complete with opulent décor, traditional rituals, and impeccable service.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Get Free Royal Wedding Consultation
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <h2>Why Choose Jaipur for Your Royal Wedding?</h2>
            <p>
              Jaipur's royal heritage makes it the ideal destination for a wedding fit for kings and queens. With its magnificent palaces, intricate architecture, and vibrant culture, your wedding will be a blend of timeless tradition and modern luxury.
            </p>
            <p className="highlight">
              Step into royalty – let Jaipur's palaces host your eternal love story.
            </p>
            <ul className="list">
              <li>✔ Majestic palaces and forts as venues</li>
              <li>✔ Traditional Rajasthani ceremonies and attire</li>
              <li>✔ Luxurious hospitality and royal feasts</li>
              <li>✔ Cultural performances like folk dances and music</li>
              <li>✔ Perfect for grand, themed royal celebrations</li>
            </ul>
          </div>
        </section>

        <section className="section light">
          <div className="container">
            <h2>Popular Royal Wedding Venues in Jaipur</h2>
            <div className="grid">
              <div className="service">🏰 Rambagh Palace – Iconic Taj property with royal gardens</div>
              <div className="service">🕌 Jai Mahal Palace – Heritage elegance with sprawling lawns</div>
              <div className="service">🌿 Samode Palace – Hilltop royalty with vintage charm</div>
              <div className="service">🏛️ Raj Palace – Opulent interiors and grand halls</div>
              <div className="service">🌅 Narain Niwas Palace – Boutique royal experience</div>
              <div className="service">🌳 ITC Rajputana – Modern luxury with royal Rajasthani vibes</div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Our Royal Wedding Planning Services in Jaipur</h2>
            <p>
              Connect with top planners who specialize in royal weddings. From venue booking to custom royal themes, we ensure your wedding exudes regal splendor.
            </p>
            <div className="grid">
              <div className="service">👑 Royal Theme Conceptualization</div>
              <div className="service">🎨 Opulent Décor & Floral Arrangements</div>
              <div className="service">🍽️ Royal Banquet & Cuisine Planning</div>
              <div className="service">🎶 Cultural Entertainment & Processions</div>
              <div className="service">📸 Royal Photography & Cinematography</div>
              <div className="service">🛎️ VIP Guest Management & Logistics</div>
            </div>
          </div>
        </section>

        <section className="section">
  <div className="container">
    <h2>Popular Wedding Planners in Jaipur</h2>

    <div className="cards">
      
      <div className="card">
        <span className="ribbon">Featured</span>
        <h3>Atelier Events</h3>
        <p>Luxury themes & creative setups with excellent reviews.</p>
        <a href="/Atelier-events" className="card-link">
          View Details →
        </a><br></br><br></br>
        <span className="badge verified"> Verified Planner</span>

      </div>

      <div className="card">
        <span className="ribbon">Featured</span>
        <h3>GoldenVows Events</h3>
        <p>Personalized planning with stunning décor.</p>
        <a href="/GoldenVows-events" className="card-link">
          View Details →
        </a>
      </div>

      <div className="card">
        {/*<span className="ribbon">Featured</span>*/}
        <h3>Velour Toli</h3>
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


        <section className="section">
          <div className="container">
            <h2>How to Plan Your Royal Wedding in Jaipur</h2>
            <ol className="steps">
              <li>Define your royal vision and budget</li>
              <li>Select a palace or fort venue</li>
              <li>Connect with our expert planners</li>
              <li>Customize themes, rituals, and entertainment</li>
              <li>Celebrate your royal union in style!</li>
            </ol>
          </div>
        </section>

        <section className="section light" id="contact">
          <div className="container">
            <h2>Get Started with Your Royal Wedding</h2>
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


    </>
  );
}