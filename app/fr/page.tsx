"use client";
import { useState, useMemo } from "react";
import { lieux, categories } from "@/lib/data";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Search, ShoppingCart, ArrowUpRight } from "lucide-react";

export default function ProfessionalLieuxPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 400], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  const filteredLieux = useMemo(() => {
    return lieux.filter(lieu => {
      const matchCategory = activeCategory === "Tous" || lieu.category === activeCategory;
      const matchSearch = 
        lieu.title.fr.toLowerCase().includes(searchQuery.toLowerCase()) || 
        lieu.location.city.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black font-sans">
      <header className="fixed top-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="flex flex-col">
          <span className="font-black tracking-[0.15em] text-xl text-white">SKANDER ZARRAD</span>
          <span className="text-[9px] uppercase tracking-[0.4em] mt-1 text-white font-medium">Photography & Architecture</span>
        </div>
        <nav className="flex gap-8 text-[10px] uppercase tracking-[0.3em] font-black text-white">
          <Link href="#" className="hover:text-zinc-400 transition">Portfolio</Link>
          <Link href="#" className="bg-white text-black px-5 py-2 hover:bg-zinc-200 transition-all rounded-sm font-black">Contact</Link>
        </nav>
      </header>

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/20">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0">
          <Image src={lieux[0]?.image} alt="Hero" fill className="object-cover opacity-70 contrast-125" priority />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
        <div className="relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-[16vw] font-black leading-none tracking-tighter uppercase text-white">
            Lieux<span className="text-white/40">.</span>
          </motion.h1>
          <p className="text-[14px] tracking-[1.5em] uppercase text-white mt-6 font-black ml-[1.5em] drop-shadow-lg text-center">Archives Visuelles</p>
        </div>
      </section>

      <nav className="sticky top-[89px] z-40 bg-black border-b border-white/30 py-6">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8 overflow-x-auto no-scrollbar w-full md:w-auto">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`text-[11px] uppercase tracking-[0.2em] font-black transition-all relative pb-2 ${activeCategory === cat ? "text-white" : "text-white/40 hover:text-white"}`}>
                {cat}
                {activeCategory === cat && <motion.div layoutId="nav-line" className="absolute bottom-0 left-0 w-full h-[2px] bg-white" />}
              </button>
            ))}
          </div>
          <div className="relative flex items-center w-full md:w-80 border-b border-white/40 focus-within:border-white transition-colors">
            <Search size={16} className="absolute left-0 text-white" />
            <input type="text" placeholder="RECHERCHER..." className="bg-transparent text-[11px] uppercase tracking-[0.3em] pl-8 py-2 focus:outline-none w-full text-white placeholder:text-white/30 font-bold" onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
        </div>
      </nav>

      <section className="max-w-[1400px] mx-auto py-24 px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-24">
          <AnimatePresence mode="popLayout">
            {filteredLieux.map((lieu, index) => (
              <motion.div layout key={lieu.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="group flex flex-col">
                <Link href={`/fr/lieux/${lieu.slug}`}>
                  <div className="relative aspect-[3/2] overflow-hidden bg-zinc-900 border border-white/20 shadow-2xl">
                    <Image src={lieu.image} alt={lieu.title.fr} fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                    {lieu.isPrintAvailable && <div className="absolute bottom-3 right-3 bg-white text-black p-2 rounded-sm shadow-xl"><ShoppingCart size={14} /></div>}
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-[14px] font-black uppercase tracking-[0.1em] leading-tight text-white">{lieu.title.fr}</h3>
                      <ArrowUpRight size={16} className="text-white shrink-0" />
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-zinc-200 uppercase tracking-[0.2em] font-bold">
                      <MapPin size={12} className="text-white" /> {lieu.location.city}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <footer className="py-32 px-6 md:px-12 border-t border-white/20 bg-black flex flex-col items-center">
        <div className="max-w-[1400px] w-full flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="text-[12px] tracking-[0.5em] text-white font-black uppercase">© 2025 SKANDER ZARRAD</div>
          <div className="flex flex-col items-center md:items-end gap-2 text-center">
            <div className="text-[10px] tracking-[0.3em] text-white/60 uppercase font-bold">Designed & Developed by</div>
            <Link href="https://giraafpark.com" target="_blank" className="group flex flex-col items-center md:items-end font-black">
              <span className="text-[16px] font-black tracking-[0.2em] uppercase text-white group-hover:text-zinc-400 transition-colors">GIRAAF PARK</span>
              <div className="h-[2px] w-full bg-white group-hover:bg-zinc-400 transition-all mt-1"></div>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}