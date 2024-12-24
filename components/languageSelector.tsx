'use client'

import React, { useState } from 'react';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

const languages = [
  { 
    code: 'en', 
    name: 'English', 
    flag: '🇬🇧',
    nativeName: 'English'
  },
  { 
    code: 'hu', 
    name: 'Magyar', 
    flag: '🇭🇺',
    nativeName: 'Magyar'
  },
  { 
    code: 'sk', 
    name: 'Slovenčina', 
    flag: '🇸🇰',
    nativeName: 'Slovenčina'
  },
  { 
    code: 'es', 
    name: 'Spanish', 
    flag: '🇪🇸',
    nativeName: 'Español'
  },
  { 
    code: 'nl', 
    name: 'Dutch', 
    flag: '🇳🇱',
    nativeName: 'Nederlands'
  },
  { 
    code: 'it', 
    name: 'Italiano', 
    flag: '🇮🇹',
    nativeName: 'Italiano'
  },
  { 
    code: 'cs', 
    name: 'Čeština', 
    flag: '🇨🇿',
    nativeName: 'Čeština'
  },
  { 
    code: 'de', 
    name: 'Deutsch', 
    flag: '🇩🇪',
    nativeName: 'Deutsch'
  }
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = languages.find(lang => lang.code === locale) || languages[1];

  const handleLanguageChange = (languageCode: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${languageCode}`);
    router.push(newPath, { scroll: false });  // Megakadályozzuk az automatikus scrollozást
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-[rgb(var(--color-sage))]/10 transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLang.flag}</span>
        <span className="text-sm hidden md:inline">{currentLang.nativeName}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-[#93a37b] rounded-lg shadow-lg py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="w-full px-4 py-2 text-left flex items-center justify-between hover:bg-[rgb(var(--color-sage))]/10 text-[#fffdf0]"
            >
              <span className="flex items-center space-x-3">
                <span className="text-xl">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.nativeName}</span>
              </span>
              {currentLang.code === lang.code && (
                <Check className="w-4 h-4 text-[rgb(var(--color-sage))]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;