import TopBar from './components/TopBar'
import Hero from './components/Hero'
import { Tape, Profile, Experience, Projects, Skills, Record, Contact } from './components/Sections'

export default function App() {
  return (
    <>
      <a className="skip" href="#profile">Skip to content</a>
      <TopBar />
      <Hero />
      <Tape />
      <main className="wrap">
        <Profile />
        <Experience />
        <Projects />
        <Skills />
        <Record />
      </main>
      <Contact />
      <footer>NGD © {new Date().getFullYear()} — Mira Road, Thane, India</footer>
    </>
  )
}
