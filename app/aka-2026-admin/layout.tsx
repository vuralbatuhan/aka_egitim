import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Yönetim",
  description: "AKADER yönetim paneli.",
  path: "/aka-2026-admin",
  noIndex: true,
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
