'use client'

import { motion } from 'framer-motion'
import { Truck, FileCheck, Wrench, RotateCcw, Package, Settings } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const services = [
  {
    icon: Truck,
    title: 'Fabricación',
    description: 'Fabricamos trailers, acoplados, semirremolques y carrocerías a medida. Diseños personalizados según las necesidades de cada cliente.',
    waMessage: 'Hola! Me interesa información sobre fabricación de trailers y carrocerías.',
  },
  {
    icon: FileCheck,
    title: 'Homologaciones',
    description: 'Gestionamos todas las homologaciones requeridas por ley. Certificaciones y documentación completa para circular legalmente.',
    waMessage: 'Hola! Necesito información sobre homologaciones y certificaciones.',
  },
  {
    icon: Wrench,
    title: 'Servicios Camiones',
    description: 'Mantenimiento y reparación de camiones y vehículos pesados. Servicio técnico especializado con repuestos originales.',
    waMessage: 'Hola! Necesito información sobre servicios de mantenimiento para camiones.',
  },
  {
    icon: RotateCcw,
    title: 'Restauraciones',
    description: 'Restauramos trailers y carrocerías antiguas o deterioradas. Devolvemos la vida útil a tu unidad con acabados de primera.',
    waMessage: 'Hola! Me interesa información sobre restauración de trailers.',
  },
  {
    icon: Package,
    title: 'Repuestos',
    description: 'Amplio stock de repuestos y accesorios para trailers y camiones. Piezas originales y alternativas de alta calidad.',
    waMessage: 'Hola! Necesito cotización de repuestos para trailer/camión.',
  },
  {
    icon: Settings,
    title: 'Personalizados',
    description: 'Diseñamos y fabricamos unidades especiales para usos específicos. Contanos tu idea y nosotros la hacemos realidad.',
    waMessage: 'Hola! Tengo una idea para un proyecto personalizado y me gustaría consultarlos.',
    isFeatured: true,
  },
]

const phoneNumber = '543531234567'

export function Services() {
  return (
    <section
      id="servicios"
      className="py-16 md:py-20 lg:py-28 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#c41e2a]/20 text-[#c41e2a] rounded-full text-sm font-semibold mb-4">
            Lo Que Hacemos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 text-balance">
            Nuestros <span className="text-[#c41e2a]">Servicios</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto text-pretty">
            Ofrecemos soluciones integrales para la industria del transporte y la metalurgia
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(service.waMessage)}`
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group h-full"
              >
                <div className={`${service.isFeatured ? 'bg-[#c41e2a]/80 backdrop-blur-md border-[#c41e2a]/30 shadow-xl' : 'glass'} h-full rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-[#c41e2a]/50 hover:shadow-lg hover:shadow-[#c41e2a]/10 flex flex-col`}>
                  <div className={`w-12 h-12 md:w-14 md:h-14 ${service.isFeatured ? 'bg-white/20' : 'bg-[#c41e2a]/20'} rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#c41e2a] transition-colors`}>
                    <service.icon className={`w-6 h-6 md:w-7 md:h-7 ${service.isFeatured ? 'text-white' : 'text-[#c41e2a]'} group-hover:text-white transition-colors`} />
                  </div>
                  <h3 className={`text-lg md:text-xl font-bold text-white mb-2 md:mb-3`}>
                    {service.title}
                  </h3>
                  <p className={`${service.isFeatured ? 'text-white/80' : 'text-gray-400'} leading-relaxed flex-grow text-sm md:text-base`}>
                    {service.description}
                  </p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 ${service.isFeatured ? 'text-white hover:text-white/80' : 'text-[#c41e2a] hover:text-[#ff3344]'} font-semibold mt-4 md:mt-6 transition-colors`}
                  >
                    Consultar
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
