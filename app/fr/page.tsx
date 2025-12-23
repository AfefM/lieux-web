import { lieux } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const currentLang = 'fr';

  return (
    <main className="bg-black min-h-screen text-white font-sans antialiased">
      
      {/* HEADER : Très fin, collé en haut */}
      <header className="w-full px-6 py-10 md:px-16 flex justify-between items-center border-b border-white/5">
        <div className="flex flex-col">
          <span className="font-bold tracking-[0.4em] text-[13px] md:text-[16px] uppercase">Skander Zarrad</span>
          <span className="text-[9px] tracking-[0.2em] uppercase opacity-50 mt-1">Photographie d&apos;architecture & Patrimoine</span>
        </div>
        <nav className="flex gap-10 text-[10px] tracking-[0.3em] uppercase font-bold">
           <Link href="/fr" className="text-white">Portfolio</Link>
           <Link href="#" className="opacity-40 hover:opacity-100 transition-opacity">Contact</Link>
        </nav>
      </header>

      {/* GRILLE MOSAÏQUE : Très grandes images, couleurs naturelles */}
      <section className="w-full py-10 px-6 md:px-12">
        <div className="flex flex-col gap-20 md:gap-32 max-w-[1600px] mx-auto">
          {lieux.map((lieu: any, index: number) => (
            <Link key={lieu.id} href={`/fr/lieux/${lieu.slug}`} className="group block w-full">
              
              {/* Conteneur Image : Grande taille, respecte les couleurs */}
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-zinc-900">
                <Image 
                  src={lieu.image} 
                  alt={lieu.title[currentLang]} 
                  fill 
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105" 
                  priority={index < 2}
                />
              </div>

              {/* Infos sous l'image : Style Flickr/Adobe Portfolio */}
              <div className="mt-8 flex justify-between items-start border-l border-white/20 pl-6">
                <div>
                  <h3 className="text-2xl md:text-4xl font-light uppercase tracking-tight mb-2">
                    {lieu.title[currentLang]}
                  </h3>
                  <div className="flex gap-4 items-center opacity-40 text-[10px] tracking-[0.3em] uppercase">
                    <span>{lieu.category}</span>
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <span>{lieu.location}</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono opacity-20 hidden md:block">
                  / 0{lieu.id}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER : Simple et élégant */}
      <footer className="py-20 px-8 md:px-16 mt-20 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-40">
            © {new Date().getFullYear()} Skander Zarrad Archive
          </p>
          <div className="flex gap-8 text-[10px] tracking-[0.4em] uppercase font-bold">
            <Link href="https://instagram.com/skanderzarrad" target="_blank" className="hover:line-through">Instagram</Link>
            <Link href="https://www.flickr.com/photos/skanderzarradphotographe/" target="_blank" className="hover:line-through">Flickr</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}