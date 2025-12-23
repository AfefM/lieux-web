import "./globals.css";

export const metadata = {
  title: "Skander Zarrad | Portfolio",
  description: "Architecte d'intérieur",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-black antialiased text-white selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}