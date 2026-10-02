import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const DESKTOP_POINTER_QUERY = '(min-width: 768px) and (any-hover: hover) and (any-pointer: fine)'
const CREAM = '#F5EDD8'
const FOREST = '#1B3A2D'

function getRgba(color) {
  const values = color.match(/[\d.]+/g)
  if (!values || values.length < 3) return null
  return {
    r: Number(values[0]),
    g: Number(values[1]),
    b: Number(values[2]),
    a: values.length > 3 ? Number(values[3]) : 1,
  }
}

function getBackgroundLuminance(target) {
  const layers = []
  let element = target instanceof Element ? target : null

  while (element) {
    layers.push(element)
    if (element === document.body) break
    element = element.parentElement
  }

  let background = { r: 0, g: 0, b: 0, a: 0 }
  for (const layer of layers.reverse()) {
    const color = getRgba(window.getComputedStyle(layer).backgroundColor)
    if (!color || color.a === 0) continue

    const alpha = color.a + background.a * (1 - color.a)
    if (alpha === 0) continue
    background = {
      r: (color.r * color.a + background.r * background.a * (1 - color.a)) / alpha,
      g: (color.g * color.a + background.g * background.a * (1 - color.a)) / alpha,
      b: (color.b * color.a + background.b * background.a * (1 - color.a)) / alpha,
      a: alpha,
    }
  }

  const linear = [background.r, background.g, background.b].map((value) => {
    const channel = value / 255
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  })

  return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722
}

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [onLightBackground, setOnLightBackground] = useState(false)
  const lastPosition = useRef({ x: 0, y: 0 })
  const lastUpdateTime = useRef(Date.now())
  const velocity = useRef({ x: 0, y: 0 })
  const previousAngle = useRef(0)
  const accumulatedRotation = useRef(0)
  const currentBackgroundMode = useRef(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const cursorX = useSpring(x, { damping: 45, stiffness: 400, mass: 1, restDelta: 0.001 })
  const cursorY = useSpring(y, { damping: 45, stiffness: 400, mass: 1, restDelta: 0.001 })
  const rotation = useSpring(0, { damping: 60, stiffness: 300, mass: 1, restDelta: 0.001 })
  const scale = useSpring(1, { damping: 35, stiffness: 500, mass: 1, restDelta: 0.001 })

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_POINTER_QUERY)
    const updateEnabled = () => {
      setEnabled(mediaQuery.matches)
      if (!mediaQuery.matches) setVisible(false)
    }

    updateEnabled()
    mediaQuery.addEventListener('change', updateEnabled)
    return () => mediaQuery.removeEventListener('change', updateEnabled)
  }, [])

  useEffect(() => {
    if (!enabled) return undefined

    const originalCursor = document.body.style.cursor
    let rafId = 0
    let scaleTimeout
    let latestPosition = null
    document.body.style.cursor = 'none'

    const handlePointerMove = (event) => {
      if (event.pointerType === 'touch') return

      latestPosition = { x: event.clientX, y: event.clientY, target: event.target }
      if (rafId) return

      rafId = window.requestAnimationFrame(() => {
        rafId = 0
        if (!latestPosition) return

        const position = latestPosition
        latestPosition = null
        const now = Date.now()
        const elapsed = Math.max(now - lastUpdateTime.current, 1)
        velocity.current = {
          x: (position.x - lastPosition.current.x) / elapsed,
          y: (position.y - lastPosition.current.y) / elapsed,
        }
        lastUpdateTime.current = now
        lastPosition.current = { x: position.x, y: position.y }

        x.set(position.x)
        y.set(position.y)
        setVisible(true)

        const isLight = getBackgroundLuminance(position.target) > 0.55
        if (isLight !== currentBackgroundMode.current) {
          currentBackgroundMode.current = isLight
          setOnLightBackground(isLight)
        }

        const speed = Math.hypot(velocity.current.x, velocity.current.y)
        if (speed > 0.1) {
          const angle = Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) + 90
          let difference = angle - previousAngle.current
          if (difference > 180) difference -= 360
          if (difference < -180) difference += 360
          accumulatedRotation.current += difference
          rotation.set(accumulatedRotation.current)
          previousAngle.current = angle

          scale.set(0.95)
          window.clearTimeout(scaleTimeout)
          scaleTimeout = window.setTimeout(() => scale.set(1), 150)
        }
      })
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      document.body.style.cursor = originalCursor
      if (rafId) window.cancelAnimationFrame(rafId)
      window.clearTimeout(scaleTimeout)
    }
  }, [enabled, rotation, scale, x, y])

  if (!enabled) return null

  const fill = onLightBackground ? FOREST : CREAM
  const stroke = onLightBackground ? CREAM : FOREST

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        rotate: rotation,
        scale,
        opacity: visible ? 1 : 0,
        willChange: 'transform',
        transition: 'opacity 150ms ease',
      }}
    >
      <svg width="25" height="27" viewBox="0 0 50 54" fill="none">
        <path
          d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
          fill={fill}
          stroke={stroke}
          strokeWidth="3"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.28))' }}
        />
      </svg>
    </motion.div>
  )
}
