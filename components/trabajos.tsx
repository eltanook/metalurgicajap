'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import Image from 'next/image'

const trabajos = [
  {
    id: 1,
    title: 'Trailers para Montacargas',
    description: 'Diseño y fabricación de trailers especializados para el transporte de montacargas, con rampas reforzadas y estructuras de alta resistencia.',
    image: '/adjuntos/1000448413.jpg',
  },
  {
    id: 2,
    title: 'Carrocería Tribuelco',
    description: 'Fabricación de carrocerías con sistema de triple volcado (trasero y lateral), optimizando la versatilidad en la descarga de materiales.',
    image: '/adjuntos/1000450491.webp',
  },
  {
    id: 3,
    title: 'Certificaciones de Izaje',
    description: 'Servicio profesional de homologación y certificación de equipos de izaje (hidrogrúas), garantizando seguridad y cumplimiento normativo.',
    image: '/adjuntos/1000449206.jpg',
  },
  {
    id: 4,
    title: 'Reparación de Bateas',
    description: 'Mantenimiento integral, reparaciones estructurales y modificaciones técnicas en bateas y volcadores de gran capacidad.',
    image: '/adjuntos/1000450834.webp',
  },
  {
    id: 5,
    title: 'Mantenimiento de Chasis',
    description: 'Servicios especializados de alargue de chasis, reparación de cabinas y sistemas eléctricos para transporte pesado.',
    image: '/adjuntos/1000449210.jpg',
  },
  {
    id: 6,
    title: 'Carrocerías a Medida',
    description: 'Fabricación de carrocerías tipo playa con barandas volcables, adaptadas a las necesidades específicas de carga de cada cliente.',
    image: '/adjuntos/1000452973.jpg',
  },
  {
    id: 7,
    title: 'Trailers Especiales',
    description: 'Desarrollo de trailers de perfil bajo para el traslado de maquinaria pesada, vehículos y equipos industriales de dimensiones especiales.',
    image: '/adjuntos/1000453499.jpg',
  },
  {
    id: 8,
    title: 'Equipos para Picado',
    description: 'Diseño y fabricación de puertas y componentes específicos para equipos de picado de forraje y logística agrícola.',
    image: '/adjuntos/1000450835.webp',
  },
  {
    id: 9,
    title: 'Carrocerías de Carga',
    description: 'Montaje de unidades de carga general con acabados de alta calidad, pintura industrial y detalles técnicos de precisión.',
    image: '/adjuntos/1000448588.jpg',
  },
]

const filteredTrabajos = trabajos.filter(t => t.image && t.image.trim() !== '')

export function Trabajos() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isModalOpen])

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % filteredTrabajos.length)
  }

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + filteredTrabajos.length) % filteredTrabajos.length)
  }

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
  }

  const nextModalImage = () => {
    setSelectedImageIndex(prev => (prev + 1) % filteredTrabajos.length)
  }

  const prevModalImage = () => {
    setSelectedImageIndex(prev => (prev - 1 + filteredTrabajos.length) % filteredTrabajos.length)
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
              {getVisibleItems().map((trabajo, index) => {
                const actualIndex = filteredTrabajos.findIndex(t => t.id === trabajo.id)
                return (
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
                        <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6">{trabajo.description}</p>
                        
                        {/* Zoom Button - Bottom Right */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            openModal(actualIndex)
                          }}
                          className="absolute bottom-4 right-4 w-10 h-10 bg-[#c41e2a] text-white rounded-lg flex items-center justify-center shadow-lg hover:bg-[#a01822] transition-colors"
                          title="Ampliar imagen"
                        >
                          <Maximize2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
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

      {/* Gallery Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-[#c41e2a] transition-colors z-[110]"
              aria-label="Cerrar galería"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* Navigation in Modal */}
            <button
              onClick={(e) => { e.stopPropagation(); prevModalImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#c41e2a] text-white rounded-full flex items-center justify-center transition-colors z-[110]"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextModalImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#c41e2a] text-white rounded-full flex items-center justify-center transition-colors z-[110]"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl aspect-video md:aspect-[16/9] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={filteredTrabajos[selectedImageIndex].image}
                  alt={filteredTrabajos[selectedImageIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {filteredTrabajos[selectedImageIndex].title}
                </h3>
                <p className="text-white/70 text-sm md:text-base max-w-2xl">
                  {filteredTrabajos[selectedImageIndex].description}
                </p>
                <div className="mt-4 text-white/50 text-xs md:text-sm">
                  {selectedImageIndex + 1} / {filteredTrabajos.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

