import { lieux } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default async function Page(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  const currentLang = (lang as 'fr' | 'ar' | 'en') || 'fr';

  return (
    <main className="bg-black min-h-screen text-white">
      <header className="fixed top-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference">
        <div className="font-bold tracking-[0.3em] text-[10px] uppercase">Skander Zarrad</div>
        <div className="flex gap-6 text-[10px] tracking-widest uppercase font-black">
           <Link href="/ar" className="hover:opacity-50">AR</Link>
           <Link href="/fr" className="hover:opacity-50">FR</Link>
           <Link href="/en" className="hover:opacity-50">EN</Link>
        </div>
      </header>

      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <Image 
            src={lieux[0].image} 
            alt="Hero" 
            fill 
            className="object-cover opacity-40 grayscale" 
            priority 
        />
        <h1 className="relative z-10 text-[22vw] font-black leading-none tracking-tighter opacity-80 select-none">
            LIEUX
        </h1>
      </section>

      <section className="max-w-[1400px] mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {lieux.map((lieu, index) => (
            <div key={lieu.id} className={`group relative overflow-hidden bg-zinc-900 ${index === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/5]'}`}>
              <Image 
                src={lieu.image} 
                alt={lieu.title[currentLang]} 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-70 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent p-12 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] uppercase tracking-widest text-white/50 mb-2">{lieu.category}</span>
                <h3 className="text-3xl font-bold">{lieu.title[currentLang]}</h3>
                <p className="text-xs text-white/30">{lieu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}