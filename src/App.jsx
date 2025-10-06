import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Construction = lazy(() => import('./pages/Construction.jsx'))
const RealEstate = lazy(() => import('./pages/RealEstate.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bgWhite">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1">
        <Suspense fallback={<div className="container-padded py-16 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/realestate" element={<RealEstate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
