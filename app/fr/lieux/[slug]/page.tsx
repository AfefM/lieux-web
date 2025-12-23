import { lieux } from "../../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function LieuPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // On cherche le lieu correspondant au slug
  const lieu = lieux.find((l: any) => l.slug === slug);

  // Si le lieu n'existe pas, on renvoie une 404
  if (!lieu) {
    notFound();
  }

  const currentLang = 'fr';

  return (
    <main className="bg-black min-h-screen text-white font-sans">
      {/* HEADER DE NAVIGATION INTERNE */}
      <header className="fixed top-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference text-white">
        <Link href="/fr" className="group flex items-center gap-4">
          <span className="text-[20px] transition-transform group-hover:-translate-x-2">←</span>
          <span className="text-[10px] uppercase tracking-[0.3em]">Retour</span>
        </Link>
        <div className="font-bold tracking-[0.4em] text-[10px] uppercase hidden md:block">
          {lieu.title[currentLang]}
        </div>
      </header>

      {/* SECTION HERO DU PROJET */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src={lieu.image}
          alt={lieu.title[currentLang]}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-12 left-8 md:left-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-4 block">
            {lieu.category}
          </span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            {lieu.title[currentLang]}
          </h1>
        </div>
      </section>

      {/* SECTION DÉTAILS & DESCRIPTION */}
      <section className="max-w-[1200px] mx-auto py-24 px-8 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="md:col-span-1 space-y-8">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Localisation</h4>
            <p className="text-sm font-light">{lieu.location}</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Architecte / Client</h4>
            <p className="text-sm font-light">Skander Zarrad Portfolio</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Année</h4>
            <p className="text-sm font-light">2024</p>
          </div>
          <button className="w-full py-4 border border-white/20 hover:bg-white hover:text-black transition-colors duration-500 text-[10px] uppercase tracking-[0.3em]">
            Commander un tirage
          </button>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">À propos du projet</h2>
          <p className="text-lg md:text-2xl font-light leading-relaxed text-zinc-300">
             {/* Tu pourras ajouter un champ description dans ton lib/data.ts plus tard */}
             Ce projet explore la dualité entre l&apos;architecture vernaculaire et le minimalisme contemporain. Chaque cliché capture l&apos;essence des matériaux et la danse de la lumière naturelle sur les volumes.
          </p>
        </div>
      </section>

      {/* GALERIE DU LIEU (Simulation) */}
      <section className="px-4 md:px-8 pb-32">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {/* Ici, on pourrait boucler sur un tableau lieu.gallery si tu l'ajoutes */}
          <div className="relative aspect-[4/5] w-full bg-zinc-900 overflow-hidden">
             <Image src={lieu.image} alt="Detail 1" fill className="object-cover opacity-80 hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />
          </div>
          <div className="relative aspect-square w-full bg-zinc-900 overflow-hidden">
             <Image src={lieu.image} alt="Detail 2" fill className="object-cover opacity-80 hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />
          </div>
          <div className="relative aspect-[3/4] w-full bg-zinc-900 overflow-hidden">
             <Image src={lieu.image} alt="Detail 3" fill className="object-cover opacity-80 hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-[9px] tracking-[0.5em] uppercase opacity-30">
          © {new Date().getFullYear()} Skander Zarrad — {lieu.title[currentLang]}
        </p>
      </footer>
    </main>
  );
}