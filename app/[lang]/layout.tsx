import "../globals.css";
import Link from "next/link";

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;

  return (
    <html lang={lang}>
      <body className="bg-black antialiased text-white font-sans scroll-smooth">
        {/* Header flottant */}
        <header className="fixed top-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference">
          <div className="font-bold tracking-[0.3em] text-[10px] uppercase">
            Skander Zarrad
          </div>
          <div className="flex gap-6 text-[10px] tracking-widest uppercase font-black">
             <Link href="/ar" className="hover:opacity-50 transition">AR</Link>
             <Link href="/fr" className="hover:opacity-50 transition">FR</Link>
             <Link href="/en" className="hover:opacity-50 transition">EN</Link>
          </div>
        </header>

        {props.children}

        {/* Signature Giraaf Park */}
        <footer className="p-20 border-t border-white/5 flex flex-col items-center gap-8 bg-[#050505]">
          <div className="text-[10vw] font-black opacity-5 tracking-tighter select-none">
            LIEUX
          </div>
          <div className="text-[9px] tracking-[0.6em] text-gray-600 uppercase">
            Made with love by <span className="text-white">Giraaf Park</span>
          </div>
        </footer>
      </body>
    </html>
  );
}