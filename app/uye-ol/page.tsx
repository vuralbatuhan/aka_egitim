import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import UyelikFormu from "@/components/UyelikFormu";

export const metadata: Metadata = createPageMetadata({
  title: "Üyelik",
  description:
    "AKADER'e üye olun. Yurt dışı eğitim fırsatlarından ve öğretmen topluluğundan yararlanmak için hemen başvurun.",
  path: "/uye-ol",
});

export default function UyeOl() {
  return <UyelikFormu />;
}
