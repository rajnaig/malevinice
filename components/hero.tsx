import Image from "next/image"

interface Props {
 title: string;
 description: string;
}

export function Hero() {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with subtle zoom animation */}
        <div className="absolute inset-0 scale-105 animate-slow-zoom">
          <Image
            src="/images/pince.jpg"
            alt="Szőlőskert"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
   
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-12 animate-fade-in">
            {/* Main content with staggered animation */}
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-[rgb(var(--color-sage))] font-serif tracking-widest uppercase text-sm">
                  Est. 1920
                </p>
                <h1 className="font-serif text-[rgb(var(--color-cream))] text-6xl md:text-7xl lg:text-8xl">
                  Malé Vinice
                </h1>
                <p className="font-serif text-[rgb(var(--color-cream))]/80 tracking-[0.2em]">
                  Kisgéres • Malý Horeš
                </p>
              </div>
   
              <p className="font-serif text-[rgb(var(--color-cream))]/90 text-xl leading-relaxed max-w-2xl mx-auto">
                Négy generáció borkészítési hagyománya a királyhelmeci borvidéken.
                Az Olaszrizling szerelmesei vagyunk.
              </p>
            </div>
   
            {/* Buttons with modern hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-3 bg-[rgb(var(--color-sage))] overflow-hidden">
                <span className="relative z-10 font-serif text-[rgb(var(--color-cream))]">
                  Boraink
                </span>
                <div className="absolute inset-0 bg-[rgb(var(--color-cream))] translate-y-full group-hover:translate-y-0 transition-transform" />
              </button>
              <button className="group relative px-8 py-3 border border-[rgb(var(--color-cream))]">
                <span className="relative z-10 font-serif text-[rgb(var(--color-cream))] group-hover:text-[rgb(var(--color-stone))] transition-colors">
                  Látogasson meg
                </span>
                <div className="absolute inset-0 bg-[rgb(var(--color-cream))] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            </div>
          </div>
        </div>
      </section>
    )
   }