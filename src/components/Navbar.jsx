import { useState } from 'react'
import { nav } from '../data/content'
import Signature from './Signature'
import SwapText from './SwapText'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-forest/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-6 py-3 md:px-10 lg:min-h-[72px] lg:gap-6 lg:px-0">
        <a href="#home" aria-label={nav.wordmark} className="shrink-0">
          <Signature textClassName="text-4xl" />
        </a>

        <nav className="hidden min-h-[44px] items-center justify-end gap-7 lg:ml-auto lg:flex lg:items-center lg:gap-8">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative whitespace-nowrap font-sans text-base text-cream/75 transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-cream hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 self-center rounded-sm border border-gold/60 px-6 py-3 font-sans text-base font-bold leading-none text-gold transition-all duration-300 hover:scale-105 hover:bg-gold hover:text-forest hover:shadow-[0_8px_24px_-6px_rgba(212,168,83,0.55)] active:scale-95 lg:mr-0"
          >
            <SwapText label={nav.cta.label} hoverLabel={nav.cta.hoverLabel} />
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="group flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-sm lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`h-px w-6 bg-cream transition-all duration-300 group-hover:bg-gold ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-cream transition-all duration-300 group-hover:bg-gold ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px w-6 bg-cream transition-all duration-300 group-hover:bg-gold ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-cream/10 px-6 pb-6 md:px-10 lg:hidden">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 font-sans text-cream/80 transition-colors duration-200 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-sm border border-gold/60 px-7 py-3.5 text-center font-sans text-base font-bold text-gold transition-all duration-300 active:scale-95 active:bg-gold active:text-forest"
          >
            {nav.cta.label}
          </a>
        </nav>
      )}
    </header>
  )
}
