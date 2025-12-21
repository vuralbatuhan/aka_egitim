import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const dilOkullari = [
    { name: "İtalya Dil Eğitimi", href: "/ulkeler/italya" },
    // { name: "Kazakistan Dil Eğitimi", href: "/ulkeler/kazakistan" },
    { name: "Almanya Dil Eğitimi", href: "/ulkeler/almanya" },
    { name: "İngiltere Dil Eğitimi", href: "/ulkeler/ingiltere" },
    { name: "Finlandiya Dil Eğitimi", href: "/ulkeler/finlandiya" },
  ];

  const universiteler = [
    { name: "İtalya'da Üniversite", href: "/ulkeler/italya" },
    { name: "Belçika'da Üniversite", href: "/ulkeler/belcika" },
    { name: "Almanya Üniversiteleri", href: "/ulkeler/almanya" },
    { name: "Kazakistan'da Üniversite", href: "/ulkeler/kazakistan" },
    { name: "Hollanda'da Üniversite", href: "/ulkeler/hollanda" },
  ];

  const kurumsal = [
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Biz Kimiz", href: "/biz-kimiz" },
    { name: "Niçin Kurduk", href: "/nicin-kurduk" },
    { name: "Ne Yapmak İstiyoruz", href: "/ne-yapmak-istiyoruz" },
  ];

  return (
    <footer className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo ve Açıklama */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.jpg"
                alt="Aka Eğitim Logo"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div>
                <span className="font-bold text-white text-xl">Aka Eğitim</span>
                <p className="text-xs text-white opacity-80 -mt-1">
                  Yurtdışı Eğitim
                </p>
              </div>
            </div>
            <p className="text-white opacity-90 leading-relaxed mb-6 max-w-sm">
              Yurtdışı eğitim danışmanlığında uzman ekibimizle hayallerinizdeki
              eğitimi sizin için planlıyoruz.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://x.com/aka_education"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-turquoise-600 hover:bg-turquoise-700 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </Link>

              <Link
                href="https://www.instagram.com/aka.education"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-turquoise-600 hover:bg-turquoise-700 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 12 5.507 5.507 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 12 3.504 3.504 0 0 1 12 16.5zm5.75-10.25a1.25 1.25 0 1 1-1.25-1.25 1.25 1.25 0 0 1 1.25 1.25z" />
                </svg>
              </Link>

              {/* <Link
                href="#"
                className="w-10 h-10 bg-turquoise-600 hover:bg-turquoise-700 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link> */}
            </div>
          </div>

          {/* Dil Okulları */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Dil Okulları</h3>
            <ul className="space-y-3">
              {dilOkullari.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-white opacity-80 hover:opacity-100 hover:text-turquoise-400 transition-all duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Üniversite */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Üniversite</h3>
            <ul className="space-y-3">
              {universiteler.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-white opacity-80 hover:opacity-100 hover:text-turquoise-400 transition-all duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Kurumsal</h3>
            <ul className="space-y-3">
              {kurumsal.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-white opacity-80 hover:opacity-100 hover:text-turquoise-400 transition-all duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Alt Çizgi */}
        <div className="border-t border-zinc-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white opacity-70 text-sm">
              © {currentYear} Aka Eğitim. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/gizlilik"
                className="text-white opacity-70 hover:opacity-100 hover:text-turquoise-400 text-sm transition-all"
              >
                Gizlilik Politikası
              </Link>
              <Link
                href="/kullanim-kosullari"
                className="text-white opacity-70 hover:opacity-100 hover:text-turquoise-400 text-sm transition-all"
              >
                Kullanım Koşulları
              </Link>
              <Link
                href="/cerez-politikasi"
                className="text-white opacity-70 hover:opacity-100 hover:text-turquoise-400 text-sm transition-all"
              >
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
