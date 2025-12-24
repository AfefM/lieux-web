"use client";
import { lieux } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";

export default function LieuDetails({ params }: { params: { slug: string } }) {
  const lieu = lieux.find((l) => l.slug === params.slug);
  if (!lieu) return notFound();

  return (
    <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <nav className="fixed top-0 w-full z-50 p-6 md:p-10 flex justify-between items-center mix-blend-difference">
        <Link href="/fr" className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-white">
          <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" />
          Retour
        </Link>
        <div className="font-black tracking-[0.2em] text-xs uppercase italic opacity-40 text-white">SZ. ARCHIVES</div>
      </nav>

      <section className="relative h-[75vh] w-full bg-zinc-900 overflow-hidden">
        <Image src={lieu.image} alt={lieu.title.fr} fill className="object-cover opacity-70 contrast-125" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-12 left-0 w-full px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6 text-white">{lieu.title.fr}</h1>
            <div className="flex flex-wrap gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">
              <div className="flex items-center gap-2"><MapPin size={12} className="text-white" /> {lieu.location.city}, {lieu.location.country}</div>
              <div className="px-3 py-1 border border-white/20 text-white uppercase tracking-widest">{lieu.type}</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-32 px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-12">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">Note de l'artiste</h2>
          <p className="text-2xl md:text-4xl font-light leading-snug tracking-tight text-white italic">
            "{lieu.description.fr}"
          </p>
          <div className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between gap-12">
            <div className="space-y-4">
               <h4 className="text-[10px] uppercase tracking-widest text-white/40">Services</h4>
               <ul className="text-xs uppercase tracking-widest space-y-2 font-bold text-white">
                 <li>Reportage Architecture</li>
                 <li>Tirages d'art numérotés</li>
               </ul>
            </div>
            <div className="max-w-xs">
               <Link href="#" className="inline-block bg-white text-black text-[10px] uppercase tracking-[0.3em] font-black px-8 py-4 hover:invert transition-all">
                  Commander un reportage
               </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="py-20 border-t border-white/10 flex flex-col items-center gap-6">
         <div className="text-[10px] tracking-[0.5em] text-white/20 uppercase font-bold text-center">© 2025 Skander Zarrad</div>
         <Link href="https://giraafpark.com" target="_blank" className="text-[11px] tracking-[0.2em] text-white group flex flex-col items-center font-black">
           <span>DESIGNED & DEVELOPED BY GIRAAF PARK</span>
           <div className="h-[2px] w-full bg-white mt-1"></div>
         </Link>
      </footer>
    </main>
  );
}