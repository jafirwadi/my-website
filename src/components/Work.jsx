import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { projects, social } from '../data/content'
import { ArrowUpRightIcon, DribbbleIcon } from './Icons'
import SwapText from './SwapText'

import goldIra from '../assets/work/gold-ira.webp'
import richmondDenture from '../assets/work/richmond-denture.webp'
import medicology from '../assets/work/medicology.webp'
import synster from '../assets/work/synster.webp'
import mentara from '../assets/work/mentara.webp'
import buraqLab from '../assets/work/buraq-lab.webp'
import trainMeConsulting from '../assets/work/train-me-consulting.webp'

// Drop a replacement file with the SAME name into src/assets/work/
// to swap in a real screenshot — no code change needed.
const images = {
  'gold-ira': goldIra,
  'richmond-denture': richmondDenture,
  'medicology': medicology,
  'synster': synster,
  'mentara': mentara,
  'buraq-lab': buraqLab,
  'train-me-consulting': trainMeConsulting,
}

function ProjectCard({ project, image }) {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })
  const spring = { stiffness: 110, damping: 28, mass: 0.35 }
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [18, 0, -18]), spring)
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.94]), spring)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.72, 1, 0.72]), spring)

  return (
    <div
      ref={cardRef}
      className="relative mx-auto flex max-w-content items-center py-6"
      style={{ perspective: '1100px' }}
    >
      <motion.article
        style={{ rotateX, scale, opacity, transformStyle: 'preserve-3d', transformOrigin: 'center center' }}
        className="grid w-full overflow-hidden rounded-md border border-cream/10 bg-forest lg:grid-cols-2"
      >
        <img
          src={image}
          alt={`${project.name} — screenshot`}
          className="aspect-[16/11] w-full bg-cream/5 object-cover lg:aspect-auto lg:h-full lg:min-h-full lg:object-contain"
        />

        <div className="flex flex-col justify-start bg-cream/[0.04] p-8 md:p-12">
          <p className="font-sans text-[13px] uppercase tracking-wide2 text-cream/50">{project.tag}</p>
          <h3 className="mt-3 font-serif text-2xl font-semibold text-cream sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-4 max-w-[48ch] font-sans text-[1rem] leading-relaxed text-cream/75">
            {project.description}
          </p>
          <p className="mt-4 max-w-[48ch] font-sans text-[1rem] leading-relaxed text-gold/90">
            {project.result}
          </p>
          <p className="mt-5 font-sans text-[1rem] text-cream/50">{project.stack}</p>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex w-fit items-center gap-2 rounded-sm border border-gold/60 bg-gold/10 px-[20px] py-[10px] font-sans text-[17px] font-bold text-gold transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/15"
            >
              <SwapText label="View live" hoverLabel="Gooo" icon={ArrowUpRightIcon} />
            </a>
          )}
        </div>
      </motion.article>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans text-[1.125rem] tracking-wide2 text-gold">Selected work</p>
            <h2 className="mt-3 max-w-xl font-serif text-4xl font-semibold text-cream md:text-5xl">
              Projects that speak results
            </h2>
          </div>
          <p className="max-w-sm font-sans text-[1.125rem] text-cream/70">
            A curated look at sites built for conversion, trust and lasting impressions. Keep scrolling to see each project turn into view.
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-0 max-w-content">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} image={images[project.imageKey]} />
        ))}
      </div>

      <div className="mx-auto max-w-content">
        <div className="relative z-0 mt-[30px] flex flex-col items-center justify-center text-center text-[1rem] text-cream/70">
          <p className="font-sans text-[20px]">More work lives on</p>
          <a
            href={social.dribbble}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-3 inline-flex items-center justify-center gap-3 rounded-sm bg-gold px-8 py-4 font-sans text-lg font-bold text-forest transition-all duration-300 ease-editorial hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_12px_32px_-8px_rgba(212,168,83,0.65)] active:scale-95"
          >
            <SwapText label="Dribbble" hoverLabel="View" icon={DribbbleIcon} iconPosition="leading" iconClassName="dribbble-icon-spin" />
          </a>
        </div>
      </div>
    </section>
  )
}
