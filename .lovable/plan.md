## Contexto

O site atual da Império de Ideias (imperiodeideias.com.br) usa uma identidade forte e reconhecível:
- Fundo preto profundo, tipografia sans-serif bold em branco
- Logo "Império Ideias" com coroa amarela
- Botões pill (arredondados totalmente), outline sutil
- Acentos em amarelo (mostarda) e cards coloridos (laranja/amarelo) no portfólio
- Ritmo espaçoso, hero minimalista, animações discretas
- Menu topo simples: Home, Portfólio, Serviços, Sobre, Contato, Blog + CTA "Conversar"

O objetivo é **evoluir**, não redesenhar. Preservar tudo acima e reorganizar/expandir conteúdo com foco em SEO, GEO (Generative Engine Optimization) e AEO (Answer Engine Optimization).

---

## Fase 1 — Design System (preservar identidade)

Configurar `src/styles.css` (Tailwind v4) com tokens que espelham o site atual:
- `--background: oklch(0 0 0)` (preto puro)
- `--foreground: oklch(0.98 0 0)` (branco)
- `--primary`: amarelo mostarda da coroa (~`oklch(0.82 0.17 85)`)
- `--accent-orange`: laranja dos cards (~`oklch(0.75 0.17 55)`)
- `--muted-foreground`: cinza claro do parágrafo hero
- Radius pill (`--radius-pill: 9999px`) para botões
- Tipografia: família sans-serif geométrica bold (Inter/Manrope como substituto até confirmarmos a fonte oficial via `<link>` no `__root.tsx`)
- Variantes shadcn: `Button` com `variant="pill"` (outline branco) e `variant="pillFilled"` (amarelo)
- Animações: fade+slide sutis via Motion (durações 400–600ms, easing suave) — sem parallax pesado

Componentes globais reutilizáveis:
- `SiteHeader` (logo + nav + CTA Conversar)
- `SiteFooter` (links, redes, contato, Império News teaser)
- `Section`, `SectionHeading`, `Pill`, `CaseCard`, `ServiceCard`, `FAQ`, `Breadcrumb`
- `JsonLd` helper para Schema.org

---

## Fase 2 — Estrutura de rotas (TanStack Router)

```text
src/routes/
  __root.tsx                    (header/footer, meta base, Organization schema)
  index.tsx                     Home
  sobre.tsx
  equipe.tsx
  metodologia.tsx
  servicos.index.tsx            (índice de serviços)
  servicos.$slug.tsx            (página individual — template único)
  segmentos.index.tsx
  segmentos.$slug.tsx           (hospitais, clinicas, industrias, tecnologia,
                                 franquias, saas, comercio, servicos, b2b,
                                 empresas-familiares)
  cases.index.tsx
  cases.$slug.tsx               (estudo de caso completo)
  biblioteca.index.tsx          (artigos/guias/templates/checklists…)
  biblioteca.$slug.tsx
  contato.tsx
  sitemap[.]xml.ts
```

Dados de serviços, segmentos, cases e biblioteca em `src/content/*.ts` (tipados) — facilita evolução futura para CMS/Cloud.

---

## Fase 3 — Home (reorganizada, mesmo conceito)

Seções em ordem:
1. **Hero** — mesma tipografia gigante "Estratégia que vira execução." + parágrafo curto + CTA "Ver projetos" / "Conversar"
2. **Como ajudamos empresas** — 3 pilares (estratégia, criatividade, execução)
3. **Serviços** — grid de cards linkando para páginas individuais
4. **Segmentos** — pills/cards linkando para segmentos
5. **Metodologia** — 6 etapas resumidas com link para página completa
6. **Diferenciais** — bullets curtos
7. **Cases** — grid mantendo estilo cards coloridos (laranja/amarelo/preto)
8. **Biblioteca** — teaser de conteúdos recentes
9. **FAQ** — 6–8 perguntas (marcadas com FAQPage schema)
10. **CTA final** — "Vamos conversar"

