import { motion } from 'framer-motion'
import { hero } from '../data/content'
import { CalendarIcon, ArrowUpRightIcon } from './Icons'
import SwapText from './SwapText'
import portrait from '../assets/hero/portrait.webp'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-14">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10"
      >
        <div className="text-center lg:text-left">
          <motion.div variants={item} className="shimmer-border relative mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream/[0.06] py-1.5 pl-2.5 pr-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="shiny-text font-sans text-[1.125rem] text-cream/80">Available for new projects</span>
          </motion.div>

          <motion.p variants={item} className="mb-4 font-sans text-[1.125rem] font-medium tracking-wide2 text-gold">
            {hero.roleTitle}
          </motion.p>

          <h1 className="font-serif text-[2.5rem] font-semibold leading-[1.08] text-cream sm:text-[3.2rem] md:text-[3.75rem]">
            {hero.headline.map((line, i) => (
              <motion.span key={i} variants={item} className="block balance">
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p variants={item} className="mt-6 max-w-[46ch] font-sans text-[18px] leading-relaxed text-cream/80">
            {hero.sub}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href={hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-sm bg-gold px-8 py-4 font-sans text-lg font-bold text-forest transition-all duration-300 ease-editorial hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_12px_32px_-8px_rgba(212,168,83,0.65)] active:scale-95 active:translate-y-0"
            >
              <SwapText
                label={hero.primaryCta.label}
                hoverLabel={hero.primaryCta.hoverLabel}
                icon={CalendarIcon}
                iconPosition="leading"
              />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="group inline-flex items-center justify-center gap-2.5 rounded-sm border border-cream/25 px-8 py-4 font-sans text-base font-bold text-cream/85 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04] hover:border-gold hover:text-gold active:scale-95 active:translate-y-0"
            >
              <SwapText label={hero.secondaryCta.label} hoverLabel={hero.secondaryCta.hoverLabel} icon={ArrowUpRightIcon} />
            </a>
          </motion.div>

          <motion.dl variants={item} className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-cream/10 pt-6 lg:justify-start">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-[32px] font-semibold text-cream">{stat.value}</dd>
                <dd className="font-sans text-[22px] text-cream/55">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div variants={item} className="relative mx-auto w-full max-w-[420px] lg:ml-auto lg:mr-0 lg:max-w-[470px]">
          <div className="absolute -inset-3 -z-10 rounded-sm border border-gold/25" />
          <img
            src={portrait}
            alt="Tanzim — front-end developer and UI/UX designer"
            className="aspect-[4/5] w-full rounded-sm border border-gold/20 bg-cream/5 object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
