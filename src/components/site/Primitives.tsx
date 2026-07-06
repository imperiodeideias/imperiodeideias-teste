import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      <div className="container-imperio">
        {(eyebrow || title || intro) && (
          <div className="max-w-3xl mb-14">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2 className="heading-section mt-4">{title}</h2>}
            {intro && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {it.to ? (
              <Link to={it.to} className="hover:text-primary">{it.label}</Link>
            ) : (
              <span className="text-foreground/80">{it.label}</span>
            )}
            {i < items.length - 1 && <ChevronRight size={12} />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((it, i) => (
        <details key={i} className="group py-6">
          <summary className="flex cursor-pointer items-start justify-between gap-6 text-lg font-semibold text-foreground/95 list-none">
            <span>{it.q}</span>
            <span className="text-primary text-2xl leading-none transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 text-muted-foreground leading-relaxed">{it.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CTASection({
  title = "Vamos conversar sobre o próximo passo da sua marca?",
  subtitle = "Fale com nosso time. Diagnóstico inicial sem compromisso.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="container-imperio text-center">
        <h2 className="heading-section max-w-4xl mx-auto">{title}</h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild variant="pillFilled" size="pill">
            <Link to="/contato">Conversar com a Império</Link>
          </Button>
          <Button asChild variant="pill" size="pill">
            <Link to="/cases">Ver cases</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
