'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, BadgeCheck, Award, ArrowRight, Users } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'

const clientLogos = [
  'Helvética',
  'Astivia',
  'Ramdon',
  'Montenegro',
  'Hermann',
  'Ombú',
  'Salto',
  'Bonano',
  'Vulcano',
  'Halcón',
  'Lambert',
  'Petinari',
  'Grosspal',
  'Sola y Brusa'
]

export function About() {
  const phoneNumber = '543536563732'
  const message = encodeURIComponent('Hola! Me gustaría conocer más sobre MJAP y sus servicios.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <section id="nosotros" className="py-16 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block px-4 py-1 bg-[#c41e2a]/10 text-[#c41e2a] rounded-full text-sm font-semibold mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 leading-tight text-balance">
              Fabricantes de <span className="text-[#c41e2a]">Carrozados</span> con Experiencia
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              Somos fabricantes especializados en carrozados, trailers, acoplados y estructuras metálicas. 
              Nuestra planta ubicada en Villa María, Córdoba, cuenta con tecnología de última generación 
              y un equipo de profesionales altamente capacitados.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Trabajamos con los más altos estándares de calidad, cumpliendo con todas las homologaciones 
              y certificaciones requeridas por la industria. Cada proyecto es único y recibe nuestra 
              atención personalizada de principio a fin.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-foreground">
                <BadgeCheck className="w-5 h-5 text-[#c41e2a]" />
                <span className="font-medium text-sm md:text-base">Certificaciones al día</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Award className="w-5 h-5 text-[#c41e2a]" />
                <span className="font-medium text-sm md:text-base">Calidad garantizada</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#c41e2a] hover:bg-[#a01822] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <Users className="w-5 h-5" />
              Conoce más sobre nosotros
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/adjuntos/1000452973.webp"
                alt="Taller metalúrgico MJAP - Fabricación de trailers y carrocerías en Villa María, Córdoba"
                width={600}
                height={450}
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              
              {/* Hover Overlay with Social Icons */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <a
                  href="#"
                  aria-label="Facebook de MJAP"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#c41e2a] transition-colors"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram de MJAP"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#c41e2a] transition-colors"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Floating Labels */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -top-4 -left-4 bg-[#c41e2a] text-white px-3 md:px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
            >
              <BadgeCheck className="w-4 md:w-5 h-4 md:h-5" />
              <span className="font-semibold text-xs md:text-sm">Taller Certificado</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-card text-foreground px-3 md:px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
            >
              <Award className="w-4 md:w-5 h-4 md:h-5 text-[#c41e2a]" />
              <span className="font-semibold text-xs md:text-sm">ISO 9001</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-20 overflow-hidden"
        >
          <h3 className="text-center text-foreground font-bold text-lg md:text-xl mb-8 tracking-wider text-balance">
            Trabajamos con todas las marcas de carrocerías del mercado
          </h3>
          <div className="relative w-full overflow-hidden flex items-center py-4">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
            
            <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
              <div className="flex gap-12 md:gap-24 items-center px-6 md:px-12">
                {clientLogos.map((logo, index) => (
                  <div
                    key={`logo-1-${index}`}
                    className="flex-shrink-0 text-xl md:text-2xl lg:text-3xl font-bold text-muted-foreground/40 hover:text-[#c41e2a] transition-colors cursor-pointer"
                  >
                    {logo}
                  </div>
                ))}
              </div>
              <div className="flex gap-12 md:gap-24 items-center px-6 md:px-12">
                {clientLogos.map((logo, index) => (
                  <div
                    key={`logo-2-${index}`}
                    className="flex-shrink-0 text-xl md:text-2xl lg:text-3xl font-bold text-muted-foreground/40 hover:text-[#c41e2a] transition-colors cursor-pointer"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
