"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery() {
 const t = useTranslations("gallery");
 const [activeIndex, setActiveIndex] = useState(0);

 const images = [
   "IMG-20241225-WA0001.jpg",
   "IMG-20241225-WA0002.jpg",
   "IMG-20241225-WA0004.jpg",
   "IMG-20241225-WA0006.jpg",
   "IMG-20241225-WA0007.jpg",
   "IMG-20241225-WA0008.jpg",
   "IMG-20241225-WA0009.jpg",
   "IMG-20241225-WA0010.jpg",
 ].map((filename) => ({
   src: `/images/${filename}`,
   alt: `Winery image ${filename.replace("IMG-20241225-WA", "").replace(".jpg", "")}`,
 }));

 return (
   <section id="gallery" className="py-24 bg-[#f3f3e4]">
     <div className="container mx-auto px-4">
       <div className="max-w-6xl mx-auto">
         <div className="text-center mb-16">
           <span className="text-[rgb(var(--color-sage))] text-sm font-medium tracking-wider uppercase">
             {t("subtitle")}
           </span>
           <h2 className="text-3xl md:text-4xl font-serif text-[rgb(var(--color-stone))] mt-2">
             {t("title")}
           </h2>
         </div>

         <div className="space-y-8">
           {/* Main Image */}
           <div className="relative aspect-[3/4] md:aspect-[4/3] max-h-[70vh] overflow-hidden rounded-2xl shadow-lg mx-auto max-w-2xl">
             <Image
               src={images[activeIndex].src}
               alt={images[activeIndex].alt}
               fill
               className="object-contain"
             />
             <div className="absolute inset-0 flex items-center justify-between p-4">
               <button
                 onClick={() => setActiveIndex(prev => prev === 0 ? images.length - 1 : prev - 1)}
                 className="p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
               >
                 <ChevronLeft className="w-6 h-6" />
               </button>
               <button
                 onClick={() => setActiveIndex(prev => prev === images.length - 1 ? 0 : prev + 1)}
                 className="p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
               >
                 <ChevronRight className="w-6 h-6" />
               </button>
             </div>
           </div>

           {/* Thumbnails in 2 rows of 4 */}
           <div className="grid grid-cols-4 gap-4">
             {images.map((image, index) => (
               <button
                 key={image.src}
                 onClick={() => setActiveIndex(index)}
                 className={`relative aspect-[3/4] rounded-lg overflow-hidden ${
                   index === activeIndex ? "ring-2 ring-[rgb(var(--color-sage))]" : ""
                 }`}
               >
                 <Image
                   src={image.src}
                   alt={image.alt}
                   fill
                   className="object-cover"
                 />
               </button>
             ))}
           </div>
         </div>
       </div>
     </div>
   </section>
 );
}