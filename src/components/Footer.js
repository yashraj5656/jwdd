import "./Footer.css";

export default function Footer() {
const footerLinks = [
  { href: "/destination-wedding-jaipur", label: "Destination Wedding in Jaipur" },
  { href: "/royal-wedding-jaipur", label: "Royal Wedding in Jaipur" },
  { href: "/wedding-planner-cost-jaipur", label: "Wedding Planner Cost in Jaipur" },
  { href: "/wedding-planner-cost-udaipur", label: "Wedding Planner Cost in Udaipur" },
  { href: "/about-us", label: "About Us" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];


  return (
    <footer className="jwp-footer">
      <div className="jwp-footer-inner">
        <div className="jwp-footer-top">
          <div className="jwp-footer-brand">
            <span className="jwp-footer-eyebrow">JAIPUR WEDDING PLANNER</span>
            <h2>Celebrations crafted<br />with meaning.</h2>
            <p className="jwp-footer-location">
              <span className="jwp-footer-location-icon" aria-hidden="true">⌖</span>
              Jaipur, Rajasthan
            </p>
          </div>

          <div className="jwp-footer-links-wrap">
            <span className="jwp-footer-eyebrow">EXPLORE</span>
            <nav className="jwp-footer-nav" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
            </nav>
          </div>
        </div>

        <div className="jwp-footer-bottom">
          <p className="jwp-footer-copy">
            © {new Date().getFullYear()} JaipurWeddingPlanner.in — Weddings made memorable.
          </p>
          <a className="jwp-footer-back-top" href="#top" aria-label="Back to top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
