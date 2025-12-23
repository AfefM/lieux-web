export interface Lieu {
  id: string;
  category: 'Patrimoine' | 'Architecture' | 'Paysage';
  title: { fr: string; ar: string; en: string };
  location: string;
  image: string;
}

export const lieux: Lieu[] = [
  {
    id: "amphitheatre",
    category: "Patrimoine",
    title: { fr: "L'Amphithéâtre", ar: "المسرح الأثري", en: "The Amphitheatre" },
    location: "El Jem, Tunisie",
    image: "/images/597440660_1363566691885361_1142099729434587204_n.jpg"
  },
  {
    id: "temple-concordia",
    category: "Architecture",
    title: { fr: "Temple de la Concorde", ar: "معبد كونكورديا", en: "Temple of Concordia" },
    location: "Sicile, Italie",
    image: "/images/596144656_1362203858688311_8278407766654426625_n.jpg"
  },
  {
    id: "columns-detail",
    category: "Architecture",
    title: { fr: "Détails Doriques", ar: "تفاصيل دوريكية", en: "Doric Details" },
    location: "Vallée des Temples",
    image: "/images/595545878_1362203855354978_2568394050439283197_n.jpg"
  },
  {
    id: "horizon",
    category: "Architecture",
    title: { fr: "Horizon Urbain", ar: "أفق المدينة", en: "Urban Horizon" },
    location: "Méditerranée",
    image: "/images/597463765_1362203852021645_8963845030945460329_n.jpg"
  }
];