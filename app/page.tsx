import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import WhyVisit from '@/components/WhyVisit'
import Gallery from '@/components/Gallery'
import FacebookSection from '@/components/FacebookSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Products />
        <WhyVisit />
        <Gallery />
        <FacebookSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
