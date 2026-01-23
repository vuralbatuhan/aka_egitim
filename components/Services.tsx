'use client'

const services = [
  {
    title: 'Online Kurslar',
    description: 'Video tabanlı interaktif kurslar ile öğrenin',
    icon: '💻',
    iconBg: '#8B2F3D',
    cardBg: '#FCE8E9',
    borderColor: '#8B2F3D',
    titleColor: '#8B2F3D',
  },
  {
    title: 'Canlı Dersler',
    description: 'Uzman eğitmenlerle canlı derslere katılın',
    icon: '🎥',
    iconBg: '#E5E5E5',
    cardBg: '#FFFFFF',
    borderColor: '#E5E5E5',
    titleColor: '#1a1a1a',
  },
  {
    title: 'Özel Ders',
    description: 'Birebir özel dersler ile hızlı ilerleyin',
    icon: '👤',
    iconBg: '#E5E5E5',
    cardBg: '#FFFFFF',
    borderColor: '#E5E5E5',
    titleColor: '#1a1a1a',
  },
]

export default function Services() {
  return (
    <section
      id="services"
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
              Hizmetlerimiz
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

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="flex flex-col items-center justify-start"
              style={{
                backgroundColor: service.cardBg,
                border: `1px solid ${service.borderColor}`,
                borderRadius: '24px',
                padding: '40px 32px',
                width: '424px',
                height: '243px',
              }}
            >
              {/* Icon Circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: service.iconBg }}
              >
                <span className="text-4xl">{service.icon}</span>
              </div>

              {/* Title */}
              <h3 
                className="text-2xl font-bold mb-4 text-center"
                style={{ color: service.titleColor }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p 
                className="text-base leading-relaxed text-center"
                style={{ color: '#4A4A4A' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
