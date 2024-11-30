// app/page.tsx
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Contact />
    </>
  )
}