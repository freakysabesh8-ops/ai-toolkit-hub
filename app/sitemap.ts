import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://your-domain.com",
      lastModified: new Date(),
    },
    {
      url: "https://your-domain.com/blog/best-ai-tools-2026",
      lastModified: new Date(),
    },
    {
      url: "https://your-domain.com/blog/ai-tools-for-students",
      lastModified: new Date(),
    },
    {
      url: "https://your-domain.com/blog/ai-tools-for-creators",
      lastModified: new Date(),
    },
  ];
}