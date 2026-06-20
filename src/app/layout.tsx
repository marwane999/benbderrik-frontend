import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { legalServiceSchema } from "@/lib/schema";
import "@/styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Maître Mohamed Ben Abderrazik",
    default: "Maître Mohamed Ben Abderrazik | Avocat à Marrakech",
  },
  description:
    "Cabinet d'avocat à Marrakech agréé près la Cour de Cassation. Plus de 45 ans d'expertise en droit commercial, bancaire, des sociétés et contentieux des affaires.",
  keywords: [
    "avocat Marrakech",
    "avocat Cour de Cassation",
    "droit commercial Marrakech",
    "cabinet d'avocat Marrakech",
    "Mohamed Ben Abderrazik",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = legalServiceSchema();

  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen bg-white font-body text-neutral-700 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
