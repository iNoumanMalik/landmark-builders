import { motion } from "framer-motion";
import MapContainer from "../components/map/MapContainer";
import { openWhatsApp } from "../utils/openWhatsapp";

export default function RealEstate() {
  const services = [
    {
      title: "Property Sale, Purchase & Rent",
      description:
        "Smooth, transparent property deals with expert guidance and verified listings for homes, plots, and commercial spaces.",
      image: "../assets/realstate.jpg",
    },
    {
      title: "Furnished & Unfurnished Homes",
      description:
        "Find your perfect living space — from fully furnished luxury homes to design-ready residences tailored to your needs.",
      image: "/assets/realestate/furnished.jpg",
    },
    {
      title: "Apartments & Luxury Apartments",
      description:
        "Experience high-end living in premium apartments like Centaurus and Silver Oaks with top-tier amenities.",
      image: "/assets/realestate/apartments.jpg",
    },
    {
      title: "Commercial, Residential & Plots",
      description:
        "Explore verified commercial and residential plots for investment and development opportunities.",
      image: "/assets/realestate/plots.jpg",
    },
  ];

  return (
    <section className="container-padded pt-36">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
      <h1 className="section-title">Real Estate Services</h1>
        <p className="section-subtitle max-w-2xl">
          Explore houses for rent (furnished & unfurnished), apartments, plots
          for sale, and commercial & residential properties.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative h-80 perspective-1000"
          >
            <motion.div
              className="relative w-full h-full cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ rotateX: 180 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {/* Front Side */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary to-primary/80 rounded-xl shadow-card border border-primary/20 flex items-center justify-center backface-hidden">
                <div className="text-center px-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Back Side */}
              <div
                className="absolute inset-0 w-full h-full rounded-xl shadow-card backface-hidden"
                style={{
                  transform: "rotateX(180deg)",
                  backgroundImage: `linear-gradient(rgba(14, 42, 79, 0.8), rgba(14, 42, 79, 0.7)), url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <motion.button
                    className="btn-accent"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={()=>openWhatsApp("know-more", "real-estate")}
                  >
                    Know More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20 text-center"
      >
        <div className="bg-white rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto border border-gray-200">
          <div className="w-full flex justify-center">
            <h2 className="max-w-xl  text-2xl sm:text-3xl font-bold text-primary mb-4 border-b-4 border-accent">
              Why Choose Our Real Estate Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-primary mb-2">
                Verified Properties
              </h3>
              <p className="text-sm text-warmGray">
                All listings are thoroughly verified for authenticity and legal
                compliance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-primary mb-2">
                Prime Locations
              </h3>
              <p className="text-sm text-warmGray">
                Exclusive access to properties in the most desirable
                neighborhoods.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-primary mb-2">
                Expert Support
              </h3>
              <p className="text-sm text-warmGray">
                Professional guidance throughout your property journey.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Interactive Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20"
      >
        <MapContainer />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Looking for Property?
          </h3>
          <p className="text-warmGray mb-6 max-w-2xl mx-auto">
            Find the perfect home, apartment, or plot with our trusted listings.
            From luxury apartments to profitable plots, we make property
            investment easy.
          </p>
          <motion.a
            href="/contact"
            className="btn-accent inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Property Details</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.a>
        </div>
      </motion.div>
      {/* <div className="mt-16 text-center">
        <h3 className="text-xl font-bold text-primary">
          Looking for Property?
        </h3>
        <p className="text-warmGray mt-2">
          Find the perfect home, apartment, or plot with our trusted listings.
        </p>
        <div className="mt-4">
          <a href="/contact" className="btn-accent">
            Get Property Details
          </a>
        </div>
      </div> */}
    </section>
  );
}
