import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <p className="eyebrow">404</p>
          <h1 className="heading-section mt-4">Página não encontrada</h1>
          <p className="mt-4 text-muted-foreground">
            O endereço acessado não existe ou foi movido. Explore o site pela navegação principal.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="inline-flex h-12 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Ir para a Home
            </Link>
            <Link to="/servicos" className="inline-flex h-12 items-center rounded-full border border-white/70 px-6 text-sm font-semibold hover:bg-foreground hover:text-background">
              Ver serviços
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado do nosso lado. Tente atualizar ou voltar à Home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-2 text-sm font-semibold hover:bg-foreground hover:text-background"
          >
            Ir para a Home
          </a>
        </div>
      </div>
    </div>
  );
}

const ORG_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: "https://imperiodeideias.com.br",
  logo: "https://imperiodeideias.com.br/wp-content/uploads/2026/05/logo_header.png",
  description: SITE.description,
  sameAs: [SITE.social.instagram, SITE.social.linkedin],
  contactPoint: [{
    "@type": "ContactPoint",
    email: SITE.email,
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: ["pt-BR"],
  }],
};

const WEBSITE_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: "https://imperiodeideias.com.br",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://imperiodeideias.com.br/biblioteca?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { name: "author", content: SITE.name },
      { name: "theme-color", content: "#000000" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:title", content: `${SITE.name} — ${SITE.tagline}` },
      { property: "og:description", content: SITE.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${SITE.name} — ${SITE.tagline}` },
      { name: "twitter:description", content: SITE.description },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(ORG_LD) },
      { type: "application/ld+json", children: JSON.stringify(WEBSITE_LD) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
