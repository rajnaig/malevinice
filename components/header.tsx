'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Wine', href: '/wine' },
  { name: 'Heritage', href: '/heritage' },
  { name: 'Visit', href: '/visit' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed w-full bg-[rgb(var(--color-cream))]/90 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-semibold text-[rgb(var(--color-sage))]">
            Male Vinice
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-[rgb(var(--color-sage))]
                  ${pathname === item.href ? 'text-[rgb(var(--color-sage))]' : 'text-[rgb(var(--color-stone))]'}`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[rgb(var(--color-sage))]"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-[rgb(var(--color-stone))] hover:text-[rgb(var(--color-sage))] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
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
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 text-sm font-medium hover:text-[rgb(var(--color-sage))] transition-colors
                  ${pathname === item.href ? 'text-[rgb(var(--color-sage))]' : 'text-[rgb(var(--color-stone))]'}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}