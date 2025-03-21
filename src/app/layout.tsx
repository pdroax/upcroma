import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteConfig = {
  title: "Croma Films | Películas Residenciais e Empresariais",
  description:
    "Especialistas em películas residenciais e empresariais em Curitiba e região desde 2008. Oferecemos soluções em proteção solar, segurança e privacidade.",
  url: "https://www.cromafilms.com.br",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: "%s | Croma Films",
  },
  description: siteConfig.description,
  keywords:
    "películas, proteção solar, películas residenciais, películas empresariais, Curitiba",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "Croma Films",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
