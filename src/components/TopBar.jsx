import { useState, useEffect } from 'react'
import { nav } from '../data'
import { useActiveSection, useTheme } from '../hooks'

const ids = nav.map(([id]) => id)

export default function TopBar() {
  const [theme, toggleTheme] = useTheme()
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="topbar">
      <div className="wrap topbar-inner">
        <a className="brand" href="#top" style={{ textDecoration: 'none' }}>
          <span className="tick">NGD</span>
        </a>
        <nav className={`topnav${open ? ' open' : ''}`} id="topnav" aria-label="Primary" onClick={(e) => e.target.closest('a') && setOpen(false)}>
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>
          ))}
        </nav>
        <div className="top-actions">
          <button className="icon-btn" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button className="icon-btn menu-btn" type="button" aria-label="Toggle menu" aria-expanded={open} aria-controls="topnav" onClick={() => setOpen((o) => !o)}>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </div>
  )
}
