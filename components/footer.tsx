'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#contacto', label: 'Contacto' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export function Footer() {
  return (
    <footer className="relative">
      {/* Google Maps */}
      <div className="w-full h-48 sm:h-56 md:h-64 lg:h-80">
        <iframe
          src="https://maps.google.com/maps?q=-32.4319394,-63.1713123&z=16&hl=es&output=embed"
          width="100%"
          height="100%"
          className="grayscale hover:grayscale-0 transition-all duration-700"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación MJAP - Villa María, Córdoba"
        />
      </div>

      {/* Footer Content */}
      <div
        className="relative"
        style={{
          background: '#0a0a0a',
          backgroundImage: 'linear-gradient(rgba(196, 30, 42, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(196, 30, 42, 0.08) 1px, transparent 1px), radial-gradient(ellipse at center, #1a1a1a 0%, #0d0d0d 50%, #000000 100%)',
          backgroundSize: '30px 30px, 30px 30px, 100% 100%',
        }}
      >
        <div className="container mx-auto px-4 py-10 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1 - Logo & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="sm:col-span-2 lg:col-span-1"
            >
              <a href="#inicio" className="inline-block mb-4 md:mb-6">
                <img 
                  src="/logo.png" 
                  alt="MJAP Logo" 
                  className="h-auto max-h-10 md:max-h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 [filter:drop-shadow(0_0_8px_rgba(196,30,42,0.4))]" 
                />
              </a>
              <p className="text-gray-400 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                Fabricantes especializados en carrozados, trailers y estructuras metálicas de alta calidad 
                en Villa María, Córdoba.
              </p>
            </motion.div>

            {/* Column 2 - Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Enlaces Rápidos</h3>
              <ul className="space-y-2 md:space-y-3">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#c41e2a] transition-colors flex items-center gap-2 text-sm md:text-base"
                    >
                      <span className="w-1.5 h-1.5 bg-[#c41e2a] rounded-full" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3 - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Contacto</h3>
              <ul className="space-y-3 md:space-y-4">
                <li>
                  <a 
                    href="https://wa.me/543536563732?text=Hola!%20Me%20contacto%20desde%20la%20web%20de%20MJAP." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 md:gap-3 text-sm md:text-base"
                  >
                    <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5 text-[#c41e2a]" />
                    +54 35 3656-3732
                  </a>
                </li>
                <li>
                  <a href="mailto:somosmetalurgicajap@gmail.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 md:gap-3 text-sm md:text-base">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#c41e2a]" />
                    somosmetalurgicajap@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/maps/place/C.+Carlos+Avalle+6058,+C%C3%B3rdoba/@-32.4424149,-63.1688278,14.66z/data=!4m5!3m4!1s0x95cc69bc6b0e29d9:0x2f77482a99c0c415!8m2!3d-32.4319394!4d-63.1713123" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-start gap-2 md:gap-3 text-sm md:text-base">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#c41e2a] flex-shrink-0 mt-0.5" />
                    <span>C. Carlos Avalle 6058, Villa María, Córdoba</span>
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Column 4 - Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Seguinos</h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {socialLinks.map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#c41e2a] transition-colors group"
                  >
                    <social.icon className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
              <p className="text-gray-500 text-xs md:text-sm mt-4 md:mt-6">
                Lunes a Viernes: 8:00 - 17:30
              </p>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
              {new Date().getFullYear()} MJAP. Todos los derechos reservados.
            </p>
            <p className="text-gray-600 text-xs md:text-sm">
              Desarrollado y diseñado por <a href="https://zevetix.online" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#c41e2a] transition-colors">Zevetix</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
