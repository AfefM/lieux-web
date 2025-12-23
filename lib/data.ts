export interface Lieu {
  id: number;
  slug: string;
  image: string;
  category: string;
  location: string;
  title: { fr: string; ar: string; en: string };
  description: string;
}

export const lieux: Lieu[] = [
  {
    id: 1,
    slug: "vestiges-romains",
    image: "/images/lieu1.jpg",
    category: "Patrimoine Antique",
    location: "Tunisie",
    title: { fr: "Dougga l'éternelle", ar: "دقة الأثرية", en: "Ancient Dougga" },
    description: "Une série sur la cité antique de Dougga. Ici, la pierre calcaire capte la lumière dorée, créant un contraste saisissant avec l'horizon méditerranéen."
  },
  {
    id: 2,
    slug: "geometrie-moderne",
    image: "/images/lieu2.jpg",
    category: "Architecture",
    location: "Tunis, TN",
    title: { fr: "Lignes Urbaines", ar: "هندسة معاصرة", en: "Urban Lines" },
    description: "Une étude sur le minimalisme des structures contemporaines. Le regard se porte sur la pureté des courbes et la danse des ombres portées."
  }
];