"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Winemaker() {
  const t = useTranslations("winemaker");

  return (
    <section id="winemaker" className="py-24 bg-[rgb(var(--color-cream))]">
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="col-span-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-xl">
                  <Image
                    src="/images/tibor-family.png"
                    alt="Tibor Filep with family"
                    fill
                    className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[rgb(var(--color-sage))]/0 transition-colors duration-300 group-hover:bg-[rgb(var(--color-sage))]/10" />
                </div>
              </div>
              
              {/* Smaller Images */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-xl">
                <Image
                  src="/images/kittens.jpg"
                  alt="Tibor Filep with kittens"
                  fill
                  className="object-cover object-[center_10%] transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[rgb(var(--color-sage))]/0 transition-colors duration-300 group-hover:bg-[rgb(var(--color-sage))]/10" />
              </div>
              
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-xl">
                <Image
                  src="/images/bunny.jpg"
                  alt="Tibor Filep with rabbit"
                  fill
                  className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[rgb(var(--color-sage))]/0 transition-colors duration-300 group-hover:bg-[rgb(var(--color-sage))]/10" />
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 mb-6">
                <span className="text-2xl font-serif text-[rgb(var(--color-sage))]">
                  Tibor Filep
                </span>
                <div className="h-px flex-grow bg-[rgb(var(--color-sage))]/20" />
              </div>

              <div className="prose prose-lg">
                <p className="text-[rgb(var(--color-stone))]/70 leading-relaxed">
                  {t("description1")}
                </p>
                <p className="text-[rgb(var(--color-stone))]/70 leading-relaxed mt-4">
                  {t("description2")}
                </p>
                <p className="text-[rgb(var(--color-stone))]/70 leading-relaxed mt-4">
                  {t("description3")}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="text-xl font-serif text-[rgb(var(--color-stone))] mb-2">
                    {t("experienceTitle")}
                  </h4>
                  <p className="text-[rgb(var(--color-stone))]/70">
                    {t("experience")}
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-serif text-[rgb(var(--color-stone))] mb-2">
                    {t("specialtyTitle")}
                  </h4>
                  <p className="text-[rgb(var(--color-stone))]/70">
                    {t("specialty")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}