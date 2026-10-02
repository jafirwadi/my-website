import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpIcon } from './Icons'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-forest text-gold shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-gold hover:text-forest hover:shadow-[0_10px_28px_-6px_rgba(212,168,83,0.6)] active:scale-95 md:bottom-8 md:right-8"
        >
          <ArrowUpIcon />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
