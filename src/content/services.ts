export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  whatIs: string;
  howItWorks: string[];
  whenToHire: string[];
  benefits: string[];
  problemsSolved: string[];
  imperioWay: string;
  differentiators: string[];
  process: { step: string; description: string }[];
  faqs: { q: string; a: string }[];
};

const commonProcess = [
  { step: "Diagnóstico", description: "Entendemos negócio, mercado, marca, dados e objetivos antes de propor qualquer coisa." },
  { step: "Estratégia", description: "Definimos posicionamento, prioridades, indicadores e o caminho mais curto até o resultado." },
  { step: "Planejamento", description: "Traduzimos a estratégia em plano com escopo, prazos, responsáveis e entregas claras." },
  { step: "Execução", description: "Time multidisciplinar sênior operando com ritmo, qualidade e atenção ao detalhe." },
  { step: "Monitoramento", description: "Acompanhamos indicadores em tempo real e reportamos com transparência." },
  { step: "Otimização", description: "Ajustamos rota com base em evidência para acelerar aprendizado e resultado." },
];

export const SERVICES: Service[] = [
  {
    slug: "marketing-estrategico",
    title: "Marketing Estratégico",
    short: "Do diagnóstico ao plano que faz a empresa crescer.",
    summary:
      "Planejamento de marketing baseado em dados, mercado e objetivos de negócio — com prioridades claras e indicadores de sucesso.",
    whatIs:
      "Marketing estratégico é o trabalho de definir onde a empresa deve competir, com qual proposta de valor e por meio de quais canais. É o alicerce que torna toda a execução coerente e mensurável.",
    howItWorks:
      [
        "Diagnóstico de negócio, mercado, concorrência e marca.",
        "Definição de posicionamento e proposta de valor.",
        "Priorização de canais, ofertas e públicos.",
        "Plano de ação com metas, indicadores e cadência de revisão.",
      ],
    whenToHire: [
      "A empresa cresceu e o marketing virou reativo.",
      "Existem muitos canais ativos, mas pouca clareza de resultado.",
      "Há um novo produto, mercado ou público a ser conquistado.",
      "É preciso justificar investimento em marketing com números.",
    ],
    benefits: [
      "Decisões mais rápidas e menos dependentes de opinião.",
      "Investimento concentrado onde há maior retorno.",
      "Alinhamento entre marketing, comercial e diretoria.",
      "Base sólida para escalar branding, mídia e conteúdo.",
    ],
    problemsSolved: [
      "Ausência de plano formal de marketing.",
      "Ações desconectadas entre times e agências.",
      "Falta de indicadores claros de performance.",
      "Dificuldade em priorizar iniciativas.",
    ],
    imperioWay:
      "Combinamos análise de dados, entrevistas com liderança, benchmark competitivo e conhecimento de comportamento de compra para entregar um plano que a operação consegue executar — e a diretoria consegue defender.",
    differentiators: [
      "Time sênior liderando cada projeto.",
      "Método próprio validado em dezenas de setores.",
      "Entregas conectadas a metas de receita, não a vaidade.",
    ],
    process: commonProcess,
    faqs: [
      { q: "Quanto tempo leva um planejamento estratégico?", a: "Em média de 6 a 10 semanas, dependendo da maturidade da empresa e da disponibilidade das áreas envolvidas." },
      { q: "Quanto custa contratar marketing estratégico?", a: "Projetos partem de faixas específicas por porte de empresa. Fazemos um diagnóstico rápido antes de propor escopo e investimento." },
      { q: "Quais indicadores acompanhar?", a: "Receita influenciada, custo por aquisição, LTV, participação de mercado, awareness assistido e velocidade do pipeline são pontos comuns — mas o painel é sempre desenhado para o seu negócio." },
      { q: "A Império substitui o time interno?", a: "Não. Trabalhamos como extensão sênior do seu time, transferindo conhecimento e método." },
    ],
  },
  {
    slug: "branding",
    title: "Branding",
    short: "Marcas que significam algo — e são reconhecidas por isso.",
    summary:
      "Construção e gestão de marcas com propósito claro, identidade consistente e presença coerente em todos os pontos de contato.",
    whatIs:
      "Branding é a disciplina de construir percepção. É o que faz uma marca ser lembrada, escolhida e defendida — antes, durante e depois da compra.",
    howItWorks: [
      "Imersão em negócio, cultura, produto e clientes.",
      "Definição de essência, posicionamento e arquitetura de marca.",
      "Sistema visual e verbal completo.",
      "Guia de aplicação e ativação da marca.",
    ],
    whenToHire: [
      "A marca cresceu, mas ainda parece a mesma de anos atrás.",
      "Existe confusão entre a marca-mãe e submarcas ou produtos.",
      "A empresa passou por fusão, pivot ou reposicionamento.",
      "É difícil explicar em uma frase o que a empresa faz.",
    ],
    benefits: [
      "Percepção de valor superior — e menos disputa por preço.",
      "Coerência em campanhas, produto, atendimento e vendas.",
      "Atração de talento e parceiros mais qualificados.",
      "Base sólida para escalar comunicação e mídia.",
    ],
    problemsSolved: [
      "Identidade visual datada ou inconsistente.",
      "Tom de voz variando entre canais.",
      "Falta de arquitetura clara para submarcas.",
      "Ausência de manual e governança de marca.",
    ],
    imperioWay:
      "Branding, para nós, começa em estratégia de negócio e termina em experiência real. Entregamos marca aplicada — não apenas apresentação em PDF.",
    differentiators: [
      "Estratégia, verbal e visual sob o mesmo teto.",
      "Método que conecta marca a metas comerciais.",
      "Governança de marca para times internos.",
    ],
    process: commonProcess,
    faqs: [
      { q: "Rebranding sempre significa mudar o logo?", a: "Não. Muitas vezes preservamos o símbolo e evoluímos o sistema, o tom de voz e a aplicação." },
      { q: "Quanto tempo dura um projeto de branding?", a: "Entre 8 e 16 semanas, dependendo da complexidade da arquitetura e do número de aplicações." },
      { q: "Como medir o resultado de branding?", a: "Pesquisas de percepção, share of search, custo de aquisição, taxa de conversão qualificada e NPS são bons pontos de partida." },
    ],
  },
  {
    slug: "comunicacao",
    title: "Comunicação",
    short: "A mensagem certa, no canal certo, na hora certa.",
    summary:
      "Estratégia e gestão de comunicação integrada — do institucional ao promocional, do interno ao externo.",
    whatIs:
      "Comunicação é a orquestração de tudo o que a marca diz, escreve e mostra. Boa comunicação constrói reputação; má comunicação destrói.",
    howItWorks: [
      "Mapeamento de públicos e stakeholders.",
      "Definição de narrativas e mensagens-chave.",
      "Plano editorial e de canais.",
      "Produção, gestão e mensuração.",
    ],
    whenToHire: [
      "A empresa comunica muito, mas nada memorável fica.",
      "Diferentes áreas falam coisas diferentes ao mercado.",
      "Há um evento, lançamento ou crise a gerir.",
      "É preciso profissionalizar a assessoria de conteúdo.",
    ],
    benefits: [
      "Reputação sólida e defensável.",
      "Alinhamento entre marketing, RH, produto e liderança.",
      "Comunicações prontas para escala.",
      "Menor risco em momentos sensíveis.",
    ],
    problemsSolved: [
      "Falta de consistência entre canais.",
      "Discurso institucional distante da prática.",
      "Baixa capacidade de resposta em crises.",
    ],
    imperioWay:
      "Trabalhamos com uma matriz de narrativas que conecta propósito, produto e prova — traduzida em conteúdo, PR, endomarketing e liderança executiva.",
    differentiators: [
      "Visão integrada de comunicação, marca e mídia.",
      "Time editorial sênior.",
      "Governança de mensagens em multi-canal.",
    ],
    process: commonProcess,
    faqs: [
      { q: "Comunicação inclui assessoria de imprensa?", a: "Pode incluir, junto de conteúdo, endomarketing, gestão de crises e comunicação executiva." },
      { q: "Como medimos comunicação?", a: "Share of voice, sentimento, alcance qualificado, engajamento com decisores e conversão assistida." },
    ],
  },
  {
    slug: "design",
    title: "Design",
    short: "Design que resolve problemas de negócio — não decora.",
    summary:
      "Design gráfico, digital e de produto para marcas que competem em atenção e em experiência.",
    whatIs:
      "Design é a materialização da estratégia. Do site à embalagem, do relatório à campanha — cada peça é decisão, não estética solta.",
    howItWorks: [
      "Briefing estratégico e definição de objetivo por peça.",
      "Direção de arte alinhada ao sistema de marca.",
      "Produção com padrões editoriais rigorosos.",
      "Revisão, aprovação e entrega em múltiplos formatos.",
    ],
    whenToHire: [
      "A marca precisa evoluir a linguagem visual.",
      "Há alto volume de peças com qualidade instável.",
      "Uma campanha ou lançamento exige direção sênior.",
    ],
    benefits: [
      "Consistência visual em escala.",
      "Padrão editorial comparável a marcas globais.",
      "Materiais que sustentam preço e posicionamento.",
    ],
    problemsSolved: [
      "Peças que não seguem o manual.",
      "Direção de arte fraca ou inexistente.",
      "Dependência de freelas sem método.",
    ],
    imperioWay:
      "Design opera junto de estratégia, copy e mídia. Isso evita retrabalho, brief mal traduzido e peça que não converte.",
    differentiators: [
      "Direção de arte sênior em cada projeto.",
      "Padrão editorial rigoroso.",
      "Sistemas de design escaláveis.",
    ],
    process: commonProcess,
    faqs: [
      { q: "Design inclui vídeo e motion?", a: "Sim. Também produzimos ilustração, 3D e material impresso." },
      { q: "Como funciona a squad dedicada?", a: "Você tem um time fixo, com backlog priorizado semanalmente e SLA de entregas." },
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    short: "Tráfego orgânico previsível, sustentável e mensurável.",
    summary:
      "Estratégia e execução de SEO técnica, on-page e de conteúdo para marcas que querem ser encontradas com autoridade.",
    whatIs:
      "SEO é o conjunto de práticas que faz uma marca ser encontrada por quem já está procurando por ela — no Google, no Bing e em mecanismos derivados.",
    howItWorks: [
      "Auditoria técnica, semântica e de autoridade.",
      "Arquitetura de conteúdo e mapa de intenções de busca.",
      "Produção editorial e otimização on-page.",
      "Link building qualificado e Digital PR.",
    ],
    whenToHire: [
      "O crescimento depende excessivamente de mídia paga.",
      "O site tem tráfego, mas não converte.",
      "É preciso ganhar autoridade em novos tópicos.",
    ],
    benefits: [
      "Custo por aquisição mais baixo no longo prazo.",
      "Tráfego qualificado e recorrente.",
      "Autoridade em tópicos estratégicos.",
    ],
    problemsSolved: [
      "Site invisível para termos importantes.",
      "Canibalização entre páginas.",
      "Falta de estratégia de conteúdo alinhada a receita.",
    ],
    imperioWay:
      "Tratamos SEO como programa de longo prazo com sprints mensais. Estratégia, técnica e conteúdo caminham juntos — sem fábrica de texto.",
    differentiators: [
      "SEO integrado a marca, produto e mídia.",
      "Editorial com autoridade de tópico real.",
      "Governança técnica contínua.",
    ],
    process: commonProcess,
    faqs: [
      { q: "Quanto tempo leva para ver resultado?", a: "Em geral, ganhos consistentes começam entre 4 e 8 meses; ganhos técnicos aparecem antes." },
      { q: "SEO substitui mídia paga?", a: "Não. Trabalham em conjunto — mídia acelera, SEO sustenta." },
    ],
  },
  {
    slug: "geo-aeo",
    title: "GEO & AEO",
    short: "Preparando a marca para mecanismos de resposta e IA.",
    summary:
      "Otimização para Generative Engine Optimization (GEO) e Answer Engine Optimization (AEO) — ChatGPT, Gemini, Claude, Perplexity, Copilot e outros.",
    whatIs:
      "GEO e AEO são a evolução do SEO para o mundo das respostas geradas por IA e assistentes. O objetivo é fazer a marca ser citada, recomendada e usada como fonte por esses sistemas.",
    howItWorks: [
      "Auditoria de citabilidade e presença em respostas geradas.",
      "Estruturação de conteúdo com definições claras, listas e tabelas.",
      "Aplicação de schema.org e sinais de E-E-A-T.",
      "Publicação de conteúdo baseado em perguntas reais do público.",
    ],
    whenToHire: [
      "A marca não aparece em respostas do ChatGPT ou Perplexity.",
      "Concorrentes já são citados em mecanismos de IA.",
      "A empresa quer virar fonte em um tópico específico.",
    ],
    benefits: [
      "Presença em novos pontos de contato dominados por IA.",
      "Tráfego qualificado vindo de assistentes.",
      "Reforço de autoridade em tópicos estratégicos.",
    ],
    problemsSolved: [
      "Conteúdo estruturado para humanos, mas ilegível para IA.",
      "Ausência de dados estruturados e schema.",
      "Falta de páginas de resposta direta.",
    ],
    imperioWay:
      "Combinamos SEO técnico, editorial estruturado, schema.org completo e sinais de autoridade para transformar o site em uma fonte que a IA quer citar.",
    differentiators: [
      "Metodologia própria de estruturação para GEO/AEO.",
      "Editorial preparado para reuso por IA.",
      "Governança contínua de schema e citabilidade.",
    ],
    process: commonProcess,
    faqs: [
      { q: "GEO substitui SEO?", a: "Não. Amplia. O trabalho de base continua sendo SEO técnico e editorial." },
      { q: "Como saber se estou sendo citado por IAs?", a: "Fazemos auditorias periódicas em ChatGPT, Gemini, Claude, Perplexity e Copilot com prompts calibrados." },
      { q: "Vale a pena investir agora?", a: "Sim. A janela de vantagem é curta — quem estrutura conteúdo antes ganha citações que se acumulam." },
    ],
  },
  {
    slug: "inteligencia-artificial",
    title: "Inteligência Artificial",
    short: "IA aplicada a marketing, comunicação e operações.",
    summary:
      "Do uso responsável de IA generativa a agentes e automações que aceleram o time de marketing e a operação comercial.",
    whatIs:
      "Consultoria e implementação de IA para marketing e comunicação — mapeando casos de uso, escolhendo ferramentas, implantando fluxos e treinando times.",
    howItWorks: [
      "Diagnóstico de processos e oportunidades.",
      "Priorização de casos de uso com ROI claro.",
      "Implementação de agentes, automações e prompts.",
      "Treinamento e governança do time.",
    ],
    whenToHire: [
      "O time de marketing gasta tempo em tarefas repetitivas.",
      "Há dados suficientes, mas pouca inteligência aplicada.",
      "A empresa quer usar IA sem risco reputacional.",
    ],
    benefits: [
      "Ganho de produtividade mensurável.",
      "Redução de retrabalho e custo operacional.",
      "Uso de IA com governança e segurança.",
    ],
    problemsSolved: [
      "Adoção pontual e caótica de ferramentas.",
      "Falta de governança sobre uso de IA.",
      "Prompts frágeis que geram inconsistência.",
    ],
    imperioWay:
      "Aplicamos IA onde ela cabe — não onde ela é moda. Cada implementação começa por processo, dados e governança.",
    differentiators: [
      "Time que domina marketing, dados e engenharia de prompts.",
      "Foco em ROI, não em novidade.",
      "Governança clara para times de marketing.",
    ],
    process: commonProcess,
    faqs: [
      { q: "Vocês desenvolvem agentes personalizados?", a: "Sim, para tarefas repetitivas de marketing, atendimento e operação de conteúdo." },
      { q: "IA substitui pessoas?", a: "Não. Libera pessoas de tarefas de baixo valor para focarem em estratégia, relacionamento e criatividade." },
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
