import { motion } from 'framer-motion'
import { cta, currentlyAvailable } from '../data/content'
import { CalendarIcon } from './Icons'
import SwapText from './SwapText'

export default function CTA() {
  return (
    <section className="px-6 py-28 md:px-10 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-content text-center"
      >
        <div className="shimmer-border relative mx-auto mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-cream/[0.06] py-2 pl-3 pr-4">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="shiny-text font-sans text-sm text-cream/80">{currentlyAvailable.label}</span>
        </div>

        <h2 className="mx-auto max-w-2xl font-serif text-4xl font-semibold leading-tight text-cream balance sm:text-5xl">
          {cta.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-lg font-sans text-xl leading-relaxed text-cream/70">{cta.sub}</p>

        <div className="mt-10 flex items-center justify-center">
          <a
            href={cta.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-sm bg-gold px-8 py-4 font-sans text-lg font-bold text-forest transition-all duration-300 ease-editorial hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_14px_36px_-8px_rgba(212,168,83,0.65)] active:scale-95 active:translate-y-0"
          >
            <SwapText
              label={cta.primaryCta.label}
              hoverLabel={cta.primaryCta.hoverLabel}
              icon={CalendarIcon}
              iconPosition="leading"
            />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
