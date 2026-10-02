import { useEffect, useRef, useState } from 'react'

export default function ClickSpark({
  sparkColor = '#ffffff',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
}) {
  const [bursts, setBursts] = useState([])
  const nextId = useRef(0)

  useEffect(() => {
    const handleClick = (event) => {
      if (event.detail === 0) return

      const id = nextId.current++
      setBursts((current) => [...current, { id, x: event.clientX, y: event.clientY }])
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  const removeBurst = (id) => {
    setBursts((current) => current.filter((burst) => burst.id !== id))
  }

  return (
    <div aria-hidden="true" className="click-spark-layer pointer-events-none fixed inset-0 z-[90]">
      {bursts.map((burst) => (
        <span
          key={burst.id}
          className="click-spark-burst"
          style={{ left: burst.x, top: burst.y }}
          onAnimationEnd={() => removeBurst(burst.id)}
        >
          {Array.from({ length: sparkCount }, (_, index) => (
            <i
              key={index}
              className="click-spark-particle"
              style={{
                '--spark-angle': `${(360 / sparkCount) * index}deg`,
                '--spark-radius': `${sparkRadius}px`,
                '--spark-size': `${sparkSize}px`,
                '--spark-duration': `${duration}ms`,
                backgroundColor: sparkColor,
              }}
            />
          ))}
        </span>
      ))}
    </div>
  )
}
