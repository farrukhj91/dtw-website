import Navbar      from '../components/Navbar'
import Hero        from '../components/Hero'
import TrustBar    from '../components/TrustBar'
import Services    from '../components/Services'
import Process     from '../components/Process'
import WhyChooseUs from '../components/WhyChooseUs'
import Benefits    from '../components/Benefits'
import Testimonials from '../components/Testimonials'
import CTA         from '../components/CTA'
import Footer      from '../components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <WhyChooseUs />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
