'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, Truck, Award } from 'lucide-react'

interface CounterItemProps {
  target: number
  suffix?: string
  prefix?: string
  label: string
  icon: React.ElementType
}

function CounterItem({ target, suffix = '', prefix = '', label, icon: Icon }: CounterItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <div ref={ref} className="text-center px-4 py-6 bg-white dark:bg-card rounded-xl">
      <Icon className="w-10 h-10 mx-auto mb-4 text-[#c41e2a]" />
      <div className="text-3xl md:text-4xl font-black text-foreground mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  )
}

export function Counters() {
  return (
    <section className="relative -mt-16 z-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <div className="glass rounded-2xl shadow-2xl overflow-hidden p-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <CounterItem
              icon={Clock}
              target={36}
              prefix="+"
              suffix=" Años"
              label="de Experiencia"
            />
            <CounterItem
              icon={Truck}
              target={23}
              prefix=""
              label="Provincias de Alcance"
            />
            <CounterItem
              icon={Award}
              target={100}
              suffix="%"
              label="Homologado"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
