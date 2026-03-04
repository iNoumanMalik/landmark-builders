import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../public/logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/construction", label: "Construction" },
  { to: "/realestate", label: "Real Estate" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

        .navbar-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          transition: background 0.4s ease, box-shadow 0.4s ease, padding 0.3s ease;
        }
        .navbar-root.transparent {
          background: linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 100%);
          box-shadow: none;
        }
        .navbar-root.solid {
          background: #0E2A4F;
          box-shadow: 0 4px 24px rgba(14,42,79,0.18);
        }

        .nav-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          transition: height 0.3s ease;
        }
        .navbar-root.solid .nav-inner {
          height: 64px;
        }

        /* Logo text */
        .logo-name {
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.5px;
          color: #ffffff;
          line-height: 1;
        }
        .logo-sub {
          font-family: 'Lato', sans-serif;
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-top: 3px;
        }

        /* Nav links */
        .nav-link {
          font-family: 'Lato', sans-serif;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          position: relative;
          padding-bottom: 3px;
          transition: color 0.25s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: #CC9552;
          transition: width 0.3s ease;
        }
        .nav-link:hover {
          color: #ffffff;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        .nav-link.active {
          color: #ffffff;
        }

        /* CTA button */
        .nav-cta {
          font-family: 'Lato', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #0E2A4F;
          background: #CC9552;
          border: none;
          padding: 11px 22px;
          text-decoration: none;
          transition: background 0.25s ease, transform 0.2s ease;
          white-space: nowrap;
        }
        .nav-cta:hover {
          background: #b8823e;
          transform: translateY(-1px);
        }

        /* Divider dot */
        .nav-dot {
          width: 3px; height: 3px;
          border-radius: 50%;
          background: rgba(204,149,82,0.4);
          flex-shrink: 0;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 1.5px;
          background: #ffffff;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* Mobile drawer */
        .mobile-drawer {
          background: #0E2A4F;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
          border-top: 1px solid rgba(204,149,82,0.15);
        }
        .mobile-drawer.closed {
          max-height: 0;
          opacity: 0;
        }
        .mobile-drawer.opened {
          max-height: 500px;
          opacity: 1;
        }
        .mobile-drawer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .mobile-nav-link {
          font-family: 'Lato', sans-serif;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: color 0.2s ease, padding-left 0.2s ease;
          display: block;
        }
        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: #CC9552;
          padding-left: 8px;
        }
        .mobile-cta {
          margin-top: 16px;
          font-family: 'Lato', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #0E2A4F;
          background: #CC9552;
          text-decoration: none;
          padding: 13px 24px;
          text-align: center;
          display: block;
          transition: background 0.25s ease;
        }
        .mobile-cta:hover { background: #b8823e; }

        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .hamburger { display: flex; }
        }
        @media (min-width: 769px) {
          .mobile-drawer { display: none !important; }
        }
      `}</style>

      <header className={`navbar-root ${scrolled ? "solid" : "transparent"}`}>
        <nav className="nav-inner">
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ width: "38px", height: "38px", objectFit: "contain" }}
            />
            <div>
              <div className="logo-name">ZamungClient</div>
              <div className="logo-sub">Real Estate & Construction</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul
            className="nav-links-desktop"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {navItems.map((item, i) => (
              <li
                key={item.to}
                style={{ display: "flex", alignItems: "center", gap: "28px" }}
              >
                {i > 0 && <span className="nav-dot" />}
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `nav-link${isActive ? " active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li style={{ marginLeft: "8px" }}>
              <Link to="/contact" className="nav-cta">
                Consultation
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className={`hamburger${open ? " open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        {/* Mobile drawer */}
        <div className={`mobile-drawer ${open ? "opened" : "closed"}`}>
          <div className="mobile-drawer-inner">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `mobile-nav-link${isActive ? " active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mobile-cta"
              onClick={() => setOpen(false)}
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
