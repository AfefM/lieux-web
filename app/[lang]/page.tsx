import { lieux } from "@/lib/data";
import Image from "next/image";

export default async function Page(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  const currentLang = (lang as 'fr' | 'ar' | 'en') || 'fr';

  return (
    <main className="bg-black min-h-screen">
      {/* SECTION HERO */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        {lieux.length > 0 && (
          <Image 
            src={lieux[0].image} 
            alt="Hero" 
            fill 
            className="object-cover opacity-50 grayscale"
            priority
          />
        )}
        <div className="relative z-10 text-center px-4 text-white">
          <h1 className="text-[25vw] font-black leading-none tracking-tighter opacity-80 select-none">
            LIEUX
          </h1>
          <p className="text-[10px] tracking-[0.8em] uppercase font-light mt-4 opacity-40">
             Collection Patrimoine — Skander Zarrad
          </p>
        </div>
      </section>

      {/* SECTION GALERIE */}
      <section className="max-w-[1400px] mx-auto py-32 px-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {lieux.map((lieu, index) => (
            <div 
              key={lieu.id} 
              className={`group relative overflow-hidden bg-zinc-900 ${index === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/5]'}`}
            >
              <Image 
                src={lieu.image} 
                alt={lieu.title[currentLang as 'fr' | 'ar' | 'en']} 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent p-12 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] uppercase tracking-widest text-white/50 mb-2">{lieu.category}</span>
                <h3 className="text-3xl font-bold">{lieu.title[currentLang as 'fr' | 'ar' | 'en']}</h3>
                <p className="text-xs text-white/30 mt-1">{lieu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}