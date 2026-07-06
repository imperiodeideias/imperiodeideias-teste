import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section, CTASection, Breadcrumb } from "@/components/site/Primitives";
import { CASES } from "@/content/cases";

export const Route = createFileRoute("/cases/")({
  component: CasesIndex,
  head: () => ({
    meta: [
      { title: "Cases — Império de Ideias" },
      { name: "description", content: "Estudos de caso da Império: contexto, problema, estratégia, execução, resultados e aprendizados." },
      { property: "og:title", content: "Cases — Império de Ideias" },
      { property: "og:description", content: "Projetos que viraram resultado." },
      { property: "og:url", content: "/cases" },
    ],
    links: [{ rel: "canonical", href: "/cases" }],
  }),
});

function CasesIndex() {
  return (
    <>
      <section className="pt-16 lg:pt-24 pb-8">
        <div className="container-imperio">
          <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Cases" }]} />
          <span className="eyebrow">Cases</span>
          <h1 className="heading-hero mt-6 max-w-5xl">Projetos que viraram <span className="text-primary">resultado</span>.</h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Estudos de caso completos: contexto, problema, estratégia, execução, resultados e aprendizados.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c) => (
            <Link
              key={c.slug}
              to="/cases/$slug"
              params={{ slug: c.slug }}
              className="group relative overflow-hidden rounded-3xl p-8 min-h-[280px] flex flex-col justify-between transition-transform hover:-translate-y-1"
              style={{
                background:
                  c.color === "yellow"
                    ? "var(--color-brand-yellow)"
                    : c.color === "orange"
                      ? "var(--color-brand-orange)"
                      : c.color === "cream"
                        ? "var(--color-brand-cream)"
                        : "var(--color-surface-2)",
                color: c.color === "dark" ? "var(--color-foreground)" : "#111",
              }}
            >
              <div>
                <span className="text-xs uppercase tracking-widest opacity-70">{c.sector}</span>
                <h3 className="mt-4 text-2xl font-extrabold leading-tight">{c.headline}</h3>
                <p className="mt-3 text-sm opacity-80">{c.client}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all">
                Ver estudo <ArrowUpRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
