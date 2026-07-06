import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, FAQ, Breadcrumb, JsonLd, CTASection } from "@/components/site/Primitives";
import { getSegment, SEGMENTS } from "@/content/segments";

export const Route = createFileRoute("/segmentos/$slug")({
  loader: ({ params }) => {
    const segment = getSegment(params.slug);
    if (!segment) throw notFound();
    return { segment };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Segmento não encontrado" }, { name: "robots", content: "noindex" }] };
    const s = loaderData.segment;
    return {
      meta: [
        { title: `${s.title} — Marketing estratégico | Império de Ideias` },
        { name: "description", content: s.intro },
        { property: "og:title", content: `${s.title} — Império de Ideias` },
        { property: "og:description", content: s.intro },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/segmentos/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/segmentos/${params.slug}` }],
    };
  },
  component: SegmentPage,
  notFoundComponent: () => (
    <Section title="Segmento não encontrado">
      <Link to="/segmentos" className="text-primary underline">Ver todos os segmentos</Link>
    </Section>
  ),
});

function SegmentPage() {
  const { segment } = Route.useLoaderData();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: segment.faqs.map((f: { q: string; a: string }) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqLd} />

      <section className="pt-16 lg:pt-24 pb-8">
        <div className="container-imperio">
          <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Segmentos", to: "/segmentos" }, { label: segment.title }]} />
          <span className="eyebrow">Segmento</span>
          <h1 className="heading-hero mt-6 max-w-5xl">{segment.title}</h1>
          <p className="mt-8 max-w-3xl text-lg text-muted-foreground">{segment.intro}</p>
        </div>
      </section>

      <Section eyebrow="Dores comuns" title="Onde este mercado costuma travar.">
        <ul className="grid gap-4 md:grid-cols-2">
          {segment.pains.map((p: string) => (
            <li key={p} className="surface-card p-6 text-lg">{p}</li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Como ajudamos" title="Frentes de atuação para este segmento.">
        <ul className="grid gap-4 md:grid-cols-2">
          {segment.solutions.map((s: string) => (
            <li key={s} className="surface-card p-6 text-lg">{s}</li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Perguntas frequentes" title={`Dúvidas comuns em ${segment.title.toLowerCase()}.`}>
        <FAQ items={segment.faqs} />
      </Section>

      <Section>
        <div className="border-t border-border pt-10">
          <h3 className="text-2xl font-bold">Outros segmentos</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {SEGMENTS.filter((s) => s.slug !== segment.slug).map((s) => (
              <Link key={s.slug} to="/segmentos/$slug" params={{ slug: s.slug }} className="rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary">
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CTASection title={`Quer ver o que a Império pode fazer no setor de ${segment.title}?`} />
    </>
  );
}
