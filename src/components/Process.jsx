import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cta, pricing, process } from '../data/content'
import { ArrowUpRightIcon, CheckIcon } from './Icons'
import SwapText from './SwapText'

function ProcessStep({ step, index, total }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.5', 'end 0.5', 'end 0.15'],
  })
  const opacity = useTransform(scrollYProgress, [0, 1 / 3, 2 / 3, 1], [0.32, 1, 1, 0.32])
  const markerColor = useTransform(scrollYProgress, [0, 1 / 3], ['rgba(245,237,216,0.35)', 'rgba(212,168,83,1)'])
  const markerBorder = useTransform(scrollYProgress, [0, 1 / 3], ['rgba(245,237,216,0.25)', 'rgba(212,168,83,1)'])

  return (
    <motion.li
      ref={ref}
      style={{ opacity }}
      className="grid grid-cols-[auto_1fr] gap-x-6 md:grid-cols-[auto_10rem_1fr] md:gap-x-10"
    >
      <div className="flex flex-col items-center">
        <motion.span
          style={{ color: markerColor, borderColor: markerBorder }}
          className="flex h-9 w-9 items-center justify-center rounded-full border font-serif text-sm font-normal"
        >
          {String(index + 1).padStart(2, '0')}
        </motion.span>
        {index < total - 1 && <span className="mt-2 w-px flex-1 bg-cream/12" />}
      </div>

      <p className="hidden self-start pt-2 font-sans text-[1rem] text-cream/50 md:block">{step.day}</p>

      <div className="pb-14">
        <p className="mb-1 font-sans text-[1rem] text-cream/50 md:hidden">{step.day}</p>
        <h3 className="font-serif text-[22px] font-normal text-cream">{step.title}</h3>
        <p className="mt-2 max-w-[52ch] font-sans text-[1rem] leading-relaxed text-cream/75">{step.body}</p>
      </div>
    </motion.li>
  )
}

