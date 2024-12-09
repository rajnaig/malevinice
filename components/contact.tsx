'use client'
import { Phone as PhoneIcon, MapPin as MapPinIcon, Globe as GlobeIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Contact() {
    const t = useTranslations('contact')

    return (
        <section className="py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="max-w-xl mx-auto text-center space-y-4">
                        <span className="text-[rgb(var(--color-sage))] text-sm font-medium tracking-wider uppercase">
                            {t('subtitle')}
                        </span>
                        <h2 className="text-4xl font-serif text-[rgb(var(--color-stone))]">
                            {t('title')}
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-12">
                            <div className="bg-[#f3f3e3] rounded-2xl p-8 shadow-sm">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-serif text-[rgb(var(--color-stone))]">
                                            Tibor Filep
                                        </h3>
                                        <p className="text-[rgb(var(--color-stone))]/60 mt-1">
                                            {t('role')}
                                        </p>
                                    </div>

                                    <div className="grid gap-6">
                                        <a
                                            href="tel:+421911497524"
                                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-[rgb(var(--color-cream))] transition-colors"
                                        >
                                            <div className="text-[rgb(var(--color-sage))]">
                                                <PhoneIcon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-[rgb(var(--color-stone))]/60">
                                                    {t('phoneLabel')}
                                                </p>
                                                <p className="text-[rgb(var(--color-stone))]">
                                                    +421 911 497 524
                                                </p>
                                            </div>
                                        </a>

                                        <div className="hover:bg-[rgb(var(--color-cream))] transition-colors flex items-start gap-4 p-4 rounded-xl">
                                            <div className="text-[rgb(var(--color-sage))]">
                                                <MapPinIcon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-[rgb(var(--color-stone))]/60">
                                                    {t('addressLabel')}
                                                </p>
                                                <p className="text-[rgb(var(--color-stone))]">
                                                    Hlavná 343
                                                </p>
                                                <p className="text-[rgb(var(--color-stone))]">
                                                    076 52 Malý Horeš
                                                </p>
                                                <p className="text-[rgb(var(--color-stone))]/60">
                                                    {t('wineryName')}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[rgb(var(--color-cream))] transition-colors">
                                            <div className="text-[rgb(var(--color-sage))]">
                                                <GlobeIcon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-[rgb(var(--color-stone))]/60">
                                                    {t('languagesLabel')}
                                                </p>
                                                <p className="text-[rgb(var(--color-stone))]">
                                                    Magyar • Slovenský
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[rgb(var(--color-sage))]/10 rounded-2xl p-8">
                                <h4 className="text-lg font-serif text-[rgb(var(--color-sage))] mb-3">
                                    {t('visitTitle')}
                                </h4>
                                <p className="text-[rgb(var(--color-stone))]/70 leading-relaxed">
                                    {t('visitInfo')}
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden shadow-sm bg-white h-[600px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!4v1701347123456!6m8!1m7!1steRqJWUdZ0SyGrT_7y8kQg!2m2!1d48.4040917!2d21.9505346!3f8.62!4f0!5f0.75"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}