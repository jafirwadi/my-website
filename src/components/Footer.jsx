import { social, footerSkillsTicker } from '../data/content'
import Marquee from './Marquee'
import Signature from './Signature'

const explore = [
  { label: 'Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Services', href: '#services' },
  { label: 'How I work', href: '#process' },
  { label: 'Experience', href: '#experience' },
  { label: 'First Brick', href: '#first-brick' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const elsewhere = [
  { label: 'LinkedIn', href: social.linkedin },
  { label: 'Dribbble', href: social.dribbble },
  { label: 'GitHub', href: social.github },
  { label: 'Upwork', href: social.upwork },
  { label: 'WhatsApp', href: social.whatsapp },
  { label: 'Email', href: `mailto:${social.email}` },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cream/10 bg-forest pt-16">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-x-6 gap-y-12 px-6 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8 md:px-10">
        <div className="col-span-2 md:col-span-1">
          <Signature textClassName="text-5xl" dotSizeClassName="h-2 w-2" />
          <p className="mt-4 max-w-xs font-sans text-[1.125rem] leading-relaxed text-cream/55">
            Front-end developer, UI/UX designer &amp; semantic SEO strategist — building conversion systems for healthcare, wellness and finance brands.
          </p>
          <p className="mt-6 font-sans text-[1rem] text-cream/35">© {new Date().getFullYear()} MD Tanzim Hossain Mridha</p>
        </div>

        <div>
          <p className="font-sans text-[1rem] font-bold uppercase tracking-wide2 text-cream/40">Explore</p>
          <ul className="mt-4 flex flex-col gap-3">
            {explore.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="group inline-flex items-center gap-1.5 font-sans text-[1rem] text-cream/70 transition-colors duration-200 hover:text-gold">
                  <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-3" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-sans text-[1rem] font-bold uppercase tracking-wide2 text-cream/40">Elsewhere</p>
          <ul className="mt-4 flex flex-col gap-3">
            {elsewhere.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group inline-flex items-center gap-1.5 font-sans text-[1rem] text-cream/70 transition-colors duration-200 hover:text-gold"
                >
                  <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-3" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 border-t border-cream/10 py-5">
        <Marquee
          items={footerSkillsTicker}
          renderItem={(skill) => (
            <span className="whitespace-nowrap px-6 font-sans text-xs text-cream/35">{skill}</span>
          )}
        />
      </div>

      <p
        aria-hidden="true"
        className="select-none whitespace-nowrap pb-2 text-center font-serif font-semibold leading-none text-cream/[0.05]"
        style={{ fontSize: 'clamp(4rem, 16vw, 11rem)' }}
      >
        TANZIM
      </p>
    </footer>
  )
}
