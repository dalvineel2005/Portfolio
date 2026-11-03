import { useRef, useState, useEffect } from 'react'
import { profile, education, projects, skills } from '../data'
import skandha from '../assets/skandha.png'
import Avatar from './Avatar'
import { useCountUp } from '../hooks'

const toolCount = new Set(skills.flatMap((s) => s.items)).size

function Stat({ value, suffix = '', decimals = 0, label, seen }) {
  const n = useCountUp(value, seen)
  return (
    <div className="stat">
      <div className="stat-num">{n.toFixed(decimals)}<span>{suffix}</span></div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

function Stats() {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true))
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <div className="stats" ref={ref}>
      <Stat value={parseFloat(education.cgpa)} decimals={2} suffix="" label="CGPA · B.Sc IT" seen={seen} />
      <Stat value={projects.length} suffix="+" label="Full-stack projects shipped" seen={seen} />
      <Stat value={toolCount} suffix="+" label="Tools & technologies" seen={seen} />
    </div>
  )
}

export default function Hero() {
  return (
    <header className="hero wrap" id="top">
      <div className="hero-art">
        <Avatar />
        <span className="hero-badge mono">OPEN TO ROLES</span>
      </div>
      <h1>I'M <em>NEEL</em></h1>
      <p className="hero-roles mono">Full-stack (MERN) · Data analytics · Developer</p>
      <p className="hero-now mono"><i />Software Developer Intern @ <img className="logo-chip" src={skandha} alt="Skandha Media Services" /></p>
      <p className="role">{profile.role}</p>
      <div className="cta-row">
        <a className="btn btn-solid" href="#projects">View projects ↓</a>
        <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <Stats />
    </header>
  )
}
