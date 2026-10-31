// app/robots.js
export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/static/', '/admin/'], // Keep private stuff out
      },
      sitemap: 'https://jaipurweddingplanner.in/sitemap.xml',
      host: 'https://jaipurweddingplanner.in',
    };
  }