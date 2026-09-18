import { MetadataRoute } from "next";

// Required for Next.js static export (output: 'export') mode
export const dynamic = "force-static";

const BASE_URL = "https://www.datasciencelab.es";

// Only include top-level navigational pages.
// Exclude: /about/team/, /research/projects/*, /research/publications/, /research/partners/
// to avoid indexing individual members and project detail pages.
const staticRoutes = [
  "/",
  "/about/",
  "/blog/",
  "/collaboration/",
  "/consulting/",
  "/consulting/clients/",
  "/contact/",
  "/education/",
  "/education/conecta/",
  "/education/dslab-ti/",
  "/education/practicum/",
  "/education/training/",
  "/research/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: BASE_URL + route,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1.0 : 0.7,
  }));
}
