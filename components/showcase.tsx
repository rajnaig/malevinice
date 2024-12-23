"use client";
import React from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
import { useTranslations } from "next-intl";

const WineShowcase = () => {
  const t = useTranslations("wine");
  const vintages = [2021, 2022, 2023, 2024];
  const currentVintage = 2023;
  const nextVintage = 2024;

  return (
    <section
      id="wine"
      className="relative py-24 overflow-hidden bg-[rgb(var(--color-cream))]"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[rgb(var(--color-sage))] text-sm font-medium tracking-wider uppercase">
              {t("subtitle")}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[rgb(var(--color-stone))] mt-2">
              {t("title")}
            </h2>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Wine Image */}
            <div className="w-full md:w-1/3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-xl">
                <Image
                  src="/images/wine.jpg"
                  alt={t("imageAlt")}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[rgb(var(--color-sage))]/0 transition-colors duration-300 group-hover:bg-[rgb(var(--color-sage))]/5" />
              </div>
            </div>

            {/* Wine Details */}
            <div className="w-full md:w-5/12">
              <div className="bg-[#f3f3e4] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className="inline-flex items-center space-x-2 mb-6">
                  <span className="text-2xl font-serif text-[rgb(var(--color-sage))]">
                    {t("tagline")}
                  </span>
                  <div className="h-px flex-grow bg-[rgb(var(--color-sage))]/20" />
                </div>

                {/* Content Sections */}
                <div className="space-y-8">
                  {/* Tasting Notes */}
                  <div className="group">
                    <h4 className="text-xl font-serif text-[rgb(var(--color-stone))] mb-3 transition-colors group-hover:text-[rgb(var(--color-sage))]">
                      {t("tastingNotesTitle")}
                    </h4>
                    <p className="text-[rgb(var(--color-stone))]/70 leading-relaxed">
                      {t("tastingNotes")}
                    </p>
                  </div>

                  {/* Production */}
                  <div className="group">
                    <h4 className="text-xl font-serif text-[rgb(var(--color-stone))] mb-3 transition-colors group-hover:text-[rgb(var(--color-sage))]">
                      {t("productionTitle")}
                    </h4>
                    <p className="text-[rgb(var(--color-stone))]/70 leading-relaxed">
                      {t("production")}
                    </p>
                  </div>

                  {/* Vintages */}
                  <div>
                    <h4 className="text-xl font-serif text-[rgb(var(--color-stone))] mb-4 transition-colors group-hover:text-[rgb(var(--color-sage))]">
                      {t("vintagesTitle")}
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      {vintages.map((year) => (
                        <button
                          key={year}
                          className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 hover:scale-105 ${
                            year === nextVintage
                              ? "bg-amber-100 text-amber-700 border border-amber-300 hover:bg-amber-200"
                              : year === currentVintage
                              ? "bg-[rgb(var(--color-sage))] text-white hover:bg-[rgb(var(--color-sage))]/90"
                              : "border border-[rgb(var(--color-sage))] hover:bg-[rgb(var(--color-sage))]/10"
                          }`}
                        >
                          {year}
                          {year === nextVintage && (
                            <Clock className="w-4 h-4" />
                          )}
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
    </section>
  );
};

export default WineShowcase;
