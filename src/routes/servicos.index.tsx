import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section, CTASection, Breadcrumb } from "@/components/site/Primitives";
import { SERVICES } from "@/content/services";

export const Route = createFileRoute("/servicos/")({
  component: ServicesIndex,
  head: () => ({
    meta: [
      { title: "Serviços — Império de Ideias" },
      { name: "description", content: "Branding, marketing estratégico, comunicação, design, SEO, GEO, AEO e IA aplicada. Um portfólio completo sob o mesmo teto." },
      { property: "og:title", content: "Serviços — Império de Ideias" },
      { property: "og:description", content: "Portfólio completo de serviços da Império." },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
});

function ServicesIndex() {
  return (
    <>
      <section className="pt-16 lg:pt-24 pb-8">
        <div className="container-imperio">
          <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Serviços" }]} />
          <span className="eyebrow">Serviços</span>
          <h1 className="heading-hero mt-6 max-w-5xl">Tudo o que sua marca precisa, com <span className="text-primary">método</span>.</h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Da estratégia à IA aplicada — disciplinas integradas para construir marcas fortes e operações previsíveis.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/servicos/$slug"
              params={{ slug: s.slug }}
              className="surface-card surface-card-hover p-8 group flex flex-col justify-between min-h-[240px]"
            >
              <div>
                <h3 className="text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.short}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                Conhecer <ArrowUpRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
