import { NextRequest, NextResponse } from 'next/server'
import { getAllCities, getAllRepresentatives } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const name = searchParams.get('name')

    if (!name) {
      return NextResponse.json(
        { message: 'City name is required' },
        { status: 400 }
      )
    }

    // Normalize city name for comparison (case-insensitive, Turkish character insensitive)
    const normalizeCityName = (cityName: string) => {
      return cityName
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/ı/g, 'i')
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c')
        .replace(/İ/g, 'i')
        .replace(/Ğ/g, 'g')
        .replace(/Ü/g, 'u')
        .replace(/Ş/g, 's')
        .replace(/Ö/g, 'o')
        .replace(/Ç/g, 'c')
        .trim()
    }

    const normalizedSearchName = normalizeCityName(name)

    // Get all cities and representatives from Supabase
    const [cities, allReps] = await Promise.all([
      getAllCities(),
      getAllRepresentatives()
    ])

    // Find matching city (case-insensitive, Turkish character insensitive)
    const city = cities.find(c => normalizeCityName(c.city_name) === normalizedSearchName)

    if (!city) {
      return NextResponse.json(
        { message: 'City not found' },
        { status: 404 }
      )
    }

    // Get representatives for this city
    const cityRepresentatives = allReps.filter(rep => rep.city_id === city.id)

    const cityData = {
      cityName: city.city_name,
      officeAddress: city.office_address,
      officePhone: city.office_phone,
      representatives: cityRepresentatives.map(rep => ({
        id: rep.id,
        name: rep.name,
        title: rep.title,
        phone: rep.phone,
        email: rep.email,
        avatar: rep.avatar,
        languages: rep.languages || [],
        workingHours: rep.working_hours,
      })),
    }

    return NextResponse.json(cityData)
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

