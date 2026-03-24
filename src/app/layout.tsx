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
  title: "Ecladent | The Clinical Sanctuary Mill Hill",
  description: "Advanced restorative & emergency dentistry in a calm, women-owned sanctuary. LGBT-friendly and safe space.",
  openGraph: {
    title: "Ecladent Sanctuary | Mill Hill Dental Clinic",
    description: "Advanced restorative & emergency dentistry in a calm, inclusive environment.",
    url: "https://dental-clinic-1-minimalist.pages.dev/",
    siteName: "Ecladent Sanctuary",
    images: [
      {
        url: "https://cdn.hlorenzoz.com/dental_clinic_1_minimalist/hero.webp",
        width: 1280,
        height: 629,
        alt: "Ecladent Sanctuary - Mill Hill Dental Clinic",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecladent Sanctuary | Mill Hill Dental Clinic",
    description: "Advanced restorative & emergency dentistry in a calm, inclusive environment.",
    images: ["https://cdn.hlorenzoz.com/dental_clinic_1_minimalist/hero.webp"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://cdn.hlorenzoz.com" />
        <link rel="dns-prefetch" href="https://cdn.hlorenzoz.com" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFA] font-sans">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
