import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { contactForm, social } from '../data/content'
import { MailIcon, WhatsappIcon, PinIcon, LinkedInIcon, DribbbleIcon, GithubIcon, UpworkIcon, SendIcon, CopyIcon, CheckIcon, ChevronDownIcon } from './Icons'
import SwapText from './SwapText'

const infoRows = [
  { icon: MailIcon, label: 'Email', value: social.email, href: `mailto:${social.email}`, copyValue: social.email },
  { icon: WhatsappIcon, label: 'WhatsApp / Phone', value: social.whatsappDisplay, href: social.whatsapp, copyValue: social.whatsappDisplay },
  { icon: PinIcon, label: 'Location', value: social.location, href: null },
]

const socialIcons = [
  { icon: LinkedInIcon, href: social.linkedin, label: 'LinkedIn' },
  { icon: DribbbleIcon, href: social.dribbble, label: 'Dribbble' },
  { icon: GithubIcon, href: social.github, label: 'GitHub' },
  { icon: UpworkIcon, href: social.upwork, label: 'Upwork' },
  { icon: MailIcon, href: `mailto:${social.email}`, label: 'Email' },
]

const initialForm = { name: '', email: '', service: '', budget: '', preferredContactMethod: '', message: '' }

function FormDropdown({ name, label, options, value, onChange, placeholder }) {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(Math.max(options.indexOf(value), 0))
  const rootRef = useRef(null)
  const buttonRef = useRef(null)
  const listboxId = `contact-${name}-options`

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', closeOnOutsideClick)
    return () => document.removeEventListener('pointerdown', closeOnOutsideClick)
  }, [])

  const choose = (option) => {
    onChange(option)
    setActiveIndex(options.indexOf(option))
    setOpen(false)
    buttonRef.current?.focus()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      const direction = event.key === 'ArrowDown' ? 1 : -1
      if (!open) {
        setActiveIndex(Math.max(options.indexOf(value), 0))
        setOpen(true)
      } else {
        setActiveIndex((index) => (index + direction + options.length) % options.length)
      }
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault()
      setOpen(true)
      setActiveIndex(event.key === 'Home' ? 0 : options.length - 1)
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      if (open) choose(options[activeIndex])
      else setOpen(true)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <div ref={rootRef} className="relative mt-2">
      <input type="hidden" name={name} value={value} />
      <button
        ref={buttonRef}
        type="button"
        role="combobox"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={handleKeyDown}
        className="flex w-full items-center justify-between rounded-sm border border-[#F5EDD8]/15 bg-[#F5EDD8]/5 px-4 py-3 text-left font-sans text-sm text-[#F5EDD8] transition-colors focus:border-gold-deep focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
      >
        <span className={value ? '' : 'text-[#F5EDD8]/50'}>{value || placeholder}</span>
        <ChevronDownIcon className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-open' : ''}`} />
      </button>
      {open && (
        <div id={listboxId} role="listbox" aria-label={label} className="absolute left-0 right-0 top-full z-30 mt-1 max-h-56 overflow-y-auto rounded-sm border border-[#D4A853]/70 bg-[#1B3A2D] p-1 shadow-xl">
          {options.map((option, index) => {
            const isActive = index === activeIndex
            return (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={value === option}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => choose(option)}
                className={`block w-full rounded-sm px-3 py-2 text-left font-sans text-sm transition-colors ${isActive ? 'bg-gold text-[#1B3A2D]' : 'text-[#F5EDD8] hover:bg-gold hover:text-[#1B3A2D]'}`}
              >
                {option}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [copied, setCopied] = useState('')

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const copyContact = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(label)
      window.setTimeout(() => setCopied(''), 1800)
    } catch {
      setCopied('Copy failed')
      window.setTimeout(() => setCopied(''), 1800)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
    if (!endpoint) {
      setSubmitError(`The form is not connected yet. Please email me at ${social.email}.`)
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        const result = await response.json().catch(() => null)
        throw new Error(result?.errors?.[0]?.message || 'Your message could not be sent. Please try again.')
      }

      setForm(initialForm)
      setShowSuccess(true)
    } catch (error) {
      setSubmitError(error.message || 'Your message could not be sent. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-cream-paper px-6 py-24 text-forest md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <p className="font-sans text-[1.125rem] tracking-wide2 text-gold-deep">{contactForm.eyebrow}</p>
        <h2 className="mt-3 max-w-xl font-serif text-4xl font-semibold md:text-5xl">
          {contactForm.heading}
        </h2>
        <p className="mt-5 max-w-xl font-sans text-[1.125rem] leading-relaxed text-forest/65">{contactForm.sub}</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-6"
        >
          {/* Info column */}
          <div className="flex flex-col gap-6">
            {infoRows.map((row) => {
              const RowIcon = row.icon
              const content = (
                <span className="flex min-w-0 items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#F5EDD8]/10 text-gold-deep transition-transform duration-300 group-hover:scale-110">
                    <RowIcon />
                  </span>
                  <span className="min-w-0">
                    <p className="font-sans text-xs uppercase tracking-wide2 text-[#F5EDD8]/55">{row.label}</p>
                    <p className="break-all font-sans text-sm text-[#F5EDD8]">{row.value}</p>
                  </span>
                </span>
              )
              return (
                <div key={row.label} className="group flex items-center justify-between gap-3 rounded-sm border border-[#F5EDD8]/15 bg-[#1B3A2D] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60">
                  {row.href ? (
                    <a href={row.href} target="_blank" rel="noopener noreferrer" className="min-w-0 flex-1">
                      {content}
                    </a>
                  ) : (
                    <div className="min-w-0 flex-1">{content}</div>
                  )}
                  {row.copyValue && (
                    <button
                      type="button"
                      onClick={() => copyContact(row.copyValue, row.label)}
                      aria-label={`Copy ${row.label.toLowerCase()}`}
                      title={copied === row.label ? 'Copied' : `Copy ${row.label.toLowerCase()}`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm text-[#F5EDD8]/65 transition-colors hover:bg-[#F5EDD8]/10 hover:text-gold-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                    >
                      {copied === row.label ? <CheckIcon /> : <CopyIcon />}
                    </button>
                  )}
                </div>
              )
            })}

            <div className="mt-2 flex gap-3">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F5EDD8]/20 bg-[#1B3A2D] text-[#F5EDD8]/75 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-gold hover:text-gold hover:shadow-[0_8px_20px_-8px_rgba(156,122,52,0.5)]"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="rounded-md border border-[#F5EDD8]/15 bg-[#1B3A2D] p-6 md:p-8">
            <input type="hidden" name="_subject" value={`Project brief from ${form.name || 'your website'}`} />
            <label className="hidden" aria-hidden="true">
              Leave this field empty
              <input name="_gotcha" tabIndex={-1} autoComplete="off" />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="font-sans text-base text-[#F5EDD8]/60">Your name</span>
                <input
                  required
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="John Smith"
                  className="mt-2 w-full rounded-sm border border-[#F5EDD8]/15 bg-[#F5EDD8]/5 px-4 py-3 font-sans text-sm text-[#F5EDD8] placeholder:text-[#F5EDD8]/30 focus:border-gold-deep"
                />
              </label>
              <label className="block">
                <span className="font-sans text-base text-[#F5EDD8]/60">Email address</span>
                <input
                  required
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="john@company.com"
                  className="mt-2 w-full rounded-sm border border-[#F5EDD8]/15 bg-[#F5EDD8]/5 px-4 py-3 font-sans text-sm text-[#F5EDD8] placeholder:text-[#F5EDD8]/30 focus:border-gold-deep"
                />
              </label>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="block">
                <span className="font-sans text-base text-[#F5EDD8]/60">Service needed</span>
                <FormDropdown
                  name="service"
                  label="Service needed"
                  options={contactForm.serviceOptions}
                  value={form.service}
                  onChange={(value) => setForm((current) => ({ ...current, service: value }))}
                  placeholder="Select a service…"
                />
              </div>
              <div className="block">
                <span className="font-sans text-base text-[#F5EDD8]/60">Project budget</span>
                <FormDropdown
                  name="budget"
                  label="Project budget"
                  options={contactForm.budgetOptions}
                  value={form.budget}
                  onChange={(value) => setForm((current) => ({ ...current, budget: value }))}
                  placeholder="Select budget range…"
                />
              </div>
            </div>

            <label className="mt-5 block">
              <span className="font-sans text-base text-[#F5EDD8]/60">Preferred contact method <span className="text-[#F5EDD8]/40">(optional)</span></span>
              <input
                name="preferredContactMethod"
                type="text"
                value={form.preferredContactMethod}
                onChange={update('preferredContactMethod')}
                placeholder="Email, WhatsApp, Telegram, Slack, or another way to reach you"
                className="mt-2 w-full rounded-sm border border-[#F5EDD8]/15 bg-[#F5EDD8]/5 px-4 py-3 font-sans text-sm text-[#F5EDD8] placeholder:text-[#F5EDD8]/30 focus:border-gold-deep"
              />
            </label>

            <label className="mt-5 block">
              <span className="font-sans text-base text-[#F5EDD8]/60">Tell me about your project</span>
              <textarea
                required
                name="message"
                rows={5}
                value={form.message}
                onChange={update('message')}
                placeholder="Describe your project, goals, and ideal timeline…"
                className="mt-2 w-full resize-y rounded-sm border border-[#F5EDD8]/15 bg-[#F5EDD8]/5 px-4 py-3 font-sans text-sm text-[#F5EDD8] placeholder:text-[#F5EDD8]/30 focus:border-gold-deep"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="group mt-6 inline-flex items-center justify-center gap-2.5 rounded-sm bg-gold px-8 py-4 font-sans text-lg font-bold text-[#1B3A2D] transition-all duration-300 ease-editorial hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(212,168,83,0.5)] active:scale-95 active:translate-y-0"
            >
              <SwapText label={isSubmitting ? 'Sending...' : contactForm.submitCta.label} hoverLabel={isSubmitting ? 'Sending...' : contactForm.submitCta.hoverLabel} icon={SendIcon} />
            </button>

            {submitError && (
              <p role="alert" className="mt-4 font-sans text-sm text-[#FFB4A9]">
                {submitError}
              </p>
            )}
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-forest/70 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-success-title"
              className="w-full max-w-md rounded-md border border-gold-deep/30 bg-cream-paper p-[52px] text-center text-forest shadow-2xl"
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              <h3 id="contact-success-title" className="font-serif text-2xl font-semibold">Thank you!</h3>
              <p className="mt-3 font-sans text-lg leading-relaxed text-forest/75">
                Your message came through. I review every inquiry personally and will be in touch within 24 hours — usually sooner.
              </p>
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="mt-6 rounded-sm bg-gold px-6 py-3 font-sans text-sm font-bold text-forest transition-colors hover:bg-gold-deep"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
