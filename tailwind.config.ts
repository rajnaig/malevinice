import type { Config } from "tailwindcss";

export default {
 content: [
   "./pages/**/*.{js,ts,jsx,tsx,mdx}",
   "./components/**/*.{js,ts,jsx,tsx,mdx}",
   "./app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
   extend: {
     colors: {
       background: "var(--background)",
       foreground: "var(--foreground)",
     },
     animation: {
       'slow-zoom': 'slow-zoom 20s ease-in-out infinite',
       'fade-in': 'fade-in 1s ease-out forwards',
       'slide-up': 'slide-up 0.5s ease-out forwards',
       'slide-down': 'slide-down 0.5s ease-out forwards'
     },
     keyframes: {
       'slow-zoom': {
         '0%, 100%': { transform: 'scale(1.05)' },
         '50%': { transform: 'scale(1.1)' }
       },
       'fade-in': {
         '0%': { opacity: '0', transform: 'translateY(10px)' },
         '100%': { opacity: '1', transform: 'translateY(0)' }
       },
       'slide-up': {
         '0%': { transform: 'translateY(100%)', opacity: '0' },
         '100%': { transform: 'translateY(0)', opacity: '1' }
       },
       'slide-down': {
         '0%': { transform: 'translateY(-100%)', opacity: '0' },
         '100%': { transform: 'translateY(0)', opacity: '1' }
       }
     },
     fontFamily: {
       serif: ['var(--font-cormorant)', 'serif']
     }
   },
 },
 plugins: [],
} satisfies Config;