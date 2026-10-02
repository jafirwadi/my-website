import { motion } from 'framer-motion'
import { skillsOrbit } from '../data/content'
import {
  SiFigma, SiWordpress, SiWebflow, SiElementor, SiHtml5, SiCss,
  SiTailwindcss, SiJavascript, SiReact, SiNodedotjs, SiWoocommerce,
  SiBootstrap, SiJquery,
} from 'react-icons/si'
import { SearchIcon } from './Icons'

// Direct map, no indirection — each skill name to its real brand icon.
// "Semantic SEO" has no product logo, so it uses a line icon instead.
const ICONS = {
  Figma: SiFigma,
  WordPress: SiWordpress,
  Webflow: SiWebflow,
  Elementor: SiElementor,
  HTML5: SiHtml5,
  CSS3: SiCss,
  TailwindCSS: SiTailwindcss,
  JavaScript: SiJavascript,
  React: SiReact,
  'Node.js': SiNodedotjs,
  WooCommerce: SiWoocommerce,
  Bootstrap: SiBootstrap,
  jQuery: SiJquery,
}

const ICON_COLORS = {
  Figma: '#F24E1E',
  WordPress: '#21759B',
  Webflow: '#4353FF',
  Elementor: '#92003B',
  HTML5: '#E34F26',
  CSS3: '#1572B6',
  TailwindCSS: '#06B6D4',
  JavaScript: '#D6BA00',
  React: '#61DAFB',
  'Node.js': '#339933',
  WooCommerce: '#96588A',
  Bootstrap: '#7952B3',
  jQuery: '#0769AD',
}

// Slightly larger than the original 250px radius.
// This gives the stack names more breathing room.
const RADIUS = 300

function Tag({ skill }) {
  const Icon = ICONS[skill]

  return (
    <span className="flex items-center gap-3 whitespace-nowrap bg-transparent px-0 py-0 font-sans text-[1.125rem] text-forest/80 shadow-none">
      {Icon ? (
        <Icon
          size={21}
          className="shrink-0"
          style={{ color: ICON_COLORS[skill] }}
        />
      ) : (
        <SearchIcon
          width={21}
          height={21}
          className="shrink-0 text-forest/70"
        />
      )}

      {skill}
    </span>
  )
}

export default function SkillsOrbit() {
  return (
    <section className="border-y border-forest/10 bg-cream-paper px-6 py-24 text-forest md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <p className="text-center font-sans text-[1.125rem] tracking-wide2 text-gold-deep">
          Tools, put to work
        </p>

        {/* Desktop orbital system */}
        <div className="relative mx-auto mt-4 hidden h-[680px] w-[680px] place-items-center lg:grid">

          {/*
            IMPORTANT:
            This container rotates around the center.
            The individual labels inside it counter-rotate,
            keeping their text and icons perfectly upright.
          */}
          <div className="orbit-ring absolute inset-0">

            {skillsOrbit.map((skill, i) => {
              const angle = (360 / skillsOrbit.length) * i
              const radians = (angle * Math.PI) / 180

              const x = Math.cos(radians) * RADIUS
              const y = Math.sin(radians) * RADIUS

              return (
                <div
                  key={skill}
                  className="orbit-position absolute left-1/2 top-1/2"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {/*
                    This inner element counter-rotates against
                    the orbit-ring so the text/icon stays upright.
                  */}
                  <div className="orbit-item">
                    <Tag skill={skill} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Static center heading */}
          <p className="relative z-10 max-w-xs text-balance text-center font-serif text-[2.2rem] font-semibold leading-snug text-forest">
            One toolkit, chosen on purpose for every build.
          </p>
        </div>

        {/* Mobile: keep the existing clean staggered layout */}
        <div className="lg:hidden">
          <p className="mx-auto mt-4 max-w-xs text-balance text-center font-serif text-[2.2rem] font-semibold leading-snug text-forest">
            One toolkit, chosen on purpose for every build.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {skillsOrbit.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Tag skill={skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
