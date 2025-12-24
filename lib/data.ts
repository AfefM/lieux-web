export interface Lieu {
  id: number;
  slug: string;
  image: string;
  category: string;
  type: string;
  location: { city: string; country: string };
  title: { fr: string; ar: string; en: string };
  description: { fr: string; ar: string; en: string }; // Ajouté ici
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
    description: { fr: "Une immersion dans le temps au cœur du site romain le mieux préservé de Tunisie.", ar: "دقة الأثرية", en: "Ancient ruins" },
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
    description: { fr: "Le fleuve Medjerda dessinant des courbes parfaites à travers les plaines fertiles.", ar: "مجردة", en: "River curves" },
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
    description: { fr: "L'agriculture ancestrale rencontrant la lumière dorée du nord tunisien.", ar: "الهضاب", en: "Highlands" },
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
    description: { fr: "La sérénité des montagnes se reflétant dans les eaux calmes.", ar: "انعكاس", en: "Reflections" },
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
    description: { fr: "Majestueuse façade romaine témoignant de la grandeur de Sufetula.", ar: "سبيطلة", en: "Roman Temple" },
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
    description: { fr: "Étude sur les détails ornementaux des colonnes de Carthage.", ar: "أعمدة", en: "Carthage details" },
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
    description: { fr: "La texture de la pierre calcaire sous le soleil méditerranéen.", ar: "واجهة", en: "Stone facade" },
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
    description: { fr: "Quand l'architecture antique joue avec les ombres de fin de journée.", ar: "ضوء", en: "Light and shadows" },
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
    description: { fr: "L'immensité de l'amphithéâtre d'El Jem capturée sous un angle inédit.", ar: "الجم", en: "El Jem colosseum" },
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
    description: { fr: "La densité urbaine de Tunis entre tradition et modernité.", ar: "المدينة", en: "Tunis skyline" },
    isPrintAvailable: false
  }
];