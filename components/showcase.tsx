'use client'
import React from 'react';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';

const WineShowcase = () => {
 const t = useTranslations('wine');
 const vintages = [2021, 2022, 2023, 2024];
 const currentVintage = 2023;
 const nextVintage = 2024;

 return (
   <section id="wine" className="relative py-24 overflow-hidden bg-[rgb(var(--color-cream))]">
     <div className="container mx-auto px-4">
       <div className="text-center mb-16">
         <span className="text-[rgb(var(--color-sage))] text-sm font-medium tracking-wider uppercase">
           {t('subtitle')}
         </span>
         <h2 className="text-3xl md:text-4xl font-serif text-[rgb(var(--color-stone))] mt-2">
           {t('title')}
         </h2>
       </div>

       <div className="max-w-6xl mx-auto">
         <div className="flex flex-col md:flex-row items-center justify-center gap-12">
           <div className="w-full md:w-1/3">
             <div 
               className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
               style={{ backgroundColor: '#f3f3e4' }}
             >
               <Image
                 src="/images/wine.jpg"
                 alt={t('imageAlt')}
                 fill
                 className="object-contain"
                 sizes="(max-width: 768px) 100vw, 288px"
                 priority
               />
             </div>
           </div>

           <div className="w-full md:w-5/12">
             <div className="bg-[#f3f3e4] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
               <div className="inline-flex items-center space-x-2 mb-6">
                 <span className="text-2xl font-serif text-[rgb(var(--color-sage))]">
                   {t('tagline')}
                 </span>
                 <div className="h-px flex-grow bg-[rgb(var(--color-sage))]/20" />
               </div>

               <div className="space-y-6">
                 <div>
                   <h4 className="text-xl font-serif text-[rgb(var(--color-stone))] mb-3">
                     {t('tastingNotesTitle')}
                   </h4>
                   <p className="text-[rgb(var(--color-stone))]/70 leading-relaxed">
                     {t('tastingNotes')}
                   </p>
                 </div>

                 <div>
                   <h4 className="text-xl font-serif text-[rgb(var(--color-stone))] mb-3">
                     {t('productionTitle')}
                   </h4>
                   <p className="text-[rgb(var(--color-stone))]/70 leading-relaxed">
                     {t('production')}
                   </p>
                 </div>

                 <div>
                   <h4 className="text-xl font-serif text-[rgb(var(--color-stone))] mb-3">
                     {t('vintagesTitle')}
                   </h4>
                   <div className="flex gap-4">
                     {vintages.map((year) => (
                       <button
                         key={year}
                         className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 ${
                           year === nextVintage
                             ? 'bg-amber-100 text-amber-700 border border-amber-300'
                             : year === currentVintage
                             ? 'bg-[rgb(var(--color-sage))] text-white'
                             : 'border border-[rgb(var(--color-sage))] hover:bg-[rgb(var(--color-sage))]/10'
                         }`}
                       >
                         {year}
                         {year === nextVintage && (
                           <Clock className="w-4 h-4" />
                         )}
                       </button>
                     ))}
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
 );
};

export default WineShowcase;