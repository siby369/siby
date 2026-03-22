import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"
import { getDocsByCategory } from "@/features/doc/data/documents"

export default function sitemap(): MetadataRoute.Sitemap {
  const components = getDocsByCategory("components").map((post) => ({
    url: `${SITE_INFO.url}/components/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }))

  const routes = ["", "/components"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...components]
}
