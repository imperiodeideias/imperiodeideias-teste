import { createFileRoute } from "@tanstack/react-router";
import { Section, CTASection, Breadcrumb } from "@/components/site/Primitives";

const STEPS = [
  { n: "01", t: "Diagnóstico", d: "Entrevistas com liderança, análise de dados, benchmark competitivo e leitura de marca. Ninguém propõe nada antes de escutar." },
  { n: "02", t: "Estratégia", d: "Definição de posicionamento, prioridades, indicadores de sucesso e caminho mais curto até o resultado." },
  { n: "03", t: "Planejamento", d: "Plano com escopo, prazos, responsáveis, entregas e ritual de acompanhamento." },
  { n: "04", t: "Execução", d: "Time multidisciplinar sênior atuando com padrão editorial, revisão e critério em cada peça." },
  { n: "05", t: "Monitoramento", d: "Indicadores em tempo real e reporte transparente para diretoria e áreas envolvidas." },
  { n: "06", t: "Otimização", d: "Revisão de rota baseada em evidência. Aprender rápido, ajustar rápido, escalar o que funciona." },
];

export const Route = createFileRoute("/metodologia")({
  component: Metodologia,
  head: () => ({
    meta: [
      { title: "Metodologia — Império de Ideias" },
      { name: "description", content: "Do diagnóstico à otimização — as seis etapas do método Império, transparentes e auditáveis." },
      { property: "og:title", content: "Metodologia — Império de Ideias" },
      { property: "og:description", content: "Um método claro para conectar estratégia, marca, comunicação e execução." },
      { property: "og:url", content: "/metodologia" },
    ],
    links: [{ rel: "canonical", href: "/metodologia" }],
  }),
});

function Metodologia() {
  return (
    <>
      <section className="pt-16 lg:pt-24 pb-8">
        <div className="container-imperio">
          <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Metodologia" }]} />
          <span className="eyebrow">Metodologia</span>
          <h1 className="heading-hero mt-6 max-w-5xl">Do <span className="text-primary">diagnóstico</span> à <span className="text-primary">otimização</span>.</h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Seis etapas que sustentam clareza, ritmo e evolução — em projetos de branding, comunicação, conteúdo, mídia e IA aplicada.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-8">
          {STEPS.map((s) => (
            <div key={s.n} className="grid gap-6 md:grid-cols-12 border-t border-border pt-8">
              <div className="md:col-span-2">
                <span className="text-primary text-2xl font-extrabold">{s.n}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-3xl font-extrabold">{s.t}</h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-lg text-muted-foreground">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
