'use client'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <Image
        src="/images/pince.jpg"
        alt="Male Vinice cellar"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Logo and Est. date */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-[rgb(var(--color-cream))]/80 tracking-[0.2em] text-sm uppercase">
            Est. 1920
          </p>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-serif text-[rgb(var(--color-cream))] font-bold leading-tight">
          Crafting Excellence in Every Bottle
        </h1>

        {/* Location */}
        <div className="flex items-center justify-center space-x-4 text-[rgb(var(--color-cream))]/90">
          <span className="h-[1px] w-12 bg-[rgb(var(--color-cream))]/30" />
          <span className="font-serif text-lg">Kisgéres · Malý Horeš</span>
          <span className="h-[1px] w-12 bg-[rgb(var(--color-cream))]/30" />
        </div>

        {/* Description */}
        <p className="text-xl text-[rgb(var(--color-cream))]/80 max-w-2xl mx-auto leading-relaxed">
          Experience our legacy of winemaking, where tradition meets innovation 
          in every bottle of our exquisite Italian Riesling.
        </p>

        {/* CTA */}
        <div className="pt-4">
          <Link
            href="/wine"
            className="inline-flex items-center px-8 py-4 bg-[rgb(var(--color-cream))] text-[rgb(var(--color-sage))] rounded-full text-lg font-medium hover:bg-white transition-all duration-300 hover:scale-105"
          >
            Discover Our Wines
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  </section>
)
}