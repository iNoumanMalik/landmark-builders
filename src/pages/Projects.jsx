import React, { useRef, useState, useEffect } from "react";
import projectA from "../assets/hero-bg.jpeg";
import projectB from "../assets/project-image.jpeg";

const projectsData = [
  {
    title: "1 kanal house in F-6/2 Islamabad",
    description:
      "Completed the project from excavation to Grey Structure completion. Structure included Isolated Footing with Ground + 1 floor.",
    image: projectA,
  },
  {
    title: "1 Kanal House in BaniGala",
    description:
      "This Project is located in Banigala Zakria Lane. It has a covered area of 5500 sq-ft. The project was completed with top notch quality",
    image: projectB,
  },
];  

export default function Projects() {
  const headerRef = useRef(null);
  const [headerInView, setHeaderInView] = useState(false);

  // Intersection Observer to detect header in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeaderInView(entry.isIntersecting),
      { threshold: 0.2 },
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 space-y-16">
      {/* Page Header */}
      <div
        ref={headerRef}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 32px 60px",
          opacity: headerInView ? 1 : 0,
          transform: headerInView ? "none" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "11px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "#CC9552",
            marginBottom: "16px",
          }}
        >
          Portfolio
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 700,
              color: "#0E2A4F",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Our Projects
          </h1>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 300,
              fontSize: "15px",
              color: "#707070",
              maxWidth: "360px",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Crafting spaces that inspire — from landmark areas to vibrant
            commercial hubs.
          </p>
              </div>
              
      </div>

            <div style={{ height: "1px", background: "linear-gradient(to right, #CC9552, rgba(204,149,82,0.1))", marginTop: "36px" }} />
          
      {/* Project Cards */}
      {projectsData.map((project, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row items-center gap-8 ${
            idx % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="md:w-1/2 w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl font-semibold text-primary mb-3">
              {project.title}
            </h2>
            <p className="text-warmGray">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
