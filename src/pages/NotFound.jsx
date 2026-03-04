import { useState, useEffect } from "react";

export default function NotFound() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0E2A4F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Playfair Display', 'Georgia', serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lato:wght@300;400&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .anim-1 { animation: fadeUp 0.7s ease forwards; animation-delay: 0.1s; opacity: 0; }
        .anim-2 { animation: fadeUp 0.7s ease forwards; animation-delay: 0.3s; opacity: 0; }
        .anim-3 { animation: fadeUp 0.7s ease forwards; animation-delay: 0.5s; opacity: 0; }
        .anim-4 { animation: fadeUp 0.7s ease forwards; animation-delay: 0.7s; opacity: 0; }
        .anim-line { animation: lineGrow 0.8s ease forwards; animation-delay: 0.4s; transform: scaleX(0); transform-origin: left; }

        .home-btn {
          background: transparent;
          border: 1.5px solid #CC9552;
          color: #CC9552;
          padding: 14px 40px;
          font-family: 'Lato', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }
        .home-btn:hover {
          background: #CC9552;
          color: #0E2A4F;
        }
      `}</style>

      {/* Background large ghost "404" */}
      <div
        style={{
          position: "absolute",
          fontSize: "clamp(200px, 35vw, 480px)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          color: "transparent",
          WebkitTextStroke: "1px rgba(204,149,82,0.08)",
          userSelect: "none",
          lineHeight: 1,
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
          transition: "transform 0.1s ease-out",
          whiteSpace: "nowrap",
          animation: "fadeIn 1s ease forwards",
          opacity: 0,
          animationDelay: "0s",
        }}
      >
        404
      </div>

      {/* Decorative circle */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          border: "1px solid rgba(204,149,82,0.07)",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
          transition: "transform 0.15s ease-out",
          animation: "pulse 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          border: "1px solid rgba(204,149,82,0.04)",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)`,
          transition: "transform 0.2s ease-out",
          animationDelay: "1s",
          animation: "pulse 8s ease-in-out infinite",
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "600px",
        }}
      >
        {/* Eyebrow label */}
        <p
          className="anim-1"
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "11px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "#CC9552",
            marginBottom: "24px",
          }}
        >
          Error — Page Not Found
        </p>

        {/* 404 */}
        <h1
          className="anim-2"
          style={{
            fontSize: "clamp(80px, 15vw, 130px)",
            fontWeight: 900,
            fontFamily: "'Playfair Display', serif",
            color: "#F9FAFB",
            lineHeight: 1,
            margin: "0 0 8px",
          }}
        >
          404
        </h1>

        {/* Divider line */}
        <div
          className="anim-line"
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, #CC9552, transparent)",
            margin: "28px auto",
            width: "100%",
          }}
        />

        {/* Message */}
        <p
          className="anim-3"
          style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: 1.8,
            color: "rgba(249,250,251,0.55)",
            letterSpacing: "0.3px",
            marginBottom: "44px",
          }}
        >
          The page you're looking for seems to have wandered off.
          <br />
          Let's get you back on track.
        </p>

        {/* CTA */}
        <div className="anim-4">
          <a href="/" className="home-btn">
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}
