import ProjectGallery from '../components/ProjectGallery.jsx'

export default function Construction() {
  const services = [
    'Architecture Drawings',
    'Construction Drawings',
    'Map Approvals (CDA/RDA)',
    'Full Construction Services (Residential, Commercial)'
  ]

  return (
    <section className="container-padded py-16">
      <h1 className="section-title">Construction Services</h1>
      <p className="section-subtitle max-w-2xl">Our construction department handles end-to-end building solutions, guided by CDA-authorized engineers and architects.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <div key={i} className="card p-6">
            <h3 className="font-semibold text-primary">{s}</h3>
            <p className="text-sm text-warmGray mt-2">Detailed description placeholder for {s}.</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="section-title">Completed Projects</h2>
        <p className="section-subtitle">A curated selection of our recent work.</p>
        <div className="mt-6">
          <ProjectGallery />
        </div>
      </div>
    </section>
  )
}