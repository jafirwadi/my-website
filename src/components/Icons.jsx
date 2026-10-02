import {
  FaLinkedin, FaDribbble, FaGithub, FaWhatsapp, FaEnvelope,
} from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import {
  SiFigma, SiWordpress, SiWebflow, SiElementor, SiHtml5, SiCss,
  SiTailwindcss, SiJavascript, SiReact, SiNodedotjs, SiWoocommerce,
  SiBootstrap, SiJquery,
} from 'react-icons/si'

// Small, single-purpose line icons. All inherit color via currentColor
// so they pick up whatever text color class wraps them.
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const CalendarIcon = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
)

export const DownloadIcon = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5" />
    <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
  </svg>
)

export const ArrowUpRightIcon = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
)

export const ChevronDownIcon = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
)

export const ArrowUpIcon = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
)

// Adapts a react-icons component to this file's calling convention
// (width/height/className props) so every icon call site works the same.
const wrapIcon = (Icon) => ({ width = 18, height, className, ...rest }) => (
  <Icon size={height || width} className={className} {...rest} />
)

export const MailIcon = wrapIcon(FaEnvelope)

export const WhatsappIcon = wrapIcon(FaWhatsapp)

export const PinIcon = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <path d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.3" />
  </svg>
)

export const LinkedInIcon = wrapIcon(FaLinkedin)

export const DribbbleIcon = wrapIcon(FaDribbble)

export const GithubIcon = wrapIcon(FaGithub)

export const UpworkIcon = wrapIcon(SiUpwork)

// Service-section icons
export const CompassIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15 9l-2 5-5 2 2-5z" />
  </svg>
)
export const CodeIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
  </svg>
)
export const LayersIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <path d="M12 3l8 4.5L12 12 4 7.5zM4 12l8 4.5L20 12M4 16.5L12 21l8-4.5" />
  </svg>
)
export const BoltIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <path d="M13 3L5 13h5l-1 8 8-10h-5z" />
  </svg>
)
export const SearchIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M20 20l-4.8-4.8" />
  </svg>
)
export const BagIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <path d="M6 8h12l1 12H5z" />
    <path d="M9 8a3 3 0 016 0" />
  </svg>
)

// Pillar icons
export const TargetIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.6" fill="currentColor" />
  </svg>
)
export const HeartPulseIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <path d="M12 20s-7-4.4-9-9a5 5 0 019-3 5 5 0 019 3c-1 3-4.5 6-6 7.3" />
    <path d="M4.5 11h3l1.5-2.5L11 13l1.5-4 1.5 2h4.5" />
  </svg>
)
export const GaugeIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <path d="M4 15a8 8 0 1116 0" />
    <path d="M12 15l3.5-4.5" />
    <circle cx="12" cy="15" r="0.6" fill="currentColor" />
  </svg>
)
export const FocusIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <path d="M4 9V6a2 2 0 012-2h3M4 15v3a2 2 0 002 2h3M20 9V6a2 2 0 00-2-2h-3M20 15v3a2 2 0 01-2 2h-3" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)
export const TrendUpIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <path d="M4 16l5-5 4 4 7-8" />
    <path d="M14 7h6v6" />
  </svg>
)

export const CheckIcon = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <path d="M5 12.5l4.5 4.5L19 7" />
  </svg>
)

export const CopyIcon = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <rect x="8" y="8" width="12" height="12" rx="2" />
    <path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2" />
  </svg>
)

export const PlusIcon = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const SendIcon = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <path d="M4 12l16-8-6 16-3-6-7-2z" />
  </svg>
)

export const iconMap = {
  compass: CompassIcon,
  code: CodeIcon,
  layers: LayersIcon,
  bolt: BoltIcon,
  search: SearchIcon,
  bag: BagIcon,
  target: TargetIcon,
  heart: HeartPulseIcon,
  gauge: GaugeIcon,
  focus: FocusIcon,
  trend: TrendUpIcon,
}

// Real brand marks for the skills-orbit tags. "Semantic SEO" isn't a
// product with a logo, so it falls back to the line-icon SearchIcon.
export const toolIconMap = {
  Figma: wrapIcon(SiFigma),
  WordPress: wrapIcon(SiWordpress),
  Webflow: wrapIcon(SiWebflow),
  Elementor: wrapIcon(SiElementor),
  HTML5: wrapIcon(SiHtml5),
  CSS3: wrapIcon(SiCss),
  TailwindCSS: wrapIcon(SiTailwindcss),
  JavaScript: wrapIcon(SiJavascript),
  React: wrapIcon(SiReact),
  'Node.js': wrapIcon(SiNodedotjs),
  WooCommerce: wrapIcon(SiWoocommerce),
  Bootstrap: wrapIcon(SiBootstrap),
  jQuery: wrapIcon(SiJquery),
  'Semantic SEO': SearchIcon,
}
