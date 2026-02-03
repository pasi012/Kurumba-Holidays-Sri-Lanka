import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mainLinks = [
    ["HOME", "/"],
    ["TOURS", "/tour-packages"],
    ["EXPERIENCE SRI LANKA", "/experience-sri-lanka"],
    ["RENT CAR & BIKE", "/rent-vehicle"],
    ["ACCOMMODATION", "/accommodation"],
  ];

  const moreLinks = [
    ["TRAVEL GUIDE", "/travel-guide"],
    ["OUR EXPERTISE", "/expertise"],
    ["TRAVEL NEWS", "https://srilankatravelnews.wordpress.com"],
  ];

  return (
    <header className="fixed top-0 z-[999] w-full">
      {/* Top Glass Bar */}
      <div
        className={`transition-all duration-500
        ${scrolled
            ? "bg-black/70 backdrop-blur-xl shadow-lg"
            : "bg-gradient-to-b from-black/70 via-black/40 to-transparent"
          }`}
      >
        <div className="mx-auto grid h-[90px] max-w-[1400px] grid-cols-[auto_1fr_auto] items-center px-4 md:px-10">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex justify-center items-center gap-10">

            {mainLinks.map(([label, path]) => (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) =>
                  `relative text-sm font-semibold uppercase tracking-[2px] transition
        ${isActive ? "text-[#00c8ff]" : "text-white hover:text-[#00c8ff]"}`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* MORE DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[2px] text-white hover:text-[#00c8ff]"
              >
                MORE
                <svg className={`w-4 h-4 transition ${moreOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {moreOpen && (
                <div className="absolute top-full mt-4 right-0 w-64 bg-black/90 backdrop-blur-xl rounded-xl shadow-xl overflow-hidden z-50">
                  {moreLinks.map(([label, path]) => (
                    <NavLink
                      key={label}
                      to={path}
                      onClick={() => setMoreOpen(false)}
                      className="block px-6 py-4 text-sm uppercase tracking-wider text-white hover:bg-white/10 hover:text-[#00c8ff]"
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center justify-end">
            <Link
              to="/contact"
              className="rounded-full bg-[#00c8ff] px-6 py-2 text-sm font-semibold text-black hover:bg-white transition"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Toggle – Always Right */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white ml-auto"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-xl">
          <ul className="flex flex-col text-white">
            {[
              ["HOME", "/"],
              ["TOURS", "/tour-packages"],
              ["EXPERIENCE SRI LANKA", "/experience-sri-lanka"],
              ["RENT CAR & BIKE", "/rent-vehicle"],
              ["OUR EXPERTISE", "/expertise"],
              ["TRAVEL GUIDE", "/travel-guide"],
              ["ACCOMMODATION", "/accommodation"],
              ["TRAVEL NEWS", "https://srilankatravelnews.wordpress.com"],
            ].map(([label, path]) => (
              <li key={label}>
                <Link
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-white/10 px-6 py-4 text-sm font-semibold uppercase tracking-wider hover:text-[#00c8ff]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      )}
    </header>
  );
}
