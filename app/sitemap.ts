import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const blogEntries = blogPosts.map((post) => ({
    url: `https://yogeshsanodiya.dev/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://yogeshsanodiya.dev",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://yogeshsanodiya.dev/projects",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://yogeshsanodiya.dev/blog",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
