import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Compare from './sections/Compare'
import HowItWorks from './sections/HowItWorks'
import Features from './sections/Features'
import Download from './sections/Download'
import Faq from './sections/Faq'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Compare />
        <HowItWorks />
        <Features />
        <Download />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
