import './globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ================= VIEWPORT (Separate from Metadata) ================= */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#faf7f2',
};

/* ================= SEO METADATA ================= */
export const metadata = {
  metadataBase: new URL('https://jaipurweddingplanner.in'),
  title: {
    default: 'Jaipur Wedding Planner | Book Top Wedding Planners in Jaipur',
    template: '%s | JaipurWeddingPlanner.in'
  },
  description: 'Find and compare the best wedding planners in Jaipur. Get free consultation, quotes, and plan your dream royal or destination wedding with trusted experts.',
  keywords: ['Jaipur Wedding Planner', 'Wedding Planners in Jaipur', 'Best Wedding Planner Jaipur', 'Destination Wedding Jaipur', 'Royal Wedding Planner Jaipur', 'Luxury Wedding Planner Jaipur'],
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
  // ⚠️ IMPORTANT: Do NOT set a global canonical here.
  // If you do, every page (including your planner profiles) will tell Google
  // "I am a duplicate of the homepage", which will de-index your profiles.
  // Set canonical PER PAGE instead (see section 2).
  openGraph: {
    title: 'Top Wedding Planners in Jaipur | Free Consultation',
    description: 'Compare verified wedding planners in Jaipur for royal & destination weddings. Get free consultation and quotes.',
    url: 'https://jaipurweddingplanner.in',
    siteName: 'JaipurWeddingPlanner',
    images: [{ url: '/jwp.png', width: 1200, height: 630, alt: 'Royal Wedding Planner in Jaipur' }],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaipur Wedding Planner | Royal & Destination Weddings',
    description: 'Book top wedding planners in Jaipur for luxury, royal and destination weddings.',
    images: ['/jwp.png']
  },
  category: 'Wedding Services'
};

/* ================= ROOT LAYOUT ================= */
export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        
        {/* JSON-LD Schema: Sanitized for XSS protection [citation:8] */}
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
              "description": "Top wedding planners in Jaipur specializing in royal and destination weddings.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jaipur",
                "addressRegion": "Rajasthan",
                "addressCountry": "IN"
              },
              "areaServed": ["Jaipur", "Udaipur", "Rajasthan"],
              "priceRange": "₹₹₹"
            }).replace(/</g, '\\u003c') // <-- XSS Protection
          }}
        />
      </body>
    </html>
  );
}