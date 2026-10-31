"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const links = [
    { href: "/wedding-planner", label: "Planners" },
    { href: "/about-us", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/privacy-policy", label: "Privacy" },
    { href: "/terms-and-conditions", label: "Terms" },
    { href: "/list-your-business", label: "List Your Business", featured: true },
  ];

  return (
    <header className="jwp-header">
      <div className="jwp-nav-shell">
        <div className="jwp-nav-container">
          <Link href="/" className="jwp-logo" onClick={closeMenu} aria-label="Jaipur Wedding Planner home">
            <span className="jwp-logo-symbol" aria-hidden="true">✧</span>
            <span className="jwp-logo-copy">
              <span className="jwp-logo-main">Jaipur</span>
              <span className="jwp-logo-sub">Wedding Planner</span>
            </span>
          </Link>

          <nav className="jwp-desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={link.featured ? "jwp-nav-cta" : "jwp-nav-link"}
              >
                {link.label}
                {link.featured && <span aria-hidden="true">↗</span>}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className={`jwp-menu-toggle ${open ? "is-open" : ""}`}
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="jwp-mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="jwp-mobile-menu"
        className={`jwp-mobile-menu ${open ? "is-visible" : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          <Link href="/" onClick={closeMenu}>Home</Link>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={link.featured ? "jwp-mobile-cta" : ""}
            >
              {link.label}
              {link.featured && <span aria-hidden="true">↗</span>}
            </Link>
          ))}
          <div className="jwp-mobile-note">Thoughtfully planned celebrations. Unforgettable beginnings.</div>
        </nav>
      </div>
    </header>
  );
}
