import { createFileRoute } from "@tanstack/react-router";
import { Section, CTASection, Breadcrumb } from "@/components/site/Primitives";
import { TEAM } from "@/content/team";

export const Route = createFileRoute("/equipe")({
  component: Equipe,
  head: () => ({
    meta: [
      { title: "Equipe — Império de Ideias" },
      { name: "description", content: "Conheça as lideranças da Império de Ideias — estratégia, marca, conteúdo, performance, IA e operações." },
      { property: "og:title", content: "Equipe — Império de Ideias" },
      { property: "og:description", content: "Time sênior liderando cada projeto." },
      { property: "og:url", content: "/equipe" },
    ],
    links: [{ rel: "canonical", href: "/equipe" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Império de Ideias",
        employee: TEAM.map((m) => ({ "@type": "Person", name: m.name, jobTitle: m.role, description: m.bio })),
      }),
    }],
  }),
});

function Equipe() {
  return (
    <>
      <section className="pt-16 lg:pt-24 pb-8">
        <div className="container-imperio">
          <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Equipe" }]} />
          <span className="eyebrow">Equipe</span>
          <h1 className="heading-hero mt-6 max-w-5xl">Time <span className="text-primary">sênior</span> liderando cada projeto.</h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Estrutura enxuta, direção experiente. Cada disciplina é liderada por profissionais que respondem por resultado.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <div key={m.name} className="group overflow-hidden rounded-3xl border border-border bg-surface-1">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{m.name}</h3>
                <p className="mt-1 text-primary text-sm font-semibold uppercase tracking-widest">{m.role}</p>
                <p className="mt-4 text-sm text-muted-foreground">{m.bio}</p>
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    LinkedIn →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
