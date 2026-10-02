import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../data/content'
import { LinkedInIcon, UpworkIcon, ArrowUpRightIcon } from './Icons'
import WorldMap from './WorldMap'

import frida from '../assets/testimonials/frida.webp'
import annabelle from '../assets/testimonials/annabelle.webp'
import fernando from '../assets/testimonials/fernando.webp'
import salman from '../assets/testimonials/salman.webp'
import jeffrey from '../assets/testimonials/jeffrey.webp'

// Drop a replacement file with the SAME name into src/assets/testimonials/
// to swap in a real client photo — no code change needed.
const avatars = { frida, annabelle, fernando, salman, jeffrey }

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), [])
  const prev = useCallback(() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 2000)
    return () => clearInterval(id)
  }, [paused, next])

  const t = testimonials[index]
  const SourceIcon = t.source === 'Upwork' ? UpworkIcon : LinkedInIcon

  return (
    <section id="testimonials" className="px-6 py-24 md:px-10 md:py-32 lg:px-12">
      <div className="mx-auto max-w-content">
        <p className="font-sans text-[1.125rem] tracking-wide2 text-gold">Built on trust</p>
        <h2 className="mt-3 max-w-xl font-serif text-4xl font-semibold text-cream md:text-5xl lg:text-6xl">
          What it's like to work together
        </h2>

        <div
          className="relative mt-14 grid gap-0 overflow-hidden rounded-md border border-cream/10 bg-cream/[0.04] lg:grid-cols-[1fr_1.3fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* world map — highlights the reviewer's country */}
          <div className="flex flex-col items-center justify-center gap-4 border-b border-cream/10 p-8 lg:border-b-0 lg:border-r lg:p-12">
            <WorldMap countryCode={t.countryCode} coords={t.coords} />
            <AnimatePresence mode="wait">
              <motion.p
                key={t.location}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="font-sans text-[1rem] tracking-wide2 text-gold"
              >
                {t.location}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* content */}
          <div className="relative min-h-[340px] p-6 pb-24 sm:p-8 sm:pb-24 md:p-10 md:pb-24 lg:p-12 lg:pb-24 xl:p-14 xl:pb-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-serif text-[26px] font-semibold leading-snug text-cream balance sm:text-[32px] lg:text-[42px]">
                  “{t.headline}”
                </p>
                <p className="mt-5 max-w-xl font-sans text-[1rem] leading-relaxed text-cream/75 lg:max-w-2xl lg:text-[1rem]">{t.quote}</p>

                <div className="mt-8 flex items-center gap-4 lg:gap-5">
                  <img
                    src={avatars[t.imageKey]}
                    alt={t.name}
                    className="h-12 w-12 shrink-0 rounded-full border border-gold/30 object-cover md:h-14 md:w-14 lg:h-16 lg:w-16"
                  />
                  <div>
                    <p className="font-sans text-[1rem] font-medium text-cream lg:text-[1rem]">{t.name}</p>
                    <p className="font-sans text-[13px] text-cream/55 lg:text-[14px]">{t.role}</p>
                  </div>
                  <span className="ml-auto flex items-center gap-1.5 rounded-full border border-cream/15 px-3 py-1.5 font-sans text-[15px] text-cream/65">
                    <SourceIcon width={15} height={15} /> {t.source}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between lg:absolute lg:bottom-10 lg:left-12 lg:right-10 lg:mt-0">
              <div className="flex gap-2">
                {testimonials.map((item, i) => (
                  <button
                    key={item.name}
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial from ${item.name}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? 'w-6 bg-gold' : 'w-1.5 bg-cream/20 hover:w-3 hover:bg-cream/40'
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-all duration-300 hover:scale-110 hover:border-gold hover:bg-gold/10 hover:text-gold active:scale-95"
                >
                  <ArrowUpRightIcon className="rotate-[-135deg]" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-all duration-300 hover:scale-110 hover:border-gold hover:bg-gold/10 hover:text-gold active:scale-95"
                >
                  <ArrowUpRightIcon className="rotate-45" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
