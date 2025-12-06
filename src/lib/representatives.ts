// Temsilci veri yapıları ve örnek veriler

export interface Representative {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  avatar?: string;
  languages?: string[];
  workingHours?: string;
}

export interface CityRepresentatives {
  cityName: string;
  representatives: Representative[];
  officeAddress?: string;
  officePhone?: string;
}

export interface CountryMapConfig {
  geoDataPath: string;
  center: [number, number];
  scale: number;
  defaultFill?: string;
  hoverFill?: string;
  strokeColor?: string;
}

export interface CountryData {
  name: string;
  mapConfig: CountryMapConfig;
  regions: Record<string, CityRepresentatives>;
}

// Örnek temsilci verileri - Gerçek verilerle değiştirilmeli
export const cityRepresentativesData: Record<string, CityRepresentatives> = {
  'İstanbul': {
    cityName: 'İstanbul',
    officeAddress: 'Levent, Beyazıt Sk. No:12, 34330 Beşiktaş/İstanbul',
    officePhone: '+90 212 345 67 89',
    representatives: [
      {
        id: '1',
        name: 'Ayşe Yılmaz',
        title: 'Bölge Müdürü',
        phone: '+90 532 123 45 67',
        email: 'ayse.yilmaz@akaegitim.com',
        languages: ['Türkçe', 'İngilizce', 'Almanca'],
        workingHours: 'Pzt-Cum 09:00-18:00',
      },
      {
        id: '2',
        name: 'Mehmet Demir',
        title: 'Eğitim Danışmanı',
        phone: '+90 532 234 56 78',
        email: 'mehmet.demir@akaegitim.com',
        languages: ['Türkçe', 'İngilizce', 'İspanyolca'],
        workingHours: 'Pzt-Cum 09:00-18:00',
      },
      {
        id: '3',
        name: 'Zeynep Kaya',
        title: 'Öğrenci Danışmanı',
        phone: '+90 532 345 67 89',
        email: 'zeynep.kaya@akaegitim.com',
        languages: ['Türkçe', 'İngilizce', 'Fransızca'],
        workingHours: 'Pzt-Cum 09:00-18:00',
      },
    ],
  },
  'Ankara': {
    cityName: 'Ankara',
    officeAddress: 'Kızılay, Atatürk Bulvarı No:85, 06420 Çankaya/Ankara',
    officePhone: '+90 312 456 78 90',
    representatives: [
      {
        id: '4',
        name: 'Ahmet Özkan',
        title: 'Bölge Müdürü',
        phone: '+90 532 456 78 90',
        email: 'ahmet.ozkan@akaegitim.com',
        languages: ['Türkçe', 'İngilizce'],
        workingHours: 'Pzt-Cum 09:00-18:00',
      },
      {
        id: '5',
        name: 'Elif Şahin',
        title: 'Eğitim Danışmanı',
        phone: '+90 532 567 89 01',
        email: 'elif.sahin@akaegitim.com',
        languages: ['Türkçe', 'İngilizce', 'İtalyanca'],
        workingHours: 'Pzt-Cum 09:00-18:00',
      },
    ],
  },
  'İzmir': {
    cityName: 'İzmir',
    officeAddress: 'Alsancak, Kıbrıs Şehitleri Cd. No:140, 35220 Konak/İzmir',
    officePhone: '+90 232 567 89 01',
    representatives: [
      {
        id: '6',
        name: 'Cem Yıldız',
        title: 'Bölge Müdürü',
        phone: '+90 532 678 90 12',
        email: 'cem.yildiz@akaegitim.com',
        languages: ['Türkçe', 'İngilizce', 'Almanca'],
        workingHours: 'Pzt-Cum 09:00-18:00',
      },
      {
        id: '7',
        name: 'Selin Arslan',
        title: 'Öğrenci Danışmanı',
        phone: '+90 532 789 01 23',
        email: 'selin.arslan@akaegitim.com',
        languages: ['Türkçe', 'İngilizce'],
        workingHours: 'Pzt-Cum 09:00-18:00',
      },
    ],
  },
  'Antalya': {
    cityName: 'Antalya',
    officeAddress: 'Muratpaşa, Atatürk Cd. No:45, 07100 Antalya',
    officePhone: '+90 242 678 90 12',
    representatives: [
      {
        id: '8',
        name: 'Deniz Çelik',
        title: 'Eğitim Danışmanı',
        phone: '+90 532 890 12 34',
        email: 'deniz.celik@akaegitim.com',
        languages: ['Türkçe', 'İngilizce', 'Rusça'],
        workingHours: 'Pzt-Cum 09:00-18:00',
      },
    ],
  },
  'Bursa': {
    cityName: 'Bursa',
    officeAddress: 'Nilüfer, Atatürk Cd. No:78, 16120 Bursa',
    officePhone: '+90 224 789 01 23',
    representatives: [
      {
        id: '9',
        name: 'Burak Aydın',
        title: 'Eğitim Danışmanı',
        phone: '+90 532 901 23 45',
        email: 'burak.aydin@akaegitim.com',
        languages: ['Türkçe', 'İngilizce'],
        workingHours: 'Pzt-Cum 09:00-18:00',
      },
    ],
  },
  'Adana': {
    cityName: 'Adana',
    officeAddress: 'Seyhan, İnönü Cd. No:23, 01120 Adana',
    officePhone: '+90 322 890 12 34',
    representatives: [
      {
        id: '10',
        name: 'Esra Kılıç',
        title: 'Eğitim Danışmanı',
        phone: '+90 533 012 34 56',
        email: 'esra.kilic@akaegitim.com',
        languages: ['Türkçe', 'İngilizce', 'Arapça'],
        workingHours: 'Pzt-Cum 09:00-18:00',
      },
    ],
  },
};

