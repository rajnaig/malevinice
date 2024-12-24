'use client'
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Trophy, Award, Wine } from 'lucide-react'

export function Awards() {
  const t = useTranslations('awards')

  const awards = [
    {
      competitionYear: 2024,
      vintage: 2022,
      wine: "Rizling vlašský",
      type: "suché",
      score: "90.0",
      award: "Zlatá medaila",
      image: "/images/award-2024.jpg"
    },
    {
      competitionYear: 2023,
      vintage: 2021,
      wine: "Rizling vlašský",
      type: "suché",
      award: "Zlatá medaila",
      image: "/images/award-2023.jpg"
    },
    {
      competitionYear: 2019,
      vintage: 2018,
      wine: "Rizling",
      type: "polosuché",
      award: "Zlatá medaila",
      image: "/images/award-2019-1.jpg"
    },
    {
      competitionYear: 2019,
      vintage: 2017,
      wine: "Rizling",
      type: "polosuché",
      award: "Zlatá medaila",
      image: "/images/award-2019-2.jpg"
    }
  ]

  return (
    <section id="awards" className="py-24 bg-[#f3f3e4]">
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

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="group bg-[#fffdf0] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Certificate Image */}
                  <div className="relative w-full md:w-1/2 aspect-[3/4]">
                    <Image
                      src={award.image}
                      alt={`${award.wine} ${award.vintage} - ${award.award}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Award Details */}
                  <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                    <div className="space-y-6">
                      {/* Competition Year */}
                      <div className="inline-flex items-center">
                        <div className="p-3 rounded-full bg-[rgb(var(--color-sage))]/10">
                          <Trophy className="w-6 h-6 text-[rgb(var(--color-sage))]" />
                        </div>
                        <span className="ml-3 text-lg font-serif text-[rgb(var(--color-stone))]">
                          Tokajský Strapec {award.competitionYear}
                        </span>
                      </div>

                      {/* Wine Details */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Wine className="w-5 h-5 text-[rgb(var(--color-sage))]" />
                          <h4 className="text-xl font-serif text-[rgb(var(--color-stone))]">
                            {award.wine} {award.vintage}
                          </h4>
                        </div>
                        <p className="text-[rgb(var(--color-stone))]/70 ml-7">
                          {award.type}
                        </p>
                      </div>

                      {/* Award Details */}
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-full bg-[rgb(var(--color-sage))]/10">
                          <Award className="w-5 h-5 text-[rgb(var(--color-sage))]" />
                        </div>
                        <span className="font-serif text-[rgb(var(--color-stone))]">
                          {award.award}
                          {award.score && ` • ${award.score} ${t('points')}`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional: Link to competition website */}
          <div className="text-center mt-12">
            <a 
              href="https://www.tokajskystrapec.sk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[rgb(var(--color-sage))]/10 text-[rgb(var(--color-sage))] rounded-full hover:bg-[rgb(var(--color-sage))]/20 transition-colors"
            >
              {t('learnMore')} →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}