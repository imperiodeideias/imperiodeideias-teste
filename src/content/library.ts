export type LibraryItem = {
  slug: string;
  type: "Artigo" | "Guia" | "Template" | "Checklist" | "Pesquisa" | "Calculadora" | "Whitepaper";
  title: string;
  summary: string;
  body: string;
  date: string;
  author: string;
};

export const LIBRARY: LibraryItem[] = [
  {
    slug: "guia-geo-aeo",
    type: "Guia",
    title: "Guia prático de GEO e AEO para 2026",
    summary: "Como preparar sua marca para ser citada por ChatGPT, Gemini, Claude, Perplexity e Copilot.",
    body:
      "Este guia apresenta o método da Império para estruturar conteúdo, schema, autoridade e citabilidade em mecanismos de resposta e IA generativa.",
    date: "2026-06-18",
    author: "Equipe Império",
  },
  {
    slug: "checklist-seo-tecnico",
    type: "Checklist",
    title: "Checklist de SEO técnico para sites institucionais",
    summary: "60 pontos essenciais para auditar performance, indexação, semântica e Core Web Vitals.",
    body: "Um checklist objetivo para líderes de marketing conversarem com times técnicos e agências.",
    date: "2026-05-30",
    author: "Equipe Império",
  },
  {
    slug: "template-brief-branding",
    type: "Template",
    title: "Template de brief de branding",
    summary: "Estrutura para diagnosticar marca, público, categoria e diferenciais antes de qualquer projeto.",
    body: "Modelo em blocos, com perguntas guiadas para lideranças de marketing e comercial.",
    date: "2026-04-22",
    author: "Equipe Império",
  },
  {
    slug: "artigo-marketing-estrategico",
    type: "Artigo",
    title: "Por que planejamento estratégico virou o novo diferencial de agência",
    summary: "Como o mercado migrou de execução por volume para estratégia de negócio.",
    body: "O texto analisa o papel do marketing estratégico dentro de operações que precisam crescer com margem.",
    date: "2026-03-10",
    author: "Equipe Império",
  },
  {
    slug: "pesquisa-maturidade-marketing",
    type: "Pesquisa",
    title: "Pesquisa Império: Maturidade de Marketing 2026",
    summary: "Radiografia de 240 empresas brasileiras sobre orçamento, estrutura e uso de IA em marketing.",
    body: "Relatório completo com benchmarks por setor, porte e maturidade.",
    date: "2026-02-14",
    author: "Equipe Império",
  },
  {
    slug: "calculadora-cac-ltv",
    type: "Calculadora",
    title: "Calculadora de CAC e LTV",
    summary: "Ferramenta simples para estimar saúde de aquisição e retenção do seu negócio.",
    body: "Insira poucos números e receba uma leitura rápida de eficiência de marketing e vendas.",
    date: "2026-01-08",
    author: "Equipe Império",
  },
];

export const getLibraryItem = (slug: string) => LIBRARY.find((i) => i.slug === slug);
