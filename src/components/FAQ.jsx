import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '../data/content'
import { PlusIcon } from './Icons'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <p className="font-sans text-[1.125rem] tracking-wide2 text-gold">Before you reach out</p>
        <h2 className="mt-3 max-w-xl font-serif text-4xl font-semibold text-cream md:text-5xl">
          Frequently asked questions
        </h2>

        <div className="mt-14 flex flex-col divide-y divide-cream/10 border-t border-cream/10">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-serif text-[20px] font-medium text-cream sm:text-[24px]">{item.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    <PlusIcon />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden md:pr-[50px]"
                    >
                      <p className="w-full pb-7 font-sans text-[1.125rem] leading-relaxed text-cream/75">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
