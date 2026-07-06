export type TeamMember = { name: string; role: string; bio: string; image: string; linkedin?: string };

const IMG = "https://imperiodeideias.com.br/wp-content/uploads/2026/05";

export const TEAM: TeamMember[] = [
  {
    name: "Lucas Sichetti",
    role: "CEO",
    bio: "Lidera a Império com foco em estratégia, novos negócios e direção criativa. Acompanha diagnósticos, positioning e planejamento para clientes de médio e grande porte.",
    image: `${IMG}/Lucas.jpg`,
    linkedin: "https://www.linkedin.com/in/lucassichetti/",
  },
  {
    name: "Ana Beraldo",
    role: "Gestora de Tráfego",
    bio: "Responsável pela operação de mídia paga e performance. Cuida da eficiência de aquisição, atribuição e mensuração ao longo do funil.",
    image: `${IMG}/AnaBeraldo.jpg`,
  },
  {
    name: "Ana Santos",
    role: "Marketing",
    bio: "Conduz o planejamento e a execução das ações de marketing, garantindo consistência entre estratégia, conteúdo e canais.",
    image: `${IMG}/AnaSantos.jpg`,
    linkedin: "https://www.linkedin.com/in/ana-ribeiro-santos-880a8a2b4/",
  },
  {
    name: "Arthur Negri",
    role: "Designer",
    bio: "Trabalha na construção e evolução de marcas — do sistema visual à aplicação em materiais, digital e ambientes.",
    image: `${IMG}/Arthur.jpg`,
    linkedin: "https://www.linkedin.com/in/arthur-negri/",
  },
  {
    name: "Fabricio Santos",
    role: "Designer",
    bio: "Foca em identidade visual, materiais gráficos e experiência digital, unindo repertório técnico à narrativa de marca.",
    image: `${IMG}/Fabricio.jpg`,
    linkedin: "https://www.linkedin.com/in/fabriciosxntos/",
  },
  {
    name: "Bruno Zito",
    role: "Desenvolvedor Web",
    bio: "Responsável pela camada técnica dos projetos digitais — performance, SEO técnico e integrações que sustentam a operação de marketing.",
    image: `${IMG}/Bruno-2.jpg`,
  },
];
