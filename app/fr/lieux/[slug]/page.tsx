"use client";
import { lieux } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, mouse } from "lucide-react";

export default function LieuDetails({ params }: { params: { slug: string } }) {
  const lieu = lieux.find((l) => l.slug === params.slug);

  if (!lieu) return notFound();

  return (
    <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      
      {/* BOUTON RETOUR */}
      <nav className="fixed top-0 w-full z-50 p-6 md:p-10 flex justify-between items-center mix-blend-difference">
        <Link 
          href="/fr" 
          className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" />
          Retour
        </Link>
        <div className="font-black tracking-[0.2em] text-xs uppercase italic opacity-40">SZ. ARCHIVES</div>
      </nav>

      {/* HERO SECTION : L'IMAGE EN GRAND */}
      <section className="relative h-[85vh] w-full bg-zinc-900 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image 
            src={lieu.image} 
            alt={lieu.title.fr} 
            fill 
            className="object-cover opacity-80 contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>

        <div className="absolute bottom-12 left-0 w-full px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
              {lieu.title.fr}
            </h1>
            <div className="flex flex-wrap gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">
              <div className="flex items-center gap-2">
                <MapPin size={12} className="text-white" /> {lieu.location.city}, {lieu.location.country}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={12} className="text-white" /> Archives 2025
              </div>
              <div className="px-3 py-1 border border-white/20 text-white uppercase tracking-widest">
                {lieu.type}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENU TEXTUEL : ICI ON UTILISE .fr */}
      <section className="max-w-4xl mx-auto py-32 px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">
            Note de l'artiste
          </h2>
          <p className="text-2xl md:text-4xl font-light leading-snug tracking-tight text-zinc-100 italic">
             {/* CORRECTION ICI : on ajoute .fr car c'est un objet maintenant */}
            "{lieu.description.fr}"
          </p>
          
          <div className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between gap-12">
            <div className="space-y-4">
               <h4 className="text-[10px] uppercase tracking-widest text-white/40">Services</h4>
               <ul className="text-xs uppercase tracking-widest space-y-2 font-bold">
                 <li>Reportage Architecture</li>
                 <li>Post-production Digitale</li>
                 <li>Tirages d'art numérotés</li>
               </ul>
            </div>
            <div className="max-w-xs space-y-6">
               <p className="text-[11px] uppercase tracking-widest leading-relaxed text-zinc-400">
                 Pour toute demande de reportage ou acquisition de licence d'image, veuillez contacter le studio.
               </p>
               <Link href="#" className="inline-block bg-white text-black text-[10px] uppercase tracking-widest font-black px-8 py-4 hover:invert transition-all">
                  Commander un reportage
               </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER DISCRET */}
      <footer className="py-20 border-t border-white/5 flex flex-col items-center gap-6">
         <div className="text-[10px] tracking-[0.5em] text-white/20 uppercase">
           © 2025 Skander Zarrad
         </div>
         <Link href="https://giraafpark.com" className="text-[9px] tracking-[0.2em] text-white/40 hover:text-white transition uppercase font-black">
           Designed & Developed by Giraaf Park
         </Link>
      </footer>

    </main>
  );
}