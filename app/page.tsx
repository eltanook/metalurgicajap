'use client'

import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Counters } from '@/components/counters'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Trabajos } from '@/components/trabajos'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function HomePage() {
  return (
    <ThemeProvider>
      <main className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <Counters />
        <About />
        <Services />
        <Trabajos />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </ThemeProvider>
  )
}
