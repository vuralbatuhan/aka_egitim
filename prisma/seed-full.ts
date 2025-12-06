import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Türkiye geneli 81 il için veritabanı seed işlemi başlatılıyor...')

  // Önce var olan verileri temizle
  await prisma.representative.deleteMany({})
  await prisma.cityRepresentative.deleteMany({})
  console.log('✓ Mevcut veriler temizlendi')

  const cities = [
    // MARMARA BÖLGESİ
    {
      cityName: 'İstanbul',
      officeAddress: 'Levent, Büyükdere Cd. No:185, 34394 Şişli/İstanbul',
      officePhone: '+90 212 345 67 89',
      representatives: [
        { name: 'Ayşe Yılmaz', title: 'Bölge Müdürü', phone: '+90 532 123 45 67', email: 'ayse.yilmaz@anka.com', languages: ['Türkçe', 'İngilizce', 'Almanca'] },
        { name: 'Mehmet Demir', title: 'Eğitim Danışmanı', phone: '+90 532 234 56 78', email: 'mehmet.demir@anka.com', languages: ['Türkçe', 'İngilizce', 'İspanyolca'] },
        { name: 'Zeynep Kaya', title: 'Öğrenci Danışmanı', phone: '+90 532 345 67 89', email: 'zeynep.kaya@anka.com', languages: ['Türkçe', 'İngilizce', 'Fransızca'] },
      ],
    },
    {
      cityName: 'Ankara',
      officeAddress: 'Kızılay, Atatürk Bulvarı No:85, 06420 Çankaya/Ankara',
      officePhone: '+90 312 456 78 90',
      representatives: [
        { name: 'Ahmet Özkan', title: 'Bölge Müdürü', phone: '+90 532 456 78 90', email: 'ahmet.ozkan@anka.com', languages: ['Türkçe', 'İngilizce'] },
        { name: 'Elif Şahin', title: 'Eğitim Danışmanı', phone: '+90 532 567 89 01', email: 'elif.sahin@anka.com', languages: ['Türkçe', 'İngilizce', 'İtalyanca'] },
      ],
    },
    {
      cityName: 'İzmir',
      officeAddress: 'Alsancak, Kıbrıs Şehitleri Cd. No:140, 35220 Konak/İzmir',
      officePhone: '+90 232 567 89 01',
      representatives: [
        { name: 'Cem Yıldız', title: 'Bölge Müdürü', phone: '+90 532 678 90 12', email: 'cem.yildiz@anka.com', languages: ['Türkçe', 'İngilizce', 'Almanca'] },
        { name: 'Selin Arslan', title: 'Öğrenci Danışmanı', phone: '+90 532 789 01 23', email: 'selin.arslan@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Bursa',
      officeAddress: 'Nilüfer, Atatürk Cd. No:78, 16120 Nilüfer/Bursa',
      officePhone: '+90 224 789 01 23',
      representatives: [
        { name: 'Burak Aydın', title: 'Eğitim Danışmanı', phone: '+90 532 901 23 45', email: 'burak.aydin@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Balıkesir',
      officeAddress: 'Merkez, Milli Kuvvetler Cd. No:15, 10100 Balıkesir',
      officePhone: '+90 266 123 45 67',
      representatives: [
        { name: 'Deniz Korkmaz', title: 'Eğitim Danışmanı', phone: '+90 533 111 22 33', email: 'deniz.korkmaz@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Tekirdağ',
      officeAddress: 'Süleymanpaşa, Atatürk Cd. No:45, 59100 Tekirdağ',
      officePhone: '+90 282 234 56 78',
      representatives: [
        { name: 'Gizem Aktaş', title: 'Öğrenci Danışmanı', phone: '+90 533 222 33 44', email: 'gizem.aktas@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Edirne',
      officeAddress: 'Merkez, Saraçlar Cd. No:12, 22100 Edirne',
      officePhone: '+90 284 345 67 89',
      representatives: [
        { name: 'Kaan Yalçın', title: 'Eğitim Danışmanı', phone: '+90 533 333 44 55', email: 'kaan.yalcin@anka.com', languages: ['Türkçe', 'İngilizce', 'Bulgarca'] },
      ],
    },
    {
      cityName: 'Kırklareli',
      officeAddress: 'Merkez, Cumhuriyet Cd. No:23, 39100 Kırklareli',
      officePhone: '+90 288 456 78 90',
      representatives: [
        { name: 'Merve Doğan', title: 'Öğrenci Danışmanı', phone: '+90 533 444 55 66', email: 'merve.dogan@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Kocaeli',
      officeAddress: 'İzmit, Cumhuriyet Cd. No:56, 41100 İzmit/Kocaeli',
      officePhone: '+90 262 567 89 01',
      representatives: [
        { name: 'Okan Tekin', title: 'Eğitim Danışmanı', phone: '+90 533 555 66 77', email: 'okan.tekin@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Sakarya',
      officeAddress: 'Adapazarı, Atatürk Cd. No:34, 54100 Sakarya',
      officePhone: '+90 264 678 90 12',
      representatives: [
        { name: 'Pınar Acar', title: 'Öğrenci Danışmanı', phone: '+90 533 666 77 88', email: 'pinar.acar@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Bilecik',
      officeAddress: 'Merkez, İnönü Cd. No:18, 11100 Bilecik',
      officePhone: '+90 228 789 01 23',
      representatives: [
        { name: 'Rıza Güneş', title: 'Eğitim Danışmanı', phone: '+90 533 777 88 99', email: 'riza.gunes@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Yalova',
      officeAddress: 'Merkez, Gazi Paşa Cd. No:22, 77100 Yalova',
      officePhone: '+90 226 890 12 34',
      representatives: [
        { name: 'Seda Özdemir', title: 'Öğrenci Danışmanı', phone: '+90 533 888 99 00', email: 'seda.ozdemir@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Çanakkale',
      officeAddress: 'Merkez, Atatürk Cd. No:67, 17100 Çanakkale',
      officePhone: '+90 286 901 23 45',
      representatives: [
        { name: 'Tolga Kılıç', title: 'Eğitim Danışmanı', phone: '+90 533 999 00 11', email: 'tolga.kilic@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },

    // EGE BÖLGESİ
    {
      cityName: 'Manisa',
      officeAddress: 'Merkez, Milli Egemenlik Cd. No:45, 45100 Manisa',
      officePhone: '+90 236 234 56 78',
      representatives: [
        { name: 'Ufuk Aslan', title: 'Eğitim Danışmanı', phone: '+90 534 111 22 33', email: 'ufuk.aslan@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Aydın',
      officeAddress: 'Efeler, Adnan Menderes Bulvarı No:78, 09100 Aydın',
      officePhone: '+90 256 345 67 89',
      representatives: [
        { name: 'Vildan Çetin', title: 'Öğrenci Danışmanı', phone: '+90 534 222 33 44', email: 'vildan.cetin@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Denizli',
      officeAddress: 'Pamukkale, Atatürk Bulvarı No:56, 20100 Denizli',
      officePhone: '+90 258 456 78 90',
      representatives: [
        { name: 'Yavuz Şen', title: 'Eğitim Danışmanı', phone: '+90 534 333 44 55', email: 'yavuz.sen@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Muğla',
      officeAddress: 'Menteşe, Cumhuriyet Cd. No:34, 48100 Muğla',
      officePhone: '+90 252 567 89 01',
      representatives: [
        { name: 'Zehra Polat', title: 'Öğrenci Danışmanı', phone: '+90 534 444 55 66', email: 'zehra.polat@anka.com', languages: ['Türkçe', 'İngilizce', 'Almanca'] },
      ],
    },
    {
      cityName: 'Afyonkarahisar',
      officeAddress: 'Merkez, Cumhuriyet Cd. No:89, 03100 Afyonkarahisar',
      officePhone: '+90 272 678 90 12',
      representatives: [
        { name: 'Ali Veli Yurt', title: 'Eğitim Danışmanı', phone: '+90 534 555 66 77', email: 'ali.yurt@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Kütahya',
      officeAddress: 'Merkez, Atatürk Cd. No:23, 43100 Kütahya',
      officePhone: '+90 274 789 01 23',
      representatives: [
        { name: 'Begüm Öztürk', title: 'Öğrenci Danışmanı', phone: '+90 534 666 77 88', email: 'begum.ozturk@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Uşak',
      officeAddress: 'Merkez, Atatürk Bulvarı No:12, 64100 Uşak',
      officePhone: '+90 276 890 12 34',
      representatives: [
        { name: 'Can Erdem', title: 'Eğitim Danışmanı', phone: '+90 534 777 88 99', email: 'can.erdem@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },

    // AKDENİZ BÖLGESİ
    {
      cityName: 'Antalya',
      officeAddress: 'Muratpaşa, Atatürk Cd. No:45, 07100 Antalya',
      officePhone: '+90 242 678 90 12',
      representatives: [
        { name: 'Deniz Çelik', title: 'Eğitim Danışmanı', phone: '+90 532 890 12 34', email: 'deniz.celik@anka.com', languages: ['Türkçe', 'İngilizce', 'Rusça'] },
      ],
    },
    {
      cityName: 'Adana',
      officeAddress: 'Seyhan, İnönü Cd. No:23, 01120 Adana',
      officePhone: '+90 322 890 12 34',
      representatives: [
        { name: 'Esra Kılıç', title: 'Eğitim Danışmanı', phone: '+90 533 012 34 56', email: 'esra.kilic@anka.com', languages: ['Türkçe', 'İngilizce', 'Arapça'] },
      ],
    },
    {
      cityName: 'Mersin',
      officeAddress: 'Akdeniz, İsmet İnönü Bulvarı No:67, 33100 Mersin',
      officePhone: '+90 324 234 56 78',
      representatives: [
        { name: 'Fatma Yalçın', title: 'Öğrenci Danışmanı', phone: '+90 535 111 22 33', email: 'fatma.yalcin@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Hatay',
      officeAddress: 'Antakya, Cumhuriyet Cd. No:45, 31100 Hatay',
      officePhone: '+90 326 345 67 89',
      representatives: [
        { name: 'Gökhan Duran', title: 'Eğitim Danışmanı', phone: '+90 535 222 33 44', email: 'gokhan.duran@anka.com', languages: ['Türkçe', 'İngilizce', 'Arapça'] },
      ],
    },
    {
      cityName: 'Kahramanmaraş',
      officeAddress: 'Merkez, Atatürk Cd. No:34, 46100 Kahramanmaraş',
      officePhone: '+90 344 456 78 90',
      representatives: [
        { name: 'Hakan Aydın', title: 'Öğrenci Danışmanı', phone: '+90 535 333 44 55', email: 'hakan.aydin@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Osmaniye',
      officeAddress: 'Merkez, Atatürk Cd. No:12, 80100 Osmaniye',
      officePhone: '+90 328 567 89 01',
      representatives: [
        { name: 'İrem Yıldız', title: 'Eğitim Danışmanı', phone: '+90 535 444 55 66', email: 'irem.yildiz@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Isparta',
      officeAddress: 'Merkez, Mimar Sinan Cd. No:23, 32100 Isparta',
      officePhone: '+90 246 678 90 12',
      representatives: [
        { name: 'Jale Koç', title: 'Öğrenci Danışmanı', phone: '+90 535 555 66 77', email: 'jale.koc@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Burdur',
      officeAddress: 'Merkez, Cumhuriyet Cd. No:45, 15100 Burdur',
      officePhone: '+90 248 789 01 23',
      representatives: [
        { name: 'Kemal Arslan', title: 'Eğitim Danışmanı', phone: '+90 535 666 77 88', email: 'kemal.arslan@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },

    // İÇ ANADOLU BÖLGESİ
    {
      cityName: 'Konya',
      officeAddress: 'Selçuklu, Alaaddin Bulvarı No:78, 42100 Konya',
      officePhone: '+90 332 234 56 78',
      representatives: [
        { name: 'Leyla Özer', title: 'Eğitim Danışmanı', phone: '+90 536 111 22 33', email: 'leyla.ozer@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Kayseri',
      officeAddress: 'Kocasinan, Sivas Cd. No:56, 38100 Kayseri',
      officePhone: '+90 352 345 67 89',
      representatives: [
        { name: 'Murat Şahin', title: 'Öğrenci Danışmanı', phone: '+90 536 222 33 44', email: 'murat.sahin@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Eskişehir',
      officeAddress: 'Odunpazarı, Atatürk Bulvarı No:34, 26100 Eskişehir',
      officePhone: '+90 222 456 78 90',
      representatives: [
        { name: 'Neslihan Kaya', title: 'Eğitim Danışmanı', phone: '+90 536 333 44 55', email: 'neslihan.kaya@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Sivas',
      officeAddress: 'Merkez, Atatürk Cd. No:23, 58100 Sivas',
      officePhone: '+90 346 567 89 01',
      representatives: [
        { name: 'Oğuz Demir', title: 'Öğrenci Danışmanı', phone: '+90 536 444 55 66', email: 'oguz.demir@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Aksaray',
      officeAddress: 'Merkez, Cumhuriyet Cd. No:12, 68100 Aksaray',
      officePhone: '+90 382 678 90 12',
      representatives: [
        { name: 'Pelin Yurt', title: 'Eğitim Danışmanı', phone: '+90 536 555 66 77', email: 'pelin.yurt@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Niğde',
      officeAddress: 'Merkez, Atatürk Cd. No:45, 51100 Niğde',
      officePhone: '+90 388 789 01 23',
      representatives: [
        { name: 'Ramazan Çelik', title: 'Öğrenci Danışmanı', phone: '+90 536 666 77 88', email: 'ramazan.celik@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Nevşehir',
      officeAddress: 'Merkez, Lale Cd. No:23, 50100 Nevşehir',
      officePhone: '+90 384 890 12 34',
      representatives: [
        { name: 'Selin Acar', title: 'Eğitim Danışmanı', phone: '+90 536 777 88 99', email: 'selin.acar@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Kırıkkale',
      officeAddress: 'Merkez, Atatürk Cd. No:67, 71100 Kırıkkale',
      officePhone: '+90 318 901 23 45',
      representatives: [
        { name: 'Taner Özkan', title: 'Öğrenci Danışmanı', phone: '+90 536 888 99 00', email: 'taner.ozkan@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Kırşehir',
      officeAddress: 'Merkez, Cacabey Cd. No:34, 40100 Kırşehir',
      officePhone: '+90 386 012 34 56',
      representatives: [
        { name: 'Ufuk Polat', title: 'Eğitim Danışmanı', phone: '+90 536 999 00 11', email: 'ufuk.polat@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Yozgat',
      officeAddress: 'Merkez, Atatürk Cd. No:12, 66100 Yozgat',
      officePhone: '+90 354 123 45 67',
      representatives: [
        { name: 'Veli Tekin', title: 'Öğrenci Danışmanı', phone: '+90 537 111 22 33', email: 'veli.tekin@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Çankırı',
      officeAddress: 'Merkez, Cumhuriyet Cd. No:23, 18100 Çankırı',
      officePhone: '+90 376 234 56 78',
      representatives: [
        { name: 'Yelda Güneş', title: 'Eğitim Danışmanı', phone: '+90 537 222 33 44', email: 'yelda.gunes@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Karaman',
      officeAddress: 'Merkez, Atatürk Cd. No:45, 70100 Karaman',
      officePhone: '+90 338 345 67 89',
      representatives: [
        { name: 'Zafer Yalçın', title: 'Öğrenci Danışmanı', phone: '+90 537 333 44 55', email: 'zafer.yalcin@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },

    // KARADENİZ BÖLGESİ
    {
      cityName: 'Samsun',
      officeAddress: 'İlkadım, Cumhuriyet Cd. No:78, 55100 Samsun',
      officePhone: '+90 362 456 78 90',
      representatives: [
        { name: 'Ahmet Korkmaz', title: 'Eğitim Danışmanı', phone: '+90 538 111 22 33', email: 'ahmet.korkmaz@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Trabzon',
      officeAddress: 'Ortahisar, Uzun Sk. No:34, 61100 Trabzon',
      officePhone: '+90 462 567 89 01',
      representatives: [
        { name: 'Betül Doğan', title: 'Öğrenci Danışmanı', phone: '+90 538 222 33 44', email: 'betul.dogan@anka.com', languages: ['Türkçe', 'İngilizce', 'Rusça'] },
      ],
    },
    {
      cityName: 'Ordu',
      officeAddress: 'Altınordu, Atatürk Bulvarı No:23, 52100 Ordu',
      officePhone: '+90 452 678 90 12',
      representatives: [
        { name: 'Cem Aktaş', title: 'Eğitim Danışmanı', phone: '+90 538 333 44 55', email: 'cem.aktas@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Giresun',
      officeAddress: 'Merkez, Atatürk Bulvarı No:45, 28100 Giresun',
      officePhone: '+90 454 789 01 23',
      representatives: [
        { name: 'Dilek Yurt', title: 'Öğrenci Danışmanı', phone: '+90 538 444 55 66', email: 'dilek.yurt@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Rize',
      officeAddress: 'Merkez, Cumhuriyet Cd. No:12, 53100 Rize',
      officePhone: '+90 464 890 12 34',
      representatives: [
        { name: 'Emre Çelik', title: 'Eğitim Danışmanı', phone: '+90 538 555 66 77', email: 'emre.celik@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Artvin',
      officeAddress: 'Merkez, Atatürk Cd. No:23, 08100 Artvin',
      officePhone: '+90 466 901 23 45',
      representatives: [
        { name: 'Fatih Aslan', title: 'Öğrenci Danışmanı', phone: '+90 538 666 77 88', email: 'fatih.aslan@anka.com', languages: ['Türkçe', 'İngilizce', 'Gürcüce'] },
      ],
    },
    {
      cityName: 'Gümüşhane',
      officeAddress: 'Merkez, Bağlarbaşı Cd. No:34, 29100 Gümüşhane',
      officePhone: '+90 456 012 34 56',
      representatives: [
        { name: 'Gül Öztürk', title: 'Eğitim Danışmanı', phone: '+90 538 777 88 99', email: 'gul.ozturk@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Bayburt',
      officeAddress: 'Merkez, Cumhuriyet Cd. No:12, 69100 Bayburt',
      officePhone: '+90 458 123 45 67',
      representatives: [
        { name: 'Hüseyin Erdem', title: 'Öğrenci Danışmanı', phone: '+90 538 888 99 00', email: 'huseyin.erdem@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Tokat',
      officeAddress: 'Merkez, Gazi Osman Paşa Bulvarı No:45, 60100 Tokat',
      officePhone: '+90 356 234 56 78',
      representatives: [
        { name: 'İlker Yalçın', title: 'Eğitim Danışmanı', phone: '+90 538 999 00 11', email: 'ilker.yalcin@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Amasya',
      officeAddress: 'Merkez, Atatürk Cd. No:23, 05100 Amasya',
      officePhone: '+90 358 345 67 89',
      representatives: [
        { name: 'Jale Duran', title: 'Öğrenci Danışmanı', phone: '+90 539 111 22 33', email: 'jale.duran@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Çorum',
      officeAddress: 'Merkez, İnönü Cd. No:56, 19100 Çorum',
      officePhone: '+90 364 456 78 90',
      representatives: [
        { name: 'Kıvanç Aydın', title: 'Eğitim Danışmanı', phone: '+90 539 222 33 44', email: 'kivanc.aydin@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Sinop',
      officeAddress: 'Merkez, Atatürk Cd. No:34, 57100 Sinop',
      officePhone: '+90 368 567 89 01',
      representatives: [
        { name: 'Lale Şen', title: 'Öğrenci Danışmanı', phone: '+90 539 333 44 55', email: 'lale.sen@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Kastamonu',
      officeAddress: 'Merkez, Cumhuriyet Cd. No:12, 37100 Kastamonu',
      officePhone: '+90 366 678 90 12',
      representatives: [
        { name: 'Mert Koç', title: 'Eğitim Danışmanı', phone: '+90 539 444 55 66', email: 'mert.koc@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Zonguldak',
      officeAddress: 'Merkez, Atatürk Cd. No:45, 67100 Zonguldak',
      officePhone: '+90 372 789 01 23',
      representatives: [
        { name: 'Nihan Polat', title: 'Öğrenci Danışmanı', phone: '+90 539 555 66 77', email: 'nihan.polat@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Bartın',
      officeAddress: 'Merkez, Orta Mahalle No:23, 74100 Bartın',
      officePhone: '+90 378 890 12 34',
      representatives: [
        { name: 'Onur Yurt', title: 'Eğitim Danışmanı', phone: '+90 539 666 77 88', email: 'onur.yurt@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Karabük',
      officeAddress: 'Merkez, Atatürk Cd. No:67, 78100 Karabük',
      officePhone: '+90 370 901 23 45',
      representatives: [
        { name: 'Özge Tekin', title: 'Öğrenci Danışmanı', phone: '+90 539 777 88 99', email: 'ozge.tekin@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Bolu',
      officeAddress: 'Merkez, İzzet Baysal Cd. No:34, 14100 Bolu',
      officePhone: '+90 374 012 34 56',
      representatives: [
        { name: 'Pınar Güneş', title: 'Eğitim Danışmanı', phone: '+90 539 888 99 00', email: 'pinar.gunes@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Düzce',
      officeAddress: 'Merkez, Atatürk Bulvarı No:12, 81100 Düzce',
      officePhone: '+90 380 123 45 67',
      representatives: [
        { name: 'Recep Özdemir', title: 'Öğrenci Danışmanı', phone: '+90 539 999 00 11', email: 'recep.ozdemir@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },

    // DOĞU ANADOLU BÖLGESİ
    {
      cityName: 'Erzurum',
      officeAddress: 'Yakutiye, Cumhuriyet Cd. No:45, 25100 Erzurum',
      officePhone: '+90 442 234 56 78',
      representatives: [
        { name: 'Serap Arslan', title: 'Eğitim Danışmanı', phone: '+90 540 111 22 33', email: 'serap.arslan@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Erzincan',
      officeAddress: 'Merkez, Atatürk Cd. No:23, 24100 Erzincan',
      officePhone: '+90 446 345 67 89',
      representatives: [
        { name: 'Turgut Yıldız', title: 'Öğrenci Danışmanı', phone: '+90 540 222 33 44', email: 'turgut.yildiz@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Ağrı',
      officeAddress: 'Merkez, İnönü Cd. No:12, 04100 Ağrı',
      officePhone: '+90 472 456 78 90',
      representatives: [
        { name: 'Umut Kaya', title: 'Eğitim Danışmanı', phone: '+90 540 333 44 55', email: 'umut.kaya@anka.com', languages: ['Türkçe', 'İngilizce', 'Kürtçe'] },
      ],
    },
    {
      cityName: 'Kars',
      officeAddress: 'Merkez, Atatürk Cd. No:34, 36100 Kars',
      officePhone: '+90 474 567 89 01',
      representatives: [
        { name: 'Vildan Demir', title: 'Öğrenci Danışmanı', phone: '+90 540 444 55 66', email: 'vildan.demir@anka.com', languages: ['Türkçe', 'İngilizce', 'Rusça'] },
      ],
    },
    {
      cityName: 'Iğdır',
      officeAddress: 'Merkez, Cumhuriyet Cd. No:23, 76100 Iğdır',
      officePhone: '+90 476 678 90 12',
      representatives: [
        { name: 'Yasemin Çelik', title: 'Eğitim Danışmanı', phone: '+90 540 555 66 77', email: 'yasemin.celik@anka.com', languages: ['Türkçe', 'İngilizce', 'Azerice'] },
      ],
    },
    {
      cityName: 'Ardahan',
      officeAddress: 'Merkez, Atatürk Cd. No:12, 75100 Ardahan',
      officePhone: '+90 478 789 01 23',
      representatives: [
        { name: 'Zafer Öztürk', title: 'Öğrenci Danışmanı', phone: '+90 540 666 77 88', email: 'zafer.ozturk@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Muş',
      officeAddress: 'Merkez, Cumhuriyet Cd. No:45, 49100 Muş',
      officePhone: '+90 436 890 12 34',
      representatives: [
        { name: 'Aylin Erdem', title: 'Eğitim Danışmanı', phone: '+90 540 777 88 99', email: 'aylin.erdem@anka.com', languages: ['Türkçe', 'İngilizce', 'Kürtçe'] },
      ],
    },
    {
      cityName: 'Bitlis',
      officeAddress: 'Merkez, Atatürk Cd. No:23, 13100 Bitlis',
      officePhone: '+90 434 901 23 45',
      representatives: [
        { name: 'Berk Yalçın', title: 'Öğrenci Danışmanı', phone: '+90 540 888 99 00', email: 'berk.yalcin@anka.com', languages: ['Türkçe', 'İngilizce', 'Kürtçe'] },
      ],
    },
    {
      cityName: 'Van',
      officeAddress: 'İpekyolu, Cumhuriyet Cd. No:56, 65100 Van',
      officePhone: '+90 432 012 34 56',
      representatives: [
        { name: 'Canan Duran', title: 'Eğitim Danışmanı', phone: '+90 540 999 00 11', email: 'canan.duran@anka.com', languages: ['Türkçe', 'İngilizce', 'Kürtçe'] },
      ],
    },
    {
      cityName: 'Hakkari',
      officeAddress: 'Merkez, Atatürk Cd. No:12, 30100 Hakkari',
      officePhone: '+90 438 123 45 67',
      representatives: [
        { name: 'Deniz Aydın', title: 'Öğrenci Danışmanı', phone: '+90 541 111 22 33', email: 'deniz.aydin@anka.com', languages: ['Türkçe', 'İngilizce', 'Kürtçe'] },
      ],
    },
    {
      cityName: 'Elazığ',
      officeAddress: 'Merkez, Hürriyet Cd. No:34, 23100 Elazığ',
      officePhone: '+90 424 234 56 78',
      representatives: [
        { name: 'Elif Şen', title: 'Eğitim Danışmanı', phone: '+90 541 222 33 44', email: 'elif.sen@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Malatya',
      officeAddress: 'Yeşilyurt, Atatürk Cd. No:67, 44100 Malatya',
      officePhone: '+90 422 345 67 89',
      representatives: [
        { name: 'Furkan Koç', title: 'Öğrenci Danışmanı', phone: '+90 541 333 44 55', email: 'furkan.koc@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Bingöl',
      officeAddress: 'Merkez, Atatürk Cd. No:23, 12100 Bingöl',
      officePhone: '+90 426 456 78 90',
      representatives: [
        { name: 'Gizem Polat', title: 'Eğitim Danışmanı', phone: '+90 541 444 55 66', email: 'gizem.polat@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },
    {
      cityName: 'Tunceli',
      officeAddress: 'Merkez, Cumhuriyet Cd. No:12, 62100 Tunceli',
      officePhone: '+90 428 567 89 01',
      representatives: [
        { name: 'Hakan Yurt', title: 'Öğrenci Danışmanı', phone: '+90 541 555 66 77', email: 'hakan.yurt@anka.com', languages: ['Türkçe', 'İngilizce'] },
      ],
    },

    // GÜNEYDOĞU ANADOLU BÖLGESİ
    {
      cityName: 'Gaziantep',
      officeAddress: 'Şehitkamil, Atatürk Bulvarı No:78, 27100 Gaziantep',
      officePhone: '+90 342 678 90 12',
      representatives: [
        { name: 'İpek Tekin', title: 'Eğitim Danışmanı', phone: '+90 541 666 77 88', email: 'ipek.tekin@anka.com', languages: ['Türkçe', 'İngilizce', 'Arapça'] },
      ],
    },
    {
      cityName: 'Şanlıurfa',
      officeAddress: 'Eyyübiye, Atatürk Bulvarı No:45, 63100 Şanlıurfa',
      officePhone: '+90 414 789 01 23',
      representatives: [
        { name: 'Kerem Güneş', title: 'Öğrenci Danışmanı', phone: '+90 541 777 88 99', email: 'kerem.gunes@anka.com', languages: ['Türkçe', 'İngilizce', 'Arapça'] },
      ],
    },
    {
      cityName: 'Diyarbakır',
      officeAddress: 'Yenişehir, Lise Cd. No:34, 21100 Diyarbakır',
      officePhone: '+90 412 890 12 34',
      representatives: [
        { name: 'Leman Özdemir', title: 'Eğitim Danışmanı', phone: '+90 541 888 99 00', email: 'leman.ozdemir@anka.com', languages: ['Türkçe', 'İngilizce', 'Kürtçe'] },
      ],
    },
    {
      cityName: 'Mardin',
      officeAddress: 'Artuklu, Cumhuriyet Cd. No:23, 47100 Mardin',
      officePhone: '+90 482 901 23 45',
      representatives: [
        { name: 'Mustafa Kılıç', title: 'Öğrenci Danışmanı', phone: '+90 541 999 00 11', email: 'mustafa.kilic@anka.com', languages: ['Türkçe', 'İngilizce', 'Arapça', 'Kürtçe'] },
      ],
    },
    {
      cityName: 'Batman',
      officeAddress: 'Merkez, Atatürk Bulvarı No:56, 72100 Batman',
      officePhone: '+90 488 012 34 56',
      representatives: [
        { name: 'Nalan Arslan', title: 'Eğitim Danışmanı', phone: '+90 542 111 22 33', email: 'nalan.arslan@anka.com', languages: ['Türkçe', 'İngilizce', 'Kürtçe'] },
      ],
    },
    {
      cityName: 'Siirt',
      officeAddress: 'Merkez, Cumhuriyet Cd. No:12, 56100 Siirt',
      officePhone: '+90 484 123 45 67',
      representatives: [
        { name: 'Osman Yıldız', title: 'Öğrenci Danışmanı', phone: '+90 542 222 33 44', email: 'osman.yildiz@anka.com', languages: ['Türkçe', 'İngilizce', 'Kürtçe'] },
      ],
    },
    {
      cityName: 'Şırnak',
      officeAddress: 'Merkez, Atatürk Cd. No:23, 73100 Şırnak',
      officePhone: '+90 486 234 56 78',
      representatives: [
        { name: 'Pınar Kaya', title: 'Eğitim Danışmanı', phone: '+90 542 333 44 55', email: 'pinar.kaya@anka.com', languages: ['Türkçe', 'İngilizce', 'Kürtçe'] },
      ],
    },
    {
      cityName: 'Kilis',
      officeAddress: 'Merkez, Atatürk Cd. No:34, 79100 Kilis',
      officePhone: '+90 348 345 67 89',
      representatives: [
        { name: 'Rabia Demir', title: 'Öğrenci Danışmanı', phone: '+90 542 444 55 66', email: 'rabia.demir@anka.com', languages: ['Türkçe', 'İngilizce', 'Arapça'] },
      ],
    },
    {
      cityName: 'Adıyaman',
      officeAddress: 'Merkez, Atatürk Bulvarı No:45, 02100 Adıyaman',
      officePhone: '+90 416 456 78 90',
      representatives: [
        { name: 'Serkan Çelik', title: 'Eğitim Danışmanı', phone: '+90 542 555 66 77', email: 'serkan.celik@anka.com', languages: ['Türkçe', 'İngilizce', 'Kürtçe'] },
      ],
    },
  ]

  console.log(`\n📊 ${cities.length} il için veri ekleniyor...\n`)

  let totalRepresentatives = 0

  for (const city of cities) {
    const created = await prisma.cityRepresentative.create({
      data: {
        cityName: city.cityName,
        officeAddress: city.officeAddress,
        officePhone: city.officePhone,
        representatives: {
          create: city.representatives.map((rep) => ({
            name: rep.name,
            title: rep.title,
            phone: rep.phone,
            email: rep.email,
            languages: rep.languages,
            workingHours: 'Pzt-Cum 09:00-18:00',
          })),
        },
      },
    })

    totalRepresentatives += city.representatives.length
    console.log(`✓ ${city.cityName.padEnd(20)} - ${city.representatives.length} temsilci eklendi`)
  }

  console.log(`\n✅ Seed işlemi tamamlandı!`)
  console.log(`📍 Toplam ${cities.length} il`)
  console.log(`👥 Toplam ${totalRepresentatives} temsilci`)
  console.log(`🎉 Türkiye geneli veri tabanı hazır!\n`)
}

main()
  .catch((e) => {
    console.error('❌ Seed hatası:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

