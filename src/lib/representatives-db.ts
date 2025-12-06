// Supabase + Prisma ile temsilci veri yapıları ve fonksiyonları

import { prisma } from './prisma'

export interface Representative {
  id: string
  name: string
  title: string
  phone: string
  email: string
  avatar?: string | null
  languages?: string[]
  workingHours?: string | null
}

export interface CityRepresentatives {
  cityName: string
  representatives: Representative[]
  officeAddress?: string | null
  officePhone?: string | null
}

// Şehir temsilcilerini veritabanından getir
export async function getCityRepresentatives(cityName: string): Promise<CityRepresentatives | null> {
  try {
    const cityData = await prisma.cityRepresentative.findFirst({
      where: {
        cityName: cityName,
      },
      include: {
        representatives: true,
      },
    })

    if (!cityData) {
      return null
    }

    return {
      cityName: cityData.cityName,
      officeAddress: cityData.officeAddress,
      officePhone: cityData.officePhone,
      representatives: cityData.representatives.map((rep) => ({
        id: rep.id,
        name: rep.name,
        title: rep.title,
        phone: rep.phone,
        email: rep.email,
        avatar: rep.avatar,
        languages: rep.languages,
        workingHours: rep.workingHours,
      })),
    }
  } catch (error) {
    console.error('Şehir temsilcileri getirme hatası:', error)
    return null
  }
}

// Tüm temsilcilerin bulunduğu şehirlerin listesini getir
export async function getCitiesWithRepresentatives(): Promise<string[]> {
  try {
    const cities = await prisma.cityRepresentative.findMany({
      select: {
        cityName: true,
      },
    })

    return cities.map((city) => city.cityName)
  } catch (error) {
    console.error('Şehir listesi getirme hatası:', error)
    return []
  }
}

// Tüm temsilcileri getir
export async function getAllRepresentatives(): Promise<Representative[]> {
  try {
    const representatives = await prisma.representative.findMany({
      include: {
        city: true,
      },
    })

    return representatives.map((rep) => ({
      id: rep.id,
      name: rep.name,
      title: rep.title,
      phone: rep.phone,
      email: rep.email,
      avatar: rep.avatar,
      languages: rep.languages,
      workingHours: rep.workingHours,
    }))
  } catch (error) {
    console.error('Tüm temsilcileri getirme hatası:', error)
    return []
  }
}

// Yeni şehir temsilciliği ekle
export async function createCityRepresentative(data: {
  cityName: string
  officeAddress?: string
  officePhone?: string
}) {
  try {
    return await prisma.cityRepresentative.create({
      data: {
        cityName: data.cityName,
        officeAddress: data.officeAddress,
        officePhone: data.officePhone,
      },
    })
  } catch (error) {
    console.error('Şehir temsilciliği oluşturma hatası:', error)
    throw error
  }
}

// Yeni temsilci ekle
export async function createRepresentative(data: {
  name: string
  title: string
  phone: string
  email: string
  avatar?: string
  languages?: string[]
  workingHours?: string
  cityId: string
}) {
  try {
    return await prisma.representative.create({
      data: {
        name: data.name,
        title: data.title,
        phone: data.phone,
        email: data.email,
        avatar: data.avatar,
        languages: data.languages,
        workingHours: data.workingHours,
        cityId: data.cityId,
      },
    })
  } catch (error) {
    console.error('Temsilci oluşturma hatası:', error)
    throw error
  }
}

// Temsilci güncelle
export async function updateRepresentative(id: string, data: Partial<Omit<Representative, 'id'>>) {
  try {
    return await prisma.representative.update({
      where: { id },
      data,
    })
  } catch (error) {
    console.error('Temsilci güncelleme hatası:', error)
    throw error
  }
}

// Temsilci sil
export async function deleteRepresentative(id: string) {
  try {
    return await prisma.representative.delete({
      where: { id },
    })
  } catch (error) {
    console.error('Temsilci silme hatası:', error)
    throw error
  }
}