// Tüm temsilcilerin bulunduğu şehirlerin listesi
export const citiesWithRepresentatives = Object.keys(cityRepresentativesData);

// Şehir temsilcilerini getir
export function getCityRepresentatives(cityName: string): CityRepresentatives | null {
  return cityRepresentativesData[cityName] || null;
}

// Tüm temsilcileri getir
export function getAllRepresentatives(): Representative[] {
  return Object.values(cityRepresentativesData).flatMap(city => city.representatives);
}

// Ülke harita konfigürasyonları
export const countryMapConfigs: Record<string, CountryMapConfig> = {
  'İtalya': {
    geoDataPath: '/data/it.json',
    center: [12.5, 42.5],
    scale: 2500,
    defaultFill: '#009246', // İtalyan bayrağının yeşili
    hoverFill: '#ffffff',
    strokeColor: '#ffffff',
  },
  'Belçika': {
    geoDataPath: '/data/be.json',
    center: [4.5, 50.5],
    scale: 8000,
    defaultFill: '#FDDA24', // Belçika bayrağının sarısı
    hoverFill: '#ffffff',
    strokeColor: '#000000',
  },
  'Almanya': {
    geoDataPath: '/data/de.json',
    center: [10.5, 51.0],
    scale: 2200,
    defaultFill: '#000000', // Alman bayrağının siyahı
    hoverFill: '#DD0000',
    strokeColor: '#DD0000',
  },
  'Kazakistan': {
    geoDataPath: '/data/kz.json',
    center: [68.0, 48.0],
    scale: 800,
    defaultFill: '#00AFCA', // Kazakistan bayrağının mavisi
    hoverFill: '#ffffff',
    strokeColor: '#FEC50C',
  },
  'Hollanda': {
    geoDataPath: '/data/nl.json',
    center: [5.3, 52.2],
    scale: 9000,
    defaultFill: '#21468B', // Hollanda bayrağının mavisi
    hoverFill: '#ffffff',
    strokeColor: '#AE1C28',
  },
  'Finlandiya': {
    geoDataPath: '/data/fi.json',
    center: [26.0, 64.0],
    scale: 1200,
    defaultFill: '#003580', // Finlandiya bayrağının mavisi
    hoverFill: '#ffffff',
    strokeColor: '#ffffff',
  },
  'İngiltere': {
    geoDataPath: '/data/gb.json',
    center: [-2.0, 54.5],
    scale: 2500,
    defaultFill: '#012169', // İngiltere bayrağının mavisi
    hoverFill: '#C8102E',
    strokeColor: '#ffffff',
  },
};

