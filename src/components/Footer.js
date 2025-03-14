import React from "react";
import Fishfooter from "../assets/fishfooter.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Linkedin from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1C1812] text-[#F7F7F6]">
      <div className="container mx-auto px-4 py-6">
        <div className="md:hidden w-full max-w-[400px] mx-auto p-6 flex flex-col gap-9">
          <div className="flex flex-col items-center">
            <img
              src={Fishfooter}
              alt="Fish Logo"
              className="h-10 w-auto mb-4"
            />

            <div className="flex gap-4 justify-center">
              <a
                href="/faq"
                className="font-inter font-normal text-[16px] leading-[150%] hover:opacity-80"
              >
                FAQ
              </a>
              <a
                href="/privacy"
                className="font-inter font-normal text-[16px] leading-[150%] hover:opacity-80"
              >
                Privacy
              </a>
              <a
                href="/support"
                className="font-inter font-normal text-[16px] leading-[150%] hover:opacity-80"
              >
                Support
              </a>
              <a
                href="/contact"
                className="font-inter font-normal text-[16px] leading-[150%] hover:opacity-80"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:opacity-80"
            >
              <img src={Facebook} alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:opacity-80"
            >
              <img src={Instagram} alt="Instagram" className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:opacity-80"
            >
              <img src={Linkedin} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="hidden md:flex flex-col">
          <div className="flex items-center">
            <div className="mr-8">
              <img src={Fishfooter} alt="Fish Logo" className="h-10 w-auto" />
            </div>

            <div className="flex gap-6 mr-auto">
              <a
                href="/faq"
                className="font-inter font-normal text-[16px] leading-[150%] hover:opacity-80"
              >
                FAQ
              </a>
              <a
                href="/privacy"
                className="font-inter font-normal text-[16px] leading-[150%] hover:opacity-80"
              >
                Privacy
              </a>
              <a
                href="/support"
                className="font-inter font-normal text-[16px] leading-[150%] hover:opacity-80"
              >
                Support
              </a>
              <a
                href="/contact"
                className="font-inter font-normal text-[16px] leading-[150%] hover:opacity-80"
              >
                Contact
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:opacity-80"
              >
                <img src={Facebook} alt="Facebook" className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:opacity-80"
              >
                <img src={Instagram} alt="Instagram" className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="hover:opacity-80"
              >
                <img src={Linkedin} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="text-center mt-2">
            <p className="font-inter font-normal text-[12px] leading-[150%] text-[#AEADAA]">
              © 2024 Central Texas Fly Fishing All Rights Reserved.
            </p>
          </div>
        </div>

        <div className="md:hidden text-center">
          <p className="font-inter font-normal text-[12px] leading-[150%] text-[#AEADAA]">
            © 2024 Central Texas Fly Fishing All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
