'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Truck, Shield, Wrench, ChevronDown, ChevronUp, X } from 'lucide-react'

const TrailerIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="8" width="16" height="8" rx="1" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="14" cy="18" r="2" />
    <path d="M18 12h4" />
    <path d="M22 12v2" />
  </svg>
)

const faqs = [
  { question: '¿Realizan envíos a todo el país?', answer: 'Sí, entregamos en las 23 provincias de Argentina y CABA, asegurando que tu unidad llegue en perfectas condiciones donde la necesites.' },
  { question: '¿Trabajan con medidas estándar o a pedido?', answer: 'Ofrecemos ambas opciones. Contamos con líneas estandarizadas de entrega rápida y también fabricamos estructuras y carrozados 100% a medida según las especificaciones de cada cliente.' },
  { question: '¿Entregan las unidades homologadas?', answer: 'Absolutamente. Todas nuestras unidades se entregan con la documentación al día y las homologaciones vigentes necesarias para circular legalmente por todo el territorio nacional.' },
  { question: '¿Cuáles son los medios de pago y financiación?', answer: 'Aceptamos transferencias bancarias, cheques de terceros y ofrecemos financiación propia adaptada a las necesidades de tu empresa. Consultanos para armar un plan a tu medida.' },
  { question: '¿Ofrecen garantía sobre los trabajos?', answer: 'Sí, todos nuestros trabajos de fabricación, reparación y restauración cuentan con garantía de 1 a 5 años, dependiendo del tipo de estructura y servicio realizado.' },
  { question: '¿Cuánto demora la fabricación de un trailer o acoplado?', answer: 'El tiempo de entrega varía según la complejidad del proyecto. Las unidades estándar suelen demorar entre 15 y 30 días hábiles, mientras que los proyectos a medida pueden tomar entre 45 y 60 días.' }
]

const rotatingWords = ['Trailers', 'Carrocerías', 'Estructuras', 'Acoplados']

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isFaqOpen, setIsFaqOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

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
        backgroundImage: `url('/adjuntos/1000448588.webp')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75 md:bg-black/70" />

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
              Más de 36 años de experiencia nos respaldan en Villa María, Córdoba.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#contacto" className="btn-6">
                Solicitar Cotización
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Visual Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:block"
          >
            <div className="relative">
              {/* Main Card with Shiny Effect */}
              <div className="shiny-effect glass rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-lg">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  {/* Service Cards */}
                  {[
                    { icon: TrailerIcon, label: 'Trailers', color: 'from-red-500 to-red-700', waText: 'Hola! Me interesa información sobre Trailers.' },
                    { icon: Shield, label: 'Homologaciones', color: 'from-gray-500 to-gray-700', waText: 'Hola! Necesito información sobre Homologaciones.' },
                    { icon: Wrench, label: 'Servicios', color: 'from-red-600 to-red-800', waText: 'Hola! Necesito información sobre Servicios.' },
                    { icon: Truck, label: 'Carrocerías', color: 'from-gray-600 to-gray-800', waText: 'Hola! Me interesa información sobre Carrocerías.' },
                  ].map((item, index) => (
                    <motion.a
                      href={`https://wa.me/543536563732?text=${encodeURIComponent(item.waText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`bg-gradient-to-br ${item.color} rounded-xl p-3 sm:p-4 lg:p-6 text-white text-center shadow-lg cursor-pointer block`}
                    >
                      <item.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mx-auto mb-1 sm:mb-2 lg:mb-3" />
                      <span className="font-semibold text-[10px] sm:text-xs lg:text-sm">{item.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 sm:-top-4 -right-2 sm:-right-4 bg-[#c41e2a] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-sm font-bold shadow-lg z-20"
              >
                +36 Años
              </motion.div>
              <motion.button
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                onClick={() => setIsFaqOpen(true)}
                className="absolute -bottom-3 sm:-bottom-4 -left-2 sm:-left-4 bg-white text-[#1a1a1a] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-base font-bold shadow-xl hover:bg-gray-100 transition-colors cursor-pointer z-20"
              >
                Preguntas Frecuentes
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Modal */}
      <AnimatePresence>
        {isFaqOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsFaqOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden text-foreground"
            >
              <div className="flex justify-between items-center p-6 border-b border-border">
                <h3 className="text-xl font-bold">Preguntas Frecuentes</h3>
                <button
                  onClick={() => setIsFaqOpen(false)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex justify-between items-center p-4 text-left hover:bg-muted/50 transition-colors"
                    >
                      <span className="font-semibold text-sm sm:text-base">{faq.question}</span>
                      {openFaqIndex === index ? (
                        <ChevronUp className="w-5 h-5 flex-shrink-0 text-[#c41e2a]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 flex-shrink-0 text-muted-foreground" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openFaqIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-0 text-muted-foreground text-sm sm:text-base border-t border-border">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
