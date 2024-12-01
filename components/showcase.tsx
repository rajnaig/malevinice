import React from 'react';
import Image from 'next/image';

const WineShowcase = () => {
  const vintages = [2021, 2022, 2023];
  const currentVintage = 2023;

  return (
    <section className="relative py-24 overflow-hidden bg-[rgb(var(--color-cream))]">
      {/* Decorative vine elements */}
      <div className="absolute top-0 left-0 w-64 h-64 transform -translate-x-1/4">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[rgb(var(--color-sage))]">
          {/* Main vine */}
          <path
            d="M100,20 C140,40 60,80 100,120 S140,160 100,180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-draw-slow"
          />
          {/* Secondary vines */}
          <path
            d="M100,40 C120,50 80,60 100,70"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="animate-draw-medium"
          />
          <path
            d="M100,90 C80,100 120,110 100,120"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="animate-draw-medium"
          />
          {/* Ivy leaves */}
          <path
            d="M85,45 C75,40 70,50 80,55 S90,50 85,45"
            fill="currentColor"
            className="animate-fade-in-slow"
          />
          <path
            d="M115,75 C125,70 130,80 120,85 S110,80 115,75"
            fill="currentColor"
            className="animate-fade-in-slow delay-300"
          />
          <path
            d="M75,105 C65,100 60,110 70,115 S80,110 75,105"
            fill="currentColor"
            className="animate-fade-in-slow delay-600"
          />
          <path
            d="M125,135 C135,130 140,140 130,145 S120,140 125,135"
            fill="currentColor"
            className="animate-fade-in-slow delay-900"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(var(--color-sage))] text-sm font-medium tracking-wider uppercase">
            Our Wine
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[rgb(var(--color-stone))] mt-2">
            Italian Riesling
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Wine Image Card */}
            <div className="w-full md:w-1/3">
              <div 
                className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                style={{ backgroundColor: '#f3f3e4' }}
              >
                <Image
                  src="/images/wine.jpg"
                  alt="Male Vinice Italian Riesling"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 288px"
                  priority
                />
              </div>
            </div>

            {/* Wine Details Card */}
            <div className="w-full md:w-5/12">
              <div className="bg-[#f3f3e4] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center space-x-2 mb-6">
                  <span className="text-2xl font-serif text-[rgb(var(--color-sage))]">
                    Crafted with Passion
                  </span>
                  <div className="h-px flex-grow bg-[rgb(var(--color-sage))]/20" />
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-serif text-[rgb(var(--color-stone))] mb-3">
                      Tasting Notes
                    </h4>
                    <p className="text-[rgb(var(--color-stone))]/70 leading-relaxed">
                      Elegant aromas of white flowers and citrus, with hints of honey 
                      and stone fruits. Fresh and balanced with a long mineral finish.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-serif text-[rgb(var(--color-stone))] mb-3">
                      Production
                    </h4>
                    <p className="text-[rgb(var(--color-stone))]/70 leading-relaxed">
                      Hand-harvested and carefully vinified in small batches (600-700L) 
                      to preserve the authentic character of our terroir.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-serif text-[rgb(var(--color-stone))] mb-3">
                      Available Vintages
                    </h4>
                    <div className="flex gap-4">
                      {vintages.map((year) => (
                        <button
                          key={year}
                          className={`px-4 py-2 rounded-full transition-all ${
                            year === currentVintage
                              ? 'bg-[rgb(var(--color-sage))] text-white'
                              : 'border border-[rgb(var(--color-sage))] hover:bg-[rgb(var(--color-sage))]/10'
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative vine elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 transform translate-x-1/4 rotate-180">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[rgb(var(--color-sage))]">
          {/* Main vine */}
          <path
            d="M100,20 C140,40 60,80 100,120 S140,160 100,180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-draw-slow"
          />
          {/* Secondary vines */}
          <path
            d="M100,40 C120,50 80,60 100,70"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="animate-draw-medium"
          />
          <path
            d="M100,90 C80,100 120,110 100,120"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="animate-draw-medium"
          />
          {/* Ivy leaves */}
          <path
            d="M85,45 C75,40 70,50 80,55 S90,50 85,45"
            fill="currentColor"
            className="animate-fade-in-slow"
          />
          <path
            d="M115,75 C125,70 130,80 120,85 S110,80 115,75"
            fill="currentColor"
            className="animate-fade-in-slow delay-300"
          />
          <path
            d="M75,105 C65,100 60,110 70,115 S80,110 75,105"
            fill="currentColor"
            className="animate-fade-in-slow delay-600"
          />
          <path
            d="M125,135 C135,130 140,140 130,145 S120,140 125,135"
            fill="currentColor"
            className="animate-fade-in-slow delay-900"
          />
        </svg>
      </div>
    </section>
  );
};

export default WineShowcase;