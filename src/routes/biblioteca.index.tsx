import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Section, CTASection, Breadcrumb } from "@/components/site/Primitives";
import { LIBRARY } from "@/content/library";

const TYPES = ["Todos", "Artigo", "Guia", "Template", "Checklist", "Pesquisa", "Calculadora", "Whitepaper"] as const;

export const Route = createFileRoute("/biblioteca/")({
  component: BibliotecaIndex,
  head: () => ({
    meta: [
      { title: "Biblioteca — Império de Ideias" },
      { name: "description", content: "Guias, artigos, templates, checklists, pesquisas e calculadoras da Império de Ideias. Conteúdo prático para líderes de marketing." },
      { property: "og:title", content: "Biblioteca — Império de Ideias" },
      { property: "og:description", content: "Conteúdo prático para líderes de marketing." },
      { property: "og:url", content: "/biblioteca" },
    ],
    links: [{ rel: "canonical", href: "/biblioteca" }],
  }),
});

function BibliotecaIndex() {
  const [filter, setFilter] = useState<(typeof TYPES)[number]>("Todos");
  const items = filter === "Todos" ? LIBRARY : LIBRARY.filter((i) => i.type === filter);

  return (
    <>
      <section className="pt-16 lg:pt-24 pb-8">
        <div className="container-imperio">
          <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Biblioteca" }]} />
          <span className="eyebrow">Biblioteca</span>
          <h1 className="heading-hero mt-6 max-w-5xl">Conteúdo <span className="text-primary">prático</span> para quem lidera marketing.</h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Guias, artigos, templates, checklists, pesquisas e calculadoras. Construídos para uso — não para vaidade.
          </p>
        </div>
      </section>

      <Section>
        <div className="flex flex-wrap gap-2 mb-10">
          {TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === t ? "border-primary text-primary" : "border-border text-foreground/80 hover:border-primary/60"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <Link
              key={i.slug}
              to="/biblioteca/$slug"
              params={{ slug: i.slug }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface-1 hover:border-primary/50 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={i.image}
                  alt={i.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs uppercase tracking-widest text-primary">{i.type}</span>
                <h3 className="mt-3 text-lg font-bold leading-snug">{i.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{i.summary}</p>
                <span className="mt-auto pt-6 inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                  Ler <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection title="Quer receber conteúdos exclusivos da Império?" subtitle="Assine nossa newsletter e receba pesquisas e materiais antes de todo mundo." />
    </>
  );
}
