import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Veritabanı seed işlemi başlatılıyor...')

  // İstanbul
  const istanbul = await prisma.cityRepresentative.create({
    data: {
      cityName: 'İstanbul',
      officeAddress: 'Levent, Beyazıt Sk. No:12, 34330 Beşiktaş/İstanbul',
      officePhone: '+90 212 345 67 89',
      representatives: {
        create: [
          {
            name: 'Ayşe Yılmaz',
            title: 'Bölge Müdürü',
            phone: '+90 532 123 45 67',
            email: 'ayse.yilmaz@dilokulu.com',
            languages: ['Türkçe', 'İngilizce', 'Almanca'],
            workingHours: 'Pzt-Cum 09:00-18:00',
          },
          {
            name: 'Mehmet Demir',
            title: 'Eğitim Danışmanı',
            phone: '+90 532 234 56 78',
            email: 'mehmet.demir@dilokulu.com',
            languages: ['Türkçe', 'İngilizce', 'İspanyolca'],
            workingHours: 'Pzt-Cum 09:00-18:00',
          },
          {
            name: 'Zeynep Kaya',
            title: 'Öğrenci Danışmanı',
            phone: '+90 532 345 67 89',
            email: 'zeynep.kaya@dilokulu.com',
            languages: ['Türkçe', 'İngilizce', 'Fransızca'],
            workingHours: 'Pzt-Cum 09:00-18:00',
          },
        ],
      },
    },
  })

  // Ankara
  const ankara = await prisma.cityRepresentative.create({
    data: {
      cityName: 'Ankara',
      officeAddress: 'Kızılay, Atatürk Bulvarı No:85, 06420 Çankaya/Ankara',
      officePhone: '+90 312 456 78 90',
      representatives: {
        create: [
          {
            name: 'Ahmet Özkan',
            title: 'Bölge Müdürü',
            phone: '+90 532 456 78 90',
            email: 'ahmet.ozkan@dilokulu.com',
            languages: ['Türkçe', 'İngilizce'],
            workingHours: 'Pzt-Cum 09:00-18:00',
          },
          {
            name: 'Elif Şahin',
            title: 'Eğitim Danışmanı',
            phone: '+90 532 567 89 01',
            email: 'elif.sahin@dilokulu.com',
            languages: ['Türkçe', 'İngilizce', 'İtalyanca'],
            workingHours: 'Pzt-Cum 09:00-18:00',
          },
        ],
      },
    },
  })

  // İzmir
  const izmir = await prisma.cityRepresentative.create({
    data: {
      cityName: 'İzmir',
      officeAddress: 'Alsancak, Kıbrıs Şehitleri Cd. No:140, 35220 Konak/İzmir',
      officePhone: '+90 232 567 89 01',
      representatives: {
        create: [
          {
            name: 'Cem Yıldız',
            title: 'Bölge Müdürü',
            phone: '+90 532 678 90 12',
            email: 'cem.yildiz@dilokulu.com',
            languages: ['Türkçe', 'İngilizce', 'Almanca'],
            workingHours: 'Pzt-Cum 09:00-18:00',
          },
          {
            name: 'Selin Arslan',
            title: 'Öğrenci Danışmanı',
            phone: '+90 532 789 01 23',
            email: 'selin.arslan@dilokulu.com',
            languages: ['Türkçe', 'İngilizce'],
            workingHours: 'Pzt-Cum 09:00-18:00',
          },
        ],
      },
    },
  })

  // Antalya
  const antalya = await prisma.cityRepresentative.create({
    data: {
      cityName: 'Antalya',
      officeAddress: 'Muratpaşa, Atatürk Cd. No:45, 07100 Antalya',
      officePhone: '+90 242 678 90 12',
      representatives: {
        create: [
          {
            name: 'Deniz Çelik',
            title: 'Eğitim Danışmanı',
            phone: '+90 532 890 12 34',
            email: 'deniz.celik@dilokulu.com',
            languages: ['Türkçe', 'İngilizce', 'Rusça'],
            workingHours: 'Pzt-Cum 09:00-18:00',
          },
        ],
      },
    },
  })

  // Bursa
  const bursa = await prisma.cityRepresentative.create({
    data: {
      cityName: 'Bursa',
      officeAddress: 'Nilüfer, Atatürk Cd. No:78, 16120 Bursa',
      officePhone: '+90 224 789 01 23',
      representatives: {
        create: [
          {
            name: 'Burak Aydın',
            title: 'Eğitim Danışmanı',
            phone: '+90 532 901 23 45',
            email: 'burak.aydin@dilokulu.com',
            languages: ['Türkçe', 'İngilizce'],
            workingHours: 'Pzt-Cum 09:00-18:00',
          },
        ],
      },
    },
  })

  // Adana
  const adana = await prisma.cityRepresentative.create({
    data: {
      cityName: 'Adana',
      officeAddress: 'Seyhan, İnönü Cd. No:23, 01120 Adana',
      officePhone: '+90 322 890 12 34',
      representatives: {
        create: [
          {
            name: 'Esra Kılıç',
            title: 'Eğitim Danışmanı',
            phone: '+90 533 012 34 56',
            email: 'esra.kilic@dilokulu.com',
            languages: ['Türkçe', 'İngilizce', 'Arapça'],
            workingHours: 'Pzt-Cum 09:00-18:00',
          },
        ],
      },
    },
  })

  console.log('✅ Seed işlemi tamamlandı!')
  console.log(`📍 ${istanbul.cityName} - ${3} temsilci eklendi`)
  console.log(`📍 ${ankara.cityName} - ${2} temsilci eklendi`)
  console.log(`📍 ${izmir.cityName} - ${2} temsilci eklendi`)
  console.log(`📍 ${antalya.cityName} - ${1} temsilci eklendi`)
  console.log(`📍 ${bursa.cityName} - ${1} temsilci eklendi`)
  console.log(`📍 ${adana.cityName} - ${1} temsilci eklendi`)
}

main()
  .catch((e) => {
    console.error('❌ Seed hatası:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

