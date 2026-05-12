'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, User, AtSign, MessageSquare } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: FaWhatsapp,
      title: 'Ronald',
      value: '+54 35 3656-3732',
      href: 'https://wa.me/543536563732?text=Hola%20Ronald!%20Me%20contacto%20desde%20la%20web%20de%20MJAP.',
    },
    {
      icon: FaWhatsapp,
      title: 'Juan',
      value: '+54 35 3565-7977',
      href: 'https://wa.me/543535657977?text=Hola%20Juan!%20Me%20contacto%20desde%20la%20web%20de%20MJAP.',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'somosmetalurgicajap@gmail.com',
      href: 'mailto:somosmetalurgicajap@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Local Físico',
      value: 'C. Carlos Avalle 6058, Villa María, Córdoba',
      href: 'https://maps.google.com',
    },
  ]

  return (
    <section id="contacto" className="py-16 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#c41e2a]/10 text-[#c41e2a] rounded-full text-sm font-semibold mb-4">
            Contactanos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
            Ponete en <span className="text-[#c41e2a]">Contacto</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto text-pretty">
            Estamos listos para ayudarte con tu proyecto. Completá el formulario y nos comunicaremos a la brevedad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre Completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-[#c41e2a] focus:border-transparent transition-all outline-none text-foreground text-base"
                      placeholder="Tu nombre"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-[#c41e2a] focus:border-transparent transition-all outline-none text-foreground text-base"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4 md:mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Teléfono
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-[#c41e2a] focus:border-transparent transition-all outline-none text-foreground text-base"
                    placeholder="+54 xxx xxx-xxxx"
                  />
                </div>
              </div>
              <div className="mb-4 md:mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-[#c41e2a] focus:border-transparent transition-all outline-none text-foreground resize-none text-base"
                    placeholder="Contanos sobre tu proyecto..."
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-6 w-full sm:w-auto"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Enviando...
                  </span>
                ) : submitted ? (
                  <span className="flex items-center justify-center gap-2">
                    Mensaje Enviado
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </span>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-card rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all flex items-center gap-3 md:gap-4 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#c41e2a]/10 rounded-lg flex items-center justify-center group-hover:bg-[#c41e2a] transition-colors flex-shrink-0">
                  <info.icon className="w-5 h-5 md:w-6 md:h-6 text-[#c41e2a] group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs md:text-sm text-muted-foreground">{info.title}</p>
                  <p className="font-semibold text-foreground text-sm md:text-base truncate">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
