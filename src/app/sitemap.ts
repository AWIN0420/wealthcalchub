import type { MetadataRoute } from "next";

const siteUrl = "https://wealthcalchub.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
const routes = [
  "",
  "/compound-interest-calculator",
  "/fire-calculator",
  "/dividend-income-calculator",
  "/privacy-policy",
  "/terms",
];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}