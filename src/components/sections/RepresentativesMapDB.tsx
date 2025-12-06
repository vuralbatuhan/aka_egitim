'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '@heroui/react';
import Link from 'next/link';
import TurkeyMap from './TurkeyMap';
import RepresentativesModal from '../modals/RepresentativesModal';
import { CityRepresentatives } from '@/lib/representatives-db';

const RepresentativesMapDB: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<CityRepresentatives | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [citiesWithRepresentatives, setCitiesWithRepresentatives] = useState<string[]>([]);
  const [totalCities, setTotalCities] = useState(0);
  const [totalRepresentatives, setTotalRepresentatives] = useState(0);
  const [loading, setLoading] = useState(true);

  // Şehir listesini yükle
  useEffect(() => {
    async function loadCities() {
      try {
        const response = await fetch('/api/representatives/cities');
        if (response.ok) {
          const data = await response.json();
          setCitiesWithRepresentatives(data.cities);
          setTotalCities(data.cities.length);
          setTotalRepresentatives(data.totalRepresentatives || 0);
        }
      } catch (error) {
        console.error('Şehir listesi yükleme hatası:', error);
      } finally {
        setLoading(false);
      }
    }
    loadCities();
  }, []);

  const handleProvinceClick = async (province: string) => {
    try {
      const response = await fetch(`/api/representatives/city?name=${encodeURIComponent(province)}`);
      if (response.ok) {
        const cityData = await response.json();
        setSelectedCity(cityData);
        setIsModalOpen(true);
      } else {
        alert(`${province} için henüz temsilci bulunmamaktadır. En yakın ofislerimiz için iletişime geçebilirsiniz.`);
      }
    } catch (error) {
      console.error('Şehir temsilcileri yükleme hatası:', error);
      alert('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCity(null), 300);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Türkiye Genelinde
            <span className="text-blue-600"> Temsilcilerimiz</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Türkiye&apos;nin farklı şehirlerinde ofislerimiz ve deneyimli temsilcilerimiz
            sizlere en iyi hizmeti sunmak için hazır. Harita üzerinde mavi renkle
            işaretli şehirlere tıklayarak temsilcilerimizi görebilirsiniz.
          </p>
          
          {/* Bilgi Kutucukları */}
          
        </div>

        {/* Harita */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <TurkeyMap
            onProvinceClick={handleProvinceClick}
            highlightedProvinces={citiesWithRepresentatives}
          />
          
          {/* Talimatlar */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Harita üzerinde bir şehre tıklayarak o şehirdeki
              temsilcilerimizi ve iletişim bilgilerini görebilirsiniz.
            </p>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {totalCities}
            </div>
            <div className="text-gray-600 font-medium">Şehirde Ofisimiz</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {totalRepresentatives}+
            </div>
            <div className="text-gray-600 font-medium">Deneyimli Temsilci</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">7/24</div>
            <div className="text-gray-600 font-medium">Destek Hattı</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Sizin şehrinizde ofisimiz yok mu? Endişelenmeyin!
          </p>
          <Button
            as={Link}
            href="/iletisim"
            size="lg"
            className="bg-blue-600 text-white font-bold hover:scale-105 transition-all duration-300 shadow-lg"
            radius="lg"
          >
            Bize Ulaşın
          </Button>
        </div>
      </div>

      {/* Modal */}
      <RepresentativesModal
        cityData={selectedCity}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default RepresentativesMapDB;

