import CustomCursor from './components/animation/CustomCursor'
import ScrollProgress from './components/animation/ScrollProgress'
import About from './components/sections/About'
import Community from './components/sections/Community'
import Enquiry from './components/sections/Enquiry'
import Footer from './components/sections/Footer'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import Marquee from './components/sections/Marquee'
import Sports from './components/sections/Sports'
import Testimonials from './components/sections/Testimonials'
import useTheme from './hooks/useTheme'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:font-bold focus:text-navy">
        Skip to content
      </a>
      <ScrollProgress />
      <CustomCursor />
      <Header theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Sports />
        <Community />
        <Testimonials />
        <Enquiry />
      </main>
      <Footer />
    </>
  )
}
