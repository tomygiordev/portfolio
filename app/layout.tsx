import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import { headers } from "next/headers";
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

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const ogImage = `${protocol}://${host}/og.png`;

  return {
    title: "Gime — Diseño, producto y desarrollo digital",
    description:
      "Portfolio de Gime. Estrategia, diseño y desarrollo de productos digitales, sitios web y sistemas que resuelven problemas reales.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Gime — Ideas digitales que funcionan",
      description: "Diseño, producto y código para mover negocios reales.",
      type: "website",
      locale: "es_AR",
      images: [{ url: ogImage, width: 1536, height: 910, alt: "Construyo ideas que funcionan." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Gime — Ideas digitales que funcionan",
      description: "Diseño, producto y código para mover negocios reales.",
      images: [ogImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
