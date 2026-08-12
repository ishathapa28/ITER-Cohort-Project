import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

import Hero from './Hero'
import Features from './Features'
import AICoach from './AICoach'
import CodingSection from './CodingSection'
import CTA from './CTA'

function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <main>

        <Hero />

        <Features />

        <AICoach />

        <CodingSection />

        <CTA />

      </main>

      <Footer />

    </div>
  )
}

export default Landing