'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Globe } from 'lucide-react'

const navigation = [
  { name: 'Heritage', href: '/heritage' },
  { name: 'Wines', href: '/wines' },
  { name: 'Visit', href: '/visit' },
]

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
   
    return (
      <header className="border-b border-[#8b9b72]/20 bg-[#fffdf0]">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo1.png" 
                alt="Malevinice"
                width={48}
                height={48}
                priority
              />
              <div className="font-serif">
                <div className="text-[#292524] text-lg">Kisgéres</div>
                <div className="text-[#292524] text-lg">Malý Horeš</div>  
              </div>
            </Link>
   
            <div className="hidden md:flex items-center space-x-8">
              {[
                ['Heritage', '/heritage'],
                ['Wines', '/wines'], 
                ['Visit', '/visit']
              ].map(([name, href]) => (
                <Link
                  key={name}
                  href={href}
                  className="font-serif text-lg text-[#292524] hover:text-[#8b9b72] transition-colors"
                >
                  {name}
                </Link>
              ))}
              <button className="p-2 text-[#292524] hover:text-[#8b9b72] transition-colors">
                <Globe className="h-5 w-5" />
              </button>
            </div>
   
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
   
          {isOpen && (
            <div className="md:hidden py-4 space-y-4">
              {['Heritage', 'Wines', 'Visit'].map(name => (
                <Link
                  key={name}
                  href={`/${name.toLowerCase()}`}
                  className="block font-serif text-lg text-[#292524] hover:text-[#8b9b72] py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>
    )
   }
