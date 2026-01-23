'use client'

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-[#F5F5F5]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-12">
          {/* Title with vertical line */}
          <div className="flex items-center gap-4">
            <div 
              className="w-1 h-16"
              style={{ backgroundColor: '#60091b' }}
            ></div>
            <h2 
              className="text-5xl font-bold"
              style={{ color: '#1a1a1a' }}
            >
              Hakkımızda
            </h2>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-end">
            <div 
              className="text-2xl font-bold"
              style={{ color: '#1a1a1a' }}
            >
              AKÆĞİTİM
            </div>
            <div 
              className="text-sm mt-1"
              style={{ color: '#666666' }}
            >
              Azim Kararlılık Ayrıcalık
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-4" style={{ color: '#1a1a1a' }}>
              AkaEğitim olarak, eğitimi herkes için erişilebilir kılmak ve 
              öğrenme deneyimini dönüştürmek için yola çıktık. Modern teknoloji 
              ve pedagojik yaklaşımları bir araya getirerek, öğrencilerimize 
              en iyi eğitim deneyimini sunuyoruz.
            </p>
            <p className="text-lg mb-6" style={{ color: '#1a1a1a' }}>
              Binlerce öğrencimizin başarı hikayesi, misyonumuzun doğruluğunu 
              kanıtlıyor. Her geçen gün daha fazla insanın hayatına dokunmak 
              ve eğitimde fırsat eşitliği sağlamak için çalışıyoruz.
            </p>
            <button
              className="px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity text-white"
              style={{ 
                backgroundColor: '#60091b',
              }}
            >
              Daha Fazla Bilgi
            </button>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Eğitim"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