// Ülke temsilci verileri
export const countryRepresentativesData: Record<string, Record<string, CityRepresentatives>> = {
  'İtalya': {
    'Lombardy': {
      cityName: 'Lombardy (Milano)',
      officeAddress: 'Via della Repubblica, 15, 20121 Milano, Italy',
      officePhone: '+39 02 1234 5678',
      representatives: [
        {
          id: 'it-1',
          name: 'Marco Rossi',
          title: 'Bölge Müdürü',
          phone: '+39 340 123 4567',
          email: 'marco.rossi@akaegitim.com',
          languages: ['İtalyanca', 'İngilizce', 'Türkçe'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
        {
          id: 'it-2',
          name: 'Giulia Ferrari',
          title: 'Eğitim Danışmanı',
          phone: '+39 340 234 5678',
          email: 'giulia.ferrari@akaegitim.com',
          languages: ['İtalyanca', 'İngilizce', 'Almanca'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Lazio': {
      cityName: 'Lazio (Roma)',
      officeAddress: 'Via Nazionale, 89, 00184 Roma, Italy',
      officePhone: '+39 06 2345 6789',
      representatives: [
        {
          id: 'it-3',
          name: 'Alessandro Bianchi',
          title: 'Eğitim Danışmanı',
          phone: '+39 340 345 6789',
          email: 'alessandro.bianchi@akaegitim.com',
          languages: ['İtalyanca', 'İngilizce', 'Türkçe'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Sicilia': {
      cityName: 'Sicilia (Palermo)',
      officeAddress: 'Via Maqueda, 123, 90133 Palermo, Italy',
      officePhone: '+39 091 345 6789',
      representatives: [
        {
          id: 'it-4',
          name: 'Sofia Romano',
          title: 'Öğrenci Danışmanı',
          phone: '+39 340 456 7890',
          email: 'sofia.romano@akaegitim.com',
          languages: ['İtalyanca', 'İngilizce'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Veneto': {
      cityName: 'Veneto (Venezia)',
      officeAddress: 'Piazza San Marco, 45, 30124 Venezia, Italy',
      officePhone: '+39 041 456 7890',
      representatives: [
        {
          id: 'it-5',
          name: 'Lorenzo Ricci',
          title: 'Eğitim Danışmanı',
          phone: '+39 340 567 8901',
          email: 'lorenzo.ricci@akaegitim.com',
          languages: ['İtalyanca', 'İngilizce', 'Fransızca'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Tuscany': {
      cityName: 'Tuscany (Firenze)',
      officeAddress: 'Piazza della Repubblica, 23, 50123 Firenze, Italy',
      officePhone: '+39 055 678 9012',
      representatives: [
        {
          id: 'it-6',
          name: 'Francesca Conti',
          title: 'Eğitim Danışmanı',
          phone: '+39 340 678 9012',
          email: 'francesca.conti@akaegitim.com',
          languages: ['İtalyanca', 'İngilizce', 'Türkçe'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Campania': {
      cityName: 'Campania (Napoli)',
      officeAddress: 'Via Toledo, 156, 80134 Napoli, Italy',
      officePhone: '+39 081 789 0123',
      representatives: [
        {
          id: 'it-7',
          name: 'Giuseppe Marino',
          title: 'Öğrenci Danışmanı',
          phone: '+39 340 789 0123',
          email: 'giuseppe.marino@akaegitim.com',
          languages: ['İtalyanca', 'İngilizce'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
  },
  'Belçika': {
    'Brussels': {
      cityName: 'Brussels',
      officeAddress: 'Avenue Louise 234, 1050 Bruxelles, Belgium',
      officePhone: '+32 2 345 6789',
      representatives: [
        {
          id: 'be-1',
          name: 'Jean Dubois',
          title: 'Bölge Müdürü',
          phone: '+32 470 123 456',
          email: 'jean.dubois@akaegitim.com',
          languages: ['Fransızca', 'Flemenkçe', 'İngilizce', 'Türkçe'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
        {
          id: 'be-2',
          name: 'Sophie Vandenberg',
          title: 'Eğitim Danışmanı',
          phone: '+32 470 234 567',
          email: 'sophie.vandenberg@akaegitim.com',
          languages: ['Fransızca', 'Flemenkçe', 'İngilizce'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Flanders': {
      cityName: 'Flanders (Antwerpen)',
      officeAddress: 'Meir 45, 2000 Antwerpen, Belgium',
      officePhone: '+32 3 456 7890',
      representatives: [
        {
          id: 'be-3',
          name: 'Pieter Janssens',
          title: 'Öğrenci Danışmanı',
          phone: '+32 470 345 678',
          email: 'pieter.janssens@akaegitim.com',
          languages: ['Flemenkçe', 'İngilizce', 'Türkçe'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Wallonia': {
      cityName: 'Wallonia (Liège)',
      officeAddress: 'Rue Léopold 23, 4000 Liège, Belgium',
      officePhone: '+32 4 567 8901',
      representatives: [
        {
          id: 'be-4',
          name: 'Marie Laurent',
          title: 'Eğitim Danışmanı',
          phone: '+32 470 456 789',
          email: 'marie.laurent@akaegitim.com',
          languages: ['Fransızca', 'İngilizce', 'Almanca'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
  },
  'Almanya': {
    'Bayern': {
      cityName: 'Bayern (München)',
      officeAddress: 'Marienplatz 15, 80331 München, Germany',
      officePhone: '+49 89 1234 5678',
      representatives: [
        {
          id: 'de-1',
          name: 'Hans Müller',
          title: 'Bölge Müdürü',
          phone: '+49 170 123 4567',
          email: 'hans.mueller@akaegitim.com',
          languages: ['Almanca', 'İngilizce', 'Türkçe'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
        {
          id: 'de-2',
          name: 'Anna Schmidt',
          title: 'Eğitim Danışmanı',
          phone: '+49 170 234 5678',
          email: 'anna.schmidt@akaegitim.com',
          languages: ['Almanca', 'İngilizce'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Berlin': {
      cityName: 'Berlin',
      officeAddress: 'Unter den Linden 45, 10117 Berlin, Germany',
      officePhone: '+49 30 2345 6789',
      representatives: [
        {
          id: 'de-3',
          name: 'Thomas Weber',
          title: 'Bölge Müdürü',
          phone: '+49 170 345 6789',
          email: 'thomas.weber@akaegitim.com',
          languages: ['Almanca', 'İngilizce', 'Türkçe'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
        {
          id: 'de-4',
          name: 'Lisa Wagner',
          title: 'Öğrenci Danışmanı',
          phone: '+49 170 456 7890',
          email: 'lisa.wagner@akaegitim.com',
          languages: ['Almanca', 'İngilizce'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Hamburg': {
      cityName: 'Hamburg',
      officeAddress: 'Mönckebergstraße 23, 20095 Hamburg, Germany',
      officePhone: '+49 40 3456 7890',
      representatives: [
        {
          id: 'de-5',
          name: 'Michael Becker',
          title: 'Eğitim Danışmanı',
          phone: '+49 170 567 8901',
          email: 'michael.becker@akaegitim.com',
          languages: ['Almanca', 'İngilizce'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Nordrhein-Westfalen': {
      cityName: 'Nordrhein-Westfalen (Köln)',
      officeAddress: 'Hohe Straße 67, 50667 Köln, Germany',
      officePhone: '+49 221 890 1234',
      representatives: [
        {
          id: 'de-6',
          name: 'Klaus Fischer',
          title: 'Eğitim Danışmanı',
          phone: '+49 170 678 9012',
          email: 'klaus.fischer@akaegitim.com',
          languages: ['Almanca', 'İngilizce', 'Türkçe'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Baden-Württemberg': {
      cityName: 'Baden-Württemberg (Stuttgart)',
      officeAddress: 'Königstraße 34, 70173 Stuttgart, Germany',
      officePhone: '+49 711 901 2345',
      representatives: [
        {
          id: 'de-7',
          name: 'Petra Schneider',
          title: 'Öğrenci Danışmanı',
          phone: '+49 170 789 0123',
          email: 'petra.schneider@akaegitim.com',
          languages: ['Almanca', 'İngilizce'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
  },
  'Kazakistan': {
    'Almaty (city)': {
      cityName: 'Almaty',
      officeAddress: 'Dostyk Avenue 123, Almaty 050010, Kazakhstan',
      officePhone: '+7 727 234 5678',
      representatives: [
        {
          id: 'kz-1',
          name: 'Aidar Zhanatov',
          title: 'Bölge Müdürü',
          phone: '+7 701 234 5678',
          email: 'aidar.zhanatov@akaegitim.com',
          languages: ['Kazakça', 'Rusça', 'İngilizce', 'Türkçe'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
        {
          id: 'kz-2',
          name: 'Aizhan Nurbekova',
          title: 'Eğitim Danışmanı',
          phone: '+7 701 345 6789',
          email: 'aizhan.nurbekova@akaegitim.com',
          languages: ['Kazakça', 'Rusça', 'İngilizce'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Astana': {
      cityName: 'Astana',
      officeAddress: 'Kabanbay Batyr Avenue 45, Astana 010000, Kazakhstan',
      officePhone: '+7 7172 345 6789',
      representatives: [
        {
          id: 'kz-3',
          name: 'Nurzhan Suleimenov',
          title: 'Eğitim Danışmanı',
          phone: '+7 702 456 7890',
          email: 'nurzhan.suleimenov@akaegitim.com',
          languages: ['Kazakça', 'Rusça', 'İngilizce', 'Türkçe'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Shymkent (city)': {
      cityName: 'Shymkent',
      officeAddress: 'Tauke Khan Avenue 67, Shymkent 160000, Kazakhstan',
      officePhone: '+7 7252 456 7890',
      representatives: [
        {
          id: 'kz-4',
          name: 'Askar Bekmukhambetov',
          title: 'Öğrenci Danışmanı',
          phone: '+7 703 567 8901',
          email: 'askar.bekmukhambetov@akaegitim.com',
          languages: ['Kazakça', 'Rusça', 'Türkçe'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Karaganda': {
      cityName: 'Karaganda',
      officeAddress: 'Bukhar Zhyrau Avenue 78, Karaganda 100000, Kazakhstan',
      officePhone: '+7 7212 567 8901',
      representatives: [
        {
          id: 'kz-5',
          name: 'Marat Alimov',
          title: 'Eğitim Danışmanı',
          phone: '+7 704 678 9012',
          email: 'marat.alimov@akaegitim.com',
          languages: ['Kazakça', 'Rusça', 'İngilizce'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Aktobe': {
      cityName: 'Aktobe',
      officeAddress: 'Abulkhair Khan Avenue 45, Aktobe 030000, Kazakhstan',
      officePhone: '+7 7132 678 9012',
      representatives: [
        {
          id: 'kz-6',
          name: 'Zhanna Omarova',
          title: 'Öğrenci Danışmanı',
          phone: '+7 705 789 0123',
          email: 'zhanna.omarova@akaegitim.com',
          languages: ['Kazakça', 'Rusça', 'Türkçe'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
  },
  'Hollanda': {
    'Noord-Holland': {
      cityName: 'Noord-Holland (Amsterdam)',
      officeAddress: 'Damrak 123, 1012 LP Amsterdam, Netherlands',
      officePhone: '+31 20 123 4567',
      representatives: [
        {
          id: 'nl-1',
          name: 'Jan de Vries',
          title: 'Bölge Müdürü',
          phone: '+31 6 1234 5678',
          email: 'jan.devries@akaegitim.com',
          languages: ['Flemenkçe', 'İngilizce', 'Türkçe'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
        {
          id: 'nl-2',
          name: 'Emma van den Berg',
          title: 'Eğitim Danışmanı',
          phone: '+31 6 2345 6789',
          email: 'emma.vandenberg@akaegitim.com',
          languages: ['Flemenkçe', 'İngilizce'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Zuid-Holland': {
      cityName: 'Zuid-Holland (Rotterdam)',
      officeAddress: 'Coolsingel 45, 3011 AD Rotterdam, Netherlands',
      officePhone: '+31 10 234 5678',
      representatives: [
        {
          id: 'nl-3',
          name: 'Pieter Bakker',
          title: 'Eğitim Danışmanı',
          phone: '+31 6 3456 7890',
          email: 'pieter.bakker@akaegitim.com',
          languages: ['Flemenkçe', 'İngilizce', 'Almanca'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Utrecht': {
      cityName: 'Utrecht',
      officeAddress: 'Vredenburg 23, 3511 BD Utrecht, Netherlands',
      officePhone: '+31 30 345 6789',
      representatives: [
        {
          id: 'nl-4',
          name: 'Sophie Visser',
          title: 'Öğrenci Danışmanı',
          phone: '+31 6 4567 8901',
          email: 'sophie.visser@akaegitim.com',
          languages: ['Flemenkçe', 'İngilizce'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Gelderland': {
      cityName: 'Gelderland (Arnhem)',
      officeAddress: 'Rijnstraat 45, 6811 EV Arnhem, Netherlands',
      officePhone: '+31 26 456 7890',
      representatives: [
        {
          id: 'nl-5',
          name: 'Lars van Dijk',
          title: 'Eğitim Danışmanı',
          phone: '+31 6 5678 9012',
          email: 'lars.vandijk@akaegitim.com',
          languages: ['Flemenkçe', 'İngilizce', 'Almanca'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Noord-Brabant': {
      cityName: 'Noord-Brabant (Eindhoven)',
      officeAddress: 'Stratumseind 78, 5611 ET Eindhoven, Netherlands',
      officePhone: '+31 40 567 8901',
      representatives: [
        {
          id: 'nl-6',
          name: 'Anna Jansen',
          title: 'Öğrenci Danışmanı',
          phone: '+31 6 6789 0123',
          email: 'anna.jansen@akaegitim.com',
          languages: ['Flemenkçe', 'İngilizce'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
  },
  'Finlandiya': {
    'Uusimaa': {
      cityName: 'Uusimaa (Helsinki)',
      officeAddress: 'Mannerheimintie 15, 00100 Helsinki, Finland',
      officePhone: '+358 9 1234 5678',
      representatives: [
        {
          id: 'fi-1',
          name: 'Mika Virtanen',
          title: 'Bölge Müdürü',
          phone: '+358 40 123 4567',
          email: 'mika.virtanen@akaegitim.com',
          languages: ['Fince', 'İngilizce', 'Türkçe'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
        {
          id: 'fi-2',
          name: 'Anna Korhonen',
          title: 'Eğitim Danışmanı',
          phone: '+358 40 234 5678',
          email: 'anna.korhonen@akaegitim.com',
          languages: ['Fince', 'İsveççe', 'İngilizce'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Pirkanmaa': {
      cityName: 'Pirkanmaa (Tampere)',
      officeAddress: 'Hämeenkatu 23, 33200 Tampere, Finland',
      officePhone: '+358 3 2345 6789',
      representatives: [
        {
          id: 'fi-3',
          name: 'Jari Mäkinen',
          title: 'Eğitim Danışmanı',
          phone: '+358 40 345 6789',
          email: 'jari.makinen@akaegitim.com',
          languages: ['Fince', 'İngilizce'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
    'Varsinais-Suomi': {
      cityName: 'Varsinais-Suomi (Turku)',
      officeAddress: 'Yliopistonkatu 34, 20100 Turku, Finland',
      officePhone: '+358 2 3456 7890',
      representatives: [
        {
          id: 'fi-4',
          name: 'Laura Nieminen',
          title: 'Öğrenci Danışmanı',
          phone: '+358 40 456 7890',
          email: 'laura.nieminen@akaegitim.com',
          languages: ['Fince', 'İsveççe', 'İngilizce'],
          workingHours: 'Pzt-Cum 09:00-18:00',
        },
      ],
    },
  },
  'İngiltere': {
    'England': {
      cityName: 'England (London)',
      officeAddress: '15 Oxford Street, London W1D 2HN, United Kingdom',
      officePhone: '+44 20 1234 5678',
      representatives: [
        {
          id: 'gb-1',
          name: 'James Smith',
          title: 'Bölge Müdürü',
          phone: '+44 7700 123456',
          email: 'james.smith@akaegitim.com',
          languages: ['İngilizce', 'Türkçe'],
          workingHours: 'Mon-Fri 09:00-18:00',
        },
        {
          id: 'gb-2',
          name: 'Emily Johnson',
          title: 'Eğitim Danışmanı',
          phone: '+44 7700 234567',
          email: 'emily.johnson@akaegitim.com',
          languages: ['İngilizce', 'Fransızca'],
          workingHours: 'Mon-Fri 09:00-18:00',
        },
      ],
    },
    'Scotland': {
      cityName: 'Scotland (Edinburgh)',
      officeAddress: '45 Princes Street, Edinburgh EH2 2BY, United Kingdom',
      officePhone: '+44 131 234 5678',
      representatives: [
        {
          id: 'gb-3',
          name: 'Andrew Wilson',
          title: 'Eğitim Danışmanı',
          phone: '+44 7700 345678',
          email: 'andrew.wilson@akaegitim.com',
          languages: ['İngilizce', 'Türkçe'],
          workingHours: 'Mon-Fri 09:00-18:00',
        },
      ],
    },
    'Wales': {
      cityName: 'Wales (Cardiff)',
      officeAddress: '23 Queen Street, Cardiff CF10 2BH, United Kingdom',
      officePhone: '+44 29 2345 6789',
      representatives: [
        {
          id: 'gb-4',
          name: 'Sarah Davies',
          title: 'Öğrenci Danışmanı',
          phone: '+44 7700 456789',
          email: 'sarah.davies@akaegitim.com',
          languages: ['İngilizce', 'Galce'],
          workingHours: 'Mon-Fri 09:00-18:00',
        },
      ],
    },
    'Northern Ireland': {
      cityName: 'Northern Ireland (Belfast)',
      officeAddress: '12 Donegall Square, Belfast BT1 5GS, United Kingdom',
      officePhone: '+44 28 3456 7890',
      representatives: [
        {
          id: 'gb-5',
          name: 'Michael Brown',
          title: 'Eğitim Danışmanı',
          phone: '+44 7700 567890',
          email: 'michael.brown@akaegitim.com',
          languages: ['İngilizce'],
          workingHours: 'Mon-Fri 09:00-18:00',
        },
      ],
    },
  },
};

// Ülke temsilcilerini getir
export function getCountryRepresentatives(countryName: string, regionName: string): CityRepresentatives | null {
  return countryRepresentativesData[countryName]?.[regionName] || null;
}

// Ülke harita konfigürasyonunu getir
export function getCountryMapConfig(countryName: string): CountryMapConfig | null {
  return countryMapConfigs[countryName] || null;
}

