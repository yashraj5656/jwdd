import './globals.css';
import Navbar from "@/components/Navbar";

/* ================= SEO METADATA ================= */

export const metadata = {
  metadataBase: new URL('https://jaipurweddingplanner.in'),

  title: {
    default: 'Jaipur Wedding Planner | Book Top Wedding Planners in Jaipur',
    template: '%s | JaipurWeddingPlanner.in'
  },

  description:
    'Find and compare the best wedding planners in Jaipur. Get free consultation, quotes, and plan your dream royal or destination wedding with trusted experts.',

  keywords: [
    'Jaipur Wedding Planner',
    'Wedding Planners in Jaipur',
    'Best Wedding Planner Jaipur',
    'Destination Wedding Jaipur',
    'Royal Wedding Planner Jaipur',
    'Luxury Wedding Planner Jaipur'
  ],

  authors: [{ name: 'JaipurWeddingPlanner.in', url: 'https://jaipurweddingplanner.in' }],
  creator: 'JaipurWeddingPlanner.in',
  publisher: 'JaipurWeddingPlanner.in',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },

  alternates: {
    canonical: 'https://jaipurweddingplanner.in'
  },

  openGraph: {
    title: 'Top Wedding Planners in Jaipur | Free Consultation',
    description:
      'Compare verified wedding planners in Jaipur for royal & destination weddings. Get free consultation and quotes.',
    url: 'https://jaipurweddingplanner.in',
    siteName: 'JaipurWeddingPlanner',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Royal Wedding Planner in Jaipur'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Jaipur Wedding Planner | Royal & Destination Weddings',
    description:
      'Book top wedding planners in Jaipur for luxury, royal and destination weddings.',
    images: ['/hero.jpg']
  },

  category: 'Wedding Services'
};

/* ================= ROOT LAYOUT ================= */

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        {/* Performance & SEO Enhancements */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" />

        {/* Local Business Schema (Site-wide) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WeddingService",
              "name": "Jaipur Wedding Planner",
              "url": "https://jaipurweddingplanner.in",
              "logo": "https://jaipurweddingplanner.in/logo.png",
              "image": "https://jaipurweddingplanner.in/og-image.jpg",
              "description":
                "Top wedding planners in Jaipur specializing in royal and destination weddings.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jaipur",
                "addressRegion": "Rajasthan",
                "addressCountry": "IN"
              },
              "areaServed": ["Jaipur", "Udaipur", "Rajasthan"],
              "priceRange": "₹₹₹"
            })
          }}
        />
      </head>

      <body>
      <Navbar />
        {/* Main Content */}
        <main id="main-content">{children}</main>      <footer className="footerr">
        <div className="containerr">
          <p>📍 Jaipur, Rajasthan</p>

          <p className="copyy">
            © 2026 JaipurWeddingPlanner.in — Weddings made memorable.
          </p>
          <nav className="footer-navl">
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
      </body>
    </html>
  );
}
