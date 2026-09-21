import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.laxmanbhagat.com.np",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}