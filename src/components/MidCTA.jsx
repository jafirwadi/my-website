import { motion } from 'framer-motion'
import { midCta } from '../data/content'
import SwapText from './SwapText'
import { ArrowUpRightIcon } from './Icons'

export default function MidCTA() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-content flex-col items-center justify-between gap-6 rounded-md border border-gold/25 px-8 py-8 text-center sm:flex-row sm:text-left md:px-12"
      >
        <p className="font-serif text-2xl font-semibold text-cream sm:text-3xl">{midCta.heading}</p>
        <a
          href={midCta.cta.href}
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 font-sans text-lg font-bold text-forest transition-all duration-300 ease-editorial hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_12px_32px_-8px_rgba(212,168,83,0.65)] active:scale-95"
        >
          <SwapText label={midCta.cta.label} hoverLabel={midCta.cta.hoverLabel} icon={ArrowUpRightIcon} />
        </a>
      </motion.div>
    </section>
  )
}
