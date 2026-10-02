import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { positioning, pillars } from '../data/content'
import { iconMap } from './Icons'

import strategist from '../assets/positioning/strategist.webp'
import anxiousMoment from '../assets/positioning/anxious-moment.webp'
import performance from '../assets/positioning/performance.webp'
import specialist from '../assets/positioning/specialist.webp'
import outcomes from '../assets/positioning/outcomes.webp'

// Drop a replacement file with the SAME name into src/assets/positioning/
// to swap in a real photo for that pillar — no code change needed.
const images = { strategist, 'anxious-moment': anxiousMoment, performance, specialist, outcomes }

export default function Positioning() {
  const [active, setActive] = useState(0)

  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-sans text-[1.125rem] tracking-wide2 text-gold">{positioning.eyebrow}</p>

          <blockquote className="mt-6 max-w-3xl">
            <p className="font-serif text-[32px] italic leading-snug text-cream balance sm:text-[42px] md:text-[2.9rem]">
              “{positioning.quote}”
            </p>
          </blockquote>

          <p className="mt-8 max-w-2xl font-sans text-[1.125rem] leading-relaxed text-cream/75">
            {positioning.body}
          </p>
        </motion.div>

        <div className="mt-6 grid gap-6 border-t border-cream/10 pt-4 md:mt-20 md:gap-14 md:pt-16 md:grid-cols-[0.75fr_1.25fr]">
          <div className="hidden md:block">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={images[pillars[active].imageKey]}
                  alt={pillars[active].title}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="aspect-[3/4] w-full rounded-sm border border-gold/25 bg-cream/5 object-contain"
                />
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col divide-y divide-cream/10 border-y border-cream/10 md:border-none md:divide-y-0 md:gap-2">
            {pillars.map((pillar, i) => {
              const Icon = iconMap[pillar.icon]
              const isActive = i === active
              return (
                <motion.button
                  key={pillar.title}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex w-full items-start gap-4 rounded-sm px-4 py-5 text-left transition-all duration-300 md:border md:border-transparent ${
                    isActive ? 'md:border-gold/30 md:bg-cream/[0.05]' : 'hover:md:bg-cream/[0.03]'
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isActive ? 'border-gold text-gold' : 'border-cream/20 text-cream/50'
                    }`}
                  >
                    <Icon />
                  </span>
                  <span>
                    <h3 className={`font-serif text-[22px] font-semibold transition-colors duration-300 ${isActive ? 'text-cream' : 'text-cream/80'}`}>
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 max-w-[46ch] font-sans text-[1rem] leading-relaxed text-cream/70">
                      {pillar.body}
                    </p>
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
