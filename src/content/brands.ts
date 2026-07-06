const IMG = "https://imperiodeideias.com.br/wp-content/uploads/2026/05";

/** Marcas parceiras em destaque (setor com imagem de contexto). */
export const FEATURED_BRANDS = [
  { name: "WeHelp", image: `${IMG}/WeHelp.png` },
  { name: "Síndico Advanced", image: `${IMG}/SindicoAdvanced.png` },
  { name: "Nyx Tecnologia", image: `${IMG}/NyxTecnologia.png` },
  { name: "Hotelaria Hospitalar", image: `${IMG}/HotelariaHospitalar.png` },
  { name: "Coraci", image: `${IMG}/Coraci.png` },
];

/** Contextos de mercado — imagens de aplicação por setor. */
export const SECTOR_IMAGES = [
  `${IMG}/MarcaSetor01.png`,
  `${IMG}/MarcaSetor02.png`,
  `${IMG}/MarcaSetor03.png`,
  `${IMG}/MarcaSetor04.png`,
];

/** Marquee de logos de clientes. */
export const CLIENT_LOGOS = Array.from({ length: 42 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return { name: `Cliente ${n}`, image: `${IMG}/Logo_${n}.png` };
});
