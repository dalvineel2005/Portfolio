import { profile, experience, projects, skills, tape, education, certifications } from '../data'
import { useReveal } from '../hooks'

function Section({ id, num, title, lede, children }) {
  const [ref, seen] = useReveal()
  return (
    <section id={id} ref={ref} className={`reveal${seen ? ' in' : ''}`}>
      <div className="section-head">
        <span className="section-num">{num}</span>
        <h2>{title}</h2>
      </div>
      {lede && <p className="section-lede">{lede}</p>}
      {children}
    </section>
  )
}

export function Tape() {
  const items = tape.map(([s]) => <span className="tape-item" key={s}>{s}</span>)
  return (
    <div className="tape" aria-label="Skills">
      <div className="tape-track">
        <span>{items}</span>
        <span aria-hidden="true">{items}</span>
      </div>
    </div>
  )
}

export function Profile() {
  return (
    <Section id="profile" num="01" title="About me">
      <div className="profile-block">
        <p>{profile.about}</p>
        <div className="ledger">
          <div className="ledger-row"><span>LOCATION</span><span>Mira Road, Thane</span></div>
          <div className="ledger-row"><span>NOW</span><span>Intern, Skandha Media</span></div>
          <div className="ledger-row"><span>FOCUS</span><span>MERN · Data Analytics</span></div>
          <div className="ledger-row"><span>EMAIL</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
          <div className="ledger-row"><span>STATUS</span><span style={{ color: 'var(--orange)' }}>OPEN TO ROLES</span></div>
        </div>
      </div>
    </Section>
  )
}

function Ticket({ p }) {
  return (
    <article className="ticket">
      <div className="window">
        <div className="window-bar"><i /><i /><i /><span>{p.live.replace('https://', '')}</span></div>
        <img className="window-shot" src={p.image} alt={p.alt} loading="lazy" />
      </div>
      <h3>{p.title}</h3>
      <ul>{p.points.map((t) => <li key={t}>{t}</li>)}</ul>
      <div className="ticket-tags">{p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
      <div className="ticket-links">
        <a className="btn btn-solid" href={p.live} target="_blank" rel="noopener noreferrer">Live demo ↗</a>
        <a className="btn btn-ghost" href={p.repo} target="_blank" rel="noopener noreferrer">Source code</a>
      </div>
    </article>
  )
}

export function Experience() {
  return (
    <Section id="experience" num="02" title="Experience" lede="Where I'm working right now.">
      <div className="jobs">
        {experience.map((e) => (
          <article className="job" key={e.company}>
            <div>
              <span className="job-period mono">{e.period}</span>
              <h3>{e.role}</h3>
              <p>{e.company}</p>
            </div>
            <img className="logo-chip logo-chip-lg" src={e.logo} alt={e.company} />
          </article>
        ))}
      </div>
    </Section>
  )
}

export function Projects() {
  return (
    <Section id="projects" num="03" title="Projects" lede="Things I built end to end, from schema to interface.">
      <div className="tickets">{projects.map((p) => <Ticket key={p.symbol} p={p} />)}</div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="watchlist" num="04" title="Skills" lede="What I work with across the stack, from core tools to newer additions.">
      <div className="watchlist">
        {skills.map((r) => (
          <div className="watch-row" key={r.cat}>
            <span className="watch-cat">{r.cat}</span>
            <div className="watch-items">{r.items.map((i) => <span key={i}>{i}</span>)}</div>
            <span className="watch-status">{r.status}{r.status === 'WORKING' ? '' : ' ▲'}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Record() {
  return (
    <Section id="record" num="05" title="Education">
      <div className="record-grid">
        <div className="record-card">
          <h4>{education.degree}</h4>
          <div className="sub">{education.school}</div>
          <p className="coursework">Coursework: {education.coursework}</p>
          <div className="record-meta"><span>{education.years}</span><span>CGPA {education.cgpa}</span></div>
        </div>
        <div className="record-card">
          <h4>Certifications</h4>
          <div className="sub">Filed &amp; verified</div>
          <ul className="cert-list">{certifications.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
      </div>
    </Section>
  )
}

export function Contact() {
  const [ref, seen] = useReveal()
  return (
    <div className={`bell reveal${seen ? ' in' : ''}`} id="contact" ref={ref}>
      <p className="bell-eyebrow">Contact</p>
      <h2>Got something to build?<br />Let's talk.</h2>
      <div className="bell-links">
        <a className="btn btn-solid" href={`mailto:${profile.email}`}>{profile.email}</a>
        <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">github.com/dalvineel2005</a>
        <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/neel-dalvi-73b204406</a>
      </div>
    </div>
  )
}
