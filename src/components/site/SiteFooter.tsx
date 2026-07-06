import { Link } from "@tanstack/react-router";
import { SITE, MAIN_NAV } from "@/lib/site";
import { SERVICES } from "@/content/services";
import logo from "@/assets/imperio-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-imperio py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1 space-y-5">
          <img src={logo} alt={SITE.name} className="h-9 w-auto" width={160} height={36} />
          <p className="text-sm text-muted-foreground max-w-xs">{SITE.description}</p>
          <div className="flex gap-3 text-sm">
            <a href={SITE.social.instagram} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">Instagram</a>
            <span className="text-border">·</span>
            <a href={SITE.social.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground/60 mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm">
            {MAIN_NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-foreground/85 hover:text-primary transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground/60 mb-4">Serviços</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link to="/servicos/$slug" params={{ slug: s.slug }} className="text-foreground/85 hover:text-primary transition-colors">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground/60 mb-4">Contato</h4>
          <ul className="space-y-2 text-sm text-foreground/85">
            <li><a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a></li>
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
