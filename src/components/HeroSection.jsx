import { motion } from "framer-motion";
import { openWhatsApp } from "../utils/openWhatsApp";
import heroBG from "../assets/hero-bg.jpeg";
import { useNavigate } from "react-router-dom";
import ImageWithSkeleton from "./ImageWithSkeleton";

const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionDiv = motion.div;

export default function HeroSection() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };
  return (
    <section className="relative min-h-[70vh] md:min-h-screen grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithSkeleton
          src={heroBG}
          alt=""
          loading="eager"
          containerClassName="absolute inset-0"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative container-padded py-24 md:py-32 text-center">
        <MotionH1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl md:text-5xl font-bold"
        >
          ZamungClient Real Estate & Builders
        </MotionH1>
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 mt-4 max-w-2xl mx-auto"
        >
          Building trust, designing dreams, delivering quality.
        </MotionP>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => openWhatsApp("quote", "")}
            className="btn-accent"
          >
            Get a Quote
          </button>
          <button onClick={handleContactClick} className="btn-primary">
            Contact Us
          </button>
        </MotionDiv>
      </div>
    </section>
  );
}
