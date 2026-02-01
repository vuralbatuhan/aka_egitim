import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import LanguageCampPopup from "@/components/LanguageCampPopup";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SITE_CONFIG, createPageMetadata } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  ...createPageMetadata({
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    path: "/",
  }),
  applicationName: SITE_CONFIG.shortName,
  authors: [{ name: SITE_CONFIG.shortName, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.shortName,
  formatDetection: { email: false, address: false, telephone: false },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body className={inter.variable} suppressHydrationWarning>
        <ScrollToTop />
        {children}
        <WhatsAppFloat />
        <LanguageCampPopup />
      </body>
    </html>
  );
}
