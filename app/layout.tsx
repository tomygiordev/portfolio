import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://tomygiordev.github.io/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gime — Diseño, producto y desarrollo digital",
  description:
    "Portfolio de Gime. Estrategia, diseño y desarrollo de productos digitales, sitios web y sistemas que resuelven problemas reales.",
  icons: {
    icon: "/portfolio/favicon.svg",
    shortcut: "/portfolio/favicon.svg",
  },
  openGraph: {
    title: "Gime — Ideas digitales que funcionan",
    description: "Diseño, producto y código para mover negocios reales.",
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    images: [{
      url: `${siteUrl}/og.png`,
      width: 1536,
      height: 910,
      alt: "Construyo ideas que funcionan.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gime — Ideas digitales que funcionan",
    description: "Diseño, producto y código para mover negocios reales.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
