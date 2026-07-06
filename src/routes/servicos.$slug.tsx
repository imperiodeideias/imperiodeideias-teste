import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, FAQ, Breadcrumb, JsonLd, CTASection } from "@/components/site/Primitives";
import { Button } from "@/components/ui/button";
import { getService, SERVICES } from "@/content/services";
import { CASES } from "@/content/cases";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Serviço não encontrado — Império de Ideias" }, { name: "robots", content: "noindex" }],
      };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: `${s.title} — Império de Ideias` },
        { name: "description", content: s.summary },
        { property: "og:title", content: `${s.title} — Império de Ideias` },
        { property: "og:description", content: s.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/servicos/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/servicos/${params.slug}` }],
    };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <Section title="Serviço não encontrado">
      <Link to="/servicos" className="text-primary underline">Ver todos os serviços</Link>
    </Section>
  ),
});

const TOC = [
  { id: "resumo", label: "Resumo" },
  { id: "o-que-e", label: "O que é" },
  { id: "como-funciona", label: "Como funciona" },
  { id: "quando", label: "Quando contratar" },
  { id: "beneficios", label: "Benefícios" },
  { id: "problemas", label: "Problemas que resolve" },
  { id: "imperio", label: "Como a Império trabalha" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "processo", label: "Processo" },
  { id: "cases", label: "Cases" },
  { id: "faq", label: "Perguntas frequentes" },
];

function ServicePage() {
  const { service } = Route.useLoaderData();

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: { "@type": "Organization", name: "Império de Ideias" },
    areaServed: "BR",
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f: { q: string; a: string }) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://imperiodeideias.com.br/" },
      { "@type": "ListItem", position: 2, name: "Serviços", item: "https://imperiodeideias.com.br/servicos" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://imperiodeideias.com.br/servicos/${service.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={[serviceLd, faqLd, breadcrumbLd]} />

      <section className="pt-16 lg:pt-24 pb-8">
        <div className="container-imperio">
          <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Serviços", to: "/servicos" }, { label: service.title }]} />
          <span className="eyebrow">Serviço</span>
          <h1 className="heading-hero mt-6 max-w-5xl">{service.title}</h1>
          <p className="mt-8 max-w-3xl text-lg text-muted-foreground">{service.short}</p>
        </div>
      </section>

      <section className="py-10">
        <div className="container-imperio grid gap-12 lg:grid-cols-12">
          {/* Sidebar TOC */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs uppercase tracking-widest text-foreground/60 mb-4">Nesta página</p>
              <ul className="space-y-2 text-sm">
                {TOC.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-foreground/80 hover:text-primary transition-colors">{t.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-9 space-y-16">
            <Block id="resumo" title="Resumo"><p className="text-lg text-muted-foreground">{service.summary}</p></Block>
            <Block id="o-que-e" title="O que é"><p className="text-lg text-muted-foreground">{service.whatIs}</p></Block>
            <Block id="como-funciona" title="Como funciona"><Bullets items={service.howItWorks} /></Block>
            <Block id="quando" title="Quando contratar"><Bullets items={service.whenToHire} /></Block>
            <Block id="beneficios" title="Benefícios"><Bullets items={service.benefits} /></Block>
            <Block id="problemas" title="Problemas que resolve"><Bullets items={service.problemsSolved} /></Block>
            <Block id="imperio" title="Como a Império trabalha"><p className="text-lg text-muted-foreground">{service.imperioWay}</p></Block>
            <Block id="diferenciais" title="Diferenciais"><Bullets items={service.differentiators} /></Block>

            <Block id="processo" title="Processo">
              <div className="grid gap-4 md:grid-cols-2">
                {service.process.map((p: { step: string; description: string }, i: number) => (
                  <div key={p.step} className="surface-card p-6">
                    <span className="text-primary text-xs font-bold tracking-widest">0{i + 1}</span>
                    <h4 className="mt-2 text-xl font-bold">{p.step}</h4>
                    <p className="mt-2 text-muted-foreground text-sm">{p.description}</p>
                  </div>
                ))}
              </div>
            </Block>

            <Block id="cases" title="Cases relacionados">
              <div className="grid gap-4 md:grid-cols-3">
                {CASES.map((c) => (
                  <Link
                    key={c.slug}
                    to="/cases/$slug"
                    params={{ slug: c.slug }}
                    className="surface-card surface-card-hover p-6 block"
                  >
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{c.sector}</span>
                    <p className="mt-3 font-bold">{c.headline}</p>
                  </Link>
                ))}
              </div>
            </Block>

            <Block id="faq" title="Perguntas frequentes"><FAQ items={service.faqs} /></Block>

            <div className="border-t border-border pt-10">
              <h3 className="text-2xl font-bold">Outros serviços</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                  <Link key={s.slug} to="/servicos/$slug" params={{ slug: s.slug }} className="rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary">
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <Button asChild variant="pillFilled" size="pill">
                <Link to="/contato">Conversar sobre {service.title}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-28">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6">{title}</h2>
      {children}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it} className="flex gap-3 text-lg text-foreground/90">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
