import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aka Eğitim",
  description: "Modern eğitim platformu",
  metadataBase: new URL('https://aka-omervordexs-projects.vercel.app'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body className={inter.variable} suppressHydrationWarning>{children}</body>
    </html>
  );
}
