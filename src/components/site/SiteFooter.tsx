import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { SITE, MAIN_NAV } from "@/lib/site";
import { SERVICES } from "@/content/services";
import logo from "@/assets/imperio-logo.png";

const SOCIALS = [
  { label: "Instagram", href: SITE.social.instagram, Icon: Instagram },
  { label: "LinkedIn", href: SITE.social.linkedin, Icon: Linkedin },
  { label: "YouTube", href: SITE.social.youtube, Icon: Youtube },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24 bg-background">
      <div className="container-imperio py-16 grid gap-12 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4 space-y-5">
          <img src={logo} alt={SITE.name} className="h-10 w-auto" width={200} height={40} />
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            A Império é uma agência estratégica que atua da criação ao crescimento de marcas
            e projetos, acompanhando cada etapa com clareza, consistência e foco em resultado.
          </p>
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Navegação */}
        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground/60 mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm">
            {MAIN_NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-foreground/85 hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Serviços */}
        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground/60 mb-4">Serviços</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/servicos/$slug"
                  params={{ slug: s.slug }}
                  className="text-foreground/85 hover:text-primary transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div className="lg:col-span-2">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground/60 mb-4">Contato</h4>
          <ul className="space-y-2 text-sm text-foreground/85">
            <li><a href={`mailto:${SITE.email}`} className="hover:text-primary break-all">{SITE.email}</a></li>
            <li><a href={SITE.whatsapp.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp</a></li>
            <li>{SITE.phone}</li>
            <li>{SITE.city}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-imperio py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
          <p>Estratégia, criatividade e execução.</p>
        </div>
      </div>
    </footer>
  );
}
