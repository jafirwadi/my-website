import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { firstBrick, getFirstBrickIssueCount } from '../data/content'
import firstBrickLogo from '../assets/first-brick-logo.jpg'
import SwapText from './SwapText'
import { ArrowUpRightIcon } from './Icons'

export default function FirstBrick() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="first-brick" className="border-t border-forest/10 bg-cream-paper px-6 py-24 text-forest md:px-10 md:py-28">
      <div className="mx-auto grid max-w-content items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[280px] overflow-hidden rounded-sm border border-gold-deep/25"
        >
          <img
            src={firstBrickLogo}
            alt="First Brick newsletter logo"
            className="h-full w-full bg-forest/5 object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center md:text-left">
          <p className="font-sans text-[1.125rem] tracking-wide2 text-gold-deep">{firstBrick.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-forest sm:text-4xl">
            {firstBrick.tagline}
          </h2>
          <p className="mt-5 max-w-xl font-sans text-[1.125rem] leading-relaxed text-forest/70">{firstBrick.body}</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-sans text-sm text-forest/50 md:justify-start">
            <span>{firstBrick.cadence}</span>
            <span className="hidden sm:inline">·</span>
            <span>{getFirstBrickIssueCount(now)} issues published</span>
          </div>

          <a
            href={firstBrick.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-auto mt-8 inline-flex items-center justify-center gap-2 rounded-sm border border-gold-deep/60 px-8 py-4 font-sans text-lg font-bold text-gold-deep transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-forest hover:text-cream hover:shadow-[0_10px_28px_-8px_rgba(27,58,45,0.4)] active:scale-95 md:mx-0"
          >
            <SwapText label={firstBrick.cta.label} hoverLabel={firstBrick.cta.hoverLabel} icon={ArrowUpRightIcon} />
          </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
