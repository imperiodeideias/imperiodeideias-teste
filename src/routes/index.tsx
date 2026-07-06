import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, FAQ } from "@/components/site/Primitives";
import { SERVICES } from "@/content/services";
import { SEGMENTS } from "@/content/segments";
import { CASES } from "@/content/cases";
import { LIBRARY } from "@/content/library";

const HOME_FAQ = [
  { q: "Que tipo de empresa a Império atende?", a: "Atendemos empresas de médio e grande porte em setores como saúde, indústria, tecnologia, franquias, SaaS, comércio e serviços B2B." },
  { q: "Como começa um projeto com a Império?", a: "Sempre por diagnóstico. Antes de propor entregas, entendemos negócio, mercado, marca, dados e objetivos." },
  { q: "A Império substitui minha agência ou meu time interno?", a: "Não. Atuamos como extensão sênior — em muitos projetos, ao lado do time interno e de outros parceiros." },
  { q: "Quanto custa contratar a Império?", a: "Depende do escopo. Fazemos um diagnóstico rápido antes de propor projeto e investimento." },
  { q: "Quanto tempo até ver resultado?", a: "Ganhos de organização e clareza aparecem em semanas. Ganhos de receita e autoridade, em meses — de forma consistente." },
  { q: "A Império trabalha com IA?", a: "Sim. Aplicamos IA em conteúdo, mídia, atendimento, dados e operação — com governança." },
];

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const METODOLOGIA = [
  { n: "01", t: "Diagnóstico", d: "Escutar antes de propor. Negócio, mercado, marca, dados." },
  { n: "02", t: "Estratégia", d: "Posicionamento, prioridades e indicadores de sucesso." },
  { n: "03", t: "Planejamento", d: "Escopo, prazos, responsáveis e entregas claras." },
  { n: "04", t: "Execução", d: "Time sênior operando com ritmo, qualidade e detalhe." },
  { n: "05", t: "Monitoramento", d: "Indicadores em tempo real, reporte transparente." },
  { n: "06", t: "Otimização", d: "Ajuste de rota com base em evidência." },
];

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Império de Ideias — Estratégia que vira execução" },
      { name: "description", content: "Agência estratégica de branding, marketing, comunicação, design, SEO, GEO, AEO e IA. Da criação ao crescimento — com clareza, consistência e foco em resultado." },
      { property: "og:title", content: "Império de Ideias — Estratégia que vira execução" },
      { property: "og:description", content: "Agência estratégica de branding, marketing, comunicação, design, SEO, GEO, AEO e IA." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(FAQ_LD) }],
  }),
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="pt-16 lg:pt-24 pb-24 lg:pb-32">
        <div className="container-imperio grid gap-12 lg:grid-cols-12 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <span className="eyebrow fade-in-up">Agência estratégica</span>
            <h1 className="heading-hero mt-6 fade-in-up">
              Estratégia<br />que vira<br /><span className="text-primary">execução.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Império é uma agência estratégica que atua da criação ao crescimento de marcas e projetos —
              acompanhando cada etapa com clareza, consistência e foco em resultado.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="pillFilled" size="pill">
                <Link to="/cases">Ver projetos</Link>
              </Button>
              <Button asChild variant="pill" size="pill">
                <Link to="/contato">Conversar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* COMO AJUDAMOS */}
      <Section
        eyebrow="Como ajudamos empresas"
        title={<>Marcas fortes se constroem com <span className="text-primary">estratégia, criatividade e execução.</span></>}
        intro="Não vendemos serviço solto. Ajudamos empresas a crescer com um sistema conectado: estratégia que orienta, criatividade que diferencia, execução que entrega."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: "Estratégia", d: "Diagnóstico, positioning, priorização e plano — para decidir com clareza e defender com dados." },
            { t: "Criatividade", d: "Marca, design e conteúdo que sustentam preço, atenção e memória no mercado." },
            { t: "Execução", d: "Time sênior operando com método, ritmo e responsabilidade em cada entrega." },
          ].map((p) => (
            <div key={p.t} className="surface-card surface-card-hover p-8 lg:p-10">
              <h3 className="text-2xl font-bold">{p.t}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVIÇOS */}
      <Section id="servicos" eyebrow="Serviços" title="Um portfólio completo para marcas que competem em atenção e em resultado." intro="Da estratégia à operação de IA — todas as disciplinas necessárias sob o mesmo teto.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/servicos/$slug"
              params={{ slug: s.slug }}
              className="surface-card surface-card-hover p-8 group flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.short}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                Conhecer <ArrowUpRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* SEGMENTOS */}
      <Section eyebrow="Segmentos" title="Conhecimento profundo dos setores que atendemos." intro="Cada segmento tem regras próprias — de compra, de reputação e de comunicação. Ajustamos método ao contexto.">
        <div className="flex flex-wrap gap-3">
          {SEGMENTS.map((s) => (
            <Link
              key={s.slug}
              to="/segmentos/$slug"
              params={{ slug: s.slug }}
              className="rounded-full border border-border px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </Section>

      {/* METODOLOGIA */}
      <Section eyebrow="Metodologia" title={<>Um método claro — do <span className="text-primary">diagnóstico</span> à <span className="text-primary">otimização</span>.</>} intro="Seis etapas, sempre transparentes, sempre auditáveis.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {METODOLOGIA.map((m) => (
            <div key={m.n} className="surface-card p-8">
              <span className="text-primary text-sm font-bold tracking-widest">{m.n}</span>
              <h3 className="mt-3 text-2xl font-bold">{m.t}</h3>
              <p className="mt-3 text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="pill" size="pill">
            <Link to="/metodologia">Ver metodologia completa</Link>
          </Button>
        </div>
      </Section>

      {/* DIFERENCIAIS */}
      <Section eyebrow="Diferenciais" title="Por que empresas escolhem a Império.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Time sênior liderando cada projeto",
            "Método próprio validado em dezenas de setores",
            "Estratégia, marca, conteúdo e mídia sob o mesmo teto",
            "Foco em receita, não em vaidade",
          ].map((d) => (
            <div key={d} className="border-t border-border pt-6">
              <p className="text-lg font-semibold leading-snug">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CASES */}
      <Section eyebrow="Cases" title="Projetos em destaque.">
        <div className="grid gap-6 lg:grid-cols-3">
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
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all">
                Ver estudo <ArrowUpRight size={16} />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="pill" size="pill">
            <Link to="/cases">Ver todos os cases</Link>
          </Button>
        </div>
      </Section>

      {/* BIBLIOTECA */}
      <Section eyebrow="Biblioteca" title="Conteúdo prático para líderes de marketing." intro="Guias, checklists, pesquisas e artigos — construídos para uso, não para vaidade.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LIBRARY.slice(0, 3).map((i) => (
            <Link
              key={i.slug}
              to="/biblioteca/$slug"
              params={{ slug: i.slug }}
              className="surface-card surface-card-hover p-8 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-primary">{i.type}</span>
                <h3 className="mt-3 text-xl font-bold leading-snug">{i.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{i.summary}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm text-primary">
                Ler <ArrowUpRight size={16} />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="pill" size="pill">
            <Link to="/biblioteca">Explorar biblioteca</Link>
          </Button>
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="Perguntas frequentes" title="Dúvidas comuns antes de conversar." intro="Respostas objetivas para as perguntas que ouvimos com mais frequência.">
        <FAQ items={HOME_FAQ} />
      </Section>

      {/* CTA */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="container-imperio grid gap-12 lg:grid-cols-2 items-end">
          <h2 className="heading-section">
            Vamos construir a próxima<br />fase da sua marca?
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Diagnóstico inicial sem compromisso. Em 30 minutos você tem uma leitura honesta sobre por onde começar.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="pillFilled" size="pill"><Link to="/contato">Conversar com a Império</Link></Button>
              <Button asChild variant="pill" size="pill"><Link to="/metodologia">Ver metodologia</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
