import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.url) return []; // sem domínio definitivo, sem sitemap
  return [
    { url: siteConfig.url, changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({ url: `${siteConfig.url}/projetos/${p.slug}`, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
