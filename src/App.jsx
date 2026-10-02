import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import ClickSpark from './components/ClickSpark'
import Hero from './components/Hero'
import ClientStrip from './components/ClientStrip'
import Positioning from './components/Positioning'
import SkillsOrbit from './components/SkillsOrbit'
import Work from './components/Work'
import MidCTA from './components/MidCTA'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Process from './components/Process'
import Experience from './components/Experience'
import CTA from './components/CTA'
import ContactForm from './components/ContactForm'
import FAQ from './components/FAQ'
import FirstBrick from './components/FirstBrick'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-forest text-cream">
      <div className="grain" />
      <CustomCursor />
      <ClickSpark sparkSize={14} sparkRadius={28} />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ClientStrip />
          <Positioning />
          <SkillsOrbit />
          <Work />
          <MidCTA />
          <Testimonials />
          <Services />
          <Process />
          <Experience />
          <CTA />
          <ContactForm />
          <FAQ />
          <FirstBrick />
        </main>
        <Footer />
      </div>
      <BackToTop />
    </div>
  )
}