---

## Fase 4 — Template de Serviço (padrão único)

Cada `/servicos/$slug` renderiza: Hero, Resumo, Índice âncora, O que é, Como funciona, Quando contratar, Benefícios, Problemas que resolve, Como a Império trabalha, Diferenciais, Processo, Cases relacionados, FAQ, CTA. Schema `Service` + `FAQPage` + `BreadcrumbList`.

Serviços iniciais: branding, marketing-estrategico, comunicacao, design, seo, geo-aeo, inteligencia-artificial, conteudo, midia-paga, web.

---

## Fase 5 — Segmentos, Cases, Biblioteca, Metodologia, Sobre, Equipe

- **Segmentos**: template com dores/soluções/cases/FAQ do mercado.
- **Cases**: template estudo de caso — Contexto, Problema, Estratégia, Execução, Resultados (com números), Aprendizados. Schema `Article`.
- **Biblioteca**: listagem filtrável por tipo (Artigo, Guia, Template, Checklist, Pesquisa, Calculadora, Whitepaper). Preparada para virar Império News.
- **Metodologia**: página com as 6 etapas (Diagnóstico → Otimização) detalhadas.
- **Sobre**: história, propósito, valores (E-E-A-T).
- **Equipe**: cards de pessoas com `Person` schema, autoria de conteúdos.

---

## Fase 6 — SEO / GEO / AEO / Schema

- `head()` por rota: title (<60), description (<160), og:*, twitter, canonical relativo, og:url; og:image apenas em leaves com imagem real.
- Hierarquia H1 → H2 → H3 correta, breadcrumbs visuais + `BreadcrumbList` schema.
- Conteúdo GEO/AEO: cada página responde perguntas diretas ("O que é X?", "Quando contratar?", "Quanto custa?", "Quais indicadores?"), com respostas em blocos curtos, listas e tabelas.
- Schemas: Organization + WebSite/SearchAction em `__root`, Service/FAQ em serviços, Article em cases/biblioteca, Person em equipe, LocalBusiness quando aplicável.
- `public/robots.txt` + `sitemap.xml` dinâmico com todas as rotas estáticas e dinâmicas.

---

## Fase 7 — Performance & UX

- Imagens: `loading="lazy"`, `width/height`, formatos otimizados; hero sem imagem pesada.
- Animações Motion suaves em entrada de seção (opacity + translateY 12–20px, 500ms).
- Mobile: menu drawer, tipografia responsiva com `clamp()`, CTAs sempre acessíveis.
- Sem light mode toggle (site é dark-only, coerente com identidade).

---

## Detalhes técnicos

- Stack: TanStack Start + React 19 + Tailwind v4 (já configurado).
- Nenhum backend nesta fase — dados estáticos em `src/content/`. Formulário de contato inicial abre `mailto:` (pode evoluir para Lovable Cloud depois).
- Conteúdo textual: escrito em português, tom estratégico e sóbrio (sem buzzwords).
- Sem substituir o logo — usar SVG/PNG existente do site atual (baixado para `src/assets/`).

---

## Fora de escopo desta entrega

- Integração com CMS/Backend (Lovable Cloud) — preparado, não implementado.
- Autenticação, downloads gated, formulários com envio real.
- Blog completo com artigos reais (estrutura pronta, conteúdo semente).
- Multi-idioma.

## Perguntas rápidas antes de começar

1. Posso usar o logo atual da Império (baixado de imperiodeideias.com.br) diretamente em `src/assets/`, ou você prefere enviar o arquivo oficial?
2. Confirma que o formulário de Contato pode ser `mailto:` nesta primeira versão (sem Lovable Cloud), evoluindo depois?
3. Alguma fonte específica que a marca usa hoje que devo carregar (ex.: nome/arquivo), ou posso usar Manrope/Inter como proxy próximo?
