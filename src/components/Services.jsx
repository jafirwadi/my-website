import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { services } from '../data/content'
import { iconMap, CheckIcon, ArrowUpRightIcon } from './Icons'
import SwapText from './SwapText'

function ServiceDetails({ service }) {
  const Icon = iconMap[service.icon]

  return (
    <>
      <span className="inline-flex rounded-full border border-gold-deep/50 px-3 py-1.5 font-sans text-sm font-bold uppercase tracking-wide2 text-gold-deep">
        {service.tag}
      </span>

      <h3 className="mt-5 flex items-center gap-3 font-serif text-[26px] font-semibold text-[#F5EDD8] sm:text-[32px] lg:text-[2.2rem]">
        <Icon className="shrink-0 text-gold-deep" width={26} height={26} />
        <span>{service.title}</span>
      </h3>

      <p className="mt-4 max-w-3xl font-sans text-[1rem] leading-relaxed text-[#F5EDD8]/80">
        {service.description}
      </p>

      <p className="mt-8 font-sans text-[13px] uppercase tracking-wide2 text-[#F5EDD8]/55">
        Core deliverables &amp; outcomes
      </p>
      <div className="mt-3 grid gap-x-6 gap-y-3 sm:grid-cols-2">
        {service.deliverables.map((deliverable) => (
          <div key={deliverable} className="flex items-start gap-2.5">
            <CheckIcon className="mt-0.5 shrink-0 text-gold-deep" />
            <span className="font-sans text-[1rem] text-[#F5EDD8]/85">{deliverable}</span>
          </div>
        ))}
      </div>

      <p className="mt-8 font-sans text-[13px] uppercase tracking-wide2 text-[#F5EDD8]/55">
        Technologies &amp; standards
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {service.tech.map((technology) => (
          <span key={technology} className="rounded-full border border-[#F5EDD8]/15 bg-[#F5EDD8]/5 px-3 py-1 font-sans text-[13px] text-[#F5EDD8]/85">
            {technology}
          </span>
        ))}
      </div>

      <a
        href="#contact"
        className="group mt-9 inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 font-sans text-base font-bold text-forest transition-all duration-300 ease-editorial hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_10px_30px_-8px_rgba(212,168,83,0.7)] active:scale-95"
      >
        <SwapText label={services.cta.label} hoverLabel={services.cta.hoverLabel} icon={ArrowUpRightIcon} />
      </a>
    </>
  )
}

export default function Services() {
  const [active, setActive] = useState(0)
  const selectedIndex = Math.max(active, 0)
  const current = services.list[selectedIndex]

  return (
    <section id="services" className="bg-cream-paper px-6 py-24 text-forest md:px-10 md:py-32 lg:px-12">
      <div className="mx-auto max-w-content">
        <p className="font-sans text-[1.125rem] tracking-wide2 text-gold-deep">{services.eyebrow}</p>
        <h2 className="mt-3 max-w-xl font-serif text-4xl font-semibold md:text-5xl lg:text-6xl">
          {services.heading}
        </h2>
        <p className="mt-5 max-w-xl font-sans text-[1.125rem] leading-relaxed text-forest/75 lg:text-[1.125rem]">
          {services.sub}
        </p>

        {/* Accordion for mobile and tablet */}
        <div className="services-accordion mt-10 flex flex-col gap-3 md:mt-14">
          {services.list.map((service, i) => {
            const Icon = iconMap[service.icon]
            const isActive = i === active

            return (
              <div key={service.title}>
                <button
                  type="button"
                  onClick={() => setActive(isActive ? -1 : i)}
                  aria-expanded={isActive}
                  aria-controls={`service-panel-${i}`}
                  className={`group flex min-h-14 w-full items-center gap-3 rounded-sm border px-4 py-3 text-left transition-all duration-300 sm:gap-4 sm:px-5 sm:py-4 ${
                    isActive
                      ? 'border-gold bg-gold text-[#1B3A2D] shadow-[0_10px_30px_-12px_rgba(212,168,83,0.55)]'
                      : 'border-forest/10 bg-[#1B3A2D] text-[#F5EDD8]/75 hover:border-gold hover:bg-gold hover:text-[#1B3A2D]'
                  }`}
                >
                  <span className={`shrink-0 font-sans text-[13px] font-semibold ${isActive ? 'text-[#1B3A2D]' : 'text-[#F5EDD8]/60 group-hover:text-[#1B3A2D]'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${isActive ? 'border-[#1B3A2D] bg-[#1B3A2D] text-gold' : 'border-[#F5EDD8]/10 bg-[#F5EDD8]/10 text-[#F5EDD8]/80 group-hover:border-[#1B3A2D] group-hover:bg-[#1B3A2D] group-hover:text-gold'}`}>
                    <Icon width={18} height={18} />
                  </span>
                  <span className={`min-w-0 flex-1 font-sans text-[1.125rem] font-bold ${isActive ? 'text-[#1B3A2D]' : 'text-[#F5EDD8]/85 group-hover:text-[#1B3A2D]'}`}>
                    {service.title}
                  </span>
                  {isActive ? (
                    <span aria-hidden="true" className="shrink-0 font-sans text-xl leading-none text-[#1B3A2D]">−</span>
                  ) : (
                    <span className="shrink-0 text-[#F5EDD8]/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#1B3A2D]">
                      <ArrowUpRightIcon />
                    </span>
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      id={`service-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 rounded-sm border border-gold-deep/20 bg-[#1B3A2D] p-6 sm:p-8">
                        <ServiceDetails service={service} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Original tab and detail panel layout for desktop */}
        <div className="services-desktop-layout mt-16 gap-7">
          <div className="flex flex-col gap-2">
            {services.list.map((service, i) => {
              const TabIcon = iconMap[service.icon]
              const isActive = i === selectedIndex

              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-5 rounded-sm border px-6 py-5 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-gold bg-gold text-[#1B3A2D] shadow-[0_10px_30px_-12px_rgba(212,168,83,0.55)]'
                      : 'border-[#F5EDD8]/10 bg-[#1B3A2D] text-[#F5EDD8]/75 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-[#1B3A2D]'
                  }`}
                >
                  <span className={`font-sans text-[13px] font-semibold ${isActive ? 'text-[#1B3A2D]' : 'text-[#F5EDD8]/60 group-hover:text-[#1B3A2D]'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:scale-110 ${isActive ? 'border-[#1B3A2D] bg-[#1B3A2D] text-gold' : 'border-[#F5EDD8]/10 bg-[#F5EDD8]/10 text-[#F5EDD8]/80 group-hover:border-[#1B3A2D] group-hover:bg-[#1B3A2D] group-hover:text-gold'}`}>
                    <TabIcon width={18} height={18} />
                  </span>
                  <span className={`font-sans text-[1.125rem] font-bold ${isActive ? 'text-[#1B3A2D]' : 'text-[#F5EDD8]/85 group-hover:text-[#1B3A2D]'}`}>
                    {service.title}
                  </span>
                  {!isActive && (
                    <span className="ml-auto text-[#F5EDD8]/60 opacity-80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#1B3A2D] group-hover:opacity-100">
                      <ArrowUpRightIcon />
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          <div className="relative overflow-hidden rounded-sm border border-gold-deep/20 bg-[#1B3A2D] p-8 md:p-10 lg:p-12">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <ServiceDetails service={current} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
