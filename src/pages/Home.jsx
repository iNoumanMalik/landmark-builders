import HeroSection from '../components/HeroSection.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import AnimatedCounter from '../components/AnimatedCounter.jsx'
import ProjectGallery from '../components/ProjectGallery.jsx'
import constructionImg from '../assets/construction.jpg'
import realEstateImg from '../assets/realstate.jpg'

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Services Overview */}
      <section className="container-padded py-16">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Explore our core offerings in construction and real estate.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <ServiceCard
            title="Construction"
            description="Complete construction services from design to build. Residential and commercial projects."
            image={constructionImg}
            href="/construction"
          />
          <ServiceCard
            title="Real Estate"
            description="Houses, apartments, plots, and commercial properties in Islamabad & Rawalpindi."
            image={realEstateImg}
            href="/realestate"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white">
        <div className="container-padded py-16">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'CDA Authorized Engineers', icon: '👷' },
              { title: 'Quality Guaranteed', icon: '🛡️' },
              { title: 'Experience You Can Trust', icon: '🏗️' },
              { title: 'Professional Architects', icon: '📐' },
            ].map((f, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-3 font-semibold text-primary">{f.title}</h3>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="card p-6">
              <div className="text-sm text-warmGray">Years of Experience</div>
              <div className="text-2xl font-bold text-primary"><AnimatedCounter to={12} suffix="+" /></div>
            </div>
            <div className="card p-6">
              <div className="text-sm text-warmGray">Projects Completed</div>
              <div className="text-2xl font-bold text-primary"><AnimatedCounter to={150} suffix="+" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary">
        <div className="container-padded py-12 text-center">
          <h3 className="text-white text-2xl font-bold">Ready to start your project?</h3>
          <p className="text-white/80 mt-2">We deliver premium construction and real estate solutions.</p>
          <div className="mt-6">
            <a href="/contact" className="btn-accent">Request Consultation</a>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="container-padded py-16">
        <h2 className="section-title">Completed Projects</h2>
        <ProjectGallery />
      </section>
    </div>
  )
}