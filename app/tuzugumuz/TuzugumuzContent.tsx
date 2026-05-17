import React from "react";

function Article({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article
      id={id}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 scroll-mt-28"
    >
      <div className="flex flex-wrap items-center gap-3 mb-4 pb-4 border-b border-gray-100">
        <span className="shrink-0 px-3 py-1 rounded-full text-xs font-bold text-white bg-[#641a29]">
          {number}
        </span>
        <h3 className="text-base md:text-lg font-bold text-[#333]">{title}</h3>
      </div>
      <div className="text-[#555] leading-relaxed space-y-3 text-sm md:text-base">
        {children}
      </div>
    </article>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p className="font-semibold text-[#641a29] mt-4 mb-1">{children}</p>;
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="list-decimal list-outside pl-5 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="text-[#555]">
          {item}
        </li>
      ))}
    </ol>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-outside pl-5 space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="text-[#555]">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TuzugumuzContent() {
  return (
    <div className="py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        {/* Document Title Banner */}
        <div className="text-center mb-8 md:mb-12 p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#641a29]">
            AYHAN KORKMAZ AKADEMİ DERNEĞİ TÜZÜĞÜ
          </h2>
        </div>

        <div className="space-y-4 md:space-y-6">
          {/* Madde 1 */}
          <Article
            id="madde-1"
            number="Madde 1"
            title="Derneğin Adı ve Merkezi"
          >
            <p>
              Derneğin Adı:{" "}
              <strong>&ldquo;Ayhan Korkmaz Akademi Derneği&rdquo;</strong>dir.
              Kısaltılmış adı <strong>&ldquo;AKADER&rdquo;</strong> dir.
              Derneğin merkezi İstanbul&apos;dur. Dernek genel kurul kararı ile
              gerekli görülen yerlerde yurtiçi ve yurtdışı şube açabilir.
            </p>
          </Article>

          {/* Madde 2 */}
          <Article
            id="madde-2"
            number="Madde 2"
            title="Derneğin Amacı ve Bu Amacı Gerçekleştirmek İçin Dernekçe Sürdürülecek Çalışma Konuları ve Biçimleri ile Faaliyet Alanı"
          >
            <p>
              Dernek, dil kursları, lise, üniversite, master amacıyla yurt
              dışına giden ve yurtdışından gelen öğrenci ve öğretmen
              hareketliliğini ve uluslararası programların denkliğini yöneterek
              eğitim modelleriyle ilgili çalışmalar yapmak amacı ile
              kurulmuştur.
            </p>
            <SectionTitle>
              Dernekçe Sürdürülecek Çalışma Konuları ve Biçimleri
            </SectionTitle>
            <NumberedList
              items={[
                "Amacın gerçekleştirilmesi için gerekli olan her türlü bilgi, belge, doküman ve yayınları temin etmek, dokümantasyon merkezi oluşturmak, çalışmalarını duyurmak için amaçları doğrultusunda gazete, dergi, kitap ve bülten gibi yayınlar çıkarmak,",
                "Amacın gerçekleştirilmesi için sağlıklı bir çalışma ortamını sağlamak, her türlü teknik araç ve gereci, demirbaş ve kırtasiye malzemelerini temin etmek,",
                "Uluslararası Eğitim Hareketliliği ve Danışmanlığı sektörünün gelişimi için bu sektörde yer alan eğitimciler tarafından oluşturulmuş güvenilir hizmet standartlarını belirlemek, eğitim hareketliliğini turizm ve acente bakış açısından sıyırarak gerçek mecraya taşımak, uluslararası eğitim hareketliliğini öğrenme süreçlerinin bir parçası yapmak ve kariyer amaçlı yönetmek amacıyla; üyelerine ve eğitim alanında çalışma yapan tüm paydaşlarla eğitim kademelerinin her türüne yönelik kurs, seminer, konferans ve panel vd. eğitim çalışmaları düzenlemek,",
                "Amacın gerçekleştirilmesi için ulusal ve uluslararası tüm etkin medya kuruluşları ve sosyal ağlarla yararlılık temalı ilişkiler kurmak, ortak sosyal ve kültürel programlar organize etmek,",
                "Dernek üyeleri; eğitimin paydaşları olan alanında uzman akademisyen, öğretmen, yönetici ve eğitimin aslî unsuru olan öğrencileri ve ebeveynleriyle birlikte öğrenci hareketliliğinin ve eğitimin nitelikli gelişimi için her türlü etkinliği düzenlemek veya üyelerinin bu tür etkinliklerden yararlanmalarını sağlamak,",
                "Derneğin amaçlarına uygun şekilde Uluslararası Öğrenci hareketliliğine dair her türlü faaliyette bulunmak, yurt dışında aynı amaç birlikteliğine sahip, bu alana katkıda bulunabilecek dernek veya kuruluşlara üye olmak ve bu kuruluşlarla ortak çalışmalar yapmak ve yardımlaşmak,",
                "Amacın gerçekleştirilmesi için gerek görülmesi halinde, 5072 sayılı Dernek ve Vakıfların Kamu Kurum ve Kuruluşları ile İlişkilerine Dair Kanun hükümleri saklı kalmak üzere, kamu kurum ve kuruluşları ile görev alanlarına giren konularda ortak projeler yürütmek,",
                "Herhangi bir parti ya da siyasal faaliyet ile fiziki ya da organik bir bağ kurmadan yukarıda belirtilen amaçlar doğrultusunda eğitim hareketliliğini yönetmek,",
                "Yurtiçinde ve yurtdışında ihtiyaçlar çerçevesinde dernek yönetimince alınacak kararlar doğrultusunda temsilcilikler (bölge temsilciliği vd.) açmak,",
                "Derneğin amacı ile ilgisi bulunan ve kanunlarla yasaklanmayan alanlarda, diğer derneklerle veya vakıf, sendika ve benzeri sivil toplum kuruluşlarıyla ortak bir amacı gerçekleştirmek için plâtformlar oluşturmak,",
                "Yükseköğretim Kurumları, Millî Eğitim Bakanlığı, Gençlik ve Spor Bakanlığı ve bu kurumlarla uluslararası öğrenci hareketliliğine dayalı ortak hareket eden kurumların yönetmeliklerine uygun olarak adı geçen kurumlara bağlı tüm eğitim kurumları yönetimleriyle işbirliği halinde gerekli izin ve prosedürleri sağlayarak yurtiçi ve yurtdışı eğitim imkânları hakkında bilgilendirici çalışmalar yapmak, etkinlikler düzenlemek; paydaşlarla uluslararası öğrenci hareketliliği ve dil öğrenimi amaçlı öğrenci hareketliliğine dair sorunların tespitini yaparak ortaklaşa çözümler üretmek,",
                "Derneğin kuruluş amaçlarının gerçekleşmesine yönelik mevzuat hükümlerine uygun her türlü çalışmayı yapmak ve desteklemek,",
                "Derneğin amaç ve çalışma konuları doğrultusunda çalışmalar yürüten resmî/özel kişi, kurum ve kuruluşlarla işbirliği yapmak, işbirliğine katılmak, sponsorluk anlaşmaları yapmak,",
                "Uluslararası öğrenci hareketliliği ve dil öğrenimi amaçlı öğrenci hareketliliğini yönetirken yurtiçinde ve yurtdışında faaliyet gösterilen tüm bölgelerde, millî kültür ve değerlerin geliştirilmesi ve yaygınlaştırılması amacıyla her türlü etkinliğin gerçekleştirilmesini sağlamak,",
                "Uluslararası öğrenci hareketliliği ve dil öğrenimi amaçlı öğrenci hareketliliği kapsamında, dernek amacına uygun çalışmaları duyurabilmek için bilgilendirici yazılı broşür ve bültenler çıkarmak, yurtdışı eğitim konusunda fuarlar, seminerler, konferanslar düzenlemek, gazete ve dergilerde yazılı-görsel yayınlar çıkarmak, sanal medya araçlarında görünürlük faaliyetlerinde bulunmak, dernek adına mobil uygulamalar oluşturmak,",
                "Dernek amaçlarının gerçekleştirilmesi amacıyla gerek görülmesi durumunda vakıf kurmak, federasyon kurmak veya kurulu bir federasyona katılmak, gerekli izin alınarak derneklerin izinle kurabileceği tesisleri kurmak,",
                "Tüzük amaçlarının gerçekleştirilmesi için ihtiyaç duyduğu gelirleri temin etmek amacıyla iktisadi, ticari ve sanayi işletmeler kurmak ve işletmek,",
                "Üyelerinin yararlanmaları ve boş zamanlarını değerlendirebilmeleri için lokal açmak, sosyal ve kültürel tesisler kurmak ve bunları tefriş etmek,",
                "Üyeleri arasında beşeri münasebetlerin geliştirilmesi ve devam ettirilmesi için yemekli toplantılar, konser, balo, tiyatro, sergi, gezi ve eğlenceli etkinlikler vb. düzenlemek veya üyelerinin bu tür etkinliklerden yararlanmalarını sağlamak,",
                "Uluslararası öğrenci hareketliliği ve dil öğrenimi amaçlı öğrenci hareketliliğinin yurtiçinde ve yurtdışında karşılıklı gelişmesi ve geliştirilmesi ile ilgili her türlü toplantı, komisyon ve kurullara öncülük edecek şekilde katılmak, derneğin amaç ve hedeflerini yansıtan görüşlerini yazılı veya sözlü olarak bildirmek ve raporlamak,",
                "Amaç ve hizmet konularını gerçekleştirmek için gerekli taşınır, taşınmaz mal almak, kiralamak ve alım-satımına imkân sağlayacak şekilde dernek adına sahiplenmek; taşınır ve taşınmaz mallar üzerinde her türlü hakkı işletmek ve her türlü inşaatı yaptırmak,",
                "Dernek amaç ve hizmet konularına uygun şekilde arşiv oluşturmak,",
                "Amacın gerçekleştirilmesi için ihtiyaç duyulan ve kanunların yasaklamadığı her türlü faaliyette bulunmak,",
                "Dernek; üniversiteler, Sürekli eğitim merkezleri, Sivil Toplum kuruluşları, Türkiye'deki yabancı diplomatik misyonlar ve bunların vize departmanları ile ortaklaşa eğitim çalışmaları düzenler.",
                "Amaçlarını gerçekleştirmek için gerekli gördüğü taktirde genel kurul kararı ile dernekler kanunu çerçevesinde gayrimenkul tasarrufunda bulunur.",
              ]}
            />
            <SectionTitle>Derneğin Faaliyet Alanı</SectionTitle>
            <p>
              Dernek, her kademeden uluslararası öğrenci hareketliliği ve dil
              öğrenimi amaçlı öğrenci ve öğretmen hareketliliği alanında yurt
              içinde ve yurt dışında faaliyet gösterir.
            </p>
          </Article>

          {/* Madde 3 */}
          <Article
            id="madde-3"
            number="Madde 3"
            title="Üye Olma Hakkı ve Üyelik İşlemleri"
          >
            <p>
              Fiil ehliyetine sahip bulunan Türkiye Cumhuriyeti vatandaşı olan
              ve/veya Türkiye&apos;de oturum izni almış, dernekler masasınca
              belirlenmiş üye olma şartlarına sahip, dernek amacını ve
              faaliyetlerini içselleştirerek ülkenin geleceğinin odak noktasının
              eğitim olduğunu düşünen ve aşağıda belirtilen şartları yerine
              getiren herkes dernek yönetim kurulunun istenen özgeçmiş
              incelemesi sonucu uygun görmesi halinde derneğimize katkı vermek
              amacıyla üye olabilir.
            </p>
            <p>
              Türkiye Cumhuriyeti sınırları içinde eğitim alanında veya
              bağlantılı alanlarda hizmet veren tüzel kişiler, dernek yönetim
              kurulunun onayı ile üyeliğe kabul edilebilir.
            </p>
            <p>
              İletişim adresi ve bilgileri doğru ve güncel olan (son altı ay),
              Dernekler Yasası&apos;nın öngördüğü koşulları taşıyan, derneğin
              amaç ve ilkelerini benimseyerek bu doğrultuda çalışmayı kabul eden
              Uluslararası Eğitim Danışmanlığı sektöründe faaliyet gösteren her
              tüzel kişi bu derneğe üye olma hakkına sahiptir.
            </p>
            <p>
              Derneğe üye olabilmek için kişinin; derneğe üye olmak isteğini,
              dernek tüzüğünde yer alan amaç ve ilkeleri kabul ettiğini, tüzükle
              konmuş veya tüzüğe dayanılarak konulacak kural ve koşullar ile
              alınacak kararlara uyacağını belirten bir dilekçe ile başvuruda
              bulunması gerekir.
            </p>
            <p>
              Gerek görüldüğü durumlarda, başvuru sahibi kurum ya da kişilerden,
              Yönetim Kurulu kararı ile ek belgeler istenebilir.
            </p>
            <p>
              Dernek başkanlığına yazılı olarak yapılacak üyelik başvurusu,
              dernek yönetim kurulunca en çok otuz gün içinde üyeliğe kabul veya
              isteğin reddi şeklinde karara bağlanır ve sonuç yazıyla başvuru
              sahibine bildirilir. Başvurusu kabul edilen üye, bu amaçla
              tutulacak deftere kaydedilir.
            </p>
            <p>
              Derneğin asıl üyeleri, derneğin kurucuları ile müracaatları
              üzerine yönetim kurulunca üyeliğe kabul edilen kişilerdir.
            </p>
            <p>
              Derneğe maddi ve manevi bakımdan önemli destek sağlamış bulunanlar
              yönetim kurulu kararı ile onursal üye olarak kabul edilebilir.
            </p>
            <p>
              Derneğin şube sayısı üçten fazla olduğunda dernek merkezinde
              kayıtlı bulunanların üyelik kayıtları şubelere aktarılır. Yeni
              üyelik müracaatları şubelere yapılır. Üyeliğe kabul ve üyelikten
              silinme işlemleri şube yönetim kurulları tarafından yapılır ve en
              çok otuz gün içinde bir yazıyla Genel Merkeze bildirilir.
            </p>
            <p>
              Üyelerin giriş ve yıllık olarak ödeyecekleri ödenti miktarı, her
              yıl Yönetim Kurulunca belirlenir. Ayrıca ödeme şeklinin nasıl
              olacağı da Yönetim Kurulu toplantısında kararlaştırılır.
            </p>
          </Article>

          {/* Madde 4 */}
          <Article id="madde-4" number="Madde 4" title="Üyelikten Çıkma">
            <p>
              Her üye yazılı olarak bildirmek kaydıyla, dernekten çıkma hakkına
              sahiptir.
            </p>
            <p>
              Üyenin istifa dilekçesi yönetim kuruluna ulaştığı anda çıkış
              işlemleri sonuçlanmış sayılır. Üyelikten ayrılma, üyenin derneğe
              olan birikmiş borçlarını sona erdirmez.
            </p>
          </Article>

          {/* Madde 5 */}
          <Article id="madde-5" number="Madde 5" title="Üyelikten Çıkarılma">
            <p>Dernek üyeliğinden çıkarılmayı gerektiren haller:</p>
            <BulletList
              items={[
                "Yazılı ikazlara rağmen birikmiş altı aylık üyelik aidatını iadeli taahhütlü gönderilecek son ödeme uyarı mektubundan itibaren bir ay içinde ödemeyenler,",
                "Dernek tüzüğüne aykırı davranışlarda bulunanlar,",
                "Üye olma şartlarını kaybetmiş olanlar,",
                'Dernek Tüzüğündeki "Kuruluş Nedeni" ne ve amacına ters düşen, üyelikle bağdaşmayan eylemleri saptananlar,',
                "Tüzüğe aykırı tutumlarıyla Dernek üyeliğinde kalması sakıncalı görünenler,",
                "Dernek çalışmalarını aksatanlar,",
                "Dernek üyeleriyle organlarında çalışanlara ve görevlilere karşı söz, yazılı eylemleriyle olumsuz çabalarda bulunanlar,",
                "Genel ahlak kurallarını çiğneyenler.",
              ]}
            />
            <p>
              Yukarıda sayılan durumlardan birinin tespiti halinde yönetim
              kurulu kararı ile üyelikten çıkarılır. Ancak çıkarılan üyenin
              itirazı durumunda Genel Kurul tarafından hakkında karara
              verilinceye kadar dernek üyeliği devam eder.
            </p>
            <p>
              Dernekten çıkan veya çıkarılanlar, üye kayıt defterinden silinir
              ve dernek malvarlığında hak iddia edemez.
            </p>
            <p>
              Ölüm, dernek üyeliğinden ayrılma isteğini yazılı olarak bildirme
              ve üyelikten çıkarılma halinde üyeliğin sona ermesi gerçekleşmiş
              olur.
            </p>
            <p>
              Üyelikten kendi isteği ile ayrılıp yeniden üyelik için başvuruda
              bulunanlar, üyeliğe ilk kez kabul edileceklere ilişkin kurallar ve
              işlemleri yaparak yönetim kurulunun kararıyla tekrar üye
              olabilirler.
            </p>
          </Article>

          {/* Madde 6 */}
          <Article id="madde-6" number="Madde 6" title="Dernek Organları">
            <p>Derneğin organları aşağıda gösterilmiştir:</p>
            <BulletList
              items={["Genel kurul,", "Yönetim kurulu,", "Denetim kurulu,"]}
            />
          </Article>

          {/* Madde 7 */}
          <Article
            id="madde-7"
            number="Madde 7"
            title="Dernek Genel Kurulunun Kuruluş Şekli, Toplanma Zamanı ve Çağrı ve Toplantı Usulü"
          >
            <p>
              Genel kurul, derneğin en yetkili karar organı olup; derneğe
              kayıtlı üyelerden oluşur. Derneğin şubesinin açılması durumunda
              ise şube sayısı üçe kadar genel merkez ve şubelerinde kayıtlı
              üyelerden; şube sayısı üçten fazla olması durumunda ise genel
              merkezdeki kayıtlı üyeler şubelere nakledilerek şubelerin genel
              kurullarında seçilen delegelerden oluşur.
            </p>
            <p>Genel kurul;</p>
            <NumberedList
              items={[
                "Bu tüzükte belli edilen zamanda olağan,",
                "Yönetim veya denetim kurulunun gerekli gördüğü hallerde veya dernek üyelerinden beşte birinin yazılı başvurusu üzerine, yönetim kurulunca olağanüstü toplantıya çağrılır. Yönetim kurulu, genel kurulu toplantıya çağırmazsa; üyelerden birinin başvurusu üzerine sulh hakimi, üç üyeyi genel kurulu toplantıya çağırmakla görevlendirir.",
              ]}
            />
            <p>
              Olağan genel kurul, 3 yılda bir, Ocak ayı içerisinde, yönetim
              kurulunca belirlenecek gün yer ve saatte toplanır.
            </p>
            <SectionTitle>Çağrı Usulü</SectionTitle>
            <p>
              Yönetim kurulu, dernek tüzüğüne göre genel kurula katılma hakkı
              bulunan üyelerin listesini düzenler. Genel kurula katılma hakkı
              bulunan üyeler, en az on beş gün önceden, toplantının günü, saati,
              yeri ve gündemi en az bir gazetede veya derneğin internet
              sayfasında ilan edilmek, yazılı olarak bildirilmek, üyenin
              bildirdiği elektronik posta adresine ya da iletişim numarasına
              mesaj gönderilmek veya mahalli yayın araçları kullanılmak
              suretiyle toplantıya çağrılır. Bu çağrıda, çoğunluk sağlanamaması
              sebebiyle toplantı yapılamazsa, ikinci toplantının hangi gün, saat
              ve yerde yapılacağı da belirtilir. İlk toplantı ile ikinci
              toplantı arasındaki süre yedi günden az, altmış günden fazla
              olamaz.
            </p>
            <p>
              Toplantı, çoğunluk sağlanamaması sebebinin dışında başka bir
              nedenle geri bırakılırsa, bu durum geri bırakma sebepleri de
              belirtilmek suretiyle, ilk toplantı için yapılan çağrı usulüne
              uygun olarak üyelere duyurulur. İkinci toplantının geri bırakma
              tarihinden itibaren en geç altı ay içinde yapılması zorunludur.
              Üyeler ikinci toplantıya, birinci fıkrada belirtilen esaslara göre
              yeniden çağrılır.
            </p>
            <p>Genel kurul toplantısı bir defadan fazla geri bırakılamaz.</p>
            <SectionTitle>Toplantı Usulü</SectionTitle>
            <p>
              Genel kurul, katılma hakkı bulunan üyelerin salt çoğunluğunun,
              tüzük değişikliği ve derneğin feshi hallerinde ise üçte ikisinin
              katılımıyla toplanır; çoğunluğun sağlanamaması sebebiyle
              toplantının ertelenmesi durumunda ikinci toplantıda çoğunluk
              aranmaz. Ancak, bu toplantıya katılan üye sayısı, yönetim ve
              denetim kurulları üye tam sayısının iki katından az olamaz.
            </p>
            <p>
              Genel kurula katılma hakkı bulunan üyelerin listesi toplantı
              yerinde hazır bulundurulur. Toplantı yerine girecek üyelerin resmi
              makamlarca verilmiş kimlik belgeleri, yönetim kurulu üyeleri veya
              yönetim kurulunca görevlendirilecek görevliler tarafından kontrol
              edilir. Üyeler, yönetim kurulunca düzenlenen listedeki adları
              karşısına imza koyarak toplantı yerine girerler.
            </p>
            <p>
              Toplantı yeter sayısı sağlanmışsa durum bir tutanakla tespit
              edilir ve toplantı yönetim kurulu başkanı veya görevlendireceği
              yönetim kurulu üyelerinden biri tarafından açılır. Toplantı yeter
              sayısı sağlanamaması halinde de yönetim kurulunca bir tutanak
              düzenlenir.
            </p>
            <p>
              Açılıştan sonra, toplantıyı yönetmek üzere bir başkan ve yeteri
              kadar başkan vekili ile yazman seçilerek divan heyeti oluşturulur.
            </p>
            <p>
              Dernek organlarının seçimi için yapılacak oylamalarda, oy kullanan
              üyelerin divan heyetine kimliklerini göstermeleri ve hazırun
              listesindeki isimlerinin karşılarını imzalamaları zorunludur.
            </p>
            <p>
              Toplantının yönetimi ve güvenliğinin sağlanması divan başkanına
              aittir.
            </p>
            <p>
              Genel kurulda, yalnızca gündemde yer alan maddeler görüşülür.
              Ancak toplantıda hazır bulunan üyelerin onda biri tarafından
              görüşülmesi yazılı olarak istenen konuların gündeme alınması
              zorunludur.
            </p>
            <p>
              Genel kurulda her üyenin bir oy hakkı vardır; üye oyunu şahsen
              kullanmak zorundadır. Onursal üyeler genel kurul toplantılarına
              katılabilir ancak oy kullanamazlar. Tüzel kişinin üye olması
              halinde, tüzel kişinin yönetim kurulu başkanı veya temsille
              görevlendireceği kişi oy kullanır.
            </p>
            <p>
              Toplantıda görüşülen konular ve alınan kararlar bir tutanağa
              yazılır ve divan başkanı ile yazmanlar tarafından birlikte
              imzalanır. Toplantı sonunda, tutanak ve diğer belgeler yönetim
              kurulu başkanına teslim edilir. Yönetim kurulu başkanı bu
              belgelerin korunmasından ve yeni seçilen yönetim kuruluna yedi gün
              içinde teslim etmekten sorumludur.
            </p>
          </Article>

          {/* Madde 8 */}
          <Article
            id="madde-8"
            number="Madde 8"
            title="Genel Kurulun Oy Kullanma ve Karar Alma Usul ve Şekilleri"
          >
            <p>
              Genel kurulda, aksine karar alınmamışsa, oylamalar açık olarak
              yapılır. Açık oylamada, genel kurul başkanının belirteceği yöntem
              uygulanır.
            </p>
            <p>
              Gizli oylama yapılacak olması durumunda ise, toplantı başkanı
              tarafından mühürlenmiş kağıtlar veya oy pusulaları üyeler
              tarafından gereği yapıldıktan sonra içi boş bir kaba atılır ve oy
              vermenin bitiminden sonra açık dökümü yapılarak sonuç belirlenir.
            </p>
            <p>
              Genel kurul kararları, toplantıya katılan üyelerin salt
              çoğunluğuyla alınır. Şu kadar ki, tüzük değişikliği ve derneğin
              feshi kararları, ancak toplantıya katılan üyelerin üçte iki
              çoğunluğuyla alınabilir. Üzeri karalanmış, el ile ekleme yapılmış
              oy pusulaları ve aynı organ için birden fazla oy pusulası
              geçersizdir.
            </p>
            <p>
              Ayrı organlar için düzenlenen oy pusulasında bir geçersizlik
              varsa, oy pusulasının yalnızca ilgili organ için olan bölümü iptal
              edilir. Pusulanın diğer organla ilgili bölümleri geçerli olur ve
              sayılır.
            </p>
            <SectionTitle>
              Toplantısız veya Çağrısız Alınan Kararlar
            </SectionTitle>
            <p>
              Bütün üyelerin bir araya gelmeksizin yazılı katılımıyla alınan
              kararlar ile dernek üyelerinin tamamının bu tüzükte yazılı çağrı
              usulüne uymaksızın bir araya gelerek aldığı kararlar geçerlidir.
              Bu şekilde karar alınması olağan toplantı yerine geçmez.
            </p>
          </Article>

          {/* Madde 9 */}
          <Article
            id="madde-9"
            number="Madde 9"
            title="Genel Kurulun Görev ve Yetkileri"
          >
            <p>
              Aşağıda yazılı hususlar genel kurulca görüşülüp karara bağlanır.
            </p>
            <NumberedList
              items={[
                "Dernek organlarının seçilmesi,",
                "Dernek tüzüğünün değiştirilmesi,",
                "Yönetim ve denetim kurulları raporlarının görüşülmesi ve yönetim kurulunun ibrası,",
                "Yönetim kurulunca hazırlanan bütçenin görüşülüp aynen veya değiştirilerek kabul edilmesi,",
                "Derneğin diğer organlarının denetlenmesi ve gerek görüldüğünde haklı sebeplerle onların görevden alınması,",
                "Üyeliğin reddi veya üyelikten çıkarma hakkında verilen yönetim kurulu kararlarına karşı yapılan itirazların incelenmesi ve karara bağlanması,",
                "Dernek için gerekli olan taşınmaz malların satın alınması veya mevcut taşınmaz malların satılması hususunda yönetim kuruluna yetki verilmesi,",
                "Yönetim kurulunca dernek çalışmaları ile ilgili olarak hazırlanacak yönetmelikleri inceleyip aynen veya değiştirilerek onaylanması,",
                "Dernek yönetim ve denetim kurullarının kamu görevlisi olmayan başkan ve üyelerine verilecek ücret ile her türlü ödenek, yolluk ve tazminatlar ile dernek hizmetleri için görevlendirilecek üyelere verilecek gündelik ve yolluk miktarlarının tespit edilmesi,",
                "Derneğin federasyona katılması ve ayrılmasının kararlaştırılması,",
                "Derneğin şubelerinin açılmasının kararlaştırılması ve açılmasına karar verilen şube ile ilgili işlemlerin yürütülmesi hususunda yönetim kuruluna yetki verilmesi,",
                "Derneğin uluslararası faaliyette bulunması, yurt dışındaki dernek ve kuruluşlara üye olarak katılması veya ayrılması,",
                "Derneğin vakıf kurması,",
                "Derneğin fesih edilmesi,",
                "Yönetim kurulunun diğer önerilerinin incelenip karara bağlanması,",
                "Derneğin en yetkili organı olarak derneğin diğer bir organına verilmemiş olan işlerin görülmesi ve yetkilerin kullanılması,",
                "Mevzuatta genel kurulca yapılması belirtilen diğer görevlerin yerine getirilmesi,",
              ]}
            />
          </Article>

          {/* Madde 10 */}
          <Article
            id="madde-10"
            number="Madde 10"
            title="Yönetim Kurulunun Teşkili, Görev ve Yetkileri"
          >
            <p>
              Yönetim kurulu, beş asıl ve beş yedek üye olarak genel kurulca
              seçilir.
            </p>
            <p>
              Yönetim kurulu, seçimden sonraki ilk toplantısında bir kararla
              görev bölüşümü yaparak başkan, başkan yardımcısı, sekreter, sayman
              ve üye&apos;yi belirler.
            </p>
            <p>
              Yönetim kurulu, tüm üyelerin haber edilmesi şartıyla her zaman
              toplantıya çağrılabilir. Üye tamsayısının yarısından bir
              fazlasının hazır bulunması ile toplanır. Kararlar, toplantıya
              katılan üye tam sayısının salt çoğunluğu ile alınır. Oylarda
              eşitlik durumunda Başkanın bulunduğu yan çoğunluk sağlamış
              sayılır.
            </p>
            <p>
              Yönetim kurulu asıl üyeliğinde istifa veya başka sebeplerden
              dolayı boşalma olduğu taktirde genel kurulda aldığı oy çokluğu
              sırasına göre yedek üyelerin göreve çağrılması mecburidir.
            </p>
            <SectionTitle>Yönetim Kurulunun Görev ve Yetkileri</SectionTitle>
            <p>Yönetim kurulu aşağıdaki hususları yerine getirir.</p>
            <NumberedList
              items={[
                "Derneği temsil etmek veya bu hususta kendi üyelerinden birine veya bir üçüncü kişiye yetki vermek,",
                "Gelir ve gider hesaplarına ilişkin işlemleri yapmak ve gelecek döneme ait bütçeyi hazırlayarak genel kurula sunmak,",
                "Derneğin çalışmaları ile ilgili yönetmelikleri hazırlayarak genel kurul onayına sunmak,",
                "Genel kurulun verdiği yetki ile taşınmaz mal satın almak, derneğe ait taşınır ve taşınmaz malları satmak, bina veya tesis inşa ettirmek, kira sözleşmesi yapmak, dernek lehine rehin ipotek veya ayni haklar tesis ettirmek,",
                "Genel kurulun verdiği yetki ile şube açmaya ilişkin işlemlerin yürütülmesini sağlamak,",
                "Derneğin şubelerinin denetlenmesini sağlamak,",
                "Gerekli görülen yerlerde temsilcilik açılmasını sağlamak,",
                "Genel kurulda alınan kararları uygulamak,",
                "Her faaliyet yılı sonunda derneğin işletme hesabı tablosu veya bilanço ve gelir tablosu ile yönetim kurulu çalışmalarını açıklayan raporunu düzenlemek, toplandığında genel kurula sunmak,",
                "Bütçenin uygulanmasını sağlamak,",
                "Derneğe üye alınması veya üyelikten çıkarılma hususlarında karar vermek,",
                "Derneğin amacını gerçekleştirmek için yetkisi dahilinde her çeşit kararı almak ve uygulamak,",
                "Mevzuatın kendisine verdiği diğer görevleri yapmak ve yetkileri kullanmak,",
              ]}
            />
          </Article>

          {/* Madde 11 */}
          <Article
            id="madde-11"
            number="Madde 11"
            title="Denetim Kurulunun Teşkili, Görev ve Yetkileri"
          >
            <p>
              Denetim kurulu, üç asıl ve üç yedek üye olarak genel kurulca
              seçilir.
            </p>
            <p>
              Denetim kurulu asıl üyeliğinde istifa veya başka sebeplerden
              dolayı boşalma olduğu taktirde genel kurulda aldığı oy çokluğu
              sırasına göre yedek üyelerin göreve çağrılması mecburidir.
            </p>
            <SectionTitle>Denetim Kurulunun Görev ve Yetkileri</SectionTitle>
            <p>
              Denetim kurulu; derneğin, tüzüğünde gösterilen amaç ve amacın
              gerçekleştirilmesi için sürdürüleceği belirtilen çalışma konuları
              doğrultusunda faaliyet gösterip göstermediğini, defter, hesap ve
              kayıtların mevzuata ve dernek tüzüğüne uygun olarak tutulup
              tutulmadığını, dernek tüzüğünde tespit edilen esas ve usullere
              göre ve bir yılı geçmeyen aralıklarla denetler ve denetim
              sonuçlarını bir rapor halinde yönetim kuruluna ve toplandığında
              genel kurula sunar.
            </p>
            <p>Denetim kurulu; gerektiğinde genel kurulu toplantıya çağırır.</p>
          </Article>

          {/* Madde 12 */}
          <Article
            id="madde-12"
            number="Madde 12"
            title="Derneğin Gelir Kaynakları"
          >
            <p>Derneğin gelir kaynakları aşağıda sayılmıştır.</p>
            <NumberedList
              items={[
                "Üye Aidatı: Üyelerden giriş ödentisi alıntısı Yönetim Kurulunca belirlenir. Bu miktarları belirlemeye, artırmaya veya eksiltmeye Yönetim Kurulu yetkilidir,",
                "Şube ödentisi: Derneğin genel giderlerini karşılamak üzere şubeler tarafından tahsil edilen üye ödentilerinin %50'si altı ayda bir genel merkeze gönderilir,",
                "Gerçek ve tüzel kişilerin kendi isteği ile derneğe yaptıkları bağış ve yardımlar,",
                "Dernek tarafından düzenlenen fuar, konferans, gezi, sergi, kermes, sosyal etkinlikler vs. ile elde edilmiş gelirler,",
                "Derneğin mal varlığı olması halinde elde edilen gelirler,",
                "Yardım toplama hakkındaki mevzuat hükümlerine uygun olarak toplanacak bağış ve yardımlar,",
                "Derneğin, amacını gerçekleştirmek için ihtiyaç duyduğu geliri temin etmek amacıyla giriştiği ticari faaliyetlerden elde edilen kazançlar,",
                "İktisadi İşletme gelirleri,",
                "Yayınlarla tüm etkinliklerden sağlanacak gelirler,",
                "Diğer gelirler.",
              ]}
            />
          </Article>

          {/* Madde 13 */}
          <Article
            id="madde-13"
            number="Madde 13"
            title="Derneğin Defter Tutma Esas ve Usulleri ve Tutulacak Defterler"
          >
            <SectionTitle>Defter Tutma Esasları</SectionTitle>
            <p>
              Dernekte, işletme hesabı esasına göre defter tutulur. Ancak,
              yıllık brüt gelirin Dernekler Yönetmeliğinin 31. Maddesinde
              belirtilen haddi aşması durumunda takip eden hesap döneminden
              başlayarak bilanço esasına göre defter tutulur.
            </p>
            <p>
              Bilanço esasına geçilmesi durumunda, üst üste iki hesap döneminde
              yukarıda belirtilen haddin altına düşülürse, takip eden yıldan
              itibaren işletme hesabı esasına dönülebilir.
            </p>
            <p>
              Yukarıda belirtilen hadde bağlı kalmaksızın yönetim kurulu kararı
              ile bilanço esasına göre defter tutulabilir.
            </p>
            <p>
              Derneğin ticari işletmesi açılması durumunda, bu ticari işletme
              için, ayrıca Vergi Usul Kanunu hükümlerine göre defter tutulur.
            </p>
            <SectionTitle>Kayıt Usulü</SectionTitle>
            <p>
              Derneğin defter ve kayıtları Dernekler Yönetmeliğinde belirtilen
              usul ve esasa uygun olarak tutulur.
            </p>
            <SectionTitle>Tutulacak Defterler</SectionTitle>
            <p>Dernekte, aşağıda yazılı defterler tutulur.</p>
            <p className="font-medium text-[#641a29] mt-2">
              a) İşletme hesabı esasında tutulacak defterler:
            </p>
            <NumberedList
              items={[
                "Karar Defteri: Yönetim kurulu kararları tarih ve numara sırasıyla bu deftere yazılır ve kararların altı toplantıya katılan üyelerce imzalanır.",
                "Üye Kayıt Defteri: Derneğe üye olarak girenlerin kimlik bilgileri, derneğe giriş ve çıkış tarihleri bu deftere işlenir. Üyelerin ödedikleri giriş ve yıllık aidat miktarları bu deftere işlenebilir.",
                "Evrak Kayıt Defteri: Gelen ve giden evraklar, tarih ve sıra numarası ile bu deftere kaydedilir. Gelen evrakın asılları ve giden evrakın kopyaları dosyalanır. Elektronik posta yoluyla gelen veya giden evraklar çıktısı alınmak suretiyle saklanır.",
                "İşletme Hesabı Defteri: Dernek adına alınan gelirler ve yapılan giderler açık ve düzenli olarak bu deftere işlenir.",
                "Alındı Belgesi Kayıt Defteri: Alındı belgelerinin seri ve sıra numaraları, bu belgeleri alan ve iade edenlerin adı, soyadı ve imzaları ile aldıkları ve iade ettikleri tarihler bu deftere işlenir.",
                "Demirbaş Defteri: Derneğe ait demirbaşların edinme tarihi ve şekli ile kullanıldıkları veya verildikleri yerler ve kullanım sürelerini dolduranların kayıttan düşürülmesi bu deftere işlenir.",
              ]}
            />
            <p className="text-xs text-[#777] italic mt-1">
              Alındı Belgesi Kayıt Defteri ile Demirbaş Defterinin tutulması
              zorunlu değildir.
            </p>
            <p className="font-medium text-[#641a29] mt-3">
              b) Bilanço esasında tutulacak defterler:
            </p>
            <NumberedList
              items={[
                "(a) bendinin 1, 2 ve 3 üncü alt bentlerinde kayıtlı defterler bilanço esasında defter tutulması durumunda da tutulur.",
                "Yevmiye Defteri ve Büyük Defter: Bu defterlerin tutulma usulü ile kayıt şekli Vergi Usul Kanunu ile bu Kanununun Maliye Bakanlığına verdiği yetkiye istinaden yayımlanan Muhasebe Sistemi Uygulama Genel Tebliğleri esaslarına göre yapılır.",
              ]}
            />
            <SectionTitle>Defterlerin Tasdiki</SectionTitle>
            <p>
              Dernekte, tutulması zorunlu olan defterler (Büyük Defter hariç),
              kullanmaya başlamadan önce il dernekler müdürlüğüne veya notere
              tasdik ettirilir. Bu defterlerin kullanılmasına sayfaları bitene
              kadar devam edilir ve defterlerin ara tasdiki yapılmaz. Ancak,
              bilanço esasına göre tutulan Yevmiye Defteri&apos;nin
              kullanılacağı yıldan önce gelen son ayda, her yıl yeniden tasdik
              ettirilmesi zorunludur.
            </p>
            <SectionTitle>Gelir Tablosu ve Bilanço Düzenlenmesi</SectionTitle>
            <p>
              İşletme hesabı esasına göre kayıt tutulması durumunda yıl
              sonlarında (31 Aralık) &ldquo;İşletme Hesabı Tablosu&rdquo;
              düzenlenir. Bilanço esasına göre defter tutulması durumunda ise,
              yıl sonlarında (31 Aralık), Maliye Bakanlığınca yayımlanan
              Muhasebe Sistemi Uygulama Genel Tebliğlerini esas alarak bilanço
              ve gelir tablosu düzenlenir.
            </p>
          </Article>

          {/* Madde 14 */}
          <Article
            id="madde-14"
            number="Madde 14"
            title="Derneğin Gelir ve Gider İşlemleri"
          >
            <SectionTitle>Gelir ve Gider Belgeleri</SectionTitle>
            <p>
              Dernek gelirleri, &ldquo;Alındı Belgesi&rdquo; ile tahsil edilir.
              Dernek gelirlerinin bankalar aracılığı ile tahsili halinde banka
              tarafından düzenlenen dekont veya hesap özeti gibi belgeler alındı
              belgesi yerine geçer.
            </p>
            <p>
              Dernek giderleri ise fatura, perakende satış fişi, serbest meslek
              makbuzu gibi harcama belgeleri ile yapılır.
            </p>
            <p>
              Dernek tarafından kişi, kurum veya kuruluşlara yapılacak bedelsiz
              mal ve hizmet teslimleri &ldquo;Ayni Yardım Teslim Belgesi&rdquo;
              ile yapılır. Kişi, kurum veya kuruluşlar tarafından derneğe
              yapılacak bedelsiz mal ve hizmet teslimleri ise &ldquo;Ayni Bağış
              Alındı Belgesi&rdquo; ile kabul edilir.
            </p>
            <SectionTitle>Alındı Belgeleri</SectionTitle>
            <p>
              Dernek gelirlerinin tahsilinde kullanılacak &ldquo;Alındı
              Belgeleri&rdquo; yönetim kurulu kararıyla matbaaya bastırılır.
            </p>
            <SectionTitle>Yetki Belgesi</SectionTitle>
            <p>
              Yönetim kurulu asıl üyeleri hariç, dernek adına gelir tahsil
              edecek kişi veya kişiler, yetki süresi de belirtilmek suretiyle,
              yönetim kurulu kararı ile tespit edilir. Yetki belgelerinin süresi
              yönetim kurulu tarafından en çok bir yıl olarak belirlenir.
            </p>
            <SectionTitle>
              Gelir ve Gider Belgelerinin Saklama Süresi
            </SectionTitle>
            <p>
              Defterler hariç olmak üzere, dernek tarafından kullanılan alındı
              belgeleri, harcama belgeleri ve diğer belgeler özel kanunlarda
              belirtilen süreler saklı kalmak üzere, kaydedildikleri
              defterlerdeki sayı ve tarih düzenine uygun olarak 5 yıl süreyle
              saklanır.
            </p>
          </Article>

          {/* Madde 15 */}
          <Article id="madde-15" number="Madde 15" title="Beyanname Verilmesi">
            <p>
              Derneğin, bir önceki yıla ait faaliyetleri ile gelir ve gider
              işlemlerinin yıl sonu itibarıyla sonuçlarına ilişkin &ldquo;Dernek
              Beyannamesi&rdquo; dernek yönetim kurulu tarafından doldurarak,
              her takvim yılının ilk dört ayı içinde dernek başkanı tarafından
              mahallin mülki idare amirliğine verilir.
            </p>
          </Article>

          {/* Madde 16 */}
          <Article id="madde-16" number="Madde 16" title="Bildirim Yükümlülüğü">
            <SectionTitle>Genel Kurul Sonuç Bildirimi</SectionTitle>
            <p>
              Olağan veya olağanüstü genel kurul toplantılarını izleyen otuz gün
              içinde, yönetim ve denetim kurulları ile diğer organlara seçilen
              asıl ve yedek üyeleri içeren Genel Kurul Sonuç Bildirimi mülki
              idare amirliğine verilir.
            </p>
            <SectionTitle>Taşınmazların Bildirilmesi</SectionTitle>
            <p>
              Derneğin edindiği taşınmazlar tapuya tescilinden itibaren otuz gün
              içinde &ldquo;Taşınmaz Mal Bildirimi&rdquo;ni doldurmak suretiyle
              mülki idare amirliğine bildirilir.
            </p>
            <SectionTitle>Yurtdışından Yardım Alma Bildirimi</SectionTitle>
            <p>
              Dernek tarafından, yurtdışından yardım alınacak olması durumunda
              yardım alınmadan önce &ldquo;Yurtdışından Yardım Alma
              Bildirimi&rdquo; doldurup mülki idare amirliğine bildirimde
              bulunulur. Nakdi yardımların bankalar aracılığıyla alınması ve
              kullanılmadan önce bildirim şartının yerine getirilmesi
              zorunludur.
            </p>
            <SectionTitle>
              Kamu Kurum ve Kuruluşları ile Birlikte Yürütülen Ortak Projelerle
              İlgili Bildirim
            </SectionTitle>
            <p>
              Derneğin görev alanına ilişkin konularda kamu kurum ve kuruluşları
              ile yürüttüğü ortak projelerle ilgili olarak yapılan protokol ve
              projenin örneği &ldquo;Proje Bildirimi&rdquo;ne eklenerek,
              protokol tarihini izleyen bir ay içinde dernek merkezinin
              bulunduğu yerin mülki idare amirliğine verilir.
            </p>
            <SectionTitle>Değişikliklerin Bildirilmesi</SectionTitle>
            <p>
              Derneğin yerleşim yerinde meydana gelen değişiklik &ldquo;Yerleşim
              Yeri Değişiklik Bildirimi&rdquo;; genel kurul toplantısı dışında
              dernek organlarında meydana gelen değişiklikler &ldquo;Dernek
              Organlarındaki Değişiklik Bildirimi&rdquo; doldurulmak suretiyle,
              değişikliği izleyen otuz gün içinde mülki idare amirliğine
              bildirilir.
            </p>
            <p>
              Dernek tüzüğünde yapılan değişiklikler de tüzük değişikliğinin
              yapıldığı genel kurul toplantısını izleyen otuz gün içinde, genel
              kurul sonuç bildirimi ekinde mülki idare amirliğine bildirilir.
            </p>
          </Article>

          {/* Madde 17 */}
          <Article id="madde-17" number="Madde 17" title="Derneğin İç Denetimi">
            <p>
              Dernekte genel kurul, yönetim kurulu veya denetim kurulu
              tarafından iç denetim yapılabileceği gibi, bağımsız denetim
              kuruluşlarına da denetim yaptırılabilir. Genel kurul, yönetim
              kurulu veya bağımsız denetim kuruluşlarınca denetim yapılmış
              olması, denetim kurulunun yükümlülüğünü ortadan kaldırmaz.
            </p>
            <p>
              Denetim kurulu tarafından en geç yılda bir defa derneğin denetimi
              gerçekleştirilir. Genel kurul veya yönetim kurulu, gerek görülen
              hallerde denetim yapabilir veya bağımsız denetim kuruluşlarına
              denetim yaptırabilir.
            </p>
          </Article>

          {/* Madde 18 */}
          <Article
            id="madde-18"
            number="Madde 18"
            title="Derneğin Borçlanma Usulleri"
          >
            <p>
              Dernek amacını gerçekleştirmek ve faaliyetlerini yürütebilmek için
              ihtiyaç duyulması halinde yönetim kurulu kararı ile borçlanma
              yapabilir. Bu borçlanma kredili mal ve hizmet alımı konularında
              olabileceği gibi nakit olarak ta yapılabilir. Ancak bu borçlanma,
              derneğin gelir kaynakları ile karşılanamayacak miktarlarda ve
              derneği ödeme güçlüğüne düşürecek nitelikte yapılamaz.
            </p>
          </Article>

          {/* Madde 19 */}
          <Article
            id="madde-19"
            number="Madde 19"
            title="Derneğin Şubelerinin Kuruluşu"
          >
            <p>
              Dernek, gerekli görülen yerlerde genel kurul kararıyla şube
              açabilir. Bu amaçla dernek yönetim kurulunca yetki verilen en az
              üç kişilik kurucular kurulu, Dernekler Yönetmeliği&apos;nde
              belirtilen şube kuruluş bildirimini ve gerekli belgeleri, şube
              açılacak yerin en üst mülki amirliğine verir.
            </p>
          </Article>

          {/* Madde 20 */}
          <Article
            id="madde-20"
            number="Madde 20"
            title="Şubelerin Görev ve Yetkileri"
          >
            <p>
              Şubeler, tüzel kişiliği olamayan, dernek amaç ve hizmet konuları
              doğrultusunda özerk faaliyetlerde bulunmakla görev ve yetkili, tüm
              işlemlerinden doğan alacak ve borçlarından ötürü kendisinin
              sorumlu olduğu dernek iç örgütüdür.
            </p>
          </Article>

          {/* Madde 21 */}
          <Article
            id="madde-21"
            number="Madde 21"
            title="Şubelerin Organları ve Şubelere Uygulanacak Hükümler"
          >
            <p>
              Şubenin organları, genel kurul, yönetim kurulu ve denetim
              kuruludur.
            </p>
            <p>
              Genel kurul, şubenin kayıtlı üyelerinden oluşur. Yönetim kurulu,
              beş asıl ve beş yedek, denetim kurulu ise üç asıl ve üç yedek üye
              olarak şube genel kurulunca seçilir.
            </p>
            <p>
              Bu organların görev ve yetkileri ile bu tüzükte yer alan dernekle
              ilgili diğer hükümler, mevzuatın öngördüğü çerçevede şube&apos;de
              de uygulanır.
            </p>
          </Article>

          {/* Madde 22 */}
          <Article
            id="madde-22"
            number="Madde 22"
            title="Şubelerin Genel Kurullarının Toplanma Zamanı ve Genel Merkez Genel Kurulunda Nasıl Temsil Edileceği"
          >
            <p>
              Şubeler, genel kurul olağan toplantılarını genel merkez genel
              kurulu toplantısından en az iki ay önce bitirmek zorundadırlar.
            </p>
            <p>
              Şubelerin olağan genel kurulu, 3 yılda bir, Eylül ayı içersinde,
              şube yönetim kurulunca belirlenecek gün yer ve saatte toplanır.
            </p>
            <p>
              Şubeler, genel kurul sonuç bildiriminin bir örneğini toplantının
              yapıldığı tarihi izleyen otuz gün içinde mülki idare amirliğine ve
              dernek genel merkezine bildirmek zorundadırlar.
            </p>
            <p>
              Şubeler, şube sayısı üçe kadar genel merkez genel kurulunda tüm
              üyelerin doğrudan katılımı ile; şube sayısı üçten fazla olması
              durumunda ise, şubede kayıtlı her yirmi (20) üye için bir (1),
              arta kalan üye sayısı 10&apos;dan fazla ise bu üyeler içinde bir
              olmak üzere şube genel kurulunda seçilecek delegeler aracılığı ile
              genel merkez genel kuruluna katılma hakkına sahiptir.
            </p>
            <p>
              Genel merkez genel kuruluna en son şube genel kurulunda seçilen
              delegeler katılır. Genel merkez yönetim ve denetim kurulu üyeleri
              genel merkez genel kuruluna katılır, ancak şube adına delege
              seçilmedikleri sürece oy kullanamazlar.
            </p>
            <p>
              Şubelerin yönetim veya denetim kurulunda görevli olanlar genel
              merkez yönetim veya denetim kuruluna seçildiklerinde şubedeki
              görevinden ayrılırlar.
            </p>
          </Article>

          {/* Madde 23 */}
          <Article id="madde-23" number="Madde 23" title="Temsilcilik Açma">
            <p>
              Dernek, gerekli gördüğü yerlerde dernek faaliyetlerini yürütmek
              amacıyla yönetim kurulu kararıyla temsilcilik açabilir.
              Temsilciliğin adresi, yönetim kurulu kararıyla temsilci olarak
              görevlendirilen kişi veya kişiler tarafından o yerin mülkî idare
              amirliğine yazılı olarak bildirilir. Temsilcilik, dernek genel
              kurulunda temsil edilmez. Şubeler temsilcilik açamaz.
            </p>
          </Article>

          {/* Madde 24 */}
          <Article
            id="madde-24"
            number="Madde 24"
            title="Tüzüğün Ne Şekilde Değiştirileceği"
          >
            <p>Tüzük değişikliği genel kurul kararı ile yapılabilir.</p>
            <p>
              Genel kurulda tüzük değişikliği yapılabilmesi için genel kurula
              katılma hakkı bulunan üyelerin 2/3 çoğunluğu aranır. Çoğunluğun
              sağlanamaması sebebiyle toplantının ertelenmesi durumunda ikinci
              toplantıda çoğunluk aranmaz. Ancak, bu toplantıya katılan üye
              sayısı, yönetim ve denetim kurulları üye tam sayısının iki
              katından az olamaz.
            </p>
            <p>
              Tüzük değişikliği için gerekli olan karar çoğunluğu toplantıya
              katılan ve oy kullanma hakkı bulunan üyelerin oylarının
              2/3&apos;ü&apos;dür. Genel kurulda tüzük değişikliği oylaması açık
              olarak yapılır.
            </p>
          </Article>

          {/* Madde 25 */}
          <Article
            id="madde-25"
            number="Madde 25"
            title="Derneğin Feshi ve Mal Varlığının Tasfiye Şekli"
          >
            <p>Genel kurul, her zaman derneğin feshine karar verebilir.</p>
            <p>
              Genel kurulda fesih konusunun görüşülebilmesi için genel kurula
              katılma hakkı bulunan üyelerin 2/3 çoğunluğu aranır. Çoğunluğun
              sağlanamaması sebebiyle toplantının ertelenmesi durumunda ikinci
              toplantıda çoğunluk aranmaz. Ancak, bu toplantıya katılan üye
              sayısı, yönetim ve denetim kurulları üye tam sayısının iki
              katından az olamaz.
            </p>
            <p>
              Fesih kararının alınabilmesi için gerekli olan karar çoğunluğu
              toplantıya katılan ve oy kullanma hakkı bulunan üyelerin oylarının
              2/3&apos;ü&apos;dür. Genel kurulda fesih kararı oylaması açık
              olarak yapılır.
            </p>
            <SectionTitle>Tasfiye İşlemleri</SectionTitle>
            <p>
              Genel kurulca fesih kararı verildiğinde, derneğin para, mal ve
              haklarının tasfiyesi son yönetim kurulu üyelerinden oluşan tasfiye
              kurulunca yapılır. Bu işlemlere, feshe ilişkin genel kurul
              kararının alındığı veya kendiliğinden sona erme halinin
              kesinleştiği tarihten itibaren başlanır. Tasfiye süresi içinde
              bütün işlemlerde dernek adında &ldquo;Tasfiye Halinde Ayhan
              Korkmaz Akademi Derneği&rdquo; ibaresi kullanılır.
            </p>
            <p>
              Tasfiye kurulu, mevzuata uygun olarak derneğin para, mal ve
              haklarının tasfiyesi işlemlerini baştan sonuna kadar tamamlamakla
              görevli ve yetkilidir. Bu kurul, önce derneğin hesaplarını
              inceler. İnceleme esnasında derneğe ait defterler, alındı
              belgeleri, harcama belgeleri, tapu ve banka kayıtları ile diğer
              belgelerinin tespiti yapılarak varlık ve yükümlülükleri bir
              tutanağa bağlanır. Tasfiye işlemeleri sırasında derneğin
              alacaklılarına çağrıda bulunulur ve varsa malları paraya
              çevrilerek alacaklılara ödenir. Derneğin alacaklı olması durumunda
              alacaklar tahsil edilir. Alacakların tahsil edilmesi ve borçların
              ödenmesinden sonra kalan tüm para, mal ve hakları genel kurulda
              belirlenen yere devredilir.
            </p>
            <p>
              Tasfiyeye ilişkin tüm işlemler tasfiye tutanağında gösterilir ve
              tasfiye işlemleri, mülki idare amirliklerince haklı bir nedene
              dayanılarak verilen ek süreler hariç üç ay içinde tamamlanır.
            </p>
            <p>
              Derneğin para, mal ve haklarının tasfiye ve intikal işlemlerinin
              tamamlanmasını müteakip tasfiye kurulu tarafından durumun yedi gün
              içinde bir yazı ile dernek merkezinin bulunduğu yerin mülki idare
              amirliğine bildirilmesi ve bu yazıya tasfiye tutanağının da
              eklenmesi zorunludur.
            </p>
            <p>
              Derneğin defter ve belgelerini tasfiye kurulu sıfatıyla son
              yönetim kurulu üyeleri saklamakla görevlidir. Bu defter ve
              belgelerin saklanma süresi beş yıldır.
            </p>
          </Article>

          {/* Madde 26 */}
          <Article id="madde-26" number="Madde 26" title="Hüküm Eksikliği">
            <p>
              Bu tüzükte belirtilmemiş hususlarda Dernekler Kanunu, Türk Medeni
              Kanunu ve bu Kanunlara atfen çıkartılmış olan Dernekler
              Yönetmeliği ve ilgili diğer mevzuatın dernekler hakkındaki
              hükümleri uygulanır.
            </p>
          </Article>

          {/* Geçici Madde 1 */}
          <Article
            id="gecici-madde-1"
            number="Geçici Madde 1"
            title="Geçici Yönetim Kurulu"
          >
            <p>
              İlk genel kurulda dernek organları oluşturulana kadar, derneği
              temsil edecek ve dernekle ilgili iş ve işlemleri yürütecek olan
              geçici yönetim kurulu üyeleri aşağıda belirtilmiştir. Geçici
              Yönetim Kurulu, derneğin kuruluşunu müteakiben en geç 45 gün
              içerisinde Genel Kurul&apos;u toplamakla yükümlüdür. İlk Genel
              Kurul&apos;da Geçici Yönetim Kurulu feshedilecek ve derneğin
              ilgili organları kanuna uygun olarak ve işbu tüzükte belirtilen
              usul ve esaslara göre seçilecektir.
            </p>
            {/* <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#FBE9EC]">
                    <th className="text-left px-4 py-2.5 font-semibold text-[#641a29] border border-[#f0d0d6] rounded-tl-lg">
                      Adı Soyadı
                    </th>
                    <th className="text-left px-4 py-2.5 font-semibold text-[#641a29] border border-[#f0d0d6] rounded-tr-lg">
                      Ünvanı
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Ayhan Korkmaz", title: "Geçici Yön. Kur. Bşk." },
                    { name: "Tuba Korkmaz", title: "Geçici Yön. Kur. Üyesi" },
                    { name: "Barış Aşar", title: "Geçici Yön. Kur. Üyesi" },
                    {
                      name: "Meryem Gülsur Aşar",
                      title: "Geçici Yön. Kur. Üyesi",
                    },
                    {
                      name: "Engin Cinibulak",
                      title: "Geçici Yön. Kur. Üyesi",
                    },
                    { name: "Yasin Ersoy", title: "Geçici Yön. Kur. Üyesi" },
                    { name: "Faruk Önder", title: "Geçici Yön. Kur. Üyesi" },
                  ].map((member, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-2.5 border border-gray-100 font-medium text-[#333]">
                        {member.name}
                      </td>
                      <td className="px-4 py-2.5 border border-gray-100 text-[#555]">
                        {member.title}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> */}
          </Article>

          {/* Footer Note */}
          <div className="bg-[#641a29] rounded-2xl p-6 text-center text-white">
            <p className="font-semibold">
              Bu tüzük 26 (Yirmi altı) madde ve 1 (Bir) geçici maddeden
              ibarettir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
