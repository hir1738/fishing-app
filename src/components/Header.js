import React, { useState, useEffect } from "react";
import Fish from "../assets/fish.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const path = window.location.pathname;
    setActivePage(path);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`py-4 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <img src={Fish} alt="Fish Logo" className="h-10 w-auto" />
              <span
                className="hidden md:inline"
                style={{
                  fontFamily: "Gluten, cursive",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#514432",
                  width: "250px",
                  height: "18px",
                }}
              >
                Central Texas Fly Fishing
              </span>
            </a>
          </div>

          <button
            className="flex flex-col justify-between w-7 h-5 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-full h-0.5 bg-primary transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-primary transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-primary transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          <nav
            className={`fixed md:static top-0 right-0 w-4/5 md:w-auto h-screen md:h-auto bg-white md:bg-transparent p-16 md:p-0 transition-all duration-300 z-10 transform ${
              menuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
            } shadow-lg md:shadow-none`}
          >
            <ul className="flex flex-col md:flex-row md:gap-8">
              <li className="mx-4">
                <a
                  href="/"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                    color: "#1C1812",
                    textDecoration: "none",
                    paddingBottom: "5px",
                    borderBottom:
                      activePage === "/" ? "2px solid black" : "none",
                    display: "inline-block",
                  }}
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>
              <li className="mx-4">
                <a
                  href="/about"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                    color: "#1C1812",
                    textDecoration: "none",
                    paddingBottom: "5px",
                    borderBottom:
                      activePage === "/about" ? "2px solid black" : "none",
                    display: "inline-block",
                  }}
                  onClick={closeMenu}
                >
                  About us
                </a>
              </li>
              <li className="mx-4">
                <a
                  href="/services"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                    color: "#1C1812",
                    textDecoration: "none",
                    paddingBottom: "5px",
                    borderBottom:
                      activePage === "/services" ? "2px solid black" : "none",
                    display: "inline-block",
                  }}
                  onClick={closeMenu}
                >
                  Services
                </a>
              </li>
              <li className="mx-4">
                <a
                  href="/contact"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                    color: "#1C1812",
                    textDecoration: "none",
                    paddingBottom: "5px",
                    borderBottom:
                      activePage === "/contact" ? "2px solid black" : "none",
                    display: "inline-block",
                  }}
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
