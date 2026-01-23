'use client'

const features = [
  {
    icon: '📚',
    title: 'Kapsamlı İçerik',
    description: 'Binlerce ders ve kaynak ile kendinizi geliştirin',
    iconBg: '#60091b',
    cardBg: '#F5E6E8',
    borderColor: '#60091b',
  },
  {
    icon: '🎯',
    title: 'Hedef Odaklı',
    description: 'Kişiselleştirilmiş öğrenme yolları ile hedeflerinize ulaşın',
    iconBg: '#E5E5E5',
    cardBg: '#FFFFFF',
    borderColor: '#E5E5E5',
  },
  {
    icon: '👨‍🏫',
    title: 'Uzman Eğitmenler',
    description: 'Alanında uzman eğitmenlerden öğrenin',
    iconBg: '#E5E5E5',
    cardBg: '#FFFFFF',
    borderColor: '#E5E5E5',
  },
]

export default function Features() {
  return (
    <section
      id="features"
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
              Neden Bizi Seçmelisiniz?
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

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="rounded-3xl p-8 flex flex-col items-center text-center"
              style={{
                backgroundColor: feature.cardBg,
                border: `1px solid ${feature.borderColor}`,
              }}
            >
              {/* Icon Circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: feature.iconBg }}
              >
                <span className="text-4xl">{feature.icon}</span>
              </div>

              {/* Title */}
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ color: '#1a1a1a' }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p 
                className="text-base leading-relaxed"
                style={{ color: '#1a1a1a' }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
