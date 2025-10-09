import React from "react";
import ProjectGallery from "../components/ProjectGallery.jsx";
import ConstructionTabs from "../components/ConstructionTabs.jsx";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {useState} from "react";

const services = [
  {
    name: "Architecture Drawings",
    detail:
      "We craft functional and aesthetic architectural layouts tailored to your vision and local regulations.",
  },
  {
    name: "Construction Drawings",
    detail:
      "Our detailed technical drawings ensure flawless coordination across all structural and service systems.",
  },
  {
    name: "Map Approvals (CDA/RDA)",
    detail:
      "We handle the entire CDA/RDA approval process to ensure your project meets all regulatory standards.",
  },
  {
    name: "Full Construction Services (Residential, Commercial)",
    detail:
      "From foundation to finishing, we provide complete construction management for homes and commercial spaces.",
  },
];

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

export default function Construction() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="container-padded py-32">
      <div>
        <h1 className="section-title inline-block">
          Our Construction Services
        </h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-1 bg-accent rounded mt-2"
        />
      </div>
      <p className="section-subtitle max-w-2xl">
        Landmark provides end-to-end complete construction services including
        Grey Structure and Finishing stages, guided by CDA-authorized engineers
        and architects.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <div key={i} className="card p-6">
            <h3 className="font-semibold text-primary">{s.name}</h3>
            <p className="text-sm text-warmGray mt-2">{s.detail}</p>
          </div>
        ))}
      </div>

      <div className="my-24">
        <ConstructionTabs />
      </div>

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
                  <p className="text-sm text-textGray p-5 pt-0 border-t border-lightSlate/50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="section-title">Completed Projects</h2>
        <p className="section-subtitle">
          A curated selection of our recent work.
        </p>
        <div className="mt-6">
          <ProjectGallery />
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-xl font-bold text-primary">Ready to build?</h3>
        <p className="text-warmGray mt-2">
          Start your project with our expert team today.
        </p>
        <div className="mt-4">
          <a href="/contact" className="btn-accent">
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
}