function PricingCard({ packageDetails }) {
  const highlighted = packageDetails.highlighted

  return (
    <article
      className={`relative flex h-full min-w-0 flex-col rounded-[14px] border p-6 sm:rounded-2xl sm:p-7 lg:p-10 ${
        highlighted
          ? 'border-gold bg-forest-deep text-cream'
          : 'border-cream/40 bg-cream text-forest'
      }`}
    >
      <div className="flex min-w-0 items-start justify-between gap-2">
        <h3 className="min-w-0 font-serif text-[22px] font-normal leading-8 sm:text-2xl">{packageDetails.name}</h3>
        {highlighted && (
          <span className="shrink-0 rounded-full bg-gold px-3 py-1 font-inter text-[11px] font-bold leading-4 text-forest-deep">
            Best value
          </span>
        )}
      </div>

      <div className="min-w-0">
        <p className="mt-3 font-serif text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] sm:text-[40px] lg:text-[48px]">
          <span className="italic font-normal">from</span>{' '}
          {packageDetails.price.replace(/^from\s+/i, '')}
        </p>
      </div>

      <p className={`mt-3 font-inter text-[15px] leading-6 sm:text-base ${highlighted ? 'text-[#C8C0A9]' : 'text-forest/75'}`}>
        {packageDetails.summary}
      </p>
      {packageDetails.savings && (
        <p className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-forest-light/70 px-3 py-1 font-inter text-[13px] font-semibold leading-5 text-gold">
          <span aria-hidden="true" className="flex h-3 items-end gap-px">
            <span className="h-1.5 w-0.5 rounded-sm bg-gold/70" />
            <span className="h-2.5 w-0.5 rounded-sm bg-gold/85" />
            <span className="h-2 w-0.5 rounded-sm bg-gold" />
          </span>
          {packageDetails.savings}
        </p>
      )}

      <ul className={`mt-6 flex-1 border-t pt-3 ${highlighted ? 'border-cream/20' : 'border-cream-dim/50'}`}>
        {packageDetails.features.map((feature) => (
          <li key={feature} className={`flex items-start gap-3 border-b py-2 font-inter text-[15px] leading-6 sm:text-base ${highlighted ? 'border-cream/15 text-cream/90' : 'border-cream-dim/35 text-forest/85'}`}>
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold text-forest-deep">
              <CheckIcon className="h-3 w-3" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className={`mt-6 flex items-start gap-3 border-t pt-5 font-inter text-[13px] leading-[21px] ${highlighted ? 'border-cream/20 text-[#C8C0A9]' : 'border-cream-dim/50 text-forest/65'}`}>
        <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${highlighted ? 'border-gold text-gold' : 'border-forest text-forest'}`} aria-hidden="true">
          <span className="font-serif text-sm font-semibold leading-none">i</span>
        </span>
        <p>
          <span className={`font-bold ${highlighted ? 'text-cream' : 'text-forest'}`}>Not included: </span>
          {packageDetails.exclusions}
        </p>
      </div>

      <a
        href="#contact"
        className={`group mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[8px] px-5 py-[14px] text-center font-inter text-[15px] font-semibold leading-6 transition-all duration-300 hover:-translate-y-0.5 lg:min-h-14 lg:text-base ${
          highlighted
            ? 'bg-gold text-forest-deep hover:shadow-[0_10px_24px_-10px_rgba(212,168,83,0.45)]'
            : 'bg-forest text-cream hover:bg-forest/90'
        }`}
      >
        <SwapText label={packageDetails.cta} hoverLabel={packageDetails.hoverCta} icon={ArrowUpRightIcon} reserveSpace />
      </a>
    </article>
  )
}

export default function Process() {
  const containerRef = useRef(null)
  const { scrollYProgress: railProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  return (
    <section id="process" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <p className="font-sans text-[1.125rem] tracking-wide2 text-gold">{process.eyebrow}</p>
        <h2 className="mt-3 max-w-xl font-serif text-4xl font-normal text-cream md:text-5xl">{process.heading}</h2>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <p className="max-w-xl font-sans text-[1.125rem] leading-relaxed text-cream/75">{process.sub}</p>
        </div>

        <div className="shimmer-border relative mt-5 inline-flex items-center gap-2.5 rounded-full border border-gold/50 bg-gold/10 py-2 pl-3 pr-4">
          <span className="rounded-full bg-gold px-2 py-0.5 font-sans text-[13px] font-bold text-forest">30%</span>
          <span className="shiny-text font-sans text-[1.125rem] text-cream/90">{process.advanceNote}</span>
        </div>

        <div className="relative mt-16">
          {/* scroll progress rail */}
          <div className="absolute left-[17px] top-0 hidden h-full w-px bg-cream/10 md:block" />
          <motion.div
            style={{ scaleY: railProgress }}
            className="absolute left-[17px] top-0 hidden h-full w-px origin-top bg-gold md:block"
          />

          <ol ref={containerRef} className="flex flex-col">
            {process.steps.map((step, i) => (
              <ProcessStep key={step.title} step={step} index={i} total={process.steps.length} />
            ))}
          </ol>
        </div>

        <aside className="mt-8 rounded-sm border-l-4 border-gold bg-gold/10 px-5 py-4 sm:px-6">
          <p className="font-sans text-base italic leading-relaxed text-cream/85">Timelines above reflect the maximum duration for a standard build. Simpler projects often move faster — your actual timeline will be confirmed during the discovery call.</p>
        </aside>

        <div className="mt-24 border-t border-cream/15 pt-20">
          <p className="font-sans text-[1.125rem] tracking-wide2 text-gold">{pricing.eyebrow}</p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl font-normal text-cream md:text-5xl">{pricing.heading}</h2>
          <p className="mt-5 max-w-2xl font-sans text-[1.125rem] leading-relaxed text-cream/75">{pricing.intro}</p>

          <div className="mx-auto mt-10 grid w-full max-w-[1216px] items-stretch gap-5 md:mt-14 md:gap-6 lg:grid-cols-2 lg:gap-8">
            {pricing.packages.map((packageDetails) => (
              <PricingCard key={packageDetails.name} packageDetails={packageDetails} />
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-8 border-t border-cream/15 pt-6 font-sans text-base leading-relaxed text-cream/75">
            <div className="text-left">
              <div className="shimmer-border relative inline-flex w-max max-w-none items-center gap-3 whitespace-nowrap rounded-full border border-gold/40 bg-cream/[0.06] px-4 py-2">
                <span className="text-sm font-normal text-cream">
                  Already have a website?
                </span>
                <p>
                  <a href="#contact" className="text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:text-cream">
                    Follow-Up Automation only, from $899 (Starter from $449).
                  </a>
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="shimmer-border relative inline-flex w-max max-w-none items-center gap-3 whitespace-nowrap rounded-full border border-gold/40 bg-cream/[0.06] px-4 py-2">
                <span className="text-sm font-normal text-cream">
                  Bigger project?
                </span>
                <p>
                  Custom builds start at $3,999.{' '}
                  <a href="#contact" className="text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:text-cream">
                    Send me a brief.
                  </a>
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="shimmer-border relative inline-flex w-max max-w-none items-center gap-3 whitespace-nowrap rounded-full border border-gold/40 bg-cream/[0.06] px-4 py-2">
                <span className="text-sm font-normal text-cream">
                  Not sure which fits?
                </span>
                <p>
                  <a href={cta.primaryCta.href} target="_blank" rel="noopener noreferrer" className="text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:text-cream">
                    Book a free call and I’ll tell you.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
