import ProjectGallery from '../components/ProjectGallery.jsx'
import ConstructionTabs from '../components/ConstructionTabs.jsx'
import { motion } from 'framer-motion'

export default function Construction() {
  const services = [
    'Architecture Drawings',
    'Construction Drawings',
    'Map Approvals (CDA/RDA)',
    'Full Construction Services (Residential, Commercial)'
  ]

  return (
    <section className="container-padded py-32">
      <div>
        <h1 className="section-title inline-block">Our Construction Services</h1>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 128 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="h-1 bg-accent rounded mt-2" />
      </div>
      <p className="section-subtitle max-w-2xl">Landmark provides end-to-end complete construction services including Grey Structure and Finishing stages, guided by CDA-authorized engineers and architects.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <div key={i} className="card p-6">
            <h3 className="font-semibold text-primary">{s}</h3>
            <p className="text-sm text-warmGray mt-2">Detailed description placeholder for {s}.</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <ConstructionTabs />
      </div>

      <div className="mt-12">
        <h2 className="section-title">Completed Projects</h2>
        <p className="section-subtitle">A curated selection of our recent work.</p>
        <div className="mt-6">
          <ProjectGallery />
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-xl font-bold text-primary">Ready to build?</h3>
        <p className="text-warmGray mt-2">Start your project with our expert team today.</p>
        <div className="mt-4">
          <a href="/contact" className="btn-accent">Start Your Project Today</a>
        </div>
      </div>
    </section>
  )
}