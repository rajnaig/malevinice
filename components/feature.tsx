'use client'
import { Grape, Mountain, History } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Feature() {
  const t = useTranslations('feature')

  const features = [
    {
      icon: <History className="w-8 h-8 text-[rgb(var(--color-sage))]" />,
      titleKey: 'heritage.title',
      descriptionKey: 'heritage.description'
    },
    {
      icon: <Mountain className="w-8 h-8 text-[rgb(var(--color-sage))]" />,
      titleKey: 'terroir.title',
      descriptionKey: 'terroir.description'
    },
    {
      icon: <Grape className="w-8 h-8 text-[rgb(var(--color-sage))]" />,
      titleKey: 'craft.title',
      descriptionKey: 'craft.description'
    }
  ]

  return (
    <section className="py-24 bg-[#f3f3e4]" id="philosophy">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[rgb(var(--color-sage))] text-sm font-medium tracking-wider uppercase">
              {t('subtitle')}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[rgb(var(--color-stone))] mt-2">
              {t('title')}
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg 
                          bg-[#fffdf0] hover:shadow-lg transition-all duration-300
                          hover:transform hover:-translate-y-1"
              >
                <div className="mb-6 p-3 rounded-full bg-[rgb(var(--color-sage))]/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif text-[rgb(var(--color-stone))] mb-4">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-[rgb(var(--color-stone))]/70 leading-relaxed">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}