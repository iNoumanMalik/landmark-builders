import AnimatedCounter from "../components/AnimatedCounter.jsx";
import panoAbout from "../assets/about-section.png";

export default function About() {
  return (
    <section className="container-padded pt-32 ">
      <h1 className="section-title">About Us</h1>
      <p className="section-subtitle max-w-2xl">
        We are a team of CDA-authorized architects and engineers serving
        Islamabad & Rawalpindi. Our mission is to deliver quality construction
        and reliable real estate solutions.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h3 className="font-semibold text-primary">Company Profile</h3>
          <p className="text-sm text-warmGray mt-2">
            ZamungClient Real Estate & Construction has successfully delivered
            residential and commercial projects across CDA and RDA
            jurisdictions.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-primary">Milestones</h3>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-sm text-warmGray">Years of Experience</div>
              <div className="text-2xl font-bold text-primary">
                <AnimatedCounter to={5} suffix="+" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-warmGray">Projects Completed</div>
              <div className="text-2xl font-bold text-primary">
                <AnimatedCounter to={60} suffix="+" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="w-full h-full bg-gray-200 rounded-lg grid place-items-center text-gray-500">
          <img src={panoAbout} className="w-full h-full rounded-2xl" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <div className="relative bg-white shadow-lg rounded-xl px-8 py-10 text-center border border-gray-100">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full text-xl shadow-md">
            "
          </div>

          <p className="text-lg md:text-xl italic text-gray-600 leading-relaxed font-light">
            From foundations to futures — we build spaces where families live,
            businesses grow, and communities thrive.
          </p>

          <div className="w-16 h-[2px] bg-primary mx-auto my-6"></div>

          <p className="text-sm text-gray-500 tracking-widest uppercase">
            Our Commitment
          </p>
        </div>
      </div>
    </section>
  );
}
