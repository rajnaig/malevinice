"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Partner() {
  const t = useTranslations("partner");

  return (
    <section id='partner' className="py-24 bg-[#fffdf0]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[rgb(var(--color-sage))] text-sm font-medium tracking-wider uppercase">
              {t("subtitle")}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[rgb(var(--color-stone))] mt-2">
              {t("title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/lankwitzer-logo.png"
                  alt="Lankwitzer Premium Coatings"
                  width={160}
                  height={64}
                  className="object-contain"
                />
                <div className="h-px flex-grow bg-[rgb(var(--color-sage))]/20" />
              </div>

              <div className="prose prose-lg">
                <p className="text-[rgb(var(--color-stone))]/70">
                  {t("description")}
                </p>
              </div>
              <a
                href="http://lankwitzer.sk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[rgb(var(--color-sage))] text-white rounded-full hover:bg-[rgb(var(--color-sage))]/90 transition-colors"
              >
                {t("visitWebsite")}
              </a>
            </div>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/IMG-20241225-WA0003.jpg"
                alt="Wine production with Lankwitzer"
                fill
                className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
