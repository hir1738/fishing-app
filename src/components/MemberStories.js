import React from "react";
import JohnsStoryImage from "../assets/MemberStories1.png";
import TheJourneyImage from "../assets/MemberStories2.png";
import CatchDayImage from "../assets/MemberStories3.png";
import TroutTalesImage from "../assets/MemberStories4.png";

const MemberStories = () => {
  const stories = [
    {
      id: "johns-story",
      title: "John's Story",
      description:
        "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh",
      image: JohnsStoryImage,
    },
    {
      id: "the-journey",
      title: "The Journey",
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
      image: TheJourneyImage,
    },
    {
      id: "catch-day",
      title: "Catch Day",
      description:
        "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
      image: CatchDayImage,
    },
    {
      id: "trout-tales",
      title: "Trout Tales",
      description:
        "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed",
      image: TroutTalesImage,
    },
  ];

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="font-inter font-semibold text-[40px] md:text-[48px] leading-[113%] tracking-[0%] text-[#1C1812] mb-4 md:mb-8">
          Member stories
        </h2>

        <div className="md:hidden w-full h-[1px] bg-[#C6C5C3] mb-4"></div>

        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 max-w-[1024px]">
          {stories.map((story, index) => (
            <div key={story.id} className="pb-4">
              <div className="flex flex-row gap-6">
                <div className="w-[200px] h-[200px] flex-shrink-0">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-gluten font-normal text-[32px] leading-[150%] tracking-[0%] text-[#1C1812] mb-0">
                    {story.title}
                  </h3>
                  <p className="font-inter font-normal text-[14px] leading-[150%] tracking-[0%] text-[#65625E] mb-2">
                    {story.description}
                  </p>
                  <div>
                    <button className="font-inter font-normal text-[14px] leading-[150%] tracking-[0%] text-center w-[88px] h-[29px] flex items-center justify-center gap-[8px] py-[4px] px-[8px] rounded-[4px] bg-[#DFDEDD] text-[#1C1812] hover:bg-[#F7F7F6] transition-colors">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden flex flex-col">
          {stories.map((story, index) => (
            <div key={story.id} className="mb-4">
              <div className="flex flex-col">
                <div className="flex flex-row mb-2">
                  <div className="w-[100px] h-[100px] flex-shrink-0 mr-4">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-gluten font-normal text-[32px] leading-[150%] tracking-[0%] text-[#1C1812] mb-1">
                      {story.title}
                    </h3>
                    <p className="font-inter font-normal text-[16px] leading-[150%] tracking-[0%] text-[#65625E]">
                      {story.description}
                    </p>
                  </div>
                </div>

                <button className="font-inter font-normal text-[16px] leading-[150%] tracking-[0%] text-center py-1 px-3 self-start ml-0 bg-white border border-[#D9D3C5] text-[#1C1812] rounded hover:bg-[#F7F7F6] transition-colors">
                  Read more
                </button>
              </div>

              {index < stories.length - 1 && (
                <div className="w-full h-[1px] bg-[#C6C5C3] my-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberStories;
