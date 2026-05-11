'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Truck, Shield, Wrench, Box } from 'lucide-react'

const rotatingWords = ['Trailers', 'Carrocerías', 'Estructuras', 'Acoplados']

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(prev => (prev + 1) % rotatingWords.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Fabricación de <br />
              <span className="relative inline-block min-w-[180px] sm:min-w-[200px] md:min-w-[280px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#c41e2a] inline-block"
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Somos especialistas en la fabricación de carrozados, trailers y estructuras metálicas de alta calidad. 
              Más de 15 años de experiencia nos respaldan en Villa María, Córdoba.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#contacto" className="btn-6">
                Solicitar Cotización
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center text-white font-semibold hover:text-[#c41e2a] transition-colors group"
              >
                Ver Servicios
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Visual Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Card with Shiny Effect */}
              <div className="shiny-effect glass rounded-2xl p-6 lg:p-8 backdrop-blur-lg">
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  {/* Service Cards */}
                  {[
                    { icon: Truck, label: 'Trailers', color: 'from-red-500 to-red-700' },
                    { icon: Shield, label: 'Homologaciones', color: 'from-gray-500 to-gray-700' },
                    { icon: Wrench, label: 'Reparaciones', color: 'from-red-600 to-red-800' },
                    { icon: Box, label: 'Carrocerías', color: 'from-gray-600 to-gray-800' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`bg-gradient-to-br ${item.color} rounded-xl p-4 lg:p-6 text-white text-center shadow-lg cursor-pointer`}
                    >
                      <item.icon className="w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-2 lg:mb-3" />
                      <span className="font-semibold text-xs lg:text-sm">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-[#c41e2a] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                +15 Años
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-white text-[#1a1a1a] px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                100% Calidad
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
