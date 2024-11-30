import './globals.css'
import { Header } from '@/components/header'
import localFont from "next/font/local"
import { Cormorant_Garamond } from 'next/font/google'

const geistSans = localFont({
 src: "./fonts/GeistVF.woff",
 variable: "--font-geist-sans",
 weight: "100 900",
})

const cormorant = Cormorant_Garamond({
 subsets: ['latin'],
 weight: ['400', '500', '600', '700'],
 variable: '--font-cormorant',
 display: 'swap',
})

export const metadata = {
 title: 'Malé Vinice | Családi Szőlőskert',
 description: 'Négy generáció óta készülnek boraink a királyhelmeci borvidéken',
}

export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return (
   <html lang="hu">
     <body className={`${geistSans.variable} ${cormorant.variable} min-h-screen flex flex-col bg-[#fffdf0]`}>
       <Header />
       <main className="flex-grow">{children}</main>
     </body>
   </html>
 )
}