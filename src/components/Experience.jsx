import { motion } from 'framer-motion'
import { experience } from '../data/content'

import buraqLab from '../assets/experience/buraq-lab.webp'
import synsterPlatform from '../assets/experience/synster-platform.png'
import zikora2 from '../assets/experience/zikora2.png'
import howtodiscuss from '../assets/experience/howtodiscuss.png'

// Drop a replacement file with the SAME name into src/assets/experience/
// to swap in a real company logo — no code change needed.
const marks = { 'buraq-lab': buraqLab, 'synster-platform': synsterPlatform, 'zikora2': zikora2, 'howtodiscuss': howtodiscuss }

export default function Experience() {
  return (
    <section id="experience" className="bg-cream-paper px-6 py-24 text-forest md:px-10 md:py-32 lg:px-12">
      <div className="mx-auto max-w-content">
        <p className="font-sans text-[1.125rem] tracking-wide2 text-gold-deep">Career so far</p>
        <h2 className="mt-3 max-w-xl font-serif text-4xl font-semibold md:text-5xl lg:text-6xl">
          How I got here
        </h2>

        <div className="mt-14 flex flex-col divide-y divide-forest/10 border-t border-forest/10">
          {experience.map((role, i) => (
            <motion.div
              key={role.role + role.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-5 py-7 md:gap-6 lg:gap-7 lg:py-8"
            >
              <img
                src={marks[role.imageKey]}
                alt={`${role.company} logo`}
                className="h-12 w-12 shrink-0 rounded-lg border border-gold-deep/25 bg-forest/5 object-contain md:h-14 md:w-14 lg:h-16 lg:w-16"
              />

              <div className="min-w-0">
                <h3 className="font-serif text-[19px] font-semibold text-forest sm:text-[22px] lg:text-[1.8rem]">{role.role}</h3>
                <p className="mt-0.5 font-sans text-[1rem] text-forest/75 lg:text-[1rem]">
                  {role.company} <span className="text-forest/35">·</span> {role.type}
                </p>
                <p className="mt-0.5 font-sans text-[13px] text-forest/55 lg:text-[14px]">
                  {role.dates} <span className="text-forest/35">·</span> {role.duration}
                </p>
                <p className="font-sans text-[13px] text-forest/55 lg:text-[14px]">{role.location}</p>

                <p className="mt-3 max-w-[62ch] font-sans text-[1rem] leading-relaxed text-forest/75 lg:text-[1rem]">
                  {role.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {role.skills.map((s) => (
                    <span key={s} className="rounded-full border border-forest/15 px-3 py-1 font-sans text-[13px] text-forest/70 lg:px-3.5 lg:py-1.5 lg:text-[12px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
