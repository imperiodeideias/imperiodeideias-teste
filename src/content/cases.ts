export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  headline: string;
  color: "yellow" | "orange" | "cream" | "dark";
  image: string;
  context: string;
  problem: string;
  strategy: string[];
  execution: string[];
  results: { metric: string; label: string }[];
  learnings: string[];
};

const IMG = "https://imperiodeideias.com.br/wp-content/uploads/2026/05";

export const CASES: CaseStudy[] = [
  {
    slug: "antes-da-criacao-diagnostico",
    client: "Grupo Industrial Nacional",
    sector: "Indústria",
    headline: "Antes da criação, diagnóstico.",
    color: "yellow",
    image: `${IMG}/ProjetoDestaque01.jpg`,
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
    image: `${IMG}/ProjetoDestaque03.jpg`,
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
    image: `${IMG}/ProjetoDestaque05.jpg`,
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
  {
    slug: "marketing-que-valoriza-a-marca",
    client: "Consumo & Varejo",
    sector: "Varejo",
    headline: "Marketing bom valoriza a marca e sustenta o negócio.",
    color: "dark",
    image: `${IMG}/ProjetoDestaque02.jpg`,
    context:
      "Marca de consumo com forte apelo regional buscando ampliar presença nacional sem perder a personalidade construída ao longo dos anos.",
    problem:
      "Comunicação promocional excessiva canibalizava a percepção de valor e reduzia margem em canais próprios.",
    strategy: [
      "Reposicionamento com foco em desejo e categoria.",
      "Campanha institucional com narrativa de longo prazo.",
      "Sistema visual consistente entre off e digital.",
    ],
    execution: [
      "Rebranding leve, preservando ativos históricos.",
      "Sistema de conteúdo por sazonalidade.",
      "Governança editorial com o time interno.",
    ],
    results: [
      { metric: "+18%", label: "ticket médio em canais próprios" },
      { metric: "+45%", label: "recall de marca (pesquisa espontânea)" },
      { metric: "-30%", label: "dependência de promoções" },
    ],
    learnings: [
      "Marca forte é a única defesa real contra a guerra de preço.",
      "Consistência criativa vale mais que volume de peças.",
    ],
  },
  {
    slug: "ponte-entre-estrategia-e-criatividade",
    client: "Serviços B2B",
    sector: "Serviços",
    headline: "A ponte entre estratégia e criatividade.",
    color: "orange",
    image: `${IMG}/ProjetoDestaque04.jpg`,
    context:
      "Empresa de serviços B2B com boa reputação técnica, mas comunicação genérica e sem diferenciação clara frente a concorrentes.",
    problem:
      "Time comercial sem materiais adequados e site institucional que não convertia visitantes qualificados.",
    strategy: [
      "Diagnóstico de proposta de valor por segmento.",
      "Nova narrativa por vertical de atuação.",
      "Redesign do funil digital com foco em conversão.",
    ],
    execution: [
      "Novo site institucional em 10 semanas.",
      "Kit comercial modular por vertical.",
      "Programa de conteúdo executivo mensal.",
    ],
    results: [
      { metric: "+90%", label: "conversão no site institucional" },
      { metric: "+2,1x", label: "reuniões qualificadas por mês" },
      { metric: "35%", label: "redução no ciclo comercial" },
    ],
    learnings: [
      "Criatividade sem estratégia é decoração.",
      "Materiais comerciais são extensão da marca, não apêndice.",
    ],
  },
  {
    slug: "cultura-e-resultado-caminham-juntos",
    client: "Educação Corporativa",
    sector: "Educação",
    headline: "Cultura e resultado caminham juntos.",
    color: "yellow",
    image: `${IMG}/ProjetoDestaque06.jpg`,
    context:
      "Instituição de educação corporativa com portfólio amplo e mensagem dispersa entre programas, formatos e públicos.",
    problem:
      "Baixa clareza sobre o que a instituição defendia, gerando esforço comercial elevado e taxa de conversão baixa.",
    strategy: [
      "Consolidação do manifesto e da promessa central.",
      "Arquitetura de programas por jornada do aluno.",
      "Plano editorial com voz executiva reconhecida.",
    ],
    execution: [
      "Nova identidade e sistema de comunicação.",
      "Materiais de captação por programa.",
      "Programa de embaixadores internos.",
    ],
    results: [
      { metric: "+55%", label: "matrículas em programas premium" },
      { metric: "+72%", label: "engajamento em conteúdo próprio" },
      { metric: "9,2", label: "NPS de alunos ativos" },
    ],
    learnings: [
      "Marca clara reduz esforço de venda em qualquer categoria.",
      "Cultura interna forte é o melhor conteúdo institucional.",
    ],
  },
];

export const getCase = (slug: string) => CASES.find((c) => c.slug === slug);
