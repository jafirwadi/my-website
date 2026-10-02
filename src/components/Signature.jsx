import { motion } from 'framer-motion'

// Draws the name on like a signature, holds, then redraws — on a loop,
// for as long as the component is mounted.
const LOOP = { duration: 1.3, ease: [0.65, 0, 0.35, 1], delay: 0.15, repeat: Infinity, repeatType: 'loop', repeatDelay: 4 }

export default function Signature({ textClassName = 'text-4xl', dotSizeClassName = 'h-1.5 w-1.5' }) {
  return (
    <span className="relative inline-block">
      <motion.span
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={LOOP}
        className={`block font-signature leading-none text-gold ${textClassName}`}
      >
        Tanzim
      </motion.span>
      <motion.span
        className={`pointer-events-none absolute bottom-1 rounded-full bg-gold shadow-[0_0_6px_2px_rgba(212,168,83,0.6)] ${dotSizeClassName}`}
        initial={{ left: '0%', opacity: 1 }}
        animate={{ left: '96%', opacity: [1, 1, 0] }}
        transition={{ ...LOOP, times: [0, 0.85, 1] }}
      />
    </span>
  )
}
