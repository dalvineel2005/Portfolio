import { useEffect, useRef, useState } from 'react'

export const prefersReducedMotion = () =>
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

/** Dark/light theme persisted in localStorage, defaulting to the system setting. */
export function useTheme() {
  const system = () => (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || system())

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggle = () =>
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark'
      try { localStorage.setItem('theme', next) } catch { /* private mode */ }
      return next
    })
  return [theme, toggle]
}

/** Returns [ref, seen]; `seen` flips true once the element scrolls into view. */
export function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect() }
    }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, seen]
}

/** Id of the section currently crossing the middle of the viewport. */
export function useActiveSection(ids) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
    }, { rootMargin: '-45% 0px -50% 0px' })
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [ids])
  return active
}

/** Counts from 0 to `to` once `start` is true. */
export function useCountUp(to, start, ms = 1200) {
  const [v, setV] = useState(prefersReducedMotion() ? to : 0)
  useEffect(() => {
    if (!start || prefersReducedMotion()) { if (start) setV(to); return }
    let raf
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min((now - t0) / ms, 1)
      setV(to * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, start, ms])
  return v
}
