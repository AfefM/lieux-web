import { lieux } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const currentLang = 'fr';

  if (!lieux || lieux.length === 0) {
    return <div className="bg-black min-h-screen text-white flex items-center justify-center tracking-[0.5em]">CHARGEMENT...</div>;
  }

  return (
    <main className="bg-black min-h-screen text-white font-sans">
      <header className="fixed top-0 w-full z-50 p-8 md:p-12 flex justify-between items-center mix-blend-difference text-white">
        <div className="font-bold tracking-[0.4em] text-[10px] md:text-[12px] uppercase">Skander Zarrad</div>
        <nav className="flex gap-8 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-black">
           <Link href="#" className="opacity-20">AR</Link>
           <Link href="/fr" className="border-b border-white pb-1">FR</Link>
           <Link href="#" className="opacity-20">EN</Link>
        </nav>
      </header>

      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {lieux[0] && (
          <Image src={lieux[0].image} alt="Hero" fill className="object-cover opacity-60 grayscale brightness-75" priority />
        )}
        <h1 className="relative z-10 text-[24vw] font-black leading-none tracking-tighter opacity-90 select-none mix-blend-overlay">LIEUX</h1>
      </section>

      <section className="max-w-[1600px] mx-auto py-32 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {lieux.map((lieu: any, index: number) => (
            <Link key={lieu.id} href={`/fr/lieux/${lieu.slug}`} className="block">
              <div className={`group relative overflow-hidden bg-zinc-950 transition-all duration-700 ${index === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/5]'}`}>
                <Image 
                  src={lieu.image} 
                  alt={lieu.title[currentLang]} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] opacity-60 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-8 md:p-16 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-4 block">{lieu.category}</span>
                  <h3 className="text-3xl md:text-5xl font-black mb-3 leading-tight">{lieu.title[currentLang]}</h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/40">{lieu.location}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="py-20 text-center opacity-30">
        <p className="text-[9px] tracking-[0.5em] uppercase">
          © {new Date().getFullYear()} Skander Zarrad — Architecte d&apos;intérieur
        </p>
      </footer>
    </main>
  );
}