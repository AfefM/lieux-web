import { lieux, Lieu } from "../../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function LieuPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lieu = lieux.find((l: Lieu) => l.slug === slug);

  if (!lieu) notFound();

  return (
    <main className="bg-[#050505] min-h-screen text-zinc-100 font-sans antialiased">
      <header className="fixed top-0 w-full z-50 px-8 py-8 flex justify-between items-center mix-blend-difference text-white">
        <Link href="/fr" className="text-[10px] uppercase tracking-[0.4em] font-bold">← Retour</Link>
        <span className="text-[10px] uppercase tracking-[0.4em] opacity-40">{lieu.title['fr']}</span>
      </header>

      <div className="pt-32 pb-20 px-8 flex flex-col items-center">
        <div className="relative w-full max-w-[1200px] aspect-[16/9] mb-16 shadow-2xl">
          <Image src={lieu.image} alt="Detail" fill className="object-cover" priority />
        </div>
        <div className="max-w-3xl">
          <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 mb-6 block text-center">— {lieu.category}</span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-12 text-center leading-none">{lieu.title['fr']}</h1>
          <p className="text-xl md:text-2xl font-light text-zinc-400 italic leading-relaxed text-center">
            {lieu.description}
          </p>
        </div>
      </div>
    </main>
  );
}