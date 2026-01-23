'use client'

const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Yazılım Geliştirici',
    content: 'AkaEğitim sayesinde kariyerimde büyük bir ilerleme kaydettim. Harika bir platform!',
    icon: '💬',
    iconBg: '#8B2F3D',
    cardBg: '#FCE8E9',
    borderColor: '#8B2F3D',
    titleColor: '#8B2F3D',
  },
  {
    name: 'Ayşe Demir',
    role: 'Tasarımcı',
    content: 'Eğitim kalitesi gerçekten çok yüksek. Herkese tavsiye ederim.',
    icon: '⭐',
    iconBg: '#E5E5E5',
    cardBg: '#FFFFFF',
    borderColor: '#E5E5E5',
    titleColor: '#1a1a1a',
  },
  {
    name: 'Mehmet Kaya',
    role: 'İşletmeci',
    content: 'Online eğitim deneyimim hiç bu kadar iyi olmamıştı. Teşekkürler!',
    icon: '👍',
    iconBg: '#E5E5E5',
    cardBg: '#FFFFFF',
    borderColor: '#E5E5E5',
    titleColor: '#1a1a1a',
  },
]

export default function Testimonials() {
  return (
    <section
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
              Öğrencilerimiz Ne Diyor?
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

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="flex flex-col items-center justify-start"
              style={{
                backgroundColor: testimonial.cardBg,
                border: `1px solid ${testimonial.borderColor}`,
                borderRadius: '24px',
                padding: '40px 32px',
                width: '424px',
                height: '243px',
              }}
            >
              {/* Icon Circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: testimonial.iconBg }}
              >
                <span className="text-4xl">{testimonial.icon}</span>
              </div>

              {/* Content */}
              <p 
                className="text-base leading-relaxed mb-4 italic text-center"
                style={{ color: '#4A4A4A' }}
              >
                "{testimonial.content}"
              </p>

              {/* Name */}
              <h3 
                className="text-xl font-bold mb-2 text-center"
                style={{ color: testimonial.titleColor }}
              >
                {testimonial.name}
              </h3>

              {/* Role */}
              <p 
                className="text-sm text-center"
                style={{ color: '#666666' }}
              >
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
