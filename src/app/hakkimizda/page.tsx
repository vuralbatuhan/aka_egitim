import Navbar from "@/components/layout/Navbar";
// import PageHero from "@/components/sections/PageHero";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/forms/ContactForm";
import type { Metadata } from "next";
// import Image from "next/image";

export const metadata: Metadata = {
  title: "Hakkımızda | AKA Eğitim - Öğretmen Rehberliğinde Yurtdışı Eğitim",
  description:
    "AKA Eğitim - Ayhan KORKMAZ Akademi. Öğretmen rehberliğinde, evden havalimanına eşlikle güvenli yurtdışı eğitim. Dil okulu, üniversite ve öğretmen hareketliliği programları.",
  keywords: [
    "aka eğitim hakkında",
    "yurtdışı eğitim danışmanlık şirketi",
    "aka eğitim referansları",
    "uluslararası eğitim danışmanlığı",
  ],
  alternates: {
    canonical: "/hakkimizda",
  },
  openGraph: {
    url: "https://www.akaegitim.com.tr/hakkimizda",
    title: "Aka Eğitim Hakkında",
    description:
      "Öğrenci odaklı yaklaşımımız ve global partner ağımızla yurtdışı eğitimde güvenilir çözüm ortağınız.",
    images: [
      {
        url: "https://www.akaegitim.com.tr/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Aka Eğitim ekibi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aka Eğitim Hakkında",
    description:
      "Yurtdışı eğitim süreçlerinde şeffaf ve uzman danışmanlık yaklaşımımızı keşfedin.",
    images: ["https://www.akaegitim.com.tr/logo.jpg"],
  },
};

export const revalidate = 3600;

export default function Hakkimizda() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative min-h-[40vh] overflow-hidden flex items-center bg-white">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-16 right-16 w-[520px] h-[520px] rounded-full blur-3xl animate-float"
            style={{ background: "rgba(20, 184, 166, 0.08)" }}
          ></div>
          <div
            className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl animate-float-slow"
            style={{ background: "rgba(20, 184, 166, 0.05)" }}
          ></div>
        </div>

        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                style={{ color: "var(--primary)" }}
              >
                AKA Eğitim Hakkında
              </h1>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-4">
                AKA – Ayhan KORKMAZ Akademi: Öğretmen rehberliğinde yurtdışı eğitim hareketliliğinin adı soyadı.
                Azim, Kararlılık ve Ayrıcalık ilkeleriyle öğrencilerinize güvenli eğitim yolculuğu.
              </p>
            </div>

            {/*} <div
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-black border"
              style={{ borderColor: "var(--primary-light)" }}
            >
               <video controls className="w-full h-auto" preload="metadata">
                <source src="/videos/hakkimizda.mp4" type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
              </video> 
              <div className="relative w-full h-[620px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/aka_sample_image_ayhan.jpg"
                  alt="Aka Eğitim Tanıtım Görseli"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div> */}
          </div>
        </div>

        {/* <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
              style={{ fill: "var(--primary)" }}
            />
          </svg>
        </div> */}
      </section>

      <div className="pt-0">
        {/* Hakkımızda İçeriği */}
        <section className="py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Kuruluş Amacımız
                </h2>
                <p className="text-lg text-white/90 max-w-4xl mx-auto mb-4">
                  Yol haritamız, Gazi Mustafa Kemal Atatürk&apos;ün 1924 yılında yurt dışına gönderilen öğrencilere hitaben söylediği;
                </p>
                <p className="text-xl font-semibold text-white/95 italic max-w-4xl mx-auto">
                  &ldquo;Sizleri birer kıvılcım olarak gönderiyorum, alevler olarak geri dönmelisiniz!&rdquo;
                </p>
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">15+</div>
                  <div className="text-white/80">Yıllık Deneyim</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">
                    5000+
                  </div>
                  <div className="text-white/80">Başarılı Öğrenci</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/80">Ülke Seçeneği</div>
                </div>
              </div> */}

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  AKA Farkı
                </h3>
                <p className="text-white/90 mb-3">
                  <strong>Öğretmen Rehberliği:</strong> Eğitim hareketliliğini öğretmen rehberliğinde pedagojik bir süreç olarak yürütüyoruz.
                </p>
                <p className="text-white/90 mb-3">
                  <strong>Karakter Odaklı:</strong> Öğrencinin henüz yurt dışına çıkmadan tüm yetenek ve özellikleri ile tanınması esasına dayanırız.
                </p>
                <p className="text-white/90">
                  <strong>Tam Destek:</strong> Evden havalimanına, kayıt ofisine kadar öğretmen eşliğinde sürekli destek.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6 text-center"
                style={{ color: "var(--primary)" }}
              >
                Neden AKA Eğitim?
              </h2>
              <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
                AKA Eğitim, yurtdışı eğitimin merkezine <strong>&ldquo;Öğretmen Rehberliği&rdquo;</strong> koyar.
                Öğrencinizin yurtdışı eğitim yolculuğuna bir aile ferdi içtenliği ile bakar,
                evinizden havalimanına danışman öğretmeni sizinle beraber eşlik eder.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className="bg-white p-6 rounded-xl border shadow-lg hover:shadow-xl transition-shadow"
                  style={{ borderColor: "var(--primary-light)" }}
                >
                  <div
                    className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--primary-dark), var(--primary))",
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "var(--primary-dark)" }}
                  >
                    Global Partner Ağımız
                  </h3>
                  <p className="text-gray-700">
                    25+ ülkede 300&apos;den fazla eğitim kurumu ile resmi
                    temsilcilik anlaşmalarımız bulunuyor. Öğrenci kabul
                    şartları, kampüs yaşamı ve burs fırsatları hakkında güncel
                    bilgi paylaşıyoruz.
                  </p>
                </div>
                <div
                  className="bg-white p-6 rounded-xl border shadow-lg hover:shadow-xl transition-shadow"
                  style={{ borderColor: "var(--primary-light)" }}
                >
                  <div
                    className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--primary-dark), var(--primary))",
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "var(--primary-dark)" }}
                  >
                    Öğrenci Başarı Takibi
                  </h3>
                  <p className="text-gray-700">
                    Başvuru aşamasından mezuniyete kadar süreklilik sağlayan
                    danışmanlık modelimiz ile öğrencilerimizin karşılaşabileceği
                    zorlukları proaktif olarak çözüyoruz. Mezunlarımızı küresel
                    kariyer ağına dahil ediyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
