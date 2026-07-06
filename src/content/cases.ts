export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  headline: string;
  color: "yellow" | "orange" | "cream" | "dark";
  context: string;
  problem: string;
  strategy: string[];
  execution: string[];
  results: { metric: string; label: string }[];
  learnings: string[];
};

export const CASES: CaseStudy[] = [
  {
    slug: "antes-da-criacao-diagnostico",
    client: "Grupo Industrial Nacional",
    sector: "Indústria",
    headline: "Antes da criação, diagnóstico.",
    color: "yellow",
    context:
      "Grupo industrial multi-planta com forte reconhecimento regional buscando expandir para novos mercados sem diluir a marca-mãe.",
    problem:
      "Marca corporativa forte, mas com submarcas competindo entre si, comunicação institucional sem foco e time comercial pedindo mais leads qualificados.",
    strategy: [
      "Diagnóstico de arquitetura de marca em 8 semanas.",
      "Nova hierarquia com marca-mãe endossando linhas.",
      "Plano editorial com autoridade técnica por setor.",
    ],
    execution: [
      "Refresh visual preservando símbolo histórico.",
      "Guia de aplicação por unidade e canal.",
      "Programa de conteúdo com 40 peças por trimestre.",
    ],
    results: [
      { metric: "+62%", label: "leads qualificados em 6 meses" },
      { metric: "-24%", label: "CAC em canais próprios" },
      { metric: "3x", label: "share of search vs. principal concorrente" },
    ],
    learnings: [
      "Diagnóstico bem feito reduz retrabalho em toda a operação.",
      "Governança de marca é tão importante quanto o design em si.",
    ],
  },
  {
    slug: "estrategia-e-ponte-entre-cultura-e-resultado",
    client: "Rede de Saúde",
    sector: "Saúde",
    headline: "Estratégia é a ponte entre cultura e resultado.",
    color: "orange",
    context:
      "Rede de clínicas em expansão precisando alinhar experiência do paciente, marca e captação em múltiplas cidades.",
    problem:
      "Marca inconsistente entre unidades e captação dependente de mídia paga com CAC crescente.",
    strategy: [
      "Reposicionamento com foco em especialidade.",
      "Programa editorial médico com E-E-A-T.",
      "SEO local por unidade e especialidade.",
    ],
    execution: [
      "Reestruturação completa do site em 12 semanas.",
      "Governança de reviews e reputação.",
      "Automação de agendamento com CRM.",
    ],
    results: [
      { metric: "+120%", label: "agendamentos orgânicos em 9 meses" },
      { metric: "-38%", label: "CAC médio consolidado" },
      { metric: "4,9", label: "média de avaliação nas unidades" },
    ],
    learnings: [
      "Marca institucional forte reduz dependência de mídia paga.",
      "Editorial médico responsável é ativo de longo prazo.",
    ],
  },
  {
    slug: "transformacao-cultural-vive-nos-detalhes",
    client: "Tecnologia B2B",
    sector: "Tecnologia",
    headline: "Toda transformação cultural vive nos detalhes.",
    color: "cream",
    context:
      "Empresa de software B2B em transição de fundador para gestão profissional, buscando escalar internacionalmente.",
    problem:
      "Narrativa dependente do fundador, positioning genérico frente a concorrência global e time comercial sem apoio de marketing.",
    strategy: [
      "Nova categoria e narrativa executiva.",
      "Programa de thought leadership do CEO e diretores.",
      "Estratégia GEO/AEO para autoridade técnica.",
    ],
    execution: [
      "Renovação de identidade e site institucional.",
      "Editorial semanal e newsletter executiva.",
      "Motor ABM com 120 contas-alvo.",
    ],
    results: [
      { metric: "+3,4x", label: "pipeline gerado por marketing" },
      { metric: "+180%", label: "citações em mecanismos de IA" },
      { metric: "22%", label: "ticket médio adicional em novos contratos" },
    ],
    learnings: [
      "Autoridade se constrói com constância editorial, não com campanha isolada.",
      "GEO/AEO abre novos pontos de contato antes ignorados.",
    ],
  },
];

export const getCase = (slug: string) => CASES.find((c) => c.slug === slug);
