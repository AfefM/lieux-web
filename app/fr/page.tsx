import { lieux, Lieu } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const currentLang = 'fr';

  return (
    <main className="bg-[#080808] min-h-screen text-zinc-100 font-sans antialiased selection:bg-white selection:text-black">
      
      {/* HEADER : Mix-blend pour le côté cool */}
      <header className="fixed top-0 w-full z-50 px-8 py-8 md:px-16 md:py-10 flex justify-between items-start mix-blend-difference text-white">
        <div className="flex flex-col">
          <span className="font-bold tracking-[0.5em] text-[12px] md:text-[14px] uppercase leading-none">Skander Zarrad</span>
          <span className="text-[8px] tracking-[0.3em] uppercase opacity-50 mt-2">Photographe d&apos;architecture</span>
        </div>
        
        <nav className="flex gap-10 text-[10px] tracking-[0.4em] uppercase font-bold text-white">
           <Link href="/fr" className="border-b border-white pb-1">Portfolio</Link>
           <Link href="#" className="opacity-40 hover:opacity-100 transition-opacity">Contact</Link>
        </nav>
      </header>

      {/* HERO SECTION : Lumineuse & Impressionnante */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {lieux[0] && (
          <Image 
              src={lieux[0].image} 
              alt="Skander Zarrad Hero" 
              fill 
              className="object-cover opacity-70 scale-105" // Opacité augmentée, pas de grayscale
              priority 
          />
        )}
        <h1 className="relative z-10 text-[22vw] font-black leading-none tracking-tighter opacity-90 select-none mix-blend-overlay text-white uppercase">
            LIEUX
        </h1>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20">
            <div className="w-[1px] h-20 bg-white"></div>
        </div>
      </section>

      {/* NOTE D'INTENTION */}
      <section className="max-w-3xl mx-auto py-40 px-8 text-center">
        <p className="text-xl md:text-3xl font-light leading-snug tracking-tight text-zinc-400 italic">
          « Fixer l&apos;éphémère, capturer l&apos;équilibre entre la rigueur de la pierre et la poésie de la lumière. »
        </p>
      </section>

      {/* GRILLE : Photos de taille moyenne et élégantes */}
      <section className="max-w-[1500px] mx-auto py-10 px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {lieux.map((lieu: Lieu, index: number) => (
            <Link key={lieu.id} href={`/fr/lieux/${lieu.slug}`} className={`group block ${index % 3 === 0 ? 'md:col-span-2 md:px-32' : ''}`}>
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-zinc-900 mb-8 shadow-2xl">
                <Image 
                  src={lieu.image} 
                  alt={lieu.title[currentLang]} 
                  fill 
                  className="object-cover transition-all duration-[1.5s] group-hover:scale-105 opacity-90 group-hover:opacity-100" // Couleur naturelle
                />
              </div>
              <div className="flex flex-col gap-2 border-l border-zinc-800 pl-8">
                <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-600">Série 0{lieu.id} — {lieu.category}</span>
                <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-zinc-100">{lieu.title[currentLang]}</h3>
                <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-500">{lieu.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER : Distinction nette PHOTOGRAPHE / GIRAAF PARK */}
      <footer className="mt-60 border-t border-zinc-900 bg-[#050505] pt-32 pb-16 px-8 md:px-20">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 mb-40">
          
          <div className="md:col-span-6 space-y-8">
            <h4 className="text-[11px] uppercase tracking-[0.6em] font-bold text-zinc-100">Skander Zarrad Archive</h4>
            <div className="flex gap-10 text-[11px] tracking-[0.4em] uppercase font-bold text-zinc-500">
                <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
                <Link href="#" className="hover:text-white transition-colors">Flickr</Link>
            </div>
          </div>

          <div className="md:col-span-6 flex flex-col items-start md:items-end justify-between">
            <div className="text-left md:text-right pt-10 border-t border-zinc-900 w-full md:w-auto">
               <span className="text-[9px] tracking-[0.4em] uppercase text-zinc-600 block mb-3">Conception Digitale</span>
               <div className="flex flex-col leading-none">
                 <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500">Développé par</span>
                 <span className="text-[15px] tracking-[0.3em] font-black text-white uppercase mt-1 italic leading-none">Giraaf Park</span>
               </div>
            </div>
          </div>

        </div>
        <p className="text-center text-[8px] tracking-[0.5em] uppercase text-zinc-800 pt-10 border-t border-zinc-900">
          © {new Date().getFullYear()} Tous droits réservés
        </p>
      </footer>
    </main>
  );
}