import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import Features from './sections/Features'
import Download from './sections/Download'
import Faq from './sections/Faq'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="page">
      <Hero />
      <main>
        <HowItWorks />
        <Features />
        <Download />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
