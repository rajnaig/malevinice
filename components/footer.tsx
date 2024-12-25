'use client'
import Image from 'next/image'
import { Mail, MapPin, Phone, Home, Users, Book, History, User, Grape, Trophy, Handshake, Images } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')
  const currentYear = new Date().getFullYear()

  const navigation = [
    { name: t('quickLinks.home'), href: '#hero', icon: <Home className="w-4 h-4" /> },
    { name: t('quickLinks.wines'), href: '#wine', icon: <Grape className="w-4 h-4" /> },
    { name: t('quickLinks.gallery'), href: '#gallery', icon: <Images  className="w-4 h-4" /> },
    { name: t('quickLinks.partner'), href: '#partner', icon: <Handshake className="w-4 h-4" /> },
    { name: t('quickLinks.awards'), href: '#awards', icon: <Trophy className="w-4 h-4" /> },
    { name: t('quickLinks.winemaker'), href: '#winemaker', icon: <User className="w-4 h-4" /> },
    { name: t('quickLinks.philosophy'), href: '#philosophy', icon: <Book className="w-4 h-4" /> },
    { name: t('quickLinks.heritage'), href: '#heritage', icon: <History className="w-4 h-4" /> },
    { name: t('quickLinks.visit'), href: '#visit', icon: <Users className="w-4 h-4" /> }
 ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    const offset = 80
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="relative bg-[#f3f3e4] pt-16 pb-8 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Logo and Brand Section */}
        <div className="flex flex-col items-center mb-12 text-center">
          <Image 
            src="/images/logo1.png"
            alt="Male Vinice Logo"
            width={60}
            height={60}
            className="mb-4"
          />
          <h2 className="text-3xl font-serif text-[rgb(var(--color-sage))] mb-4">
            Male Vinice
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="bg-[rgb(var(--color-sage))] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="inline-flex items-center space-x-2 mb-8">
              <h3 className="text-xl font-serif text-[#fffdf0]">{t('contact.title')}</h3>
              <div className="h-px flex-grow bg-[#fffdf0]/20" />
            </div>
            <div className="space-y-6">
              <a 
                href="tel:+421123456789" 
                className="flex items-center gap-3 text-[#fffdf0] hover:translate-x-2 transition-transform duration-300"
              >
                <Phone className="w-5 h-5" />
                <span className="hover:text-[#fffdf0]/80">+421 123 456 789</span>
              </a>
              <a 
                href="mailto:info@malevinice.com" 
                className="flex items-center gap-3 text-[#fffdf0] hover:translate-x-2 transition-transform duration-300"
              >
                <Mail className="w-5 h-5" />
                <span className="hover:text-[#fffdf0]/80">info@malevinice.com</span>
              </a>
              <div className="flex items-start gap-3 text-[#fffdf0]">
                <MapPin className="w-5 h-5 mt-1" />
                <p className="leading-relaxed">{t('contact.address')}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-[rgb(var(--color-sage))] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="inline-flex items-center space-x-2 mb-8">
              <h3 className="text-xl font-serif text-[#fffdf0]">{t('quickLinks.title')}</h3>
              <div className="h-px flex-grow bg-[#fffdf0]/20" />
            </div>
            
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.href} className="flex flex-col space-y-1">
                  <a 
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="group flex items-center text-[#fffdf0] hover:translate-x-2 transition-all duration-300"
                  >
                    <span className="h-px w-4 bg-[#fffdf0]/30 mr-3 group-hover:w-6 transition-all duration-300" />
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgb(var(--color-stone))]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-[rgb(var(--color-stone))]/60">
              {t('bottomBar.rights', { year: currentYear })}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-[rgb(var(--color-stone))]/60">
                {t('bottomBar.madeBy')}
              </span>
              <a 
                href="https://www.rajnaigabor.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[rgb(var(--color-sage))] text-[rgb(var(--color-cream))] rounded-full font-medium transition-all duration-300 hover:bg-[rgb(var(--color-sage))]/90 hover:scale-105"
              >
                Rajnai Gábor
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}