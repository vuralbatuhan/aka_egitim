import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "İletişim",
  description:
    "AKADER ile iletişime geçin. Yurtdışı dil eğitimi, üniversite danışmanlığı ve öğretmen hareketliliği programları hakkında bilgi almak için bize ulaşın.",
  path: "/iletisim",
});

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
