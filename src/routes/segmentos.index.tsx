import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section, CTASection, Breadcrumb } from "@/components/site/Primitives";
import { SEGMENTS } from "@/content/segments";

export const Route = createFileRoute("/segmentos/")({
  component: SegmentsIndex,
  head: () => ({
    meta: [
      { title: "Segmentos — Império de Ideias" },
      { name: "description", content: "Marketing estratégico para hospitais, clínicas, indústrias, tecnologia, franquias, SaaS, comércio, serviços, B2B e empresas familiares." },
      { property: "og:title", content: "Segmentos — Império de Ideias" },
      { property: "og:description", content: "Conhecimento profundo dos setores que atendemos." },
      { property: "og:url", content: "/segmentos" },
    ],
    links: [{ rel: "canonical", href: "/segmentos" }],
  }),
});

function SegmentsIndex() {
  return (
    <>
      <section className="pt-16 lg:pt-24 pb-8">
        <div className="container-imperio">
          <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Segmentos" }]} />
          <span className="eyebrow">Segmentos</span>
          <h1 className="heading-hero mt-6 max-w-5xl">Contexto de setor <span className="text-primary">muda tudo</span>.</h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Cada segmento tem regras próprias — de compra, reputação, regulação e comunicação. Nosso método se ajusta ao contexto.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SEGMENTS.map((s) => (
            <Link
              key={s.slug}
              to="/segmentos/$slug"
              params={{ slug: s.slug }}
              className="surface-card surface-card-hover p-8 group flex flex-col justify-between min-h-[200px]"
            >
              <div>
                <h3 className="text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.short}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                Ver segmento <ArrowUpRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
