import { useState, useEffect, useRef } from 'react'

export function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    if (!start) return

    const startTime = performance.now()
    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }
    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [target, duration, start])

  return count
}
