export default function RealEstate() {
  const properties = Array.from({ length: 8 }, (_, i) => ({ id: i + 1, title: `Property ${i + 1}`, category: ['House', 'Apartment', 'Plot'][i % 3] }))
  return (
    <section className="container-padded py-16">
      <h1 className="section-title">Real Estate Services</h1>
      <p className="section-subtitle max-w-2xl">Explore houses for rent (furnished & unfurnished), apartments, plots for sale, and commercial & residential properties.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {properties.map((p) => (
          <a key={p.id} href="#" className="card overflow-hidden block hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 grid place-items-center text-gray-500">Property Image</div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-primary">{p.title}</h3>
              <p className="text-sm text-warmGray">{p.category}</p>
              <div className="mt-3"><span className="btn-primary">View More</span></div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}