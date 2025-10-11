import React from "react";
import ProjectGallery from "../components/ProjectGallery.jsx";
import ConstructionTabs from "../components/ConstructionTabs.jsx";
import { motion } from "framer-motion";
import { ChevronDown, Users, UserCheck, FileText, CheckCircle, Hammer, Home } from "lucide-react";

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

const journeySteps = [
  {
    step: 1,
    title: "First Meeting",
    description: "Initial consultation to gather plot size, location, and client requirements",
    timeEstimate: "1–2 days",
    icon: Users,
    color: "bg-blue-100 text-blue-800",
    tooltip: "Includes site visit and preliminary assessment"
  },
  {
    step: 2,
    title: "Architect Meeting",
    description: "Client meets principal architect to discuss vision and design preferences",
    timeEstimate: "2–3 days",
    icon: UserCheck,
    color: "bg-green-100 text-green-800",
    tooltip: "Detailed design consultation and concept development"
  },
  {
    step: 3,
    title: "Contract Signing",
    description: "Formal agreement signed by client and CEO",
    timeEstimate: "1 day",
    icon: FileText,
    color: "bg-yellow-100 text-yellow-800",
    tooltip: "Includes terms, payment schedule, and project timeline"
  },
  {
    step: 4,
    title: "Plan Finalization",
    description: "Final architectural layout and elevation shared for approval",
    timeEstimate: "7–10 days",
    icon: CheckCircle,
    color: "bg-purple-100 text-purple-800",
    tooltip: "Includes CDA approval and final design modifications"
  },
  {
    step: 5,
    title: "Construction Kickoff",
    description: "Site preparation and grey structure execution begins",
    timeEstimate: "Varies",
    icon: Hammer,
    color: "bg-orange-100 text-orange-800",
    tooltip: "Depends on project size and complexity"
  },
  {
    step: 6,
    title: "Finishing & Delivery",
    description: "Interior work, polish, and final handover",
    timeEstimate: "Varies",
    icon: Home,
    color: "bg-emerald-100 text-emerald-800",
    tooltip: "Complete interior design and final inspections"
  }
];


export default function Construction() {

  return (
    <section className="container-padded pt-36">
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

      {/* Your Journey with ZmungClient Section */}
      <div className="mt-24 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Your Journey with ZmungClient</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 200 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-accent rounded mx-auto"
          />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
            
            {/* Timeline Steps */}
            {journeySteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start mb-12 last:mb-0"
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-primary rounded-full shadow-lg">
                    <span className="text-xl font-bold text-primary">{step.step}</span>
                  </div>

                  {/* Step Card */}
                  <div className="ml-8 flex-1">
                    <motion.div
                      className="card p-6 hover:shadow-lg transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${step.color}`}>
                              {step.timeEstimate}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-warmGray leading-relaxed mb-4">
                        {step.description}
                      </p>
                      
                      {/* Tooltip */}
                      <div className="text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        💡 {step.tooltip}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to build?</h3>
            <p className="text-warmGray mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have built their dream homes with ZmungClient. 
              Our proven process ensures a smooth and transparent construction experience.
            </p>
            <motion.a
              href="/contact"
              className="btn-accent inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Project Today</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* <div className="mt-12">
        <h2 className="section-title">Completed Projects</h2>
        <p className="section-subtitle">
          A curated selection of our recent work.
        </p>
        <div className="mt-6">
          <ProjectGallery />
        </div>
      </div> */}

      {/* <div className="mt-16 text-center">
        <h3 className="text-xl font-bold text-primary">Ready to build?</h3>
        <p className="text-warmGray mt-2">
          Start your project with our expert team today.
        </p>
        <div className="mt-4">
          <a href="/contact" className="btn-accent">
            Start Your Project Today
          </a>
        </div>
      </div> */}
    </section>
  );
}
