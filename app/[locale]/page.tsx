import { Contact } from '@/components/contact'
import { Feature } from '@/components/feature'
import Footer from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import WineShowcase from '@/components/showcase'
import { Timeline } from '@/components/timeline'
import { WinemakerProfile } from '@/components/WinemakerProfile'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <WinemakerProfile />
      <WineShowcase />
      <Contact />
      <Feature />
      <Timeline />
      <Footer />
    </main>
  )
}