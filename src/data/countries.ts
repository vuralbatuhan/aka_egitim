export interface CountryInfo {
  name: string;
  slug: string;
  title: string;
  description: string;
  heroImage?: string;
  whyChooseUs: string[];
  services: string[];
  languagePrograms?: {
    name: string;
    duration: string;
    description: string;
  }[];
  universities?: {
    name: string;
    city: string;
    description: string;
  }[];
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
}

export const countries: Record<string, CountryInfo> = {
  italya: {
    name: "İtalya",
    slug: "italya",
    title: "İtalya Dil Okulu ve Eğitim Danışmanlığı",
    heroImage:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1800&q=80",
    description:
      "İtalya, tarihi zenginliği, sanat ve kültür mirası ile dünyanın en önemli eğitim merkezlerinden biridir. İtalyanca dil eğitimi, moda ve tasarım okulları ile öne çıkan İtalya, öğrencilere benzersiz bir akademik ve kültürel deneyim sunar.",
    whyChooseUs: [
      "İtalya'daki en iyi dil okulları ve üniversiteler ile doğrudan iş birliğimiz",
      "Vize başvuru süreçlerinde deneyimli kadromuzla tam destek",
      "Konaklama ve yaşam koşulları konusunda kapsamlı danışmanlık",
      "İtalyanca dil eğitimi ve hazırlık programları",
      "Burs imkanları ve finansal danışmanlık hizmetleri",
      "Öğrenci vizesi sonrası çalışma izni süreçlerinde rehberlik",
    ],
    services: [
      "Dil okulu ve üniversite seçimi danışmanlığı",
      "Başvuru dosyası hazırlama ve takip",
      "Vize başvuru süreçleri",
      "Konaklama ayarlamaları (aile yanı, yurt, özel daire)",
      "Havalimanı karşılama ve oryantasyon",
      "İtalyanca seviye tespit sınavı",
      "Öğrenci hayatı boyunca kesintisiz destek",
    ],
    languagePrograms: [
      {
        name: "Yoğun İtalyanca Kursu",
        duration: "2-52 hafta",
        description:
          "Haftada 20-30 saat İtalyanca eğitimi ile dil seviyenizi hızla geliştirin",
      },
      {
        name: "İtalyanca + Kültür Programı",
        duration: "4-24 hafta",
        description:
          "İtalyanca öğrenirken İtalyan mutfağı, sanat tarihi ve kültürü keşfedin",
      },
      {
        name: "Üniversite Hazırlık",
        duration: "6-12 ay",
        description:
          "İtalyan üniversitelerine kabul için gerekli B2/C1 seviyesi İtalyanca eğitimi",
      },
      {
        name: "İş İtalyancası",
        duration: "4-12 hafta",
        description:
          "Profesyonel yaşamda kullanabileceğiniz İş İtalyancası eğitimi",
      },
    ],
    universities: [
      {
        name: "Università di Bologna",
        city: "Bologna",
        description:
          "Dünyanın en eski üniversitesi, mühendislik ve sanat programları",
      },
      {
        name: "Politecnico di Milano",
        city: "Milano",
        description:
          "Avrupa'nın en iyi teknik üniversitelerinden, moda ve tasarım",
      },
      {
        name: "Sapienza Università di Roma",
        city: "Roma",
        description:
          "İtalya'nın en büyük üniversitesi, geniş program yelpazesi",
      },
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
  ingiltere: {
    name: "İngiltere",
    slug: "ingiltere",
    title: "İngiltere Dil Okulu ve Eğitim Danışmanlığı",
    heroImage:
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1800&q=80",
    description:
      "İngiltere, dünyanın en prestijli üniversitelerine ev sahipliği yapar ve İngilizce öğrenmek için en ideal destinasyonlardan biridir. Oxford, Cambridge ve London gibi tarihi şehirlerde kaliteli eğitim imkanları sunar.",
    whyChooseUs: [
      "İngiltere'nin akredite dil okulları ile resmi iş birliklerimiz",
      "British Council onaylı programlar",
      "Vize ve Student Route başvuru süreçlerinde uzmanlık",
      "İngiltere'de konaklama çözümleri (homestay, residence, apart)",
      "IELTS, Cambridge, TOEFL sınav hazırlık programları",
      "Üniversite başvuru süreçlerinde tam destek",
    ],
    services: [
      "Dil okulu seçimi ve kayıt işlemleri",
      "Student Visa (Student Route) başvuruları",
      "Konaklama ve havalimanı transferi ayarlamaları",
      "CAS (Confirmation of Acceptance for Studies) alımı",
      "Sağlık sigortası (NHS) işlemleri",
      "Banka hesabı açma danışmanlığı",
      "Öğrenci yaşamı boyunca 7/24 destek",
    ],
    languagePrograms: [
      {
        name: "Genel İngilizce Kursu",
        duration: "2-48 hafta",
        description:
          "Haftada 15-30 saat İngilizce eğitimi ile konuşma, okuma, yazma becerilerinizi geliştirin",
      },
      {
        name: "IELTS Hazırlık",
        duration: "4-12 hafta",
        description: "IELTS sınavına özel hazırlık ile hedef puanınıza ulaşın",
      },
      {
        name: "Akademik İngilizce",
        duration: "12-36 hafta",
        description:
          "İngiliz üniversitelerine başvuru için gerekli akademik İngilizce eğitimi",
      },
      {
        name: "İş İngilizcesi",
        duration: "2-8 hafta",
        description:
          "Profesyonel iş dünyasında kullanabileceğiniz İngilizce programı",
      },
      {
        name: "Cambridge Sınav Hazırlığı",
        duration: "8-12 hafta",
        description: "FCE, CAE, CPE sınavlarına özel hazırlık kursu",
      },
    ],
    universities: [
      {
        name: "University of Oxford",
        city: "Oxford",
        description:
          "Dünyanın en prestijli üniversitesi, tüm alanlarda mükemmellik",
      },
      {
        name: "University of Cambridge",
        city: "Cambridge",
        description: "Bilim ve araştırmada dünya lideri, tarihi kollej sistemi",
      },
      {
        name: "Imperial College London",
        city: "London",
        description:
          "Mühendislik, tıp ve bilim alanlarında dünya çapında tanınır",
      },
      {
        name: "London School of Economics (LSE)",
        city: "London",
        description:
          "Sosyal bilimler, ekonomi ve siyaset alanında dünyanın en iyisi",
      },
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
  belcika: {
    name: "Belçika",
    slug: "belcika",
    title: "Belçika Eğitim Danışmanlığı",
    description:
      "Belçika, Avrupa'nın kalbinde yer alan çok kültürlü bir ülkedir. Yüksek kaliteli eğitim sistemi, üç resmi dili ve uluslararası kuruluşlara ev sahipliği yapmasıyla öğrenciler için ideal bir destinasyondur.",
    whyChooseUs: [
      "Belçika'nın önde gelen üniversiteleri ile güçlü iş birlikleri",
      "Fransızca ve Flemenkçe dil programları konusunda uzmanlık",
      "AB kurumlarında staj fırsatları için rehberlik",
      "Düşük eğitim maliyetleri ve burs imkanları",
      "Çok kültürlü ortamda yaşam danışmanlığı",
      "Mezuniyet sonrası iş arama süreçlerinde destek",
    ],
    services: [
      "Üniversite başvuru süreçleri",
      "Dil yeterlilik sınavları hazırlığı",
      "Öğrenci vizesi başvuruları",
      "Barınma ve konaklama çözümleri",
      "Sağlık sigortası düzenlemeleri",
      "Banka hesabı açma ve idari işlemler",
      "Kariyer planlama danışmanlığı",
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
  almanya: {
    name: "Almanya",
    slug: "almanya",
    title: "Almanya Eğitim Danışmanlığı",
    heroImage:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1800&q=80",
    description:
      "Almanya, dünya çapında tanınan üniversiteleri, güçlü ekonomisi ve ücretsiz eğitim fırsatlarıyla uluslararası öğrenciler için en popüler destinasyonlardan biridir. Mühendislik, teknoloji ve araştırma alanlarında öncü konumdadır.",
    whyChooseUs: [
      "Almanya'daki en iyi üniversiteler için başvuru desteği",
      "Ücretsiz eğitim fırsatları için kapsamlı bilgilendirme",
      "Almanca dil sınavları (TestDaF, DSH) hazırlık programları",
      "Bloke hesap açılışı ve finansal planlama",
      "Part-time çalışma imkanları konusunda danışmanlık",
      "Kalıcı ikamet ve iş bulma süreçlerinde rehberlik",
    ],
    services: [
      "Uni-Assist başvuru süreçleri",
      "Motivasyon mektubu ve CV hazırlama",
      "Vize randevu ve başvuru takibi",
      "Almanca dil kursu kayıtları",
      "Öğrenci yurdu başvuruları",
      "Sağlık sigortası danışmanlığı",
      "Almanya'da yerleşim sürecinde tam destek",
    ],
    statistics: [
      { label: "Başarılı Öğrenci", value: "1000+", icon: "users" },
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
  kazakistan: {
    name: "Kazakistan",
    slug: "kazakistan",
    title: "Kazakistan Eğitim Danışmanlığı",
    description:
      "Kazakistan, Orta Asya'nın en gelişmiş eğitim sistemlerinden birine sahiptir. Uygun maliyetli eğitim, Türk kültürüne yakınlık ve modern üniversiteler ile uluslararası öğrenciler için cazip bir destinasyondur.",
    whyChooseUs: [
      "Kazakistan'ın önde gelen üniversiteleri ile doğrudan iletişim",
      "Türkçe ve Rusça bilen danışman kadromuz",
      "Kültürel adaptasyon konusunda özel destek",
      "Ekonomik eğitim ve yaşam maliyetleri",
      "Burs ve finansal yardım imkanları",
      "Kazakistan-Türkiye arasında köprü oluşturma",
    ],
    services: [
      "Üniversite seçimi ve başvuru süreçleri",
      "Davetiye mektubu alımı",
      "Vize başvuru işlemleri",
      "Yurt ve konaklama ayarlamaları",
      "Havalimanı karşılama hizmeti",
      "Öğrenci kayıt işlemleri",
      "Yaşam ve eğitim süresince danışmanlık",
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
  hollanda: {
    name: "Hollanda",
    slug: "hollanda",
    title: "Hollanda Eğitim Danışmanlığı",
    description:
      "Hollanda, İngilizce eğitim programları, yenilikçi öğretim yöntemleri ve uluslararası akademik ortamıyla bilinir. Yüksek yaşam kalitesi ve çok kültürlü yapısı ile öğrencilere benzersiz bir deneyim sunar.",
    whyChooseUs: [
      "Hollanda'nın top üniversiteleri ile iş birliği",
      "IELTS ve TOEFL hazırlık programları",
      "İngilizce eğitim programları konusunda uzmanlık",
      "Hollanda eğitim sistemine tam hakimiyet",
      "Part-time iş bulma desteği",
      "Mezuniyet sonrası iş ve ikamet danışmanlığı",
    ],
    services: [
      "Studielink başvuru süreçleri",
      "Nuffic sertifikası işlemleri",
      "İkamet izni (MVV) başvuruları",
      "Konaklama ve barınma çözümleri",
      "Sağlık sigortası düzenlemeleri",
      "Banka ve idari işlemler",
      "Kariyer planlama ve networking",
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
  finlandiya: {
    name: "Finlandiya",
    slug: "finlandiya",
    title: "Finlandiya Dil Okulu ve Eğitim Danışmanlığı",
    heroImage:
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=1800&q=80",
    description:
      "Finlandiya, dünyanın en başarılı eğitim sistemine sahip ülkelerden biridir. Kaliteli ücretsiz eğitim, yüksek yaşam standartları ve doğal güzellikleri ile öğrenciler için ideal bir destinasyondur.",
    whyChooseUs: [
      "Finlandiya'nın en iyi üniversiteleri ile iş birliği",
      "Ücretsiz eğitim fırsatları konusunda rehberlik",
      "İskandinav yaşam tarzına adaptasyon desteği",
      "İngilizce programlar için tam danışmanlık",
      "Burs ve finansman imkanları",
      "Öğrenci girişimcilik programları",
    ],
    services: [
      "Üniversite başvuru süreçleri",
      "Residence permit başvuruları",
      "Konaklama ve barınma çözümleri",
      "Sağlık sigortası düzenlemeleri",
      "Finlandiya'da yaşam danışmanlığı",
      "Part-time iş bulma desteği",
      "Eğitim süresince tam destek",
    ],
    languagePrograms: [
      {
        name: "Fince Dil Kursu",
        duration: "4-36 hafta",
        description: "Temel seviyeden ileri seviyeye kadar Fince dil eğitimi",
      },
      {
        name: "İsveççe Dil Kursu",
        duration: "4-24 hafta",
        description: "Finlandiya'nın resmi dillerinden İsveççe öğrenin",
      },
      {
        name: "Üniversite Hazırlık",
        duration: "6-12 ay",
        description: "Fin üniversitelerine kabul için dil ve akademik hazırlık",
      },
    ],
    universities: [
      {
        name: "University of Helsinki",
        city: "Helsinki",
        description:
          "Finlandiya'nın en prestijli üniversitesi, araştırma odaklı",
      },
      {
        name: "Aalto University",
        city: "Helsinki",
        description: "Mühendislik, tasarım ve ekonomi alanlarında öncü",
      },
      {
        name: "University of Turku",
        city: "Turku",
        description: "Multidisipliner eğitim ve araştırma merkezi",
      },
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
};

// Tüm ülke slug'larını al
export function getAllCountrySlugs(): string[] {
  return Object.keys(countries);
}

// Slug'a göre ülke bilgisi al
export function getCountryBySlug(slug: string): CountryInfo | null {
  return countries[slug] || null;
}
