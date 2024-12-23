'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import LanguageSelector from './languageSelector'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('nav')

  const navigation = [
    { name: t('home'), href: '#hero' },
    { name: t('wines'), href: '#wine' },
    { name: t('visit'), href: '#visit' },
    { name: t('philosophy'), href: '#philosophy' },
    { name: t('heritage'), href: '#heritage' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 100 // Offset for header

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute('id')

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(`#${sectionId}`)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    const offset = 80 // Height of the fixed header
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsOpen(false)
    }
  }

  return (
    <header className="fixed w-full bg-[rgb(var(--color-cream))]/90 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#hero"
            className="flex items-center space-x-3"
            onClick={(e) => handleScroll(e, '#hero')}
          >
            <Image 
              src="/images/logo1.png"
              alt="Male Vinice Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-serif font-semibold text-[rgb(var(--color-sage))]">
              Male Vinice
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`relative text-sm font-medium transition-colors hover:text-[rgb(var(--color-sage))]
                  ${activeSection === item.href ? 'text-[rgb(var(--color-sage))]' : 'text-[rgb(var(--color-stone))]'}`}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[rgb(var(--color-sage))]"
                    layoutId="underline"
                  />
                )}
              </a>
            ))}
            <LanguageSelector />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button
              className="text-[rgb(var(--color-stone))] hover:text-[rgb(var(--color-sage))] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-2"
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`block py-2 text-sm font-medium hover:text-[rgb(var(--color-sage))] transition-colors
                  ${activeSection === item.href ? 'text-[rgb(var(--color-sage))]' : 'text-[rgb(var(--color-stone))]'}`}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}