import React, { useState } from 'react';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';


const languages = [
 { code: 'en', name: 'English', flag: '🇬🇧' },
 { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
 { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' }
];

const LanguageSelector = () => {
 const [isOpen, setIsOpen] = useState(false);
 const locale = useLocale();
 const pathname = usePathname();
 const router = useRouter();

 const currentLang = languages.find(lang => lang.code === locale) || languages[1];

 const handleLanguageChange = (languageCode: string) => {
   const newPath = pathname.replace(`/${locale}`, `/${languageCode}`);
   router.push(newPath);
   setIsOpen(false);
 };

 return (
   <div className="relative">
     <button
       onClick={() => setIsOpen(!isOpen)}
       className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-[rgb(var(--color-sage))]/10 transition-colors"
     >
       <Globe className="w-4 h-4" />
       <span className="text-sm">{currentLang.flag}</span>
       <ChevronDown className="w-4 h-4" />
     </button>

     {isOpen && (
       <div className="absolute right-0 mt-2 w-48 bg-[#93a37b] rounded-lg shadow-lg py-2 z-50">
         {languages.map((lang) => (
           <button
             key={lang.code}
             onClick={() => handleLanguageChange(lang.code)}
             className="w-full px-4 py-2 text-left flex items-center justify-between hover:bg-[rgb(var(--color-sage))]/10"
           >
             <span className="flex items-center space-x-2">
               <span>{lang.flag}</span>
               <span className="text-sm">{lang.name}</span>
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