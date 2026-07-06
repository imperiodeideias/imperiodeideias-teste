import { createFileRoute } from "@tanstack/react-router";
import { Section, Breadcrumb } from "@/components/site/Primitives";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  component: Contato,
  head: () => ({
    meta: [
      { title: "Contato — Império de Ideias" },
      { name: "description", content: "Fale com a Império. Diagnóstico inicial sem compromisso para líderes de marketing e diretoria." },
      { property: "og:title", content: "Contato — Império de Ideias" },
      { property: "og:description", content: "Diagnóstico inicial sem compromisso." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contato — Império de Ideias",
        url: "https://imperiodeideias.com.br/contato",
      }),
    }],
  }),
});

function Contato() {
  return (
    <>
      <section className="pt-16 lg:pt-24 pb-8">
        <div className="container-imperio">
          <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Contato" }]} />
          <span className="eyebrow">Contato</span>
          <h1 className="heading-hero mt-6 max-w-5xl">Vamos <span className="text-primary">conversar</span>?</h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Conte um pouco sobre a sua empresa, o momento e o desafio. Retornamos em até um dia útil.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <form
            className="surface-card p-8 lg:p-10 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget as HTMLFormElement;
              const data = new FormData(f);
              const nome = data.get("nome");
              const empresa = data.get("empresa");
              const mensagem = data.get("mensagem");
              const email = data.get("email");
              const body = encodeURIComponent(`Nome: ${nome}\nEmpresa: ${empresa}\nE-mail: ${email}\n\n${mensagem}`);
              window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Contato via site — Império")}&body=${body}`;
            }}
          >
            <Field name="nome" label="Nome" required />
            <Field name="empresa" label="Empresa" required />
            <Field name="email" label="E-mail corporativo" type="email" required />
            <Field name="telefone" label="Telefone (opcional)" />
            <div>
              <label className="text-sm font-semibold text-foreground/90">Como podemos ajudar?</label>
              <textarea
                name="mensagem"
                required
                rows={5}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button type="submit" variant="pillFilled" size="pill">Enviar mensagem</Button>
          </form>

          <div className="space-y-6 lg:pl-6">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-foreground/60">E-mail</h3>
              <a href={`mailto:${SITE.email}`} className="mt-2 block text-2xl font-bold hover:text-primary">{SITE.email}</a>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-foreground/60">Telefone</h3>
              <p className="mt-2 text-2xl font-bold">{SITE.phone}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-foreground/60">Onde estamos</h3>
              <p className="mt-2 text-2xl font-bold">{SITE.city}</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-foreground/90">{label}{required && " *"}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
