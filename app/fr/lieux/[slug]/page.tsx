import { lieux } from "../../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function LieuPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lieu = lieux.find((l: any) => l.slug === slug);

  if (!lieu) notFound();

  const currentLang = 'fr';

  return (
    <main className="bg-black min-h-screen text-white font-sans">
      <header className="fixed top-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference text-white">
        <Link href="/fr" className="group flex items-center gap-4">
          <span className="text-[20px] transition-transform group-hover:-translate-x-2">←</span>
          <span className="text-[10px] uppercase tracking-[0.3em]">Retour</span>
        </Link>
        <div className="font-bold tracking-[0.4em] text-[10px] uppercase hidden md:block">{lieu.title[currentLang]}</div>
      </header>

      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image src={lieu.image} alt={lieu.title[currentLang]} fill className="object-cover brightness-75" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-12 left-8 md:left-16 text-white">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-4 block">{lieu.category}</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">{lieu.title[currentLang]}</h1>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto py-24 px-8 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="md:col-span-1 space-y-8 text-sm font-light">
          <div><h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Localisation</h4>{lieu.location}</div>
          <button className="w-full py-4 border border-white/20 hover:bg-white hover:text-black transition-colors duration-500 text-[10px] uppercase tracking-[0.3em]">Commander un tirage</button>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">À propos du projet</h2>
          <p className="text-lg md:text-2xl font-light leading-relaxed text-zinc-300">Architecture et lumière : une exploration visuelle signée Skander Zarrad.</p>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 text-center opacity-30 uppercase text-[9px] tracking-[0.5em]">
        © {new Date().getFullYear()} Skander Zarrad — {lieu.title[currentLang]}
      </footer>
    </main>
  );
}