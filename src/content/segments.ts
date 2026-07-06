export type Segment = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  pains: string[];
  solutions: string[];
  faqs: { q: string; a: string }[];
};

export const SEGMENTS: Segment[] = [
  {
    slug: "hospitais",
    title: "Hospitais",
    short: "Marca, reputação e captação para instituições de saúde.",
    intro:
      "Hospitais competem em confiança, corpo clínico e experiência. Ajudamos a traduzir excelência clínica em marca, reputação e demanda qualificada.",
    pains: [
      "Marca institucional distante da experiência real do paciente.",
      "Baixa consistência entre unidades e especialidades.",
      "Dificuldade em comunicar diferenciais clínicos sem infringir normas.",
    ],
    solutions: [
      "Arquitetura de marca por especialidade e unidade.",
      "Programa editorial de autoridade médica com E-E-A-T.",
      "SEO local + GEO para captação por especialidade.",
    ],
    faqs: [
      { q: "É possível anunciar procedimentos médicos?", a: "Sim, respeitando as normas do CFM e órgãos correlatos. Trabalhamos com curadoria jurídica quando necessário." },
      { q: "Como medir marketing hospitalar?", a: "Custo por lead qualificado por especialidade, share of search local, taxa de conversão em agendamento e NPS." },
    ],
  },
  {
    slug: "clinicas",
    title: "Clínicas",
    short: "Marca forte, agenda cheia, paciente certo.",
    intro:
      "Clínicas médicas, odontológicas e de estética que querem ganhar previsibilidade de agenda e ticket médio.",
    pains: [
      "Dependência de indicação sem previsibilidade.",
      "Marca fraca frente a concorrentes maiores.",
      "Investimento em mídia sem retorno mensurável.",
    ],
    solutions: [
      "Posicionamento e identidade adequados à especialidade.",
      "Funil digital com SEO local e mídia paga qualificada.",
      "Governança de reputação e avaliações.",
    ],
    faqs: [
      { q: "Quanto tempo até encher a agenda?", a: "Com estrutura correta, os primeiros ganhos aparecem entre 60 e 120 dias." },
    ],
  },
  {
    slug: "industrias",
    title: "Indústrias",
    short: "Marketing B2B industrial com previsibilidade comercial.",
    intro:
      "Indústrias que vendem para outras empresas e precisam sustentar preço, ciclo e reputação técnica.",
    pains: [
      "Time comercial dependente de feiras e indicações.",
      "Site institucional sem geração de demanda.",
      "Marca técnica pouco reconhecida fora do círculo próximo.",
    ],
    solutions: [
      "Estratégia ABM e conteúdo técnico com autoridade.",
      "SEO e GEO para termos técnicos e de compra.",
      "Automação de nutrição e SLA com o comercial.",
    ],
    faqs: [
      { q: "Marketing gera venda em ciclo longo?", a: "Sim, ao encurtar o ciclo, aumentar o ticket e melhorar a taxa de fechamento." },
    ],
  },
  {
    slug: "tecnologia",
    title: "Tecnologia",
    short: "Marca e demanda para empresas de tecnologia.",
    intro:
      "De software houses a integradores — posicionamento, geração de demanda e conteúdo técnico com autoridade.",
    pains: [
      "Produto complexo e comunicação genérica.",
      "Concorrência global disputando o mesmo cliente.",
      "Ciclo de venda longo e consultivo.",
    ],
    solutions: [
      "Narrativa de categoria e proposta de valor técnica.",
      "Programa editorial e GEO para autoridade de tópico.",
      "Motor de demanda com ABM e mídia qualificada.",
    ],
    faqs: [
      { q: "Vocês atendem empresas de tecnologia em estágio inicial?", a: "Sim, com escopos calibrados por porte e estágio." },
    ],
  },
  {
    slug: "franquias",
    title: "Franquias",
    short: "Marca-mãe forte, franqueado bem servido.",
    intro:
      "Redes de franquia que precisam alinhar marca nacional, ativação local e atração de franqueados.",
    pains: [
      "Franqueados usando peças fora do padrão.",
      "Baixa geração de leads para expansão.",
      "Marca inconsistente entre unidades.",
    ],
    solutions: [
      "Sistema de marca com governança para franqueados.",
      "Kit de mídia local e treinamento.",
      "Funil de expansão com qualificação de perfil.",
    ],
    faqs: [
      { q: "Como padronizar sem engessar?", a: "Sistema modular com peças aprovadas e trilhas de personalização." },
    ],
  },
  {
    slug: "saas",
    title: "SaaS",
    short: "Product marketing, SEO técnico e demanda.",
    intro:
      "Empresas de software como serviço que precisam crescer com CAC saudável e retenção alta.",
    pains: [
      "Onboarding frágil e churn elevado.",
      "SEO técnico mal executado.",
      "Marketing de produto ausente.",
    ],
    solutions: [
      "Positioning e messaging por segmento.",
      "SEO/GEO orientado a jobs-to-be-done.",
      "Lifecycle e product-led growth.",
    ],
    faqs: [
      { q: "Vocês atendem SaaS B2B e B2C?", a: "Sim, com abordagens específicas para cada modelo." },
    ],
  },
  {
    slug: "comercio",
    title: "Comércio",
    short: "Marca, mídia e conversão para o varejo.",
    intro:
      "Comércios que precisam vender mais, fidelizar melhor e sustentar preço em um mercado competitivo.",
    pains: [
      "Excesso de promoções erodindo margem.",
      "Base de clientes subutilizada.",
      "Comunicação genérica.",
    ],
    solutions: [
      "Posicionamento e sazonalidade planejada.",
      "CRM e mídia integradas.",
      "Programa editorial e conteúdo de conveniência.",
    ],
    faqs: [
      { q: "Trabalham com varejo físico e digital?", a: "Sim, incluindo estratégias omnichannel." },
    ],
  },
  {
    slug: "servicos",
    title: "Serviços",
    short: "Empresas de serviço vendendo com clareza e confiança.",
    intro:
      "Escritórios, consultorias e prestadores de serviço que dependem de reputação, especialidade e relacionamento.",
    pains: [
      "Discurso técnico demais ou genérico demais.",
      "Marca pouco diferenciada.",
      "Dependência de indicações.",
    ],
    solutions: [
      "Posicionamento e provas de autoridade.",
      "Conteúdo editorial com GEO.",
      "Funil consultivo com nutrição.",
    ],
    faqs: [
      { q: "Serve para escritórios profissionais?", a: "Sim — advocacia, contabilidade, engenharia, arquitetura e consultorias." },
    ],
  },
  {
    slug: "b2b",
    title: "B2B",
    short: "Marketing que sustenta ciclos longos e tickets altos.",
    intro:
      "Empresas que vendem para empresas e precisam integrar marketing, vendas e produto.",
    pains: [
      "Marketing e vendas desalinhados.",
      "Pipeline instável e caro.",
      "Conteúdo raso para decisor sênior.",
    ],
    solutions: [
      "ABM, marketing de conta e conteúdo executivo.",
      "SLA claro entre marketing e comercial.",
      "Editorial com autoridade real.",
    ],
    faqs: [
      { q: "Vocês trabalham com ABM?", a: "Sim, com abordagens 1:1, 1:few e 1:many conforme o momento." },
    ],
  },
  {
    slug: "empresas-familiares",
    title: "Empresas Familiares",
    short: "Marca e comunicação para negócios com legado.",
    intro:
      "Empresas familiares em transição de geração, expansão ou profissionalização de marketing.",
    pains: [
      "Marca ligada a fundador sem sistema formal.",
      "Comunicação inconsistente entre gerações.",
      "Falta de método para escalar sem perder identidade.",
    ],
    solutions: [
      "Diagnóstico e sistematização de marca.",
      "Governança de comunicação institucional.",
      "Suporte à profissionalização do marketing.",
    ],
    faqs: [
      { q: "Vocês respeitam o legado?", a: "Sim. Nossa abordagem é sempre evolutiva, não disruptiva." },
    ],
  },
];

export const getSegment = (slug: string) => SEGMENTS.find((s) => s.slug === slug);
