import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SERVICES } from "@/content/services";
import { SEGMENTS } from "@/content/segments";
import { CASES } from "@/content/cases";
import { LIBRARY } from "@/content/library";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/sobre", changefreq: "monthly", priority: "0.8" },
          { path: "/equipe", changefreq: "monthly", priority: "0.7" },
          { path: "/metodologia", changefreq: "monthly", priority: "0.8" },
          { path: "/servicos", changefreq: "weekly", priority: "0.9" },
          { path: "/segmentos", changefreq: "monthly", priority: "0.8" },
          { path: "/cases", changefreq: "weekly", priority: "0.8" },
          { path: "/biblioteca", changefreq: "weekly", priority: "0.7" },
          { path: "/contato", changefreq: "monthly", priority: "0.7" },
          ...SERVICES.map((s) => ({ path: `/servicos/${s.slug}`, changefreq: "monthly" as const, priority: "0.8" })),
          ...SEGMENTS.map((s) => ({ path: `/segmentos/${s.slug}`, changefreq: "monthly" as const, priority: "0.7" })),
          ...CASES.map((c) => ({ path: `/cases/${c.slug}`, changefreq: "monthly" as const, priority: "0.7" })),
          ...LIBRARY.map((l) => ({ path: `/biblioteca/${l.slug}`, changefreq: "monthly" as const, priority: "0.6" })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
