import React, { useState } from "react";
import Fishing from "../assets/fishing.png";
import FishingBG1 from "../assets/fishBG1.png";
import FishingBG2 from "../assets/fishBG2.png";
import FishingBG3 from "../assets/fishBG3.png";
import UpArrow from '../assets/upArrow.svg';
import DownArrow from "../assets/downArrow.svg";

const FeaturedOptions = () => {
  const [activeSection, setActiveSection] = useState("explore");

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  const options = [
    {
      id: "explore",
      title: "Explore Fly Fishing",
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
      backgroundImage: FishingBG1,
    },
    {
      id: "experiences",
      title: "Fly Fishing Experiences",
      description:
        "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
      backgroundImage: FishingBG2,
    },
    {
      id: "gear",
      title: "Gear Up and Catch More",
      description:
        "In metus vulputate eu scelerisque felis imperdiet. Nunc scelerisque viverra mauris in aliquam sem. S",
      backgroundImage: FishingBG3,
    },
  ];

  return (
    <div className="w-full bg-[#F1ECE1] py-16">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="font-inter font-semibold text-[48px] leading-[113%] text-[#1C1812] mb-8">
          Featured options
        </h2>

        <div className="flex flex-col gap-4 md:hidden">
          {options.map((option) => (
            <div
              key={option.id}
              className="relative h-[240px] overflow-hidden"
              style={{
                backgroundImage:
                  option.id === "explore"
                    ? `url(${FishingBG1})`
                    : option.id === "experiences"
                    ? `url(${FishingBG2})`
                    : `url(${FishingBG3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute inset-0 bg-[#E5E2DB] opacity-25"
                style={{ mixBlendMode: "luminosity" }}
              ></div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-inter font-semibold text-[28px] leading-[113%] mb-2 text-[#1C1812]">
                    {option.title}
                  </h3>
                  <p className="font-inter font-normal text-[16px] leading-[150%] text-[#65625E]">
                    {option.description}
                  </p>
                </div>
                <div>
                  <button className="font-inter font-normal text-[14px] leading-[150%] bg-white text-[#1C1812] px-4 py-2 rounded hover:bg-[#1C1812] hover:text-white transition-colors">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex md:flex-col">
          {options.map((option) => (
            <div
              key={option.id}
              className="border-b border-[#D9D3C5] last:border-b-0"
            >
              <div
                className="flex justify-between items-center py-4 cursor-pointer"
                onClick={() => toggleSection(option.id)}
              >
                <h3 className="font-inter font-normal text-[20px] leading-[150%] text-[#1C1812]">
                  {option.title}
                </h3>
                <span>
                  {activeSection === option.id ? (
                    <img src={UpArrow} alt="Collapse section" />
                  ) : (
                    <img src={DownArrow} alt="Expand section" />
                  )}
                </span>
              </div>

              {activeSection === option.id && (
                <div className="py-6 flex flex-row gap-6">
                  <div className="w-2/5">
                    <img
                      src={Fishing}
                      alt={option.title}
                      className="w-full max-w-[400px] h-auto max-h-[220px] object-cover rounded"
                    />
                  </div>
                  <div className="w-3/5">
                    <h4 className="font-inter font-semibold text-[32px] leading-[113%] text-[#1C1812] mb-2">
                      {option.title}
                    </h4>
                    <p className="font-inter font-normal text-[20px] leading-[150%] text-[#65625E] mb-4">
                      {option.description}
                    </p>
                    <button className="font-inter font-normal text-[14px] leading-[150%] text-center px-4 py-2 bg-[#E5E2DB] text-[#1C1812] rounded hover:bg-[#F7F7F6] hover:text-[#1C1812] transition-colors">
                      Learn more
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedOptions;
