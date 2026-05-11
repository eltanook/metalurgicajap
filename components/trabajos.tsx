'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const trabajos = [
  {
    id: 1,
    title: 'Trailer Cerealero',
    description: 'Fabricación completa de trailer cerealero de 40 toneladas con sistema de descarga lateral. Estructura reforzada y acabados de primera calidad.',
    image: '/trabajos/trailer-cerealero.png',
  },
  {
    id: 2,
    title: 'Carrocería Refrigerada',
    description: 'Carrocería refrigerada para transporte de alimentos con aislamiento térmico de alta eficiencia. Cumple con todas las normas sanitarias.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2076',
  },
  {
    id: 3,
    title: 'Acoplado Playón',
    description: 'Acoplado playón de 14 metros para transporte de maquinaria pesada. Piso reforzado y rampas hidráulicas incorporadas.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070',
  },
  {
    id: 4,
    title: 'Semirremolque Tanque',
    description: 'Semirremolque cisterna de 30.000 litros para transporte de combustibles. Homologado y certificado según normativas vigentes.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2032',
  },
  {
    id: 5,
    title: 'Restauración Completa',
    description: 'Restauración integral de trailer de más de 15 años de antigüedad. Renovación de estructura, pisos, laterales y sistema eléctrico.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070',
  },
  {
    id: 6,
    title: 'Estructura Metálica',
    description: 'Fabricación de estructura metálica para galpón industrial de 500m2. Diseño personalizado con vigas reticuladas.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2071',
  },
]

const filteredTrabajos = trabajos.filter(t => t.image && t.image.trim() !== '')

export function Trabajos() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = { mobile: 1, tablet: 2, desktop: 3 }

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % filteredTrabajos.length)
  }

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + filteredTrabajos.length) % filteredTrabajos.length)
  }

  const getVisibleItems = () => {
    const items = []
    for (let i = 0; i < 3; i++) {
      items.push(filteredTrabajos[(currentIndex + i) % filteredTrabajos.length])
    }
    return items
  }

  return (
    <section id="trabajos" className="py-16 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#c41e2a]/10 text-[#c41e2a] rounded-full text-sm font-semibold mb-4">
            Trabajos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
            Nuestros <span className="text-[#c41e2a]">Trabajos</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto text-pretty">
            Conoce algunos de los proyectos que hemos realizado para nuestros clientes
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 lg:-translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-[#c41e2a] hover:text-white hover:border-[#c41e2a] transition-colors"
            aria-label="Anterior trabajo"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 lg:translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-[#c41e2a] hover:text-white hover:border-[#c41e2a] transition-colors"
            aria-label="Siguiente trabajo"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Cards Grid */}
          <div className="overflow-hidden mx-4 md:mx-8 lg:mx-12">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {getVisibleItems().map((trabajo, index) => (
                <motion.div
                  key={`${trabajo.id}-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-xl shadow-lg ${
                    index === 0 ? 'block' : index === 1 ? 'hidden md:block' : 'hidden lg:block'
                  }`}
                >
                  <div className="relative h-[300px] sm:h-[350px] md:h-[400px]">
                    <Image
                      src={trabajo.image}
                      alt={trabajo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Title always visible */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-white">{trabajo.title}</h3>
                    </div>

                    {/* Hover Overlay with Description */}
                    <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 md:p-6 text-center">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{trabajo.title}</h3>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed">{trabajo.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {filteredTrabajos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-[#c41e2a]' : 'bg-border hover:bg-muted-foreground'
                }`}
                aria-label={`Ir al trabajo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
