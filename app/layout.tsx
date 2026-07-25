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
  title: "Tomás Roldán Giorgi — Diseño y desarrollo web",
  description:
    "Diseño y desarrollo páginas web profesionales para negocios, servicios y productos. Estrategia, diseño, código y publicación.",
  icons: {
    icon: "/portfolio/favicon.svg",
    shortcut: "/portfolio/favicon.svg",
  },
  openGraph: {
    title: "Tomás Roldán Giorgi — Diseño y desarrollo web",
    description: "Páginas web profesionales que hacen ver mejor a tu negocio y convierten visitas en consultas.",
    type: "website",
    locale: "es_AR",
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title: "Tomás Roldán Giorgi — Diseño y desarrollo web",
    description: "Páginas web profesionales para negocios que quieren crecer.",
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
