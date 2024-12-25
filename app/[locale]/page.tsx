import { Awards } from '@/components/awards'
import { Contact } from '@/components/contact'
import { Feature } from '@/components/feature'
import { Footer } from '@/components/footer'
import { Gallery } from '@/components/gallery'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Partner } from '@/components/partner'
import WineShowcase from '@/components/showcase'
import { Timeline } from '@/components/timeline'
import { Winemaker } from '@/components/winemaker'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <WineShowcase />
      <Gallery />
      <Partner /> 
      <Awards />
      <Winemaker />
      <Feature />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}