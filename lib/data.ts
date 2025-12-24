export interface Lieu {
  id: number;
  slug: string;
  image: string;
  category: string;
  type: string;
  location: { city: string; country: string };
  title: { fr: string; ar: string; en: string };
  isPrintAvailable: boolean;
}

export const categories = ["Tous", "Patrimoine", "Architecture", "Urbain"];

export const lieux: Lieu[] = [
  {
    id: 1,
    slug: "vestiges-dougga",
    image: "/images/lieu1.jpg",
    category: "Patrimoine",
    type: "Site Antique",
    location: { city: "Téboursouk", country: "Tunisie" },
    title: { fr: "Dougga l'Éternelle", ar: "دقة", en: "Ancient Dougga" },
    isPrintAvailable: true
  },
  {
    id: 2,
    slug: "vallee-mejerda",
    image: "/images/lieu2.jpg",
    category: "Urbain",
    type: "Paysage",
    location: { city: "Testour", country: "Tunisie" },
    title: { fr: "Méandres du Nord", ar: "مجردة", en: "River Curves" },
    isPrintAvailable: false
  },
  {
    id: 3,
    slug: "colline-olives",
    image: "/images/lieu3.jpg",
    category: "Patrimoine",
    type: "Paysage",
    location: { city: "Béja", country: "Tunisie" },
    title: { fr: "Les Hauts Plateaux", ar: "الهضاب", en: "The Highlands" },
    isPrintAvailable: true
  },
  {
    id: 4,
    slug: "riviere-montagne",
    image: "/images/lieu4.jpg",
    category: "Urbain",
    type: "Nature",
    location: { city: "Zaghouan", country: "Tunisie" },
    title: { fr: "Reflets d'Eau", ar: "انعكاس", en: "Water Reflections" },
    isPrintAvailable: false
  },
  {
    id: 5,
    slug: "temple-victoire",
    image: "/images/lieu5.jpg",
    category: "Patrimoine",
    type: "Temple",
    location: { city: "Sbeïtla", country: "Tunisie" },
    title: { fr: "Temple de Minerve", ar: "سبيطلة", en: "Minerva Temple" },
    isPrintAvailable: true
  },
  {
    id: 6,
    slug: "colonnes-ordre",
    image: "/images/lieu6.jpg",
    category: "Architecture",
    type: "Détail Antique",
    location: { city: "Carthage", country: "Tunisie" },
    title: { fr: "Ordre Corinthien", ar: "أعمدة", en: "Corinthian Columns" },
    isPrintAvailable: false
  },
  {
    id: 7,
    slug: "facade-temple",
    image: "/images/lieu7.jpg",
    category: "Architecture",
    type: "Monument",
    location: { city: "El Jem", country: "Tunisie" },
    title: { fr: "Façade de Pierre", ar: "واجهة", en: "Stone Facade" },
    isPrintAvailable: true
  },
  {
    id: 8,
    slug: "portique-lumineux",
    image: "/images/lieu8.jpg",
    category: "Architecture",
    type: "Structure",
    location: { city: "Utique", country: "Tunisie" },
    title: { fr: "Lumière d'Automne", ar: "ضوء", en: "Autumn Light" },
    isPrintAvailable: false
  },
  {
    id: 9,
    slug: "amphitheatre-jem",
    image: "/images/lieu9.jpg",
    category: "Patrimoine",
    type: "Arène",
    location: { city: "El Jem", country: "Tunisie" },
    title: { fr: "Colisée d'Afrique", ar: "الجم", en: "African Colosseum" },
    isPrintAvailable: true
  },
  {
    id: 10,
    slug: "vue-panoramique",
    image: "/images/lieu10.jpg",
    category: "Urbain",
    type: "Ville",
    location: { city: "Tunis", country: "Tunisie" },
    title: { fr: "Panorama Médina", ar: "المدينة", en: "Medina View" },
    isPrintAvailable: false
  }
];