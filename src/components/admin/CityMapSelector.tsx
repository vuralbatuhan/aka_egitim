'use client'

import { Card, CardBody } from '@heroui/react'
import TurkeyMap from '@/components/sections/TurkeyMap'
import { citiesWithRepresentatives } from '@/lib/representatives'

interface CityMapSelectorProps {
  onCitySelect: (city: string) => void
  selectedCity: string
}

export default function CityMapSelector({ onCitySelect, selectedCity }: CityMapSelectorProps) {
  return (
    <Card>
      <CardBody className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Türkiye Haritası</h3>
          <p className="text-gray-600 text-sm">Haritadan bir şehir seçerek o şehrin temsilcilerini yönetin</p>
          
          {selectedCity && (
            <div className="mt-3 inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span className="font-semibold text-primary">Seçili: {selectedCity}</span>
            </div>
          )}
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <TurkeyMap
            onProvinceClick={onCitySelect}
            highlightedProvinces={citiesWithRepresentatives}
          />
        </div>

        <div className="mt-4 flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary rounded"></div>
            <span className="text-gray-700">Temsilcilik Var</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <span className="text-gray-700">Temsilcilik Yok</span>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

