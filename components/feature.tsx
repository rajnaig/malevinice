// components/sections/feature.tsx
import { Grape, Mountain, History } from 'lucide-react'

export function Feature() {
 const features = [
   {
     icon: <History className="w-8 h-8 text-[rgb(var(--color-sage))]" />,
     title: "Heritage",
     description: "Four generations of family winemaking tradition since 1920, preserving our ancestors' knowledge and passion."
   },
   {
     icon: <Mountain className="w-8 h-8 text-[rgb(var(--color-sage))]" />,
     title: "Terroir",
     description: "Our vineyards benefit from the unique microclimate and soil of the Királyhelmec wine region."
   },
   {
     icon: <Grape className="w-8 h-8 text-[rgb(var(--color-sage))]" />,
     title: "Craft",
     description: "Specializing in Italian Riesling, producing limited quantities (600-700L) with meticulous attention to detail."
   }
 ]

 return (
   <section className="py-24 bg-[#f3f3e4]">
     <div className="container mx-auto px-4">
       <div className="max-w-6xl mx-auto">
         {/* Section Header */}
         <div className="text-center mb-16">
           <span className="text-[rgb(var(--color-sage))] text-sm font-medium tracking-wider uppercase">
             Our Philosophy
           </span>
           <h2 className="text-3xl md:text-4xl font-serif text-[rgb(var(--color-stone))] mt-2">
             The Essence of Malé Vinice
           </h2>
         </div>

         {/* Features Grid */}
         <div className="grid md:grid-cols-3 gap-12">
           {features.map((feature, index) => (
             <div 
               key={index}
               className="flex flex-col items-center text-center p-6 rounded-lg 
                          bg-[#fffdf0] hover:shadow-lg transition-all duration-300
                          hover:transform hover:-translate-y-1"
             >
               <div className="mb-6 p-3 rounded-full bg-[rgb(var(--color-sage))]/10">
                 {feature.icon}
               </div>
               <h3 className="text-xl font-serif text-[rgb(var(--color-stone))] mb-4">
                 {feature.title}
               </h3>
               <p className="text-[rgb(var(--color-stone))]/70 leading-relaxed">
                 {feature.description}
               </p>
             </div>
           ))}
         </div>
       </div>
     </div>
   </section>
 )
}