import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-black antialiased text-white selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}