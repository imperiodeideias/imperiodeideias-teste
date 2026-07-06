import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, Breadcrumb, JsonLd, CTASection } from "@/components/site/Primitives";
import { getLibraryItem, LIBRARY } from "@/content/library";

export const Route = createFileRoute("/biblioteca/$slug")({
  loader: ({ params }) => {
    const item = getLibraryItem(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Conteúdo não encontrado" }, { name: "robots", content: "noindex" }] };
    const i = loaderData.item;
    return {
      meta: [
        { title: `${i.title} — Império de Ideias` },
        { name: "description", content: i.summary },
        { property: "og:title", content: i.title },
        { property: "og:description", content: i.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/biblioteca/${params.slug}` },
        { name: "article:published_time", content: i.date },
        { name: "author", content: i.author },
      ],
      links: [{ rel: "canonical", href: `/biblioteca/${params.slug}` }],
    };
  },
  component: LibraryItemPage,
  notFoundComponent: () => (
    <Section title="Conteúdo não encontrado">
      <Link to="/biblioteca" className="text-primary underline">Voltar para a biblioteca</Link>
    </Section>
  ),
});

function LibraryItemPage() {
  const { item } = Route.useLoaderData();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.summary,
    datePublished: item.date,
    author: { "@type": "Organization", name: item.author },
    publisher: { "@type": "Organization", name: "Império de Ideias" },
  };

  return (
    <>
      <JsonLd data={articleLd} />
      <section className="pt-16 lg:pt-24 pb-8">
        <div className="container-imperio max-w-4xl">
          <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Biblioteca", to: "/biblioteca" }, { label: item.title }]} />
          <span className="eyebrow">{item.type}</span>
          <h1 className="heading-hero mt-6">{item.title}</h1>
          <p className="mt-6 text-sm text-muted-foreground">Publicado em {new Date(item.date).toLocaleDateString("pt-BR")} · {item.author}</p>
        </div>
        <div className="container-imperio max-w-5xl mt-10">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img src={item.image} alt={item.title} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-foreground/90">
          <p className="text-xl text-muted-foreground">{item.summary}</p>
          <p>{item.body}</p>
          <p className="text-muted-foreground">Este material faz parte da Biblioteca Império — uma iniciativa que evoluirá para o Império News, com pesquisas, análises e ferramentas para líderes de marketing.</p>
        </div>
      </Section>

      <Section>
        <div className="border-t border-border pt-10 max-w-4xl">
          <h3 className="text-2xl font-bold">Continue lendo</h3>
          <div className="mt-4 grid gap-3">
            {LIBRARY.filter((l) => l.slug !== item.slug).slice(0, 3).map((l) => (
              <Link key={l.slug} to="/biblioteca/$slug" params={{ slug: l.slug }} className="flex items-center justify-between border-t border-border py-4 hover:text-primary">
                <span className="font-semibold">{l.title}</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{l.type}</span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
