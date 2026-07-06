import { createFileRoute } from "@tanstack/react-router";
import { Section, CTASection, Breadcrumb } from "@/components/site/Primitives";

export const Route = createFileRoute("/sobre")({
  component: Sobre,
  head: () => ({
    meta: [
      { title: "Sobre — Império de Ideias" },
      { name: "description", content: "Somos uma agência estratégica que ajuda empresas a crescer com clareza, consistência e foco em resultado. Conheça a Império de Ideias." },
      { property: "og:title", content: "Sobre — Império de Ideias" },
      { property: "og:description", content: "Agência estratégica com foco em branding, marketing, comunicação, design, SEO, GEO, AEO e IA." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
});

function Sobre() {
  return (
    <>
      <section className="pt-16 lg:pt-24 pb-8">
        <div className="container-imperio">
          <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Sobre" }]} />
          <span className="eyebrow">Sobre a Império</span>
          <h1 className="heading-hero mt-6 max-w-5xl">Marcas se constroem com <span className="text-primary">método</span>, não com sorte.</h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            A Império de Ideias é uma agência estratégica. Trabalhamos ao lado de líderes que precisam
            organizar marca, comunicação, geração de demanda e execução — sem abrir mão da qualidade nem do resultado.
          </p>
        </div>
      </section>

      <Section eyebrow="Propósito" title="Ajudar empresas a crescer com clareza." intro="Somos movidos por uma ideia simples: negócio bom, quando bem comunicado, cresce mais rápido e com menos ruído.">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Estratégia", d: "Decidir com dados, contexto e propósito." },
            { t: "Criatividade", d: "Diferenciar sem gritar." },
            { t: "Execução", d: "Entregar com ritmo, qualidade e responsabilidade." },
          ].map((v) => (
            <div key={v.t} className="surface-card p-8">
              <h3 className="text-xl font-bold">{v.t}</h3>
              <p className="mt-3 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Valores" title="Como trabalhamos.">
        <ul className="grid gap-6 md:grid-cols-2">
          {[
            "Honestidade acima de encantamento comercial.",
            "Método antes de opinião.",
            "Resultado antes de vaidade.",
            "Relacionamento longo antes de venda rápida.",
            "IA como aliada, não como enfeite.",
            "Aprendizado contínuo em cada projeto.",
          ].map((v) => (
            <li key={v} className="border-t border-border pt-5 text-lg font-medium">
              {v}
            </li>
          ))}
        </ul>
      </Section>

      <CTASection title="Quer entender como a Império pode ajudar sua empresa?" />
    </>
  );
}
