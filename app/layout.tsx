import "./globals.css";

export const metadata = {
  title: "Skander Zarrad | Photographe d'architecture",
  description: "Documentation photographique du patrimoine et de l'architecture.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-black antialiased text-white selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}