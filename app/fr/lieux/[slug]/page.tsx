import { lieux } from "../../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function LieuPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lieu = lieux.find((l: any) => l.slug === slug);

  if (!lieu) notFound();

  return (
    <main className="bg-black min-h-screen text-white font-sans">
      <header className="fixed top-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference text-white">
        <Link href="/fr" className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em]">
          ← Retour
        </Link>
        <div className="font-bold tracking-[0.4em] text-[10px] uppercase">{lieu.title['fr']}</div>
      </header>

      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image src={lieu.image} alt="Detail" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-12 left-8">
          <h1 className="text-6xl font-black uppercase tracking-tighter">{lieu.title['fr']}</h1>
          <p className="opacity-60 tracking-widest uppercase text-xs mt-2">{lieu.location}</p>
        </div>
      </section>

      <section className="max-w-[800px] mx-auto py-24 px-8 text-center">
        <p className="text-xl font-light leading-relaxed opacity-80 italic">
          &quot;L&apos;architecture est le jeu savant, correct et magnifique des formes assemblées sous la lumière.&quot;
        </p>
      </section>
    </main>
  );
}