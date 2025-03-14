import React, { useState, useEffect } from "react";
import Fish from "../assets/fish.svg";
import Menu from "../assets/menu.svg";

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

  const handleNavClick = (e, path) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      setActivePage(path);
      closeMenu();
    } else {
      closeMenu();
    }
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
              <span className="hidden md:inline font-gluten font-normal text-[20px] leading-[100%] text-[#514432] w-[250px] h-[18px]">
                Central Texas Fly Fishing
              </span>
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <img src={Menu} alt="Menu" className="w-6 h-6" />
          </button>

          <nav
            className={`md:static absolute top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 transition-all duration-300 z-10 transform ${
              menuOpen ? "block" : "hidden md:block"
            } shadow-md md:shadow-none`}
          >
            <ul className="flex flex-col md:flex-row md:gap-8">
              <li className="mx-4 mb-6 md:mb-0">
                <a
                  href="/"
                  className={`font-inter font-normal text-[16px] leading-[150%] text-[#1C1812] no-underline pb-[5px] inline-block ${
                    activePage === "/" ? "border-b-2 border-[#1C1812]" : ""
                  }`}
                  onClick={(e) => handleNavClick(e, "/")}
                >
                  Home
                </a>
              </li>
              <li className="mx-4 mb-6 md:mb-0">
                <a
                  href="/about"
                  className={`font-inter font-normal text-[16px] leading-[150%] text-[#1C1812] no-underline pb-[5px] inline-block ${
                    activePage === "/about" ? "border-b-2 border-[#1C1812]" : ""
                  }`}
                  onClick={(e) => handleNavClick(e, "/about")}
                >
                  About us
                </a>
              </li>
              <li className="mx-4 mb-6 md:mb-0">
                <a
                  href="/services"
                  className={`font-inter font-normal text-[16px] leading-[150%] text-[#1C1812] no-underline pb-[5px] inline-block ${
                    activePage === "/services" ? "border-b-2 border-[#1C1812]" : ""
                  }`}
                  onClick={(e) => handleNavClick(e, "/services")}
                >
                  Services
                </a>
              </li>
              <li className="mx-4 mb-6 md:mb-0">
                <a
                  href="/contact"
                  className={`font-inter font-normal text-[16px] leading-[150%] text-[#1C1812] no-underline pb-[5px] inline-block ${
                    activePage === "/contact" ? "border-b-2 border-[#1C1812]" : ""
                  }`}
                  onClick={(e) => handleNavClick(e, "/contact")}
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
