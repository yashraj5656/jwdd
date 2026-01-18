"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-container">
        {/* Logo */}
        <Link href="/" className="logo">
          Jaipur<span>WeddingPlanner</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-links">
        <Link href="/wedding-planner">Planners</Link>
          <Link href="/list-your-business">List Your Business</Link>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-and-conditions">Terms</Link>
        </nav>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/wedding-planner" onClick={() => setOpen(false)}>Planners</Link>
        <Link href="/list-your-business" onClick={() => setOpen(false)}>
          List Your Business
        </Link>
        <Link href="/about-us" onClick={() => setOpen(false)}>About</Link>
        <Link href="/how-it-works" onClick={() => setOpen(false)}>How It Works</Link>
        <Link href="/privacy-policy" onClick={() => setOpen(false)}>Privacy Policy</Link>
        <Link href="/terms-and-conditions" onClick={() => setOpen(false)}>
          Terms & Conditions
        </Link>
      </div>
    </header>
  );
}
