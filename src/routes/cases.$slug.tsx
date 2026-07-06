import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, Breadcrumb, JsonLd, CTASection } from "@/components/site/Primitives";
import { getCase, CASES } from "@/content/cases";

export const Route = createFileRoute("/cases/$slug")({
  loader: ({ params }) => {
    const study = getCase(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Case não encontrado" }, { name: "robots", content: "noindex" }] };
    const c = loaderData.study;
    return {
      meta: [
        { title: `${c.headline} — Case ${c.client} | Império de Ideias` },
        { name: "description", content: c.context },
        { property: "og:title", content: `${c.headline} — ${c.client}` },
        { property: "og:description", content: c.context },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/cases/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/cases/${params.slug}` }],
    };
  },
  component: CasePage,
  notFoundComponent: () => (
    <Section title="Case não encontrado">
      <Link to="/cases" className="text-primary underline">Ver todos os cases</Link>
    </Section>
  ),
});

function CasePage() {
  const { study } = Route.useLoaderData();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.headline,
    about: study.client,
    articleSection: study.sector,
    description: study.context,
    author: { "@type": "Organization", name: "Império de Ideias" },
    publisher: { "@type": "Organization", name: "Império de Ideias" },
  };

  const bgColor =
    study.color === "yellow"
      ? "var(--color-brand-yellow)"
      : study.color === "orange"
        ? "var(--color-brand-orange)"
        : study.color === "cream"
          ? "var(--color-brand-cream)"
          : "var(--color-surface-2)";
  const textDark = study.color !== "dark";

  return (
    <>
      <JsonLd data={articleLd} />

      <section className="pt-8">
        <div className="container-imperio">
          <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Cases", to: "/cases" }, { label: study.client }]} />
        </div>
        <div
          className="mt-6 py-16 lg:py-24"
          style={{ background: bgColor, color: textDark ? "#111" : "var(--color-foreground)" }}
        >
          <div className="container-imperio">
            <span className="text-xs uppercase tracking-widest opacity-70">{study.sector} · {study.client}</span>
            <h1 className="heading-hero mt-6 max-w-5xl">{study.headline}</h1>
          </div>
        </div>
        <div className="container-imperio mt-10">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img src={study.image} alt={`${study.client} — ${study.headline}`} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      <Section eyebrow="Contexto"><p className="text-lg text-muted-foreground max-w-3xl">{study.context}</p></Section>
      <Section eyebrow="Problema"><p className="text-lg text-muted-foreground max-w-3xl">{study.problem}</p></Section>

      <Section eyebrow="Estratégia">
        <ul className="space-y-3 max-w-3xl">
          {study.strategy.map((s: string) => (
            <li key={s} className="flex gap-3 text-lg text-foreground/90">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Execução">
        <ul className="space-y-3 max-w-3xl">
          {study.execution.map((s: string) => (
            <li key={s} className="flex gap-3 text-lg text-foreground/90">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Resultados">
        <div className="grid gap-6 md:grid-cols-3">
          {study.results.map((r: { metric: string; label: string }) => (
            <div key={r.label} className="surface-card p-8">
              <p className="text-5xl font-extrabold text-primary">{r.metric}</p>
              <p className="mt-3 text-muted-foreground">{r.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Aprendizados">
        <ul className="space-y-3 max-w-3xl">
          {study.learnings.map((l: string) => (
            <li key={l} className="flex gap-3 text-lg text-foreground/90">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="border-t border-border pt-10">
          <h3 className="text-2xl font-bold">Outros cases</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {CASES.filter((c) => c.slug !== study.slug).map((c) => (
              <Link key={c.slug} to="/cases/$slug" params={{ slug: c.slug }} className="rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary">
                {c.headline}
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
