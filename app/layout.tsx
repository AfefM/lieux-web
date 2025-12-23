import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-black antialiased text-white">
        <header className="fixed top-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference">
          <div className="font-bold tracking-[0.3em] text-[10px] uppercase text-white">
            Skander Zarrad
          </div>
          <div className="flex gap-6 text-[10px] tracking-widest uppercase font-black text-white">
             <Link href="/ar">AR</Link>
             <Link href="/fr">FR</Link>
             <Link href="/en">EN</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}