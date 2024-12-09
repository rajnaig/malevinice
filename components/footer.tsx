"use client"

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#f3f3e4] py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div className="bg-[#93a37b] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center space-x-2 mb-6">
              <h3 className="text-xl font-serif text-[#fffdf0]">Contact</h3>
              <div className="h-px flex-grow bg-[#fffdf0]/20" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#fffdf0]">
                <Phone className="w-4 h-4" />
                <a href="tel:+421123456789" className="hover:text-[#fffdf0]/80">
                  +421 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#fffdf0]">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@malevinice.com" className="hover:text-[#fffdf0]/80">
                  info@malevinice.com
                </a>
              </div>
              <div className="flex items-start gap-2 text-[#fffdf0]">
                <MapPin className="w-4 h-4 mt-1" />
                <p>Malý Horeš 123<br />076 52 Slovakia</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-[#93a37b] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center space-x-2 mb-6">
              <h3 className="text-xl font-serif text-[#fffdf0]">Quick Links</h3>
              <div className="h-px flex-grow bg-[#fffdf0]/20" />
            </div>
            <nav className="space-y-3 text-[#fffdf0]">
              <Link href="/" className="block hover:text-[#fffdf0]/80">
                Home
              </Link>
              <Link href="/heritage" className="block hover:text-[#fffdf0]/80">
                Heritage
              </Link>
              <Link href="/wines" className="block hover:text-[#fffdf0]/80">
                Our Wines
              </Link>
              <Link href="/visit" className="block hover:text-[#fffdf0]/80">
                Visit Us
              </Link>
            </nav>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgb(var(--color-stone))]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-[rgb(var(--color-stone))]/60">
              © {currentYear} Male Vinice. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-[rgb(var(--color-stone))]/60">
                Made by
              </span>
              <a 
                href="https://www.rajnaigabor.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[rgb(var(--color-sage))] text-[rgb(var(--color-cream))] rounded-full font-medium transition-all hover:bg-[rgb(var(--color-sage-light))] hover:shadow-md"
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

export default Footer