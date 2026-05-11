'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './theme-provider'
import { Menu, X, Sun, Moon, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#contacto', label: 'Contacto' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme, mounted } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navLinks.map(link => link.href.substring(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div 
        className={`hidden md:block transition-colors duration-300 ${
          theme === 'light' ? 'bg-[#1a1a1a]' : 'bg-[#c41e2a]'
        } text-white py-1.5`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center text-xs font-medium">
          <div className="flex items-center gap-6">
            <a href="tel:+543531234567" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +54 353 123-4567
            </a>
            <a href="mailto:contacto@mjap.com.ar" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              contacto@mjap.com.ar
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/80 transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-white/80 transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-white/80 transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-white/80 transition-colors"><Youtube className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>

      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-md bg-background/70 border-b border-border/50 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#inicio" className="flex items-center">
              <span className="text-3xl md:text-4xl font-black tracking-tight">
                <span className="text-foreground">M</span>
                <span className="text-[#c41e2a]">JAP</span>
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.label}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#c41e2a] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {mounted ? (
                  <AnimatePresence mode="wait">
                    {theme === 'light' ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun className="w-5 h-5 text-foreground" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon className="w-5 h-5 text-foreground" />
                      </motion.div>
                    )
                    }
                  </AnimatePresence>
                ) : (
                  <div className="w-5 h-5" />
                )}
              </button>

              {/* CTA Button */}
              <a href="#contacto" className="hidden md:inline-flex btn-6 text-sm">
                Cotizar
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-2">
                  {navLinks.map(link => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                        activeSection === link.href.substring(1)
                          ? 'bg-[#c41e2a] text-white'
                          : 'hover:bg-muted'
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#contacto"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block btn-6 text-center mt-4"
                  >
                    Cotizar
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  )
}
