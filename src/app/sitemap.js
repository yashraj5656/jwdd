// app/sitemap.js
import { connectDB } from "@/lib/mongodb";
import Listing from "@/models/Listing";

export default async function sitemap() {
  const baseUrl = 'https://jaipurweddingplanner.in';

  // 1. Static Pages
  const routes = ['', '/wedding-planner', '/list-your-business', '/about'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dynamic Planner Profiles (The SEO Goldmine)
  try {
    await connectDB();
    const planners = await Listing.find({ status: 'paid' }).select('slug updatedAt').lean();

    const plannerUrls = planners.map((planner) => ({
      url: `${baseUrl}/planners/${planner.slug}`,
      lastModified: planner.updatedAt || new Date(),
      changeFrequency: 'monthly',
      priority: 0.9, // High priority because these are your money pages
    }));

    return [...routes, ...plannerUrls];
  } catch (error) {
    console.error("Sitemap generation error:", error);
    return routes; // Fallback to static pages if DB fails
  }
}