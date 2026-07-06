export const SITE = {
  name: "Império de Ideias",
  tagline: "Estratégia que vira execução.",
  description:
    "Agência estratégica de marketing, branding, comunicação, design, SEO, GEO, AEO e inteligência artificial. Da criação ao crescimento — com clareza, consistência e foco em resultado.",
  email: "contato@imperiodeideias.com.br",
  phone: "+55 (11) 95827-9176",
  city: "São Paulo, SP",
  whatsapp: {
    number: "5511958279176",
    href: "https://wa.me/5511958279176",
  },
  social: {
    instagram: "https://www.instagram.com/imperiodeideias/",
    linkedin: "https://br.linkedin.com/company/agencia-imperiodeideias",
    youtube: "https://www.youtube.com/c/ImperiodeIdeias/channels",
  },
};

export const MAIN_NAV = [
  { label: "Sobre", to: "/sobre" },
  { label: "Serviços", to: "/servicos" },
  { label: "Segmentos", to: "/segmentos" },
  { label: "Metodologia", to: "/metodologia" },
  { label: "Cases", to: "/cases" },
  { label: "Biblioteca", to: "/biblioteca" },
  { label: "Contato", to: "/contato" },
] as const;
