// All site copy and data lives here. Images are NOT imported here —
// each component imports its own section's images from
// src/assets/<section>/ and maps them to these records by `imageKey`.
// Add a project, testimonial or nav link by editing this file.

export const nav = {
  wordmark: 'Tanzim',
  links: [
    { label: 'Work', href: '#work' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Services', href: '#services' },
    { label: 'How I work', href: '#process' },
    { label: 'Experience', href: '#experience' },
    { label: 'Newsletter', href: '#first-brick' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: { label: 'Book a call', hoverLabel: "Let's Talk", href: 'https://calendar.app.google/U9xm4VCynV8eZa4r6' },
}

export const social = {
  linkedin: 'https://www.linkedin.com/in/md-tanzim-hossain-m-0bb3a6230/',
  dribbble: 'https://dribbble.com/jafir_bro',
  github: 'https://github.com/jafirwadi',
  upwork: 'https://www.upwork.com/freelancers/~013ef8eac5af9f3044',
  email: 'tanzimjafirwadi@gmail.com',
  whatsapp: 'https://wa.me/8801680799597',
  whatsappDisplay: '+880 1680-799597',
  phoneDisplay: '+880 1680-799597',
  location: 'Sylhet, Bangladesh',
}

export const hero = {
  roleTitle: 'Front-end WordPress & Webflow Developer',
  headline: ['Your website’s job isn’t to look good.', 'It’s to be trusted.'],
  sub: 'Hi, I’m Tanzim. I build websites for clinics, advisors, and healthcare brands that turn anxious visitors into booked patients and clients. Not only through better design but also understanding what your visitor needs to feel before they reach out.',
  stats: [
    { value: '100+', label: 'Projects' },
    { value: '5+', label: 'Years' },
    { value: '1M+', label: 'Revenue Generated' },
  ],
  primaryCta: { label: 'Book Discovery Call', hoverLabel: "Let's Talk", href: 'https://calendar.app.google/U9xm4VCynV8eZa4r6' },
  secondaryCta: { label: 'See My Work', hoverLabel: 'Take a Look', href: '#work' },
}

// Selected clients & projects — the marquee strip. `imageKey` maps to
// a file in src/assets/client-strip/ (mapped inside ClientStrip.jsx).
export const tickerItems = [
  { name: 'Buraq Lab', mark: 'BL', imageKey: 'buraq-lab' },
  { name: 'Synster Platform', mark: 'SP', imageKey: 'synster-platform' },
  { name: 'Medicology Health', mark: 'MH', imageKey: 'medicology-health' },
  { name: 'Mentara', mark: 'MT', imageKey: 'mentara' },
  { name: 'Train Me Consulting', mark: 'TM', imageKey: 'train-me-consulting' },
  { name: 'NextDim.io', mark: 'ND', imageKey: 'nextdim' },
  { name: 'HowToDiscuss', mark: 'HD', imageKey: 'howtodiscuss' },
  { name: 'Gold IRA For You', mark: 'GI', imageKey: 'gold-ira' },
  { name: 'Richmond Denture Implant Centre', mark: 'RD', imageKey: 'richmond-denture' },
]

export const positioning = {
  eyebrow: 'How I think before I build',
  quote: 'Before I touch a single tool, I ask one question: what does this website need to make happen?',
  body: 'Not what it should look like — what it needs to do, for a specific visitor, at a specific emotional moment, with a specific next step in mind. Tools and tech stacks don’t make a website profitable. Strategy and thinking do.',
}

// `imageKey` maps to a file in src/assets/positioning/ (mapped inside Positioning.jsx)
export const pillars = [
  {
    icon: 'compass',
    imageKey: 'strategist',
    title: 'Strategist before developer',
    body: 'I ask what a visitor needs to feel, understand and do before a single element gets placed. Layout, copy and CTA placement all flow from that answer.',
  },
  {
    icon: 'heart',
    imageKey: 'anxious-moment',
    title: 'Built for the anxious moment',
    body: 'A patient researching implants is anxious. A family choosing elder care is overwhelmed. I design for that emotional state — not a generic user.',
  },
  {
    icon: 'gauge',
    imageKey: 'performance',
    title: 'Performance from day one',
    body: 'SEO foundation, PageSpeed, accessibility and mobile-first design aren’t add-ons. 99/100 PageSpeed on Elementor Free, with zero premium plugins, is standard.',
  },
  {
    icon: 'focus',
    imageKey: 'specialist',
    title: 'A specialist, not a generalist',
    body: 'I build specifically for healthcare, wellness and finance — and my content, testimonials and portfolio all reflect that on purpose.',
  },
  {
    icon: 'trend',
    imageKey: 'outcomes',
    title: 'Outcomes, not deliverables',
    body: 'I don’t sell a website. I sell what it produces — more bookings, more enquiries, more trust. The site is the mechanism, not the product.',
  },
]

export const skillsOrbit = [
  'Figma', 'WordPress', 'Webflow', 'Elementor', 'HTML5', 'CSS3', 'TailwindCSS',
  'JavaScript', 'React', 'Node.js', 'Semantic SEO', 'WooCommerce', 'Bootstrap', 'jQuery',
]

export const services = {
  eyebrow: 'What I build',
  heading: 'What I build and why each one is different',
  sub: 'From the first Figma frame to a live, fast, search-ready site — pick a service to see what\u2019s included.',
  cta: { label: 'Start Project', hoverLabel: "Let's Build It" },
  list: [
    {
      tag: 'Design',
      title: 'UI / UX Design',
      icon: 'compass',
      description: 'Designing intuitive, visually compelling interfaces that users love and businesses convert with — from wireframe to a polished, developer-ready Figma file.',
      deliverables: ['Landing Page Design', 'Full Website UI', 'Mobile App Design', 'Figma Prototypes'],
      tech: ['Figma', 'FigJam', 'Prototyping'],
    },
    {
      tag: 'Build',
      title: 'WordPress Development',
      icon: 'code',
      description: 'High-converting WordPress builds from Figma with Elementor, custom CSS, and performance optimization — 99/100 PageSpeed without premium plugins.',
      deliverables: ['Figma-to-WordPress', 'WooCommerce Stores', 'Speed Optimization', 'Custom Elementor Builds'],
      tech: ['WordPress', 'Elementor', 'WooCommerce', 'ACF'],
    },
    {
      tag: 'Build',
      title: 'Webflow Development',
      icon: 'layers',
      description: 'Pixel-perfect, responsive Webflow builds with a real CMS, clean interactions, and SEO-ready architecture from day one.',
      deliverables: ['Figma-to-Webflow', 'CMS & Collections', 'Interactions & Animations', 'E-commerce Webflow'],
      tech: ['Webflow', 'Webflow CMS'],
    },
    {
      tag: 'Build',
      title: 'Front-End Development',
      icon: 'bolt',
      description: 'Clean, responsive, accessible code using modern frameworks — fast, cross-browser, and built to scale with your product.',
      deliverables: ['HTML5, CSS3, JavaScript', 'TailwindCSS / Bootstrap', 'Node.js / Express.js', 'Performance & A11y'],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js'],
    },
    {
      tag: 'Growth',
      title: 'Semantic SEO',
      icon: 'search',
      description: 'Topical-authority-driven SEO strategy that doesn’t just chase traffic — it converts visitors into leads and patients into bookings.',
      deliverables: ['On-Page SEO Audits', 'Topical Authority Building', 'Semantic Content Strategy', 'Keyword Research & Mapping'],
      tech: ['Rank Math', 'Yoast', 'Search Console', 'Ahrefs'],
    },
  ],
}

// `imageKey` maps to a file in src/assets/work/ (mapped inside Work.jsx)
export const projects = [
  {
    name: 'Richmond Denture & Implant Centre',
    imageKey: 'richmond-denture',
    tag: 'Healthcare · Dental clinic',
    stack: 'Webflow · Custom JavaScript · Google Maps API',
    description: 'A conversion-focused site guiding patients through a multi-step decision journey — sticky scroll panels, an animated FAQ accordion, and a custom draggable before/after slider.',
    result: 'Built on a custom Webflow variable system for consistent typography, color and spacing sitewide.',
    href: 'https://denture-clinic-debc16.webflow.io/',
  },
  {
    name: 'Medicology Health',
    imageKey: 'medicology',
    tag: 'Healthcare · Telehealth weight loss',
    stack: 'WordPress · Elementor Pro · Custom JS/CSS',
    description: 'A high-performance telehealth platform with a full technical SEO overhaul, Google Business Profile creation, and schema markup — optimized within WordPress.com hosting constraints.',
    result: 'Reusable Elementor templates built for fast, consistent future updates.',
    href: 'https://medicologyhealth.com/',
  },
  {
    name: 'Gold IRA For You',
    imageKey: 'gold-ira',
    tag: 'Finance · Affiliate review platform',
    stack: 'WordPress · Elementor Free · Custom CSS',
    description: 'A 5-company comparison and review platform helping retirement investors aged 50–70 diversify into precious metals — positioned as an independent, education-first resource rather than a sales funnel.',
    result: '99/100 PageSpeed on a fully custom comparison system, with zero premium plugins.',
    href: 'https://goldiraforyou.com/',
  },
  {
    name: 'Train Me Consulting',
    imageKey: 'train-me-consulting',
    tag: 'Healthcare · Mental wellness',
    stack: 'WordPress · Custom JS/CSS · Conversion design',
    description: 'A compassionate mental healthcare platform with conversion-focused design, trust-building elements throughout, and optimized speed for an anxious, first-time visitor.',
    result: 'Design built specifically to lower the emotional barrier to booking a first session.',
    href: 'https://trainmeconsulting.com.au/',
  },
  {
    name: 'Buraq Lab',
    imageKey: 'buraq-lab',
    tag: 'Agency · Design studio',
    stack: 'WordPress · Elementor · Branding',
    description: 'Co-founded design agency website — bold visual storytelling, service showcasing, pricing tiers, and a full team portfolio built to win client trust fast.',
    result: 'A complete brand system: positioning, pricing tiers and case studies in one cohesive site.',
    href: 'https://buraqlab.com/',
  },
  {
    name: 'Mentara',
    imageKey: 'mentara',
    tag: 'Wellness · Landing page',
    stack: 'HTML5 · CSS3 · Vanilla JavaScript',
    description: 'A mental-health and wellness landing page rebuilt in light mode from a dark-themed reference — 13 sections, zero framework dependencies, accessibility built in from the start.',
    result: 'A CSS variable system that lets the whole page be retheme-d fast.',
    href: 'https://jafirwadi.github.io/mentara-white/',
  },
  {
    name: 'Synster Platform',
    imageKey: 'synster',
    tag: 'SaaS · Collaboration platform',
    stack: 'Node.js · Next.js',
    description: 'A UI and registration-flow overhaul for a Sweden-based SaaS platform — refining navigation, clarity and trust-building elements throughout the product.',
    result: 'Reduced user drop-off with a streamlined, friction-free onboarding flow.',
    href: 'https://synsterplatform.com/',
  },
]

// `imageKey` maps to a file in src/assets/experience/ (mapped inside Experience.jsx)
export const experience = [
  {
    role: 'Project Lead Developer',
    company: 'Buraq Lab',
    imageKey: 'buraq-lab',
    mark: 'BL',
    type: 'Full-time',
    dates: 'Sep 2023 – Jun 2026',
    duration: '2 yrs 10 mos',
    location: 'United Kingdom · Remote',
    description: 'Led end-to-end website development for healthcare, wellness and finance clients under the Buraq Lab brand — from discovery and Figma design through to live deployment.',
    skills: ['WordPress', 'Elementor', 'Figma', 'Webflow'],
  },
  {
    role: 'Front-End WordPress Developer',
    company: 'Synster Platform LLC',
    imageKey: 'synster-platform',
    mark: 'SP',
    type: 'Contract',
    dates: 'Aug 2023 – May 2025',
    duration: '1 yr 10 mos',
    location: 'Sweden · Remote',
    description: 'Contract front-end developer on an ongoing SaaS platform built with WordPress and Elementor, focused on UX, conversion performance and platform stability.',
    skills: ['WordPress', 'Elementor', 'UX'],
  },
  {
    role: 'Product Listings & Performance',
    company: 'Zikora | UK Shoes',
    imageKey: 'zikora2',
    mark: 'ZK',
    type: 'Contract',
    dates: 'Oct 2024 – Feb 2025',
    duration: '5 mos',
    location: 'United Kingdom · Remote',
    description: 'Published 5–10 optimized Shopify product listings daily; improved page performance through refined SEO metadata, layout structure and UX adjustments.',
    skills: ['Shopify', 'SEO', 'Store Management'],
  },
  {
    role: 'On-Page SEO & Content Writer',
    company: 'HowToDiscuss',
    imageKey: 'howtodiscuss',
    mark: 'HD',
    type: 'Freelance',
    dates: 'Oct 2021 – May 2023',
    duration: '1 yr 8 mos',
    location: 'Ireland · Remote',
    description: 'Wrote 100+ SEO-optimized articles — 20+ ranked #1 on Google, 80% reaching Page One — through keyword research and topical content strategy.',
    skills: ['Semantic SEO', 'Content Strategy'],
  },
]

export const process = {
  eyebrow: 'How I work',
  heading: 'From vision to launch',
  sub: 'A transparent, structured process — built to deliver on time, every time.',
  advanceNote: 'A 30% advance secures your spot in the schedule.',
  steps: [
    { day: 'Day 1', title: 'Discovery call', body: 'A free call to understand your vision, goals, audience and technical needs. This is where the project actually starts.' },
    { day: 'Days 2–7', title: 'Design', body: 'Wireframes and high-fidelity Figma mockups built around your brand identity. Every element is placed on purpose.' },
    { day: 'Days 7–10', title: 'Feedback', body: 'You review the mockups and share notes. We iterate until the design matches your goals and your voice.' },
    { day: 'Days 10–20', title: 'Development', body: 'Approved designs become clean, responsive code — fast performance, semantic SEO and cross-browser support built in.' },
    { day: 'Days 20–23', title: 'Final review', body: 'You test the live site while I run QA across devices, browsers and screen sizes, and handle final adjustments.' },
    { day: 'Day 24+', title: 'Handover', body: 'Your site goes live. You get every source file, documentation, and support for a clean transition.' },
  ],
}

// `imageKey` maps to a file in src/assets/testimonials/ (mapped inside Testimonials.jsx)
// `countryCode` is the numeric ISO 3166-1 id the bundled world map uses to
// highlight a country; `coords` [lng, lat] places the pulsing marker more
// precisely at city level.
export const testimonials = [
  {
    headline: 'Excellent experience from start to finish.',
    quote: 'He built my website exactly as I envisioned and was professional, responsive, and easy to work with throughout. I would absolutely hire Tanzim again.',
    name: 'Frida Reinholdsson',
    role: 'Manager, Strategic Partnerships',
    source: 'Upwork',
    imageKey: 'frida',
    location: 'Texas, USA',
    countryCode: '840',
    coords: [-99.9, 31.9],
  },
  {
    headline: 'Never stopping until everything was just right.',
    quote: 'What stood out most was the commitment to making sure I was completely satisfied. Professional, patient and highly skilled.',
    name: 'Annabelle Pichardo',
    role: 'CEO, Medicology Health',
    source: 'LinkedIn',
    imageKey: 'annabelle',
    location: 'Puerto Rico & United States',
    countryCode: '630',
    coords: [-66.5, 18.2],
  },
  {
    headline: 'A solid strategic approach from day one.',
    quote: 'Strong technical knowledge from the very beginning — identifying key improvements and providing insights that made a real difference in visibility and performance.',
    name: 'Fernando Valdes',
    role: 'Home Staging Specialist',
    source: 'LinkedIn',
    imageKey: 'fernando',
    location: 'Barcelona, Spain',
    countryCode: '724',
    coords: [2.15, 41.39],
  },
  {
    headline: 'Prompt, smooth, and genuinely enjoyable.',
    quote: 'Prompt in both responses and delivery, making the collaboration smooth and enjoyable. I would highly recommend him for any web development project.',
    name: 'Salman Qaisar',
    role: 'PM, Train Me Consulting',
    source: 'LinkedIn',
    imageKey: 'salman',
    location: 'Hectorville, Australia',
    countryCode: '036',
    coords: [138.65, -34.85],
  },
  {
    headline: 'Attentive to every detail.',
    quote: 'Offered helpful suggestions to improve the form’s flow and design. The quality exceeded my expectations.',
    name: 'Jeffrey Pichardo',
    role: 'Marketing & Sales Director',
    source: 'Upwork',
    imageKey: 'jeffrey',
    location: 'Puerto Rico & United States',
    countryCode: '630',
    coords: [-66.5, 18.2],
  },
]

// Issue 11 was published on Monday, September 28, 2026 at 9 PM Bangladesh time.
// Bangladesh is UTC+6, so the next scheduled issue is exactly one week later.
const FIRST_BRICK_BASE_ISSUE_COUNT = 11
const FIRST_BRICK_BASE_PUBLISHED_AT = Date.UTC(2026, 8, 28, 15)
const FIRST_BRICK_PUBLISH_INTERVAL = 7 * 24 * 60 * 60 * 1000

export function getFirstBrickIssueCount(now = new Date()) {
  const weeksSinceBaseline = Math.floor(
    (now.getTime() - FIRST_BRICK_BASE_PUBLISHED_AT) / FIRST_BRICK_PUBLISH_INTERVAL,
  )

  return FIRST_BRICK_BASE_ISSUE_COUNT + Math.max(0, weeksSinceBaseline)
}

export const firstBrick = {
  eyebrow: 'The newsletter',
  name: 'First Brick',
  tagline: 'Building better websites starts here.',
  body: 'A weekly, education-first newsletter for small business owners, clinic owners, advisors and founders who want to make smarter decisions about their website — no jargon, just the practical insights that save money and avoid expensive mistakes.',
  cadence: 'Weekly · LinkedIn Newsletter',
  href: 'https://www.linkedin.com/newsletters/first-brick-7484257431901065216',
  cta: { label: 'Read First Brick', hoverLabel: 'Subscribe Free' },
}

export const midCta = {
  heading: 'Like what you see? Let’s talk.',
  cta: { label: "Let's Talk", hoverLabel: 'Start a Project', href: '#contact' },
}

export const currentlyAvailable = {
  label: 'Currently available for new projects',
}

export const cta = {
  heading: 'Have a project that needs to make something happen?',
  sub: 'I’m currently available for new projects. Let’s talk about what your site needs to do — then build it.',
  primaryCta: { label: 'Book a Discovery Call', hoverLabel: "Let's Talk", href: 'https://calendar.app.google/U9xm4VCynV8eZa4r6' },
}

export const contactForm = {
  eyebrow: 'Not ready for a call?',
  heading: 'Send a project brief instead',
  sub: 'Some people think better in writing. Tell me what you need — I read every message myself and reply within a day.',
  serviceOptions: ['UI / UX Design', 'WordPress Development', 'Webflow Development', 'Front-End Development', 'Semantic SEO', 'Full Project (Design + Dev)'],
  budgetOptions: ['$500 – $1,000', '$1,000 – $3,000', '$3,000 – $5,000', '$5,000+'],
  submitCta: { label: 'Send Message', hoverLabel: 'Deliver It' },
}

export const faqs = [
  {
    q: 'What platforms do you build on — WordPress, Webflow, or custom code?',
    a: 'Whichever fits the goal, not whichever I’d rather use. WordPress with Elementor for content-heavy sites that you’ll update yourselves, Webflow when interactions and a lighter CMS matter more, and hand-coded HTML/CSS/JS or React when performance or a fully custom interaction needs it. I’ll recommend one on the discovery call and explain why.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most full website builds run about 24 days from kickoff to handover: a discovery call on day one, design days 2–10, development days 10–20, then review and handover. Smaller builds (a single landing page, a Webflow-only site) can move faster.',
  },
  {
    q: 'How does pricing and the advance payment work?',
    a: 'A 30% advance secures your slot in the schedule and covers the discovery and design phase. The remainder is due at handover, once you’ve tested the live site. You get a fixed quote up front — no surprise invoices mid-project.',
  },
  {
    q: 'Do you design in Figma before development starts?',
    a: 'Always. You approve wireframes and a high-fidelity Figma mockup before a single line of code gets written, so there’s no rebuilding a page because the direction shifted halfway through development.',
  },
  {
    q: 'Will my site be fast and SEO-ready out of the box?',
    a: 'Yes — PageSpeed, semantic on-page SEO, mobile-first responsive layout and accessibility basics are built in from day one, not sold as an add-on later. 99/100 PageSpeed on Elementor Free, with zero premium plugins, is the standard I hold myself to.',
  },
  {
    q: 'What happens if I don’t like the initial design direction?',
    a: 'The design-feedback phase (days 7–10) exists exactly for this. We iterate on the Figma mockup until it matches your goals and your brand voice — before development starts, when changes are still cheap.',
  },
  {
    q: 'Do you offer support after the site goes live?',
    a: 'Yes. Handover includes documentation and a support window for the inevitable small fixes right after launch. Ongoing retainers for updates, content changes or new pages are available if you’d rather not think about maintenance at all.',
  },
  {
    q: 'Who owns the source files and the finished site?',
    a: 'You do — completely. At handover you get every source file (Figma, code, documentation) and full access to the live site. Nothing is held back or licensed to you; it’s yours.',
  },
  {
    q: 'Do you work with agencies, or only directly with business owners?',
    a: 'Both. I regularly work white-label behind agencies as the build partner, and directly with clinic owners, advisors and founders who’d rather skip the middle layer. Either way, the same process and standards apply.',
  },
  {
    q: 'What do you need from me to get started?',
    a: 'Just a discovery call, or a written brief if you’d rather start that way — your goals, who the site needs to convince, any brand assets you already have, and a rough budget range. I’ll turn that into a proposal and a schedule.',
  },
]

export const footerSkillsTicker = [
  'Figma', 'WordPress', 'Webflow', 'Elementor', 'HTML5', 'CSS3', 'TailwindCSS',
  'JavaScript (ES6+)', 'React', 'Node.js', 'Semantic SEO', 'WooCommerce',
]
