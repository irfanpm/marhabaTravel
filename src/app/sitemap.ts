import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/contact"].map((path) => ({ url: `${siteUrl}${path}` }));
}
