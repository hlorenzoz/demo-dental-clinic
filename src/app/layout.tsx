import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Demo Website - Aurora Dental Clinic",
  description: "Advanced restorative & emergency dentistry in a calm, women-owned Aurora Sanctuary. LGBT-friendly and safe space.",
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Demo Website',
  },
  openGraph: {
    title: "Demo Website - Aurora Dental Clinic",
    description: "Advanced restorative & emergency dentistry in a calm, inclusive environment.",
    url: "https://dental-clinic-1-minimalist.pages.dev/",
    siteName: "Demo Website - Aurora Dental Clinic",
    images: [
      {
        url: "https://cdn.hlorenzoz.com/dental_clinic_1_minimalist/hero_aurora_v2.webp",
        width: 1280,
        height: 1280,
        alt: "Demo Website - Aurora Dental Clinic",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Demo Website - Aurora Dental Clinic",
    description: "Advanced restorative & emergency dentistry in a calm, inclusive environment.",
    images: ["https://cdn.hlorenzoz.com/dental_clinic_1_minimalist/hero_aurora_v2.webp"],
  },
  icons: {
    icon: "/favicon.svg?v=2",
    shortcut: "/favicon.svg?v=2",
    apple: "/favicon.svg?v=2",
  },
};

import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { PWAInstaller } from "@/components/pwa/PWAInstaller";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${manrope.variable} h-full antialiased overflow-x-hidden`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg?v=2" />
        <link rel="apple-touch-icon" href="/favicon.svg?v=2" />
        <link rel="preconnect" href="https://cdn.hlorenzoz.com" />
        <link rel="dns-prefetch" href="https://cdn.hlorenzoz.com" />
        <meta name="theme-color" content="#006060" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#004040" media="(prefers-color-scheme: dark)" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFA] font-sans overflow-x-hidden max-w-[100vw]">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
        <PWAInstaller />
      </body>
    </html>
  );
}
