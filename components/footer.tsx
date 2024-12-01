"use client"

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#f3f3e4] py-12 overflow-hidden">
      {/* Left vine decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 transform -translate-x-1/4">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[rgb(var(--color-sage))]">
          {/* Main vine */}
          <path
            d="M100,20 C140,40 60,80 100,120 S140,160 100,180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-draw-slow"
          />
          {/* Secondary vines */}
          <path
            d="M100,40 C120,50 80,60 100,70"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="animate-draw-medium"
          />
          <path
            d="M100,90 C80,100 120,110 100,120"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="animate-draw-medium"
          />
          {/* Ivy leaves */}
          <path
            d="M85,45 C75,40 70,50 80,55 S90,50 85,45"
            fill="currentColor"
            className="animate-fade-in-slow"
          />
          <path
            d="M115,75 C125,70 130,80 120,85 S110,80 115,75"
            fill="currentColor"
            className="animate-fade-in-slow delay-300"
          />
          <path
            d="M75,105 C65,100 60,110 70,115 S80,110 75,105"
            fill="currentColor"
            className="animate-fade-in-slow delay-600"
          />
          <path
            d="M125,135 C135,130 140,140 130,145 S120,140 125,135"
            fill="currentColor"
            className="animate-fade-in-slow delay-900"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Contact Information */}
          <div className="bg-[#8b9b72] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
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
          <div className="bg-[#8b9b72] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
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

          {/* Map */}
          <div className="bg-[#8b9b72] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center space-x-2 mb-6">
              <h3 className="text-xl font-serif text-[#fffdf0]">Location</h3>
              <div className="h-px flex-grow bg-[#fffdf0]/20" />
            </div>
            <div className="h-40 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.446763481574!2d21.948482776491766!3d48.40407467142455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473f36b8c1b03c45%3A0xf1b5dc5eafb6b1f0!2zTWFsw70gSG9yZcWhLCA3NjUgNTIsIFNsb3Zha2lh!5e0!3m2!1sen!2shu!4v1701437458695!5m2!1sen!2shu"
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
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

      {/* Right vine decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 transform translate-x-1/4 rotate-180">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[rgb(var(--color-sage))]">
          {/* Main vine */}
          <path
            d="M100,20 C140,40 60,80 100,120 S140,160 100,180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-draw-slow"
          />
          {/* Secondary vines */}
          <path
            d="M100,40 C120,50 80,60 100,70"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="animate-draw-medium"
          />
          <path
            d="M100,90 C80,100 120,110 100,120"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="animate-draw-medium"
          />
          {/* Ivy leaves */}
          <path
            d="M85,45 C75,40 70,50 80,55 S90,50 85,45"
            fill="currentColor"
            className="animate-fade-in-slow"
          />
          <path
            d="M115,75 C125,70 130,80 120,85 S110,80 115,75"
            fill="currentColor"
            className="animate-fade-in-slow delay-300"
          />
          <path
            d="M75,105 C65,100 60,110 70,115 S80,110 75,105"
            fill="currentColor"
            className="animate-fade-in-slow delay-600"
          />
          <path
            d="M125,135 C135,130 140,140 130,145 S120,140 125,135"
            fill="currentColor"
            className="animate-fade-in-slow delay-900"
          />
        </svg>
      </div>
    </footer>
  )
}

export default Footer