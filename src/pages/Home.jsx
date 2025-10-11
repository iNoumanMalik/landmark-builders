import HeroSection from '../components/HeroSection.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import AnimatedCounter from '../components/AnimatedCounter.jsx'
import ProjectGallery from '../components/ProjectGallery.jsx'
import constructionImg from '../assets/construction.jpg'
import realEstateImg from '../assets/realstate.jpg'

import { ChevronDown } from "lucide-react";
import {useState} from "react";

const clientFAQs = [
  {
    id: 1,
    question: "Where is ZmungClient's main office located?",
    answer:
      "Our main office is situated in Gulberg Greens, Islamabad. You can find the full address on our Contact Us page.",
  },
  {
    id: 2,
    question: "How long has ZmungClient been operating in the market?",
    answer:
      "We have over 10 years of combined experience in the Real Estate and Construction industry, building trust and delivering excellence across Islamabad and Rawalpindi.",
  },
  {
    id: 3,
    question: "Where can I find details about your services and charges?",
    answer:
      "Detailed information regarding our services, deliverables, and fee structure is clearly outlined in the 'Construction Services' and 'Real Estate Services' sections above.",
  },
  {
    id: 4,
    question:
      "Do your quoted charges include society design fees or approval fees?",
    answer:
      "No, our charges cover design, supervision, or construction services as agreed. All external society charges, official approval fees (CDA/RDA), and third-party fees must be paid by the client directly to the respective authorities.",
  },
  {
    id: 5,
    question: "Are there any separate service charges?",
    answer:
      "All service-related fee structures are mentioned in detail within the 'Fee & Payments' section on the Construction Services page.",
  },
  {
    id: 6,
    question: "In which areas do you provide construction services?",
    answer:
      "We focus our full-service construction efforts specifically in premium societies including Bahria Town, DHA, Gulberg Green, and Naval Anchorage (Rawalpindi / Islamabad).",
  },
  {
    id: 7,
    question: "What will be the covered area of my plot?",
    answer:
      "The covered area is determined by the specific plot size, site context, local society bylaws, and your unique architectural requirements. This is calculated and finalized during the initial design phase.",
  },
  {
    id: 8,
    question:
      "How do you handle meetings with clients who are outside of the city?",
    answer:
      "We are flexible and utilize digital platforms for seamless communication, including video conferences via Zoom or WhatsApp, to accommodate clients wherever they are.",
  },
  {
    id: 9,
    question: "What is your payment plan and schedule?",
    answer:
      "Our detailed payment plan, including percentage breakdown by project milestone, is fully outlined in the 'Fee & Payments' section of our Construction Services page.",
  },
  {
    id: 10,
    question:
      "Do you provide construction supervision services outside of the Islamabad/Rawalpindi region?",
    answer:
      "No, our comprehensive on-site supervision services are strictly limited to the designated areas within Islamabad and Rawalpindi (Bahria, DHA, Gulberg Green, Naval Anchorage).",
  },
  {
    id: 11,
    question:
      "What specific details are included in your interior design scope?",
    answer:
      "Our interior scope encompasses comprehensive details like Flooring, Ceiling, Wood Work, Kitchen, Bathroom Layouts, Metal Work, and Glass Work. These are detailed on the Construction Services page.",
  },
  {
    id: 12,
    question:
      "How long is the typical design completion and approval timeline?",
    answer:
      "The complete design process, from initial concepts to final 3D renders, generally takes approximately 3 to 4 months, depending on client revisions and final approvals.",
  },
];

export default function Home() {

  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

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

      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primaryBlue text-center section-title">
          Client FAQs
        </h2>
        <p className="text-md text-textGray text-center mb-8">
          Quick answers to the most common questions about our services.
        </p>

        <div className="mt-6 space-y-4">
          {clientFAQs.map((faq) => (
            <div
              key={faq.id}
              className="border border-lightSlate/50 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:border-accentCopper/50"
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left"
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={openId === faq.id}
                aria-controls={`faq-content-${faq.id}`}
              >
                <p className="text-md font-semibold text-primaryBlue">
                  {faq.question}
                </p>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openId === faq.id
                      ? "transform rotate-180 text-accentCopper"
                      : "text-textGray"
                  }`}
                />
              </button>

              <div
                id={`faq-content-${faq.id}`}
                role="region"
                aria-labelledby={`faq-heading-${faq.id}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  openId === faq.id
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-textGray p-5 pt-4 border-t border-lightSlate/50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}