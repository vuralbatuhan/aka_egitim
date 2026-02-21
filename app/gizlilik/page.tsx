import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Gizlilik ve KVKK Aydınlatma Metni",
  description:
    "AKA Eğitim gizlilik politikası ve 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin işlenmesine ilişkin aydınlatma metni.",
  path: "/gizlilik",
});

export default function Gizlilik() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <AnimatedSection direction="fade" delay={0.1}>
        <PageHeader
          title="Gizlilik ve KVKK Aydınlatma Metni"
          breadcrumbs={["Anasayfa", "Gizlilik"]}
          description="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin işlenmesine ilişkin aydınlatma metnimizi aşağıda bulabilirsiniz."
        />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.2}>
        <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden p-6 md:p-10">
            <div className="prose prose-gray max-w-none space-y-8 text-gray-700">
              <p className="text-sm text-gray-500">
                Son güncelleme: Şubat 2025
              </p>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ color: "#641a29" }}>
                  1. Veri Sorumlusu
                </h2>
                <p>
                  6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, kişisel verileriniz; veri sorumlusu
                  sıfatıyla AKA Eğitim (“Şirket”) tarafından aşağıda açıklanan kapsamda işlenebilecektir.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ color: "#641a29" }}>
                  2. İşlenen Kişisel Veriler ve Amaçları
                </h2>
                <p className="mb-3">
                  Yurt dışı eğitim danışmanlığı, dil eğitimi, üniversite başvurusu ve öğretmen hareketliliği
                  hizmetlerimiz kapsamında aşağıdaki kişisel verileriniz işlenmektedir:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Kimlik bilgileri:</strong> Ad, soyad (danışmanlık ve sözleşme süreçleri için)</li>
                  <li><strong>İletişim bilgileri:</strong> Telefon numarası, e-posta adresi, şehir (sizinle iletişim kurmak ve hizmet sunmak için)</li>
                  <li><strong>Eğitim bilgileri:</strong> Mezun olunan lise, ilgilendiğiniz ülke, program türü ve program tercihi (size uygun danışmanlık ve eğitim planı oluşturmak için)</li>
                  <li><strong>Mesaj içeriği:</strong> Form üzerinden paylaştığınız özel talepler ve notlar (hizmet kalitesi ve yönlendirme için)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ color: "#641a29" }}>
                  3. İşleme Amaçları ve Hukuki Sebepler
                </h2>
                <p className="mb-3">
                  Kişisel verileriniz; danışmanlık hizmeti sunmak, başvuru ve vize süreçlerinde rehberlik etmek,
                  yasal yükümlülüklerimizi yerine getirmek ve KVKK’da sayılan “açık rıza” ve “sözleşmenin ifası”
                  gibi hukuki sebeplere dayanılarak işlenmektedir. Form gönderimi sırasında KVKK metnini onaylamanız,
                  ilgili veri işleme faaliyetleri için açık rızanız sayılmaktadır.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ color: "#641a29" }}>
                  4. Verilerin Saklama Süresi
                </h2>
                <p>
                  Kişisel verileriniz, hizmet sunumu ve yasal saklama süreleri (ör. ticari defter ve belgelerde 10 yıl)
                  dikkate alınarak, yalnızca gerekli süre boyunca saklanacaktır. Süre sonunda veriler silinecek veya
                  anonim hale getirilecektir.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ color: "#641a29" }}>
                  5. Verilerin Aktarılması
                </h2>
                <p>
                  Verileriniz, hizmet kapsamında yalnızca yurt dışı eğitim kurumları, vize birimleri veya resmi
                  mercilerle paylaşılabilir; bu aktarımlar KVKK ve ilgili mevzuata uygun şekilde gerçekleştirilir.
                  Verileriniz, ticari amaçla üçüncü taraflara satılmaz veya kiralanmaz.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ color: "#641a29" }}>
                  6. Haklarınız
                </h2>
                <p className="mb-3">
                  KVKK’nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                  <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                  <li>İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme,</li>
                  <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
                  <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
                  <li>KVKK’nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme,</li>
                  <li>Düzeltme, silme ve yok etme işlemlerinin üçüncü kişilere bildirilmesini isteme,</li>
                  <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
                  <li>Kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
                </ul>
                <p className="mt-4">
                  Bu haklarınızı kullanmak için talebinizi yazılı veya Kayıtlı Elektronik Posta (KEP) ile
                  iletebilirsiniz. Başvurularınız, talebin niteliğine göre 30 gün içinde sonuçlandırılacaktır.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ color: "#641a29" }}>
                  7. Güvenlik
                </h2>
                <p>
                  Kişisel verilerinizin güvenliği için teknik ve idari tedbirler alınmakta; verilerin yetkisiz erişim,
                  kayıp veya değiştirilmesine karşı korunması hedeflenmektedir.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ color: "#641a29" }}>
                  8. İletişim
                </h2>
                <p>
                  KVKK kapsamındaki talepleriniz ve sorularınız için web sitemizdeki iletişim formunu
                  kullanabilir veya doğrudan bizimle iletişime geçebilirsiniz.
                </p>
              </div>

              <p className="text-sm text-gray-500 pt-4 border-t border-gray-200">
                Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ilgili mevzuat çerçevesinde
                hazırlanmış olup, AKA Eğitim tarafından güncellenebilir. Güncel metin her zaman bu sayfada yayımlanacaktır.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
