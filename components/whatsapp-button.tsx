'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export function WhatsAppButton() {
  const phoneNumber = '543531234567'
  const message = encodeURIComponent('Hola! Me gustaría solicitar información sobre sus servicios.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 z-50 w-14 h-14 bg-[#c41e2a] rounded-full flex items-center justify-center shadow-lg"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
    </motion.a>
  )
}
