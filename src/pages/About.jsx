import AnimatedCounter from '../components/AnimatedCounter.jsx'

export default function About() {
  return (
    <section className="container-padded py-32 ">
      <h1 className="section-title">About Us</h1>
      <p className="section-subtitle max-w-2xl">We are a team of CDA-authorized architects and engineers serving Islamabad & Rawalpindi. Our mission is to deliver quality construction and reliable real estate solutions.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h3 className="font-semibold text-primary">Company Profile</h3>
          <p className="text-sm text-warmGray mt-2">ZmungClient Real Estate & Construction has successfully delivered residential and commercial projects across CDA and RDA jurisdictions.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-primary">Milestones</h3>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-sm text-warmGray">Years of Experience</div>
              <div className="text-2xl font-bold text-primary"><AnimatedCounter to={12} suffix="+" /></div>
            </div>
            <div className="text-center">
              <div className="text-sm text-warmGray">Projects Completed</div>
              <div className="text-2xl font-bold text-primary"><AnimatedCounter to={150} suffix="+" /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="w-full h-48 bg-gray-200 rounded-lg grid place-items-center text-gray-500">Professional Image / 3D Illustration Placeholder</div>
      </div>
    </section>
  )
}