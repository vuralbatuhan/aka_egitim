// Eğitim türleri için ortak interface'ler
export interface Program {
  name: string;
  duration: string;
  description: string;
  requirements?: string[];
  tuitionFee?: string;
}

export interface University {
  name: string;
  city: string;
  description: string;
  programs?: string[];
  ranking?: string;
  website?: string;
}

export interface EducationTypeInfo {
  title: string;
  description: string;
  heroImage?: string;
  whyChooseThis: string[];
  programs: Program[];
  universities?: University[];
  requirements: string[];
  process: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

// Ana ülke bilgisi interface'i
export interface CountryInfo {
  name: string;
  slug: string;

  // Genel Bakış (Ana sayfa)
  overview: {
    title: string;
    description: string;
    heroImage?: string;
    highlights: string[];
    statistics: {
      label: string;
      value: string;
      icon: string;
    }[];
    lifeInCountry: {
      cost: string;
      language: string;
      climate: string;
      culture: string;
    };
  };

  // Eğitim türleri
  languageSchool?: EducationTypeInfo;
  university?: EducationTypeInfo;
  mastersDegree?: EducationTypeInfo;
  doctorate?: EducationTypeInfo;
  teacherPrograms?: EducationTypeInfo;
}

export const countries: Record<string, CountryInfo> = {
  italya: {
    name: "İtalya",
    slug: "italya",

    overview: {
      title: "İtalya Eğitim Danışmanlığı",
      description:
        "İtalya, tarihi zenginliği, sanat ve kültür mirası ile dünyanın en önemli eğitim merkezlerinden biridir. İtalyanca dil eğitimi, üniversite, yüksek lisans ve doktora programları ile öğrencilere benzersiz bir akademik ve kültürel deneyim sunar.",
      heroImage:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1800&q=80",
      highlights: [
        "Dil okulları ve üniversitelerde İtalyanca eğitimi",
        "Dünya çapında tanınan üniversite programları",
        "Sanat, moda, tasarım ve mimarlıkta öncü eğitim",
        "Uygun maliyetli yaşam ve eğitim fırsatları",
        "Zengin kültürel deneyim ve tarih",
        "Öğrenci vizesi sonrası çalışma imkanları",
      ],
      statistics: [
        { label: "Başarılı Öğrenci", value: "500+", icon: "users" },
        { label: "Dil Okulu", value: "15+", icon: "school" },
        { label: "Partner Üniversite", value: "25+", icon: "building" },
        { label: "Deneyim Yılı", value: "10+", icon: "calendar" },
        { label: "Memnuniyet", value: "%98", icon: "star" },
      ],
      lifeInCountry: {
        cost: "800-1500 € / ay",
        language: "İtalyanca, İngilizce yaygın",
        climate: "Akdeniz iklimi, ılıman",
        culture: "Zengin tarih, sanat, mutfak kültürü",
      },
    },

    languageSchool: {
      title: "İtalya Dil Okulu Programları",
      description:
        "İtalya'da İtalyanca öğrenmek, sadece dil eğitimi değil, aynı zamanda İtalyan kültürünü, sanatını ve yaşam tarzını deneyimleme fırsatıdır. Roma, Floransa, Milano gibi tarihi şehirlerde modern dil okullarında eğitim alabilirsiniz.",
      heroImage:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1800&q=80",
      whyChooseThis: [
        "Anadili İtalyanca olan öğretmenlerden eğitim",
        "Küçük sınıf mevcutları (ortalama 8-12 kişi)",
        "Kültürel aktiviteler ve geziler dahil programlar",
        "Uygun fiyatlı kurs ücretleri",
        "Schengen vizesi ile Avrupa gezme imkanı",
        "CILS, CELI, PLIDA sınav hazırlığı",
      ],
      programs: [
        {
          name: "Yoğun İtalyanca Kursu",
          duration: "2-52 hafta",
          description:
            "Haftada 20-30 saat İtalyanca eğitimi ile dil seviyenizi hızla geliştirin",
          tuitionFee: "€200-400 / hafta",
        },
        {
          name: "İtalyanca + Kültür Programı",
          duration: "4-24 hafta",
          description:
            "İtalyanca öğrenirken İtalyan mutfağı, sanat tarihi ve kültürü keşfedin",
          tuitionFee: "€250-450 / hafta",
        },
        {
          name: "Üniversite Hazırlık",
          duration: "6-12 ay",
          description:
            "İtalyan üniversitelerine kabul için gerekli B2/C1 seviyesi İtalyanca eğitimi",
          tuitionFee: "€3000-6000 / dönem",
        },
        {
          name: "İş İtalyancası",
          duration: "4-12 hafta",
          description:
            "Profesyonel yaşamda kullanabileceğiniz İş İtalyancası eğitimi",
          tuitionFee: "€300-500 / hafta",
        },
        {
          name: "CILS Sınav Hazırlık",
          duration: "4-8 hafta",
          description:
            "Resmi İtalyanca yeterlilik sınavı CILS'e özel hazırlık programı",
          tuitionFee: "€250-400 / hafta",
        },
      ],
      requirements: [
        "18 yaş ve üzeri olmak",
        "Pasaport (en az 6 ay geçerli)",
        "Dil okulu kabul mektubu",
        "Sağlık sigortası",
        "Konaklama belgesi",
        "Yeterli finansal kaynak (aylık €930)",
      ],
      process: [
        "Dil okulu ve program seçimi",
        "Online başvuru ve kayıt ücreti ödemesi",
        "Kabul mektubunun alınması",
        "Konaklama ayarlamaları",
        "Vize başvurusu ve randevu",
        "Seyahat hazırlıkları ve uçuş bileti",
        "İtalya'ya varış ve okula kayıt",
      ],
      faqs: [
        {
          question: "Dil kursu için vize gerekli mi?",
          answer:
            "90 günden uzun kurslar için öğrenci vizesi gereklidir. Kısa kurslar için turist vizesi yeterlidir.",
        },
        {
          question: "Dil okulu bitince ne yapabilirim?",
          answer:
            "Dil eğitimi sonrası üniversiteye başvurabilir, iş arayabilir veya turist olarak Avrupa'yı gezebilirsiniz.",
        },
        {
          question: "İtalyanca bilmeden gidebilir miyim?",
          answer:
            "Evet, A1 (başlangıç) seviyesinden başlayabileceğiniz programlar mevcuttur.",
        },
      ],
    },

    university: {
      title: "İtalya Üniversite Programları",
      description:
        "İtalya'nın köklü üniversiteleri, dünya çapında tanınan akademik programlar sunar. Bologna Üniversitesi gibi dünyanın en eski üniversitelerinden modern teknik üniversitelere kadar geniş bir yelpazede eğitim imkanları bulunur.",
      heroImage:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1800&q=80",
      whyChooseThis: [
        "Avrupa'nın en eski ve prestijli üniversiteleri",
        "İngilizce ve İtalyanca program seçenekleri",
        "Uygun öğrenim ücretleri (€900-4000/yıl)",
        "Erasmus+ değişim programları",
        "Sanat, moda, tasarım ve mimarlıkta dünya lideri",
        "Part-time çalışma izni (20 saat/hafta)",
      ],
      programs: [
        {
          name: "Lisans Programları",
          duration: "3 yıl",
          description:
            "Mühendislik, işletme, sanat, tasarım, mimarlık ve daha fazlası",
          tuitionFee: "€900-4000 / yıl",
          requirements: [
            "Lise diploması",
            "İtalyanca veya İngilizce dil belgesi",
            "Giriş sınavı (bazı bölümler)",
          ],
        },
        {
          name: "Moda ve Tasarım",
          duration: "3-4 yıl",
          description:
            "Milano ve Roma'da dünyaca ünlü moda ve tasarım okulları",
          tuitionFee: "€10000-25000 / yıl",
          requirements: [
            "Portfolio",
            "İngilizce dil belgesi",
            "Motivasyon mektubu",
          ],
        },
        {
          name: "Mühendislik Programları",
          duration: "3 yıl",
          description:
            "Makine, elektrik, bilgisayar, inşaat mühendisliği programları",
          tuitionFee: "€1000-3000 / yıl",
        },
        {
          name: "Sanat ve Mimarlık",
          duration: "3-5 yıl",
          description:
            "İtalya'nın zengin sanat mirasında akademik eğitim",
          tuitionFee: "€1500-5000 / yıl",
        },
      ],
      universities: [
        {
          name: "Università di Bologna",
          city: "Bologna",
          description:
            "Dünyanın en eski üniversitesi (1088), mühendislik ve sanat programları",
          ranking: "Dünya sıralaması: Top 200",
        },
        {
          name: "Politecnico di Milano",
          city: "Milano",
          description:
            "Avrupa'nın en iyi teknik üniversitelerinden, moda ve tasarım",
          ranking: "Mühendislikte dünya 7. sırası",
        },
        {
          name: "Sapienza Università di Roma",
          city: "Roma",
          description:
            "İtalya'nın en büyük üniversitesi, geniş program yelpazesi",
          ranking: "Dünya sıralaması: Top 150",
        },
        {
          name: "Università di Padova",
          city: "Padova",
          description: "1222'de kurulan tarihi üniversite, bilim ve tıp",
          ranking: "İtalya'da top 3",
        },
      ],
      requirements: [
        "Lise diploması (denklik onaylı)",
        "İtalyanca B2 veya İngilizce B2 seviyesi",
        "Giriş sınavı (bazı programlar için)",
        "Motivasyon mektubu",
        "Referans mektupları",
        "Diploma notlarının transkripti",
      ],
      process: [
        "Üniversite ve bölüm araştırması",
        "Dil sınavına hazırlık ve belgesi alma",
        "Online başvuru (Universitaly portalı)",
        "Giriş sınavına katılım (gerekirse)",
        "Kabul mektubunun alınması",
        "Öğrenci vizesi başvurusu",
        "Konaklama ve kayıt işlemleri",
      ],
      faqs: [
        {
          question: "İngilizce programlar var mı?",
          answer:
            "Evet, özellikle yüksek lisans seviyesinde birçok İngilizce program mevcuttur.",
        },
        {
          question: "Üniversite öğrencisi çalışabilir mi?",
          answer:
            "Evet, öğrenciler haftada 20 saat part-time çalışma hakkına sahiptir.",
        },
        {
          question: "Burs imkanları var mı?",
          answer:
            "Evet, hem üniversitelerin kendi bursları hem de İtalyan hükümeti bursları mevcuttur.",
        },
      ],
    },

    mastersDegree: {
      title: "İtalya Yüksek Lisans Programları",
      description:
        "İtalya'da yüksek lisans programları, araştırma odaklı ve uygulamalı eğitim ile öğrencilere uzmanlaşma imkanı sunar. İngilizce ve İtalyanca program seçenekleri ile uluslararası öğrencilere kapılarını açar.",
      heroImage:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1800&q=80",
      whyChooseThis: [
        "1-2 yıllık yoğun master programları",
        "Araştırma ve inovasyon odaklı eğitim",
        "İngilizce program çeşitliliği",
        "Düşük öğrenim ücretleri",
        "Avrupa'da kariyer fırsatları",
        "Erasmus Mundus burs programları",
      ],
      programs: [
        {
          name: "Master of Science (MSc)",
          duration: "2 yıl",
          description:
            "Mühendislik, bilgisayar bilimi, veri bilimi, biyoteknoloji",
          tuitionFee: "€1000-4000 / yıl",
        },
        {
          name: "Master of Arts (MA)",
          duration: "1-2 yıl",
          description:
            "Sanat tarihi, tasarım, müze yönetimi, kültürel miras",
          tuitionFee: "€2000-6000 / yıl",
        },
        {
          name: "MBA Programları",
          duration: "1-2 yıl",
          description:
            "Milano ve Roma'da uluslararası tanınan MBA programları",
          tuitionFee: "€15000-35000 / yıl",
        },
        {
          name: "Moda ve Tasarım Yüksek Lisans",
          duration: "1 yıl",
          description:
            "Lüks marka yönetimi, moda tasarımı, ürün tasarımı",
          tuitionFee: "€20000-30000 / yıl",
        },
      ],
      universities: [
        {
          name: "Politecnico di Milano",
          city: "Milano",
          description: "Mühendislik, mimarlık ve tasarımda dünya çapında üne sahip",
        },
        {
          name: "Bocconi University",
          city: "Milano",
          description: "İşletme, finans ve ekonomi alanında Avrupa'nın en iyisi",
        },
        {
          name: "Università di Bologna",
          city: "Bologna",
          description: "Geniş yelpazede master programları",
        },
        {
          name: "Sapienza Università di Roma",
          city: "Roma",
          description: "Araştırma odaklı master programları",
        },
      ],
      requirements: [
        "Lisans diploması (en az 3 yıl)",
        "CGPA minimum 2.5/4.0",
        "İngilizce B2 veya İtalyanca B2 dil belgesi",
        "GMAT/GRE (MBA ve bazı programlar için)",
        "Motivasyon mektubu",
        "2 referans mektubu",
        "CV ve portfolio (tasarım programları için)",
      ],
      process: [
        "Program ve üniversite araştırması",
        "Dil sınavı hazırlığı (IELTS/TOEFL veya CILS)",
        "GMAT/GRE hazırlığı (gerekirse)",
        "Başvuru belgelerinin hazırlanması",
        "Online başvuru",
        "Mülakat (bazı programlar)",
        "Kabul ve vize işlemleri",
      ],
      faqs: [
        {
          question: "Yüksek lisans için burs var mı?",
          answer:
            "Evet, İtalyan hükümeti, üniversiteler ve Erasmus Mundus programları burs sağlar.",
        },
        {
          question: "Tez yazmak zorunlu mu?",
          answer:
            "Evet, çoğu master programı tez veya bitirme projesi gerektirir.",
        },
        {
          question: "Mezuniyet sonrası kalabilir miyim?",
          answer:
            "Evet, mezuniyet sonrası iş aramak için 1 yıl kalma hakkınız vardır.",
        },
      ],
    },

    doctorate: {
      title: "İtalya Doktora Programları",
      description:
        "İtalya'da doktora eğitimi, araştırma ve akademik kariyere yönelik yüksek kaliteli programlar sunar. Birçok doktora programı burslu olup, öğrencilere aylık maaş ve araştırma desteği sağlanır.",
      heroImage:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1800&q=80",
      whyChooseThis: [
        "3-4 yıllık araştırma odaklı eğitim",
        "Çoğu program burslu (€15000-20000/yıl)",
        "Avrupa araştırma ağına erişim",
        "Uluslararası işbirlikleri",
        "Konferans ve yayın desteği",
        "Akademik kariyer fırsatları",
      ],
      programs: [
        {
          name: "PhD in Engineering",
          duration: "3-4 yıl",
          description:
            "Makine, elektrik, bilgisayar, malzeme mühendisliği doktorası",
          tuitionFee: "Burslu (€15000-20000/yıl maaş)",
        },
        {
          name: "PhD in Sciences",
          duration: "3 yıl",
          description: "Fizik, kimya, biyoloji, matematik doktora programları",
          tuitionFee: "Burslu",
        },
        {
          name: "PhD in Humanities",
          duration: "3-4 yıl",
          description:
            "Tarih, felsefe, arkeoloji, sanat tarihi doktora programları",
          tuitionFee: "Burslu veya düşük ücretli",
        },
        {
          name: "PhD in Social Sciences",
          duration: "3-4 yıl",
          description: "Ekonomi, sosyoloji, siyaset bilimi doktora programları",
          tuitionFee: "Burslu",
        },
      ],
      universities: [
        {
          name: "Politecnico di Milano",
          city: "Milano",
          description: "Mühendislik ve tasarım doktorası",
        },
        {
          name: "Università di Bologna",
          city: "Bologna",
          description: "Multidisipliner doktora programları",
        },
        {
          name: "Sapienza Università di Roma",
          city: "Roma",
          description: "Araştırma odaklı PhD programları",
        },
        {
          name: "Scuola Normale Superiore",
          city: "Pisa",
          description: "Prestijli PhD programları, tam burslu",
        },
      ],
      requirements: [
        "Master diploması (ilgili alanda)",
        "Yüksek akademik performans (3.0+/4.0 GPA)",
        "Araştırma önerisi (Research Proposal)",
        "Yayınlar veya araştırma deneyimi (tercih edilir)",
        "İngilizce veya İtalyanca yeterlilik belgesi",
        "Referans mektupları (2-3 adet)",
        "Akademik CV",
      ],
      process: [
        "Araştırma alanı ve danışman belirleme",
        "Araştırma önerisinin hazırlanması",
        "Üniversitelere başvuru (genelde yılda 1 kez)",
        "Yazılı sınav ve mülakat",
        "Burs kazanma",
        "Vize ve kayıt işlemleri",
        "Araştırmaya başlama",
      ],
      faqs: [
        {
          question: "Doktora burslu mu?",
          answer:
            "Evet, İtalya'da doktora programlarının çoğu bursludur ve aylık €1200-1700 maaş verilir.",
        },
        {
          question: "İngilizce doktora yapabilir miyim?",
          answer:
            "Evet, birçok üniversitede İngilizce doktora programları mevcuttur.",
        },
        {
          question: "Doktora sonrası ne yapabilirim?",
          answer:
            "Akademik kariyer, araştırma kurumlarında çalışma veya sanayi R&D pozisyonlarında çalışabilirsiniz.",
        },
      ],
    },

    teacherPrograms: {
      title: "İtalya Öğretmen Eğitim Programları",
      description:
        "İtalya'da öğretmen yetiştirme programları, pedagojik yaklaşımlar ve Avrupa eğitim standartlarına uygun eğitim sunar. İtalyanca öğretmenliği, müzik öğretmenliği ve sanat eğitimi gibi alanlarda uzmanlaşma imkanı.",
      heroImage:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1800&q=80",
      whyChooseThis: [
        "Montessori ve Reggio Emilia pedagojisi",
        "Uluslararası geçerliliği olan diplomalar",
        "Staj ve uygulama imkanları",
        "İtalyanca öğretmenliği sertifikaları",
        "Kültürel ve sanatsal eğitim entegrasyonu",
        "Avrupa'da öğretmenlik fırsatları",
      ],
      programs: [
        {
          name: "İtalyanca Öğretmenliği Sertifikası (DITALS)",
          duration: "6-12 ay",
          description:
            "Yabancılara İtalyanca öğretmek için uluslararası tanınan sertifika",
          tuitionFee: "€2000-4000",
        },
        {
          name: "Öğretmen Yetiştirme Yüksek Lisansı",
          duration: "2 yıl",
          description:
            "İlköğretim ve ortaöğretim öğretmenliği için master programı",
          tuitionFee: "€1500-3000 / yıl",
        },
        {
          name: "Montessori Öğretmen Eğitimi",
          duration: "1 yıl",
          description:
            "Uluslararası tanınan Montessori öğretmenlik sertifikası",
          tuitionFee: "€5000-8000",
        },
        {
          name: "Müzik ve Sanat Eğitimi",
          duration: "2-3 yıl",
          description:
            "Konservatuvar ve sanat akademilerinde öğretmen yetiştirme",
          tuitionFee: "€1000-3000 / yıl",
        },
      ],
      requirements: [
        "Lisans diploması (eğitim veya ilgili alan)",
        "İtalyanca B2 seviyesi (DITALS için C1)",
        "Öğretmenlik deneyimi (tercih edilir)",
        "Motivasyon mektubu",
        "Referans mektupları",
      ],
      process: [
        "Program seçimi ve araştırma",
        "İtalyanca dil seviyesini geliştirme",
        "Başvuru belgelerinin hazırlanması",
        "Kayıt ve kabul işlemleri",
        "Vize başvurusu",
        "Eğitime başlama ve staj",
        "Sertifika veya diploma alma",
      ],
      faqs: [
        {
          question: "DITALS sertifikası nedir?",
          answer:
            "DITALS, yabancılara İtalyanca öğretmek için Siena Üniversitesi tarafından verilen uluslararası sertifikadır.",
        },
        {
          question: "İtalya'da öğretmen olarak çalışabilir miyim?",
          answer:
            "AB vatandaşı değilseniz zorludur, ancak dil okullarında veya uluslararası okullarda çalışma imkanı vardır.",
        },
        {
          question: "Online programlar var mı?",
          answer:
            "Bazı sertifika programları hibrit veya online formatında sunulmaktadır.",
        },
      ],
    },
  },

  ingiltere: {
    name: "İngiltere",
    slug: "ingiltere",

    overview: {
      title: "İngiltere Eğitim Danışmanlığı",
      description:
        "İngiltere, dünyanın en prestijli üniversitelerine ev sahipliği yapar ve İngilizce öğrenmek için en ideal destinasyonlardan biridir. Oxford, Cambridge ve London gibi tarihi şehirlerde kaliteli eğitim imkanları sunar.",
      heroImage:
        "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1800&q=80",
      highlights: [
        "Dünya çapında tanınan üniversiteler",
        "İngilizce dil eğitiminde öncü ülke",
        "Kaliteli araştırma ve akademik programlar",
        "Çok kültürlü öğrenci topluluğu",
        "Mezuniyet sonrası çalışma vizesi imkanı",
        "Avrupa ve dünya çapında tanınan diplomalar",
      ],
      statistics: [
        { label: "Başarılı Öğrenci", value: "800+", icon: "users" },
        { label: "Dil Okulu", value: "30+", icon: "school" },
        { label: "Partner Üniversite", value: "40+", icon: "building" },
        { label: "Deneyim Yılı", value: "15+", icon: "calendar" },
        { label: "Memnuniyet", value: "%99", icon: "star" },
      ],
      lifeInCountry: {
        cost: "£1200-2000 / ay (London dışı: £800-1200)",
        language: "İngilizce",
        climate: "Ilıman okyanus iklimi, yağışlı",
        culture: "Çok kültürlü, zengin tarih ve modern yaşam",
      },
    },

    languageSchool: {
      title: "İngiltere Dil Okulu Programları",
      description:
        "İngiltere'de İngilizce öğrenmek, dilin doğduğu yerde aksan ve kültürünü deneyimleme fırsatıdır. British Council onaylı kaliteli dil okullarında eğitim alabilirsiniz.",
      whyChooseThis: [
        "British Council akreditasyonlu dil okulları",
        "Anadili İngilizce olan öğretmenler",
        "IELTS, Cambridge, TOEFL hazırlık programları",
        "Küçük sınıf mevcutları",
        "Kültürel aktiviteler ve geziler",
        "Çeşitli konaklama seçenekleri",
      ],
      programs: [
        {
          name: "Genel İngilizce Kursu",
          duration: "2-48 hafta",
          description: "Konuşma, okuma, yazma ve dinleme becerilerinizi geliştirin",
          tuitionFee: "£250-400 / hafta",
        },
        {
          name: "IELTS Hazırlık",
          duration: "4-12 hafta",
          description: "IELTS sınavına özel yoğun hazırlık programı",
          tuitionFee: "£300-450 / hafta",
        },
        {
          name: "Akademik İngilizce",
          duration: "12-36 hafta",
          description: "Üniversite eğitimi için akademik İngilizce",
          tuitionFee: "£3000-8000 / dönem",
        },
        {
          name: "İş İngilizcesi",
          duration: "2-8 hafta",
          description: "Profesyonel iş dünyası için İngilizce",
          tuitionFee: "£350-500 / hafta",
        },
        {
          name: "Cambridge Sınav Hazırlığı",
          duration: "8-12 hafta",
          description: "FCE, CAE, CPE sınavlarına hazırlık",
          tuitionFee: "£300-450 / hafta",
        },
      ],
      requirements: [
        "16 yaş ve üzeri olmak",
        "Pasaport (en az 6 ay geçerli)",
        "Dil okulu kabul mektubu",
        "Finansal yeterlilik belgesi",
        "Konaklama belgesi",
        "Öğrenci vizesi (6 aydan uzun kurslar için)",
      ],
      process: [
        "Dil okulu ve şehir seçimi",
        "Online başvuru ve kayıt",
        "Kabul mektubunun alınması",
        "Konaklama ayarlamaları",
        "Student Visa başvurusu (gerekirse)",
        "CAS belgesi alımı",
        "Seyahat ve varış",
      ],
      faqs: [
        {
          question: "Hangi dil sınavını tercih etmeliyim?",
          answer: "IELTS, İngiltere'de en çok kabul gören sınavdır. Üniversite başvuruları için IELTS Academic tercih edilir.",
        },
        {
          question: "Homestay nedir?",
          answer: "İngiliz bir ailenin yanında kalarak hem konaklama hem de kültür deneyimi yaşama imkanıdır.",
        },
      ],
    },

    university: {
      title: "İngiltere Üniversite Programları",
      description:
        "İngiltere'nin dünyaca ünlü üniversiteleri, çeşitli alanlarda lisans ve önlisans programları sunar. Oxford ve Cambridge gibi tarihi üniversitelerden modern araştırma üniversitelerine kadar geniş seçenekler.",
      whyChooseThis: [
        "Dünya sıralamasında üst sıralarda yer alan üniversiteler",
        "3 yıllık lisans programları (İskoçya'da 4 yıl)",
        "Yüksek kaliteli öğretim ve araştırma",
        "Geniş burs imkanları",
        "Mezuniyet sonrası 2 yıl çalışma vizesi",
        "Uluslararası tanınırlık",
      ],
      programs: [
        {
          name: "Lisans Programları (BA/BSc)",
          duration: "3 yıl",
          description: "Mühendislik, sosyal bilimler, sanat, işletme ve daha fazlası",
          tuitionFee: "£10000-38000 / yıl",
        },
        {
          name: "Foundation Year",
          duration: "1 yıl",
          description: "Üniversite hazırlık programı (lise mezunları için)",
          tuitionFee: "£12000-18000 / yıl",
        },
        {
          name: "HND/HNC Programları",
          duration: "2 yıl",
          description: "Mesleki yüksek öğrenim diploması",
          tuitionFee: "£8000-12000 / yıl",
        },
      ],
      universities: [
        {
          name: "University of Oxford",
          city: "Oxford",
          description: "Dünyanın en prestijli üniversitesi",
          ranking: "Dünya 1. sırası",
        },
        {
          name: "University of Cambridge",
          city: "Cambridge",
          description: "Bilim ve araştırmada dünya lideri",
          ranking: "Dünya 2. sırası",
        },
        {
          name: "Imperial College London",
          city: "London",
          description: "STEM alanlarında mükemmellik",
          ranking: "Dünya 6. sırası",
        },
        {
          name: "London School of Economics (LSE)",
          city: "London",
          description: "Sosyal bilimlerde dünya lideri",
          ranking: "Sosyal bilimlerde dünya 1. sırası",
        },
      ],
      requirements: [
        "Lise diploması veya A-Level",
        "IELTS 6.0-7.5 (program bağlı)",
        "Personal statement",
        "Referans mektubu",
        "UCAS başvurusu",
      ],
      process: [
        "UCAS sistemine kayıt",
        "5 üniversiteye başvuru",
        "Personal statement hazırlama",
        "Teklif alma (Conditional/Unconditional)",
        "IELTS sınavı",
        "CAS belgesi alma",
        "Student Visa başvurusu",
      ],
    },

    mastersDegree: {
      title: "İngiltere Yüksek Lisans Programları",
      description:
        "İngiltere'de yüksek lisans programları, 1 yıllık yoğun eğitim ile dünya çapında tanınan diplomalar sunar. Araştırma ve öğretim odaklı program seçenekleri mevcuttur.",
      whyChooseThis: [
        "1 yıllık yoğun master programları",
        "Taught ve Research master seçenekleri",
        "Yüksek kaliteli araştırma imkanları",
        "Chevening, Commonwealth bursları",
        "Mezuniyet sonrası 2 yıl çalışma hakkı",
        "MBA ve özel programlar",
      ],
      programs: [
        {
          name: "Master of Arts (MA)",
          duration: "1 yıl",
          description: "Beşeri bilimler, sanat, sosyal bilimler",
          tuitionFee: "£12000-28000 / yıl",
        },
        {
          name: "Master of Science (MSc)",
          duration: "1 yıl",
          description: "Mühendislik, bilgisayar bilimi, veri bilimi",
          tuitionFee: "£15000-35000 / yıl",
        },
        {
          name: "MBA Programs",
          duration: "1-2 yıl",
          description: "London Business School, Oxford Said, Cambridge Judge",
          tuitionFee: "£35000-70000 / yıl",
        },
        {
          name: "MRes/MPhil",
          duration: "1-2 yıl",
          description: "Araştırma odaklı master programları",
          tuitionFee: "£15000-30000 / yıl",
        },
      ],
      requirements: [
        "Lisans diploması (2:1 veya üzeri)",
        "IELTS 6.5-7.5",
        "GMAT/GRE (MBA için)",
        "CV ve personal statement",
        "2 referans mektubu",
        "İş deneyimi (MBA için)",
      ],
      process: [
        "Üniversite araştırması",
        "IELTS/GMAT hazırlığı",
        "Başvuru belgelerinin hazırlanması",
        "Online başvuru",
        "Teklif alma",
        "CAS ve vize işlemleri",
      ],
    },

    doctorate: {
      title: "İngiltere Doktora Programları",
      description:
        "İngiltere'de doktora eğitimi, dünya çapında tanınan araştırma merkezlerinde yüksek kaliteli akademik eğitim sunar. PhD ve DPhil programları 3-4 yıl sürer.",
      whyChooseThis: [
        "Dünya lideri araştırma üniversiteleri",
        "3-4 yıllık PhD programları",
        "Çeşitli burs imkanları",
        "Doktora sonrası araştırma fırsatları",
        "Uluslararası akademik ağ",
        "İnovasyon ve patent imkanları",
      ],
      programs: [
        {
          name: "PhD/DPhil",
          duration: "3-4 yıl",
          description: "Tam zamanlı doktora araştırması",
          tuitionFee: "£15000-30000 / yıl",
        },
        {
          name: "EngD (Engineering Doctorate)",
          duration: "4 yıl",
          description: "Endüstri odaklı mühendislik doktorası",
          tuitionFee: "Genellikle burslu",
        },
        {
          name: "Professional Doctorates",
          duration: "3-6 yıl",
          description: "DBA, EdD, DClinPsy vb. uygulama odaklı doktoralar",
          tuitionFee: "£18000-35000 / yıl",
        },
      ],
      requirements: [
        "Master diploması (Merit veya Distinction)",
        "Research Proposal",
        "IELTS 7.0+",
        "Yayınlar (tercih edilir)",
        "3 referans mektubu",
        "Akademik CV",
      ],
      process: [
        "Danışman ve araştırma alanı belirleme",
        "Research proposal hazırlama",
        "Üniversitelere başvuru",
        "Mülakat",
        "Burs başvuruları",
        "CAS ve vize işlemleri",
      ],
    },

    teacherPrograms: {
      title: "İngiltere Öğretmen Eğitim Programları",
      description:
        "İngiltere'de öğretmen yetiştirme programları, PGCE ve QTS sertifikaları ile dünya çapında tanınır. İngilizce öğretmenliği sertifikaları (CELTA, DELTA) özellikle popülerdir.",
      whyChooseThis: [
        "CELTA ve DELTA sertifikaları",
        "PGCE (Postgraduate Certificate in Education)",
        "QTS (Qualified Teacher Status)",
        "Uluslararası geçerliliği olan diplomalar",
        "Staj ve okul deneyimi",
        "İngiltere'de öğretmenlik fırsatları",
      ],
      programs: [
        {
          name: "CELTA (Certificate in Teaching English)",
          duration: "4-5 hafta",
          description: "Yetişkinlere İngilizce öğretmek için en tanınan sertifika",
          tuitionFee: "£1200-1600",
        },
        {
          name: "DELTA (Diploma in Teaching English)",
          duration: "6-12 ay",
          description: "İleri seviye İngilizce öğretmenliği diploması",
          tuitionFee: "£2500-4000",
        },
        {
          name: "PGCE (Postgraduate Certificate in Education)",
          duration: "1 yıl",
          description: "İlk ve ortaöğretim öğretmenliği sertifikası",
          tuitionFee: "£9000-15000",
        },
        {
          name: "Master of Education (MEd)",
          duration: "1-2 yıl",
          description: "Eğitim bilimleri alanında yüksek lisans",
          tuitionFee: "£12000-22000",
        },
      ],
      requirements: [
        "Lisans diploması",
        "IELTS 7.0+ (CELTA için 6.0)",
        "Öğretmenlik deneyimi (DELTA için)",
        "DBS check (çocuklarla çalışma için)",
      ],
      process: [
        "Program seçimi",
        "Online başvuru",
        "Mülakat",
        "Kabul ve kayıt",
        "Vize işlemleri",
        "Eğitim ve staj",
        "Sertifika alma",
      ],
    },
  },

  almanya: {
    name: "Almanya",
    slug: "almanya",

    overview: {
      title: "Almanya Eğitim Danışmanlığı",
      description:
        "Almanya, dünya çapında tanınan üniversiteleri, güçlü ekonomisi ve ücretsiz eğitim fırsatlarıyla uluslararası öğrenciler için en popüler destinasyonlardan biridir. Mühendislik, teknoloji ve araştırma alanlarında öncü konumdadır.",
      heroImage:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1800&q=80",
      highlights: [
        "Ücretsiz veya düşük maliyetli eğitim",
        "Dünya çapında tanınan üniversiteler",
        "Mühendislik ve teknolojide öncü",
        "Güçlü ekonomi ve iş imkanları",
        "Öğrencilere part-time çalışma hakkı (20 saat/hafta)",
        "Mezuniyet sonrası 18 ay iş arama vizesi",
      ],
      statistics: [
        { label: "Başarılı Öğrenci", value: "1000+", icon: "users" },
        { label: "Dil Okulu", value: "25+", icon: "school" },
        { label: "Partner Üniversite", value: "40+", icon: "building" },
        { label: "Deneyim Yılı", value: "12+", icon: "calendar" },
        { label: "Memnuniyet", value: "%99", icon: "star" },
      ],
      lifeInCountry: {
        cost: "850-1200 € / ay",
        language: "Almanca, İngilizce programlar mevcut",
        climate: "Karasal iklim, dört mevsim",
        culture: "Düzen, disiplin ve kalite odaklı",
      },
    },

    languageSchool: {
      title: "Almanya Dil Okulu Programları",
      description:
        "Almanya'da Almanca öğrenmek, Avrupa'nın en güçlü ekonomisinde eğitim ve kariyer fırsatlarının kapısını açar. Profesyonel dil okullarında Goethe Institut standartlarında eğitim alabilirsiniz.",
      heroImage:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1800&q=80",
      whyChooseThis: [
        "Goethe Institut sertifikalı dil okulları",
        "TestDaF ve DSH sınav hazırlık programları",
        "Üniversite kabul garantili programlar",
        "Uygun fiyatlı kurs ücretleri",
        "Part-time çalışma imkanı",
        "Schengen vizesi ile Avrupa gezme fırsatı",
      ],
      programs: [
        {
          name: "Yoğun Almanca Kursu",
          duration: "3-52 hafta",
          description:
            "Haftada 20-25 saat Almanca eğitimi ile A1'den C1'e kadar tüm seviyelerde eğitim",
          tuitionFee: "€250-350 / hafta",
        },
        {
          name: "TestDaF Hazırlık",
          duration: "4-12 hafta",
          description:
            "Üniversite başvuruları için gerekli TestDaF sınavına özel hazırlık",
          tuitionFee: "€300-400 / hafta",
        },
        {
          name: "DSH Hazırlık",
          duration: "6-12 hafta",
          description:
            "Üniversitelere kabul için DSH sınavına hazırlık programı",
          tuitionFee: "€250-350 / hafta",
        },
        {
          name: "Üniversite Hazırlık (Studienkolleg)",
          duration: "1 yıl",
          description:
            "Alman üniversitelerine kabul için hazırlık kursu ve dil eğitimi",
          tuitionFee: "€4000-6000 / yıl",
        },
        {
          name: "İş Almancası",
          duration: "4-8 hafta",
          description: "Profesyonel iş hayatı için Almanca eğitimi",
          tuitionFee: "€300-450 / hafta",
        },
      ],
      requirements: [
        "18 yaş ve üzeri olmak",
        "Pasaport (en az 6 ay geçerli)",
        "Dil okulu kabul mektubu",
        "Bloke hesap (€11208/yıl)",
        "Sağlık sigortası",
        "Konaklama belgesi",
      ],
      process: [
        "Dil okulu ve program seçimi",
        "Online başvuru ve kayıt",
        "Kabul mektubunun alınması",
        "Bloke hesap açılışı",
        "Vize başvurusu ve randevu",
        "Sağlık sigortası düzenleme",
        "Almanya'ya varış ve kayıt",
      ],
      faqs: [
        {
          question: "Dil kursu sonrası Almanya'da kalabilir miyim?",
          answer:
            "Evet, dil kursundan sonra üniversiteye başvurabilir veya Studienkolleg programına kayıt olabilirsiniz.",
        },
        {
          question: "Bloke hesap nedir?",
          answer:
            "Almanya'da yaşam masraflarınızı karşılayabileceğinizi gösteren özel bir banka hesabıdır. Yıllık yaklaşık €11208 yatırmanız gerekir.",
        },
        {
          question: "Dil kursu sırasında çalışabilir miyim?",
          answer:
            "Öğrenci vizesi ile haftada 20 saate kadar part-time çalışma izniniz vardır.",
        },
      ],
    },

    university: {
      title: "Almanya Üniversite Programları",
      description:
        "Almanya'nın prestijli üniversiteleri dünya çapında tanınan lisans programları sunar. Ücretsiz veya çok düşük maliyetli eğitim ile kaliteli akademik deneyim.",
      heroImage:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1800&q=80",
      whyChooseThis: [
        "Ücretsiz eğitim (dönem başı €300-350 idari ücret)",
        "Dünya sıralamasında üst sıralardaki üniversiteler",
        "Mühendislik ve teknolojide dünya lideri",
        "İngilizce ve Almanca program seçenekleri",
        "Part-time çalışma imkanı",
        "Güçlü endüstri bağlantıları ve staj fırsatları",
      ],
      programs: [
        {
          name: "Mühendislik Programları",
          duration: "3-4 yıl",
          description:
            "Makine, elektrik, bilgisayar, otomotiv mühendisliği programları",
          tuitionFee: "Ücretsiz (dönem başı €300-350)",
        },
        {
          name: "Doğa Bilimleri",
          duration: "3 yıl",
          description: "Fizik, kimya, matematik, biyoloji programları",
          tuitionFee: "Ücretsiz",
        },
        {
          name: "İşletme ve Ekonomi",
          duration: "3 yıl",
          description: "Business Administration, Economics programları",
          tuitionFee: "Ücretsiz",
        },
        {
          name: "Bilgisayar Bilimleri",
          duration: "3 yıl",
          description:
            "Computer Science, Software Engineering, Data Science programları",
          tuitionFee: "Ücretsiz",
        },
      ],
      universities: [
        {
          name: "Technical University of Munich (TUM)",
          city: "München",
          description:
            "Avrupa'nın en iyi teknik üniversitesi, mühendislik ve teknoloji",
          ranking: "Dünya 50. sırası",
        },
        {
          name: "Ludwig Maximilian University",
          city: "München",
          description: "Araştırma odaklı kapsamlı üniversite",
          ranking: "Dünya 60. sırası",
        },
        {
          name: "Heidelberg University",
          city: "Heidelberg",
          description: "Almanya'nın en eski üniversitesi, bilim ve tıp",
          ranking: "Dünya 70. sırası",
        },
        {
          name: "RWTH Aachen University",
          city: "Aachen",
          description: "Mühendislik alanında öncü üniversite",
          ranking: "Mühendislikte Avrupa top 10",
        },
      ],
      requirements: [
        "Lise diploması veya Abitur denkliği",
        "Almanca C1 (TestDaF veya DSH) veya İngilizce B2",
        "Uni-Assist başvurusu",
        "Motivasyon mektubu",
        "Diploma transkripti",
        "Pasaport fotokopisi",
      ],
      process: [
        "Üniversite ve program araştırması",
        "Dil sınavına hazırlık (TestDaF/DSH/IELTS)",
        "Uni-Assist üzerinden başvuru",
        "Kabul mektubunun alınması",
        "Bloke hesap açılışı",
        "Öğrenci vizesi başvurusu",
        "Konaklama ve kayıt işlemleri",
      ],
      faqs: [
        {
          question: "Gerçekten ücretsiz mi?",
          answer:
            "Evet, devlet üniversitelerinde eğitim ücretsizdir. Sadece dönem başı €300-350 idari ücret ödenir.",
        },
        {
          question: "İngilizce programlar var mı?",
          answer:
            "Evet, özellikle yüksek lisans seviyesinde çok sayıda İngilizce program mevcuttur.",
        },
        {
          question: "Mezuniyet sonrası ne yapabilirim?",
          answer:
            "18 ay iş arama vizesi alabilir, Almanya'da kariyer yapabilirsiniz.",
        },
      ],
    },

    mastersDegree: {
      title: "Almanya Yüksek Lisans Programları",
      description:
        "Almanya'da yüksek lisans programları dünya çapında tanınan, araştırma odaklı ve ücretsiz eğitim sunar. Mühendislik, teknoloji ve bilim alanlarında mükemmellik.",
      whyChooseThis: [
        "Ücretsiz yüksek lisans eğitimi",
        "İngilizce program çeşitliliği",
        "Araştırma ve inovasyon odaklı eğitim",
        "Güçlü endüstri bağlantıları",
        "Mezuniyet sonrası 18 ay iş arama vizesi",
        "DAAD burs programları",
      ],
      programs: [
        {
          name: "Master of Science (MSc)",
          duration: "2 yıl",
          description:
            "Mühendislik, bilgisayar bilimi, doğa bilimleri programları",
          tuitionFee: "Ücretsiz (dönem başı €300-350)",
        },
        {
          name: "Master of Arts (MA)",
          duration: "2 yıl",
          description:
            "İşletme, ekonomi, sosyal bilimler, hukuk programları",
          tuitionFee: "Ücretsiz",
        },
        {
          name: "MBA Programları",
          duration: "1-2 yıl",
          description: "Prestijli işletme yüksek lisans programları",
          tuitionFee: "€10000-30000 / yıl",
        },
        {
          name: "Engineering Master",
          duration: "2 yıl",
          description:
            "Makine, elektrik, otomotiv mühendisliği master programları",
          tuitionFee: "Ücretsiz",
        },
      ],
      universities: [
        {
          name: "TU Munich",
          city: "München",
          description: "Mühendislik ve teknoloji alanında dünya lideri",
        },
        {
          name: "RWTH Aachen",
          city: "Aachen",
          description: "Mühendislik master programlarında Avrupa'nın en iyisi",
        },
        {
          name: "TU Berlin",
          city: "Berlin",
          description: "Teknoloji ve inovasyon odaklı master programları",
        },
        {
          name: "Heidelberg University",
          city: "Heidelberg",
          description: "Bilim ve araştırma alanında öncü",
        },
      ],
      requirements: [
        "Lisans diploması (en az 3 yıl)",
        "CGPA minimum 2.5/4.0",
        "Almanca C1 veya İngilizce B2/C1",
        "GRE (bazı programlar için)",
        "Motivasyon mektubu",
        "2 referans mektubu",
        "CV",
      ],
      process: [
        "Program araştırması ve üniversite seçimi",
        "Dil sınavına hazırlık",
        "Uni-Assist veya doğrudan başvuru",
        "Kabul mektubunun alınması",
        "Bloke hesap açılışı",
        "Vize başvurusu",
        "Almanya'ya varış ve kayıt",
      ],
      faqs: [
        {
          question: "DAAD bursu nasıl alınır?",
          answer:
            "DAAD web sitesinden başvuru yapabilirsiniz. Akademik başarı ve motivasyon önemlidir.",
        },
        {
          question: "Tez zorunlu mu?",
          answer:
            "Evet, çoğu master programı tez gerektirir. Ancak bazı programlarda proje seçeneği vardır.",
        },
        {
          question: "İş bulma şansım nedir?",
          answer:
            "Almanya'da mühendisler için çok yüksek iş talebi vardır. Mezuniyet sonrası 18 ay iş arama hakkınız var.",
        },
      ],
    },

    doctorate: {
      title: "Almanya Doktora Programları",
      description:
        "Almanya'da doktora eğitimi araştırma ve inovasyon odaklıdır. Birçok doktora programı burslu olup, öğrencilere maaş ve araştırma desteği sağlanır.",
      whyChooseThis: [
        "Burslu doktora programları",
        "Dünya lideri araştırma merkezleri",
        "Max Planck, Fraunhofer gibi enstitülerde araştırma",
        "3-4 yıllık yapılandırılmış programlar",
        "Aylık €1200-2000 maaş",
        "Güçlü endüstri iş birlikleri",
      ],
      programs: [
        {
          name: "PhD in Engineering",
          duration: "3-4 yıl",
          description:
            "Mühendislik alanlarında araştırma doktorası",
          tuitionFee: "Burslu (€1500-2000/ay maaş)",
        },
        {
          name: "PhD in Natural Sciences",
          duration: "3-4 yıl",
          description: "Fizik, kimya, biyoloji doktora programları",
          tuitionFee: "Burslu",
        },
        {
          name: "PhD in Computer Science",
          duration: "3-4 yıl",
          description: "Yapay zeka, veri bilimi, siber güvenlik doktorası",
          tuitionFee: "Burslu",
        },
        {
          name: "Industrial PhD",
          duration: "3-4 yıl",
          description: "Endüstri ortaklı doktora programları",
          tuitionFee: "Şirket sponsorlu",
        },
      ],
      universities: [
        {
          name: "Max Planck Institute",
          city: "Various",
          description: "Dünya'nın en prestijli araştırma enstitüsü",
        },
        {
          name: "TU Munich",
          city: "München",
          description: "Mühendislik ve bilim doktorası",
        },
        {
          name: "RWTH Aachen",
          city: "Aachen",
          description: "Endüstri odaklı doktora programları",
        },
        {
          name: "Heidelberg University",
          city: "Heidelberg",
          description: "Bilim ve tıp doktorası",
        },
      ],
      requirements: [
        "Master diploması (ilgili alanda)",
        "Yüksek akademik performans",
        "Research Proposal",
        "Yayınlar (tercih edilir)",
        "Almanca veya İngilizce yeterlilik",
        "2-3 referans mektubu",
        "Danışman bulma (önemli)",
      ],
      process: [
        "Araştırma alanı belirleme",
        "Potansiyel danışmanlarla iletişim",
        "Research proposal hazırlama",
        "Burs başvuruları (DAAD, DFG)",
        "Kabul ve sözleşme",
        "Vize işlemleri",
        "Araştırmaya başlama",
      ],
      faqs: [
        {
          question: "Doktora burslu mu?",
          answer:
            "Evet, Almanya'da doktora programlarının çoğu bursludur ve aylık €1200-2000 maaş verilir.",
        },
        {
          question: "Almanca bilmek zorunlu mu?",
          answer:
            "Hayır, birçok doktora programı tamamen İngilizce yapılmaktadır.",
        },
        {
          question: "Doktora sonrası ne yapabilirim?",
          answer:
            "Akademik kariyer, araştırma merkezleri veya endüstride R&D pozisyonlarında çalışabilirsiniz.",
        },
      ],
    },
  },

  belcika: {
    name: "Belçika",
    slug: "belcika",
    overview: {
      title: "Belçika Eğitim Danışmanlığı",
      description:
        "Belçika, Avrupa'nın kalbinde yer alan çok kültürlü bir ülkedir. Yüksek kaliteli eğitim sistemi ve uluslararası kuruluşlara ev sahipliği yapmasıyla öğrenciler için ideal bir destinasyondur.",
      highlights: [
        "Çok dilli eğitim ortamı",
        "AB başkenti avantajları",
        "Uygun eğitim maliyetleri",
        "Kaliteli üniversiteler",
        "Uluslararası staj fırsatları",
        "Merkezi Avrupa konumu",
      ],
      statistics: [
        { label: "Başarılı Öğrenci", value: "300+", icon: "users" },
        { label: "Partner Üniversite", value: "15+", icon: "building" },
        { label: "Deneyim Yılı", value: "8+", icon: "calendar" },
        { label: "Memnuniyet", value: "%97", icon: "star" },
      ],
      lifeInCountry: {
        cost: "850-1400 € / ay",
        language: "Flemenkçe, Fransızca, Almanca",
        climate: "Ilıman okyanus iklimi",
        culture: "AB başkenti, çok kültürlü yaşam",
      },
    },
  },

  kazakistan: {
    name: "Kazakistan",
    slug: "kazakistan",
    overview: {
      title: "Kazakistan Eğitim Danışmanlığı",
      description:
        "Kazakistan, Orta Asya'nın en gelişmiş eğitim sistemlerinden birine sahiptir. Uygun maliyetli eğitim ve Türk kültürüne yakınlık ile öğrenciler için cazip bir destinasyondur.",
      highlights: [
        "Ekonomik eğitim ve yaşam maliyeti",
        "Türk kültürüne yakınlık",
        "Modern üniversite kampüsleri",
        "Burs imkanları",
        "İngilizce ve Rusça eğitim programları",
        "Gelişen ekonomi ve iş fırsatları",
      ],
      statistics: [
        { label: "Başarılı Öğrenci", value: "600+", icon: "users" },
        { label: "Partner Üniversite", value: "20+", icon: "building" },
        { label: "Deneyim Yılı", value: "9+", icon: "calendar" },
        { label: "Memnuniyet", value: "%96", icon: "star" },
      ],
      lifeInCountry: {
        cost: "$300-600 / ay",
        language: "Kazakça, Rusça, Türkçe konuşulur",
        climate: "Karasal iklim, sert kışlar",
        culture: "Türk kültürüne yakın, misafirperver",
      },
    },
  },

  hollanda: {
    name: "Hollanda",
    slug: "hollanda",
    overview: {
      title: "Hollanda Eğitim Danışmanlığı",
      description:
        "Hollanda, İngilizce eğitim programları, yenilikçi öğretim yöntemleri ve uluslararası akademik ortamıyla bilinir. Yüksek yaşam kalitesi ile öğrencilere benzersiz bir deneyim sunar.",
      highlights: [
        "İngilizce eğitim programları",
        "Yenilikçi öğretim yöntemleri",
        "Bisiklet kültürü ve sürdürülebilirlik",
        "Çok kültürlü ortam",
        "Avrupa'nın iş merkezi",
        "Kaliteli yaşam standartları",
      ],
      statistics: [
        { label: "Başarılı Öğrenci", value: "400+", icon: "users" },
        { label: "Partner Üniversite", value: "18+", icon: "building" },
        { label: "Deneyim Yılı", value: "10+", icon: "calendar" },
        { label: "Memnuniyet", value: "%98", icon: "star" },
      ],
      lifeInCountry: {
        cost: "€900-1500 / ay",
        language: "Flemenkçe, İngilizce yaygın",
        climate: "Ilıman okyanus iklimi",
        culture: "Liberal, bisiklet kültürü, çok kültürlü",
      },
    },
  },

  finlandiya: {
    name: "Finlandiya",
    slug: "finlandiya",

    overview: {
      title: "Finlandiya Eğitim Danışmanlığı",
      description:
        "Finlandiya, dünyanın en başarılı eğitim sistemine sahip ülkelerden biridir. Kaliteli ücretsiz eğitim, yüksek yaşam standartları ve doğal güzellikleri ile ideal bir destinasyondur.",
      heroImage:
        "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=1800&q=80",
      highlights: [
        "Dünya'nın en iyi eğitim sistemi",
        "Ücretsiz eğitim (AB vatandaşları için)",
        "Yüksek yaşam kalitesi ve güvenlik",
        "Doğa, göller ve temiz çevre",
        "İnovasyon ve teknoloji odaklı",
        "İngilizce eğitim programları",
      ],
      statistics: [
        { label: "Başarılı Öğrenci", value: "200+", icon: "users" },
        { label: "Dil Okulu", value: "8+", icon: "school" },
        { label: "Partner Üniversite", value: "10+", icon: "building" },
        { label: "Deneyim Yılı", value: "7+", icon: "calendar" },
        { label: "Memnuniyet", value: "%98", icon: "star" },
      ],
      lifeInCountry: {
        cost: "€700-1000 / ay",
        language: "Fince, İsveççe, İngilizce yaygın",
        climate: "Soğuk kışlar, ılık yazlar",
        culture: "Sauna kültürü, doğa odaklı yaşam",
      },
    },

    languageSchool: {
      title: "Finlandiya Dil Okulu Programları",
      description:
        "Finlandiya'da Fince veya İsveççe öğrenmek, İskandinav yaşam tarzını deneyimleme ve eğitim sisteminde uzmanlaşma fırsatıdır. Modern dil okullarında kaliteli eğitim alabilirsiniz.",
      heroImage:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1800&q=80",
      whyChooseThis: [
        "Dünya'nın en iyi eğitim sisteminde dil öğrenimi",
        "Küçük sınıf mevcutları ve kişiselleştirilmiş eğitim",
        "Doğa içinde öğrenme ortamı",
        "İngilizce yaygın olarak konuşulur",
        "Schengen vizesi ile Avrupa gezme imkanı",
        "Yüksek yaşam kalitesi ve güvenlik",
      ],
      programs: [
        {
          name: "Yoğun Fince Kursu",
          duration: "4-36 hafta",
          description:
            "Haftada 15-20 saat Fince eğitimi ile A1'den C1'e kadar tüm seviyeler",
          tuitionFee: "€200-300 / hafta",
        },
        {
          name: "İsveççe Dil Kursu",
          duration: "4-24 hafta",
          description:
            "Finlandiya'nın resmi dillerinden İsveççe öğrenin",
          tuitionFee: "€200-300 / hafta",
        },
        {
          name: "Üniversite Hazırlık",
          duration: "6-12 ay",
          description:
            "Fin üniversitelerine kabul için dil ve akademik hazırlık programı",
          tuitionFee: "€3000-5000 / dönem",
        },
        {
          name: "Fince + Kültür Programı",
          duration: "2-12 hafta",
          description:
            "Fince öğrenirken Fin kültürü, sauna, doğa ve yaşam tarzını keşfedin",
          tuitionFee: "€250-350 / hafta",
        },
      ],
      requirements: [
        "18 yaş ve üzeri olmak",
        "Pasaport (en az 6 ay geçerli)",
        "Dil okulu kabul mektubu",
        "Finansal yeterlilik belgesi (€6720/yıl)",
        "Sağlık sigortası",
        "Konaklama belgesi",
      ],
      process: [
        "Dil okulu ve program seçimi",
        "Online başvuru ve kayıt",
        "Kabul mektubunun alınması",
        "Konaklama ayarlamaları",
        "Residence permit başvurusu",
        "Sağlık sigortası düzenleme",
        "Finlandiya'ya varış ve kayıt",
      ],
      faqs: [
        {
          question: "Fince öğrenmek zor mu?",
          answer:
            "Fince farklı bir dil ailesi olsa da, iyi programlar ile öğrenilebilir. Ayrıca Finlandiya'da İngilizce yaygındır.",
        },
        {
          question: "Dil kursu sonrası kalabilir miyim?",
          answer:
            "Evet, dil eğitimi sonrası üniversiteye başvurabilir veya iş arayabilirsiniz.",
        },
        {
          question: "Yaşam maliyeti nasıl?",
          answer:
            "Finlandiya'da yaşam maliyeti orta seviyededir. Aylık €700-1000 yeterli olabilir.",
        },
      ],
    },

    university: {
      title: "Finlandiya Üniversite Programları",
      description:
        "Finlandiya'nın dünyaca ünlü üniversiteleri, İngilizce lisans programları ve kaliteli eğitim sunar. AB vatandaşları için ücretsiz eğitim imkanı vardır.",
      heroImage:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1800&q=80",
      whyChooseThis: [
        "Dünya'nın en iyi eğitim sistemi",
        "İngilizce lisans programları",
        "AB vatandaşları için ücretsiz eğitim",
        "Yüksek teknoloji ve inovasyon odaklı",
        "Küçük sınıf mevcutları",
        "Güvenli ve kaliteli yaşam ortamı",
      ],
      programs: [
        {
          name: "Lisans Programları (Bachelor)",
          duration: "3-4 yıl",
          description:
            "Teknoloji, işletme, eğitim, sanat ve tasarım programları",
          tuitionFee: "AB: Ücretsiz, AB dışı: €8000-18000/yıl",
        },
        {
          name: "Teknoloji ve Mühendislik",
          duration: "3-4 yıl",
          description:
            "Bilgisayar bilimi, elektrik, çevre mühendisliği programları",
          tuitionFee: "AB dışı: €10000-15000/yıl",
        },
        {
          name: "Eğitim Bilimleri",
          duration: "3 yıl",
          description:
            "Öğretmenlik ve eğitim bilimlerinde dünya lideri programlar",
          tuitionFee: "AB: Ücretsiz, AB dışı: €8000-12000/yıl",
        },
        {
          name: "İşletme ve Ekonomi",
          duration: "3-4 yıl",
          description:
            "International Business, Economics programları",
          tuitionFee: "AB dışı: €10000-15000/yıl",
        },
      ],
      universities: [
        {
          name: "University of Helsinki",
          city: "Helsinki",
          description:
            "Finlandiya'nın en prestijli üniversitesi, araştırma odaklı",
          ranking: "Dünya 100. sırası",
        },
        {
          name: "Aalto University",
          city: "Helsinki",
          description:
            "Mühendislik, tasarım ve ekonomi alanlarında öncü üniversite",
          ranking: "Mühendislikte Avrupa top 20",
        },
        {
          name: "University of Turku",
          city: "Turku",
          description:
            "Multidisipliner eğitim ve araştırma merkezi",
          ranking: "Finlandiya'da top 3",
        },
        {
          name: "University of Tampere",
          city: "Tampere",
          description:
            "Teknoloji ve eğitim bilimleri alanında güçlü",
          ranking: "Finlandiya'da top 5",
        },
      ],
      requirements: [
        "Lise diploması",
        "İngilizce yeterlilik belgesi (IELTS 6.0-6.5)",
        "SAT/ACT skorları (bazı programlar için)",
        "Giriş sınavı (bazı programlar için)",
        "Motivasyon mektubu",
        "CV",
      ],
      process: [
        "Üniversite ve program araştırması",
        "Studyinfo.fi üzerinden başvuru",
        "Giriş sınavlarına katılım (gerekirse)",
        "Kabul mektubunun alınması",
        "Residence permit başvurusu",
        "Konaklama ve kayıt işlemleri",
      ],
      faqs: [
        {
          question: "AB dışı öğrenciler için ücret var mı?",
          answer:
            "Evet, AB/EEA dışından gelen öğrenciler yıllık €8000-18000 arasında ücret öderler.",
        },
        {
          question: "Burs imkanları var mı?",
          answer:
            "Evet, üniversitelerin kendi burs programları ve Fin hükümeti bursları mevcuttur.",
        },
        {
          question: "Mezuniyet sonrası kalabilir miyim?",
          answer:
            "Evet, mezuniyet sonrası iş aramak için 1 yıl kalma hakkınız vardır.",
        },
      ],
    },

    mastersDegree: {
      title: "Finlandiya Yüksek Lisans Programları",
      description:
        "Finlandiya'da yüksek lisans programları İngilizce olarak sunulur ve araştırma odaklı kaliteli eğitim sağlar. Teknoloji, eğitim ve inovasyon alanlarında güçlüdür.",
      whyChooseThis: [
        "Tamamen İngilizce programlar",
        "Araştırma ve inovasyon odaklı",
        "Yüksek teknoloji ve startup ekosistemi",
        "AB vatandaşları için ücretsiz",
        "Küçük grup eğitimi",
        "Mezuniyet sonrası iş bulma imkanı",
      ],
      programs: [
        {
          name: "Master of Science (MSc)",
          duration: "2 yıl",
          description:
            "Teknoloji, bilgisayar bilimi, veri analizi, çevre bilimleri",
          tuitionFee: "AB: Ücretsiz, AB dışı: €12000-18000/yıl",
        },
        {
          name: "Master of Arts (MA)",
          duration: "2 yıl",
          description:
            "Eğitim bilimleri, tasarım, işletme, sosyal bilimler",
          tuitionFee: "AB: Ücretsiz, AB dışı: €10000-15000/yıl",
        },
        {
          name: "MBA Programs",
          duration: "1-2 yıl",
          description:
            "Helsinki ve Aalto üniversitelerinde MBA programları",
          tuitionFee: "€20000-35000/yıl",
        },
        {
          name: "Technology Management",
          duration: "2 yıl",
          description:
            "Teknoloji yönetimi, inovasyon ve girişimcilik",
          tuitionFee: "AB dışı: €15000-18000/yıl",
        },
      ],
      universities: [
        {
          name: "Aalto University",
          city: "Helsinki",
          description:
            "Teknoloji ve tasarım yüksek lisans programlarında lider",
        },
        {
          name: "University of Helsinki",
          city: "Helsinki",
          description:
            "Araştırma odaklı master programları",
        },
        {
          name: "University of Tampere",
          city: "Tampere",
          description:
            "Eğitim ve teknoloji master programları",
        },
        {
          name: "University of Turku",
          city: "Turku",
          description:
            "Çok disiplinli master programları",
        },
      ],
      requirements: [
        "Lisans diploması (ilgili alanda)",
        "GPA minimum 2.7/4.0",
        "İngilizce yeterlilik (IELTS 6.5-7.0)",
        "Motivasyon mektubu",
        "2 referans mektubu",
        "CV",
        "Portfolio (tasarım programları için)",
      ],
      process: [
        "Program ve üniversite araştırması",
        "Studyinfo.fi üzerinden başvuru",
        "Belgelerinin yüklenmesi",
        "Kabul mektubunun alınması",
        "Burs başvuruları",
        "Residence permit işlemleri",
        "Finlandiya'ya varış ve kayıt",
      ],
      faqs: [
        {
          question: "Yüksek lisans için burs var mı?",
          answer:
            "Evet, AB dışı öğrenciler için üniversitelerin burs programları ve Fin hükümeti bursları vardır.",
        },
        {
          question: "Tez gerekli mi?",
          answer:
            "Evet, çoğu master programı tez gerektirir. Tez araştırma odaklıdır.",
        },
        {
          question: "İş bulma şansım nedir?",
          answer:
            "Finlandiya'da teknoloji sektöründe iş imkanları iyidir. Nokia, Supercell gibi şirketler mezunları işe alır.",
        },
      ],
    },

    doctorate: {
      title: "Finlandiya Doktora Programları",
      description:
        "Finlandiya'da doktora eğitimi araştırma odaklıdır. Birçok doktora pozisyonu maaşlı olup, öğrencilere araştırma desteği sağlanır.",
      whyChooseThis: [
        "Maaşlı doktora pozisyonları",
        "Dünya standartlarında araştırma olanakları",
        "4 yıllık yapılandırılmış programlar",
        "Tüm programlar İngilizce",
        "Aylık €2000-2500 maaş",
        "Akademik özgürlük ve esneklik",
      ],
      programs: [
        {
          name: "PhD in Technology",
          duration: "4 yıl",
          description:
            "Bilgisayar bilimi, elektrik, çevre teknolojileri doktorası",
          tuitionFee: "Ücretsiz + €2000-2500/ay maaş",
        },
        {
          name: "PhD in Education",
          duration: "4 yıl",
          description:
            "Eğitim bilimleri alanında dünya lideri doktora programları",
          tuitionFee: "Ücretsiz + maaşlı pozisyonlar",
        },
        {
          name: "PhD in Natural Sciences",
          duration: "4 yıl",
          description:
            "Fizik, kimya, biyoloji, matematik doktora programları",
          tuitionFee: "Ücretsiz + maaşlı",
        },
        {
          name: "PhD in Social Sciences",
          duration: "4 yıl",
          description:
            "Sosyoloji, psikoloji, ekonomi doktora programları",
          tuitionFee: "Ücretsiz + burslu pozisyonlar",
        },
      ],
      universities: [
        {
          name: "University of Helsinki",
          city: "Helsinki",
          description:
            "Araştırma odaklı doktora programları",
        },
        {
          name: "Aalto University",
          city: "Helsinki",
          description:
            "Teknoloji ve inovasyon doktorası",
        },
        {
          name: "University of Turku",
          city: "Turku",
          description:
            "Bilim ve tıp doktora programları",
        },
        {
          name: "University of Tampere",
          city: "Tampere",
          description:
            "Eğitim ve teknoloji doktorası",
        },
      ],
      requirements: [
        "Master diploması (ilgili alanda)",
        "Yüksek akademik performans",
        "Research Proposal",
        "Yayınlar (tercih edilir)",
        "İngilizce yeterlilik (IELTS 6.5+)",
        "2-3 referans mektubu",
        "Danışman bulma",
      ],
      process: [
        "Araştırma alanı ve danışman belirleme",
        "Research proposal hazırlama",
        "Doktora pozisyonlarına başvuru",
        "Mülakat",
        "Kabul ve sözleşme imzalama",
        "Residence permit işlemleri",
        "Araştırmaya başlama",
      ],
      faqs: [
        {
          question: "Doktora maaşlı mı?",
          answer:
            "Evet, çoğu doktora pozisyonu maaşlıdır ve aylık €2000-2500 ödenir.",
        },
        {
          question: "Fince bilmek gerekli mi?",
          answer:
            "Hayır, tüm doktora programları İngilizce olarak yürütülür.",
        },
        {
          question: "Doktora sonrası ne yapabilirim?",
          answer:
            "Akademik kariyer, araştırma merkezleri veya özel sektörde çalışabilirsiniz.",
        },
      ],
    },

    teacherPrograms: {
      title: "Finlandiya Öğretmen Eğitim Programları",
      description:
        "Finlandiya, dünya'nın en iyi eğitim sistemine sahip olup, öğretmen yetiştirme programları da son derece prestijlidir. Öğretmenlik mesleği Finlandiya'da çok saygın bir meslektir.",
      whyChooseThis: [
        "Dünya'nın en iyi eğitim sistemi",
        "Prestijli öğretmen yetiştirme programları",
        "Uluslararası tanınırlık",
        "Modern pedagojik yaklaşımlar",
        "Staj ve uygulama okulları",
        "Yüksek maaş ve saygınlık",
      ],
      programs: [
        {
          name: "Öğretmen Eğitimi Master Programı",
          duration: "2 yıl",
          description:
            "Sınıf öğretmenliği ve branş öğretmenliği master programları",
          tuitionFee: "AB: Ücretsiz, AB dışı: €12000-15000/yıl",
        },
        {
          name: "Eğitim Bilimleri Yüksek Lisansı",
          duration: "2 yıl",
          description:
            "Eğitim liderliği, müfredat geliştirme, eğitim araştırması",
          tuitionFee: "AB: Ücretsiz, AB dışı: €10000-13000/yıl",
        },
        {
          name: "Erken Çocukluk Eğitimi",
          duration: "2 yıl",
          description:
            "0-8 yaş çocuk eğitimi ve gelişimi programı",
          tuitionFee: "AB: Ücretsiz, AB dışı: €10000-12000/yıl",
        },
        {
          name: "Özel Eğitim Öğretmenliği",
          duration: "2 yıl",
          description:
            "Özel gereksinimli çocuklar için öğretmenlik eğitimi",
          tuitionFee: "AB: Ücretsiz, AB dışı: €12000-15000/yıl",
        },
      ],
      requirements: [
        "Lisans diploması (eğitim veya ilgili alan)",
        "İngilizce yeterlilik (IELTS 6.5-7.0)",
        "Öğretmenlik deneyimi (tercih edilir)",
        "Motivasyon mektubu",
        "2 referans mektubu",
        "Mülakat",
      ],
      process: [
        "Program seçimi ve araştırma",
        "Studyinfo.fi üzerinden başvuru",
        "Belgelerinin hazırlanması",
        "Mülakat",
        "Kabul ve kayıt işlemleri",
        "Residence permit başvurusu",
        "Eğitime başlama ve staj",
      ],
      faqs: [
        {
          question: "Finlandiya'da öğretmen olabilir miyim?",
          answer:
            "Evet, Fince öğrenirseniz ve gerekli sertifikaları alırsanız Finlandiya'da öğretmen olarak çalışabilirsiniz.",
        },
        {
          question: "Program İngilizce mi?",
          answer:
            "Evet, birçok master düzeyinde öğretmen eğitimi programı İngilizce olarak sunulmaktadır.",
        },
        {
          question: "Mezuniyet sonrası iş bulma şansım nedir?",
          answer:
            "Finlandiya'da öğretmenlere yüksek talep vardır. Ayrıca uluslararası okullarda da çalışabilirsiniz.",
        },
      ],
    },
  },

  fransa: {
    name: "Fransa",
    slug: "fransa",
    overview: {
      title: "Fransa Dil Okulu ve Eğitim Danışmanlığı",
      description:
        "Fransa, sanat, kültür ve gastronomi başkenti olarak dünya çapında tanınan prestijli eğitim sistemine sahiptir. Fransızca dil eğitimi, moda ve mühendislik programları ile öğrencilere benzersiz deneyim sunar.",
      heroImage:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1800&q=80",
      highlights: [
        "Sanat ve kültür başkenti",
        "Prestijli Grandes Écoles sistemi",
        "Fransızca dil eğitimi",
        "Moda ve mutfak sanatları eğitimi",
        "Avrupa'nın kalbi",
        "Zengin tarih ve mimari",
      ],
      statistics: [
        { label: "Başarılı Öğrenci", value: "600+", icon: "users" },
        { label: "Dil Okulu", value: "20+", icon: "school" },
        { label: "Partner Üniversite", value: "30+", icon: "building" },
        { label: "Deneyim Yılı", value: "11+", icon: "calendar" },
        { label: "Memnuniyet", value: "%97", icon: "star" },
      ],
      lifeInCountry: {
        cost: "€900-1600 / ay (Paris: €1200-1800)",
        language: "Fransızca, İngilizce kısıtlı",
        climate: "Ilıman okyanus ve Akdeniz iklimi",
        culture: "Sanat, moda, gastronomi ve tarih",
      },
    },
  },
};

// URL'den ülke adına mapping
export const urlToCountryMap: Record<string, string> = {
  italya: "italya",
  ingiltere: "ingiltere",
  belcika: "belcika",
  almanya: "almanya",
  kazakistan: "kazakistan",
  hollanda: "hollanda",
  finlandiya: "finlandiya",
  fransa: "fransa",
};

// Tüm ülke slug'larını al
export function getAllCountrySlugs(): string[] {
  return Object.keys(countries);
}

// Slug'a göre ülke bilgisi al
export function getCountryBySlug(slug: string): CountryInfo | null {
  return countries[slug] || null;
}

// Eğitim türlerinin listesi
export const educationTypes = [
  { slug: "dil-okulu", name: "Dil Okulu", key: "languageSchool" },
  { slug: "universite", name: "Üniversite", key: "university" },
  { slug: "yuksek-lisans", name: "Yüksek Lisans", key: "mastersDegree" },
  { slug: "doktora", name: "Doktora", key: "doctorate" },
  { slug: "ogretmen", name: "Öğretmen Programları", key: "teacherPrograms" },
] as const;

// Ülke için mevcut eğitim türlerini al
export function getAvailableEducationTypes(countrySlug: string) {
  const country = getCountryBySlug(countrySlug);
  if (!country) return [];

  return educationTypes.filter((type) => {
    return country[type.key as keyof CountryInfo] !== undefined;
  });
}

// Belirli bir eğitim türünü sunan ülkeleri al
export function getCountriesForEducationType(
  educationTypeKey: "languageSchool" | "university" | "mastersDegree" | "doctorate" | "teacherPrograms"
) {
  return Object.values(countries).filter(
    (country) => country[educationTypeKey] !== undefined
  );
}
