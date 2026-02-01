"use client";

import Image from "next/image";
import Link from "next/link";

const countries = [
  {
    id: "ingiltere",
    title: "İngiltere",
    description:
      "Dilin doğduğu yerde, şehirleri kendi dilinde keşfederek İngilizcenizi geliştirmeye davetlisiniz. İngilterenin en güzel okullarında, tecrübeli eğitimciler, akredite programlar ve sertifikalar ile geleceğinizi şekillendirmek için AKA güvencesiyle sizi bekliyoruz.",
    href: "/dil-okullari",
    image: "/images/yurtdisi-dil-egitiminin-favori-ulkesi-ingiltere.png",
    imageExternal: null,
  },
  {
    id: "finlandiya",
    title: "Finlandiya",
    description:
      "Finlandiya'nın en büyük ve güzel kampüsünde, doğa ile iç içe İskandinav yaşam tarzını deneyimleyerek İngilizcenizi geliştirmeye davetlisiniz. Tecrübeli eğitimciler, sertifikalı akredite programlar ile geleceğinizi şekillendirmek için AKA güvencesiyle sizi bekliyoruz.",
    href: "/dil-okullari/finlandiya",
    image: "/images/1ec1d4a296c8860bf4765bb90d75a641-1200.png",
    imageExternal: null,
  },
];

export default function DilEgitimiCountryCards() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-4 py-8 md:px-6"
      style={{ backgroundColor: "#f7f7f7" }}
    >
      {countries.map((country) => {
        const content = (
          <>
            <div className="aspect-[4/3] relative rounded-t-2xl overflow-hidden bg-gray-200">
              {country.image ? (
                <Image
                  src={country.image}
                  alt={country.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : country.imageExternal ? (
                <Image
                  src={country.imageExternal}
                  alt={country.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl">🌍</div>
              )}
            </div>
            <div className="p-6 bg-white rounded-b-2xl">
              <h3
                className="text-2xl font-bold mb-3 leading-tight transition-colors group-hover:text-[#641a29]"
                style={{ color: "#222222" }}
              >
                {country.title}
              </h3>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "#555555" }}
              >
                {country.description}
              </p>
              <span
                className="inline-flex items-center gap-2 py-3 px-6 rounded-md text-base font-semibold text-white transition-all bg-[#2e3a47] group-hover:bg-[#f0771b] group-hover:hover:bg-[#d96818]"
                style={{ minHeight: "44px" }}
              >
                Detaylı Bilgi
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </>
        );

        const cardClassName =
          "group block rounded-2xl overflow-hidden bg-white transition-all duration-300 " +
          "hover:shadow-lg hover:-translate-y-0.5";
        const cardStyle = { boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)" };

        if (country.href === "#") {
          return (
            <div key={country.id} className={cardClassName} style={cardStyle}>
              {content}
            </div>
          );
        }

        return (
          <Link key={country.id} href={country.href} className={cardClassName} style={cardStyle}>
            {content}
          </Link>
        );
      })}
    </div>
  );
}
