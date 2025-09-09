import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dagmar Mazalová - Konstelace a Arteterapie",
  description: "Osobní doprovázení prostřednictvím konstelací, arteterapie a individuální práce. Konstelace nelze popsat, musí se zažít.",
  keywords: ["konstelace", "arteterapie", "doprovázení", "osobní rozvoj", "terapie", "Dagmar Mazalová"],
  authors: [{ name: "Dagmar Mazalová" }],
  openGraph: {
    title: "Dagmar Mazalová - Konstelace a Arteterapie",
    description: "Osobní doprovázení prostřednictvím konstelací, arteterapie a individuální práce.",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased watercolor-bg">
        <div className="watercolor-overlay min-h-screen">
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
