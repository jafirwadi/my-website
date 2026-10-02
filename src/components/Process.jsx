import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { process } from '../data/content'

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
          className="flex h-9 w-9 items-center justify-center rounded-full border font-serif text-sm font-semibold"
        >
          {String(index + 1).padStart(2, '0')}
        </motion.span>
        {index < total - 1 && <span className="mt-2 w-px flex-1 bg-cream/12" />}
      </div>

      <p className="hidden self-start pt-2 font-sans text-[1rem] text-cream/50 md:block">{step.day}</p>

      <div className="pb-14">
        <p className="mb-1 font-sans text-[1rem] text-cream/50 md:hidden">{step.day}</p>
        <h3 className="font-serif text-[22px] font-semibold text-cream">{step.title}</h3>
        <p className="mt-2 max-w-[52ch] font-sans text-[1rem] leading-relaxed text-cream/75">{step.body}</p>
      </div>
    </motion.li>
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
        <h2 className="mt-3 max-w-xl font-serif text-4xl font-semibold text-cream md:text-5xl">{process.heading}</h2>

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
      </div>
    </section>
  )
}
