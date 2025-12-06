import { NextResponse } from 'next/server'
import { getAllCities, getAllRepresentatives } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const [cities, representatives] = await Promise.all([
      getAllCities(),
      getAllRepresentatives()
    ])

    // Get city names that have representatives
    const citiesWithReps = cities
      .filter(city => representatives.some(rep => rep.city_id === city.id))
      .map(city => city.city_name)

    return NextResponse.json({
      cities: citiesWithReps,
      totalRepresentatives: representatives.length,
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

