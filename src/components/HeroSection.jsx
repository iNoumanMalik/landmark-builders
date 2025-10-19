import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { openWhatsApp } from '../utils/openWhatsapp'

function FloatingBox() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#C59B42" />
    </mesh>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen grid place-items-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} />
          <FloatingBox />
          <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>

      <div className="relative container-padded py-24 md:py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl md:text-5xl font-bold"
        >
          ZmungClient Real Estate & Construction
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 mt-4 max-w-2xl mx-auto"
        >
          Building trust, designing dreams, delivering quality.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button onClick={()=>openWhatsApp("quote", "")} className="btn-accent">Get a Quote</button>
          <button onClick={()=>openWhatsApp("contact", "")} className="btn-primary">Contact Us</button>
        </motion.div>
      </div>
    </section>
  )
}