import React from "react";
import TexasFishingDesktop from "../assets/texasFishingD.png";
import TexasFishingMobile from "../assets/texasFishingMobile.png";
import FeaturedOptions from "./FeaturedOptions";
import MemberStories from "./MemberStories";

const Body = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-screen-lg mx-auto px-4 py-12 flex flex-col md:flex-row items-start justify-between gap-6">
        <div className="w-full md:w-1/2 flex flex-col gap-4 order-2 md:order-1">
          <h1 className="font-inter text-[56px] leading-tight font-semibold text-[#1C1812]">
            Central Texas
            <br />
            Fly Fishing
          </h1>
          <p className="font-inter text-xl md:text-[20px] font-normal leading-[150%] text-[#65625E]">
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
            cursus vestibulum, facilisi ac, sed faucibus.
          </p>
          <button className="mt-4 bg-[#6B5B41] text-white px-4 py-2 rounded w-28 text-sm hover:bg-[#514432] transition-colors duration-300 font-inter">
            Get started
          </button>
        </div>

        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mt-0 order-1 md:order-2">
          <img
            src={TexasFishingMobile}
            alt="Person fly fishing in a misty mountain lake"
            className="w-full h-auto md:hidden"
            loading="lazy"
          />
          <img
            src={TexasFishingDesktop}
            alt="Person fly fishing in a misty mountain lake"
            className="hidden md:block w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
      <FeaturedOptions />
      <MemberStories />
    </div>
  );
};

export default Body;
