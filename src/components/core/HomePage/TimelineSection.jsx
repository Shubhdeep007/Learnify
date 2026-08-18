import React from "react";

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeline = [
  {
    Logo: Logo1,
    heading: "Learn at Your Pace",
    description:
      "Follow structured courses and learn whenever it fits your schedule.",
  },
  {
    Logo: Logo2,
    heading: "Build Real Projects",
    description:
      "Turn concepts into practical projects that strengthen your portfolio.",
  },
  {
    Logo: Logo3,
    heading: "Learn from Experts",
    description:
      "Gain practical knowledge from experienced developers and instructors.",
  },
  {
    Logo: Logo4,
    heading: "Grow Your Career",
    description:
      "Develop in-demand skills and become ready for real-world opportunities.",
  },
];

const TimelineSection = () => {
  return (
    <div className="flex flex-row gap-16 items-center w-full">
      
      {/* Timeline */}
<div className="relative w-[45%] flex flex-col gap-8">

  {/* Vertical line behind the logos */}
  <div
    className="
      absolute
      left-[25px]
      top-[25px]
      bottom-[25px]
      w-[2px]
      bg-gradient-to-b
      from-cyan-400
      via-blue-500
      to-cyan-400
      opacity-70
      shadow-[0_0_10px_rgba(0,229,255,0.6)]
    "
  />

  {timeline.map((element, index) => (
    <div
      key={index}
      className="relative z-10 flex flex-row items-center gap-6"
    >

      {/* Logo */}
      <div
        className="
          w-[50px]
          h-[50px]
          shrink-0
          rounded-full
          bg-white
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-[0_0_20px_rgba(0,229,255,0.7)]
        "
      >
        <img
          src={element.Logo}
          alt={element.heading}
          className="w-[28px] h-[28px]"
        />
      </div>

      {/* Text */}
      <div>
        <h2 className="font-semibold text-[18px] text-black">
          {element.heading}
        </h2>

        <p className="text-[14px] text-black mt-1">
          {element.description}
        </p>
      </div>

    </div>
  ))}
</div>
      {/* Image + Stats */}
      <div className="relative w-[55%]">
        
        {/* Image */}
        <div
          className="
            overflow-hidden
            rounded-xl
            transition-all duration-500
            hover:shadow-[0_0_30px_rgba(0,229,255,0.25)]
          "
        >
          <img
            src={timelineImage}
            alt="Learning journey"
            className="
              w-full
              object-cover
              transition-transform duration-500
              hover:scale-[1.03]
            "
          />
        </div>

        {/* Stats Card */}
        <div
          className="
            absolute
            left-1/2
            bottom-0
            translate-x-[-50%]
            translate-y-[50%]

            flex flex-row
            bg-richblack-800
            border border-richblack-600
            rounded-xl

            shadow-[0_10px_30px_rgba(0,0,0,0.4)]
          "
        >
          {/* Stat 1 */}
          <div
            className="
              flex items-center gap-4
              px-8 py-6
              border-r border-richblack-600
              group
            "
          >
            <p
              className="
                text-3xl
                font-bold
                text-white
                transition-all duration-300
                group-hover:text-[#00E5FF]
                group-hover:drop-shadow-[0_0_10px_rgba(0,229,255,0.7)]
              "
            >
              10+
            </p>

            <p className="text-xs uppercase tracking-wide text-richblack-300">
              Learning<br />Paths
            </p>
          </div>

          {/* Stat 2 */}
          <div
            className="
              flex items-center gap-4
              px-8 py-6
              group
            "
          >
            <p
              className="
                text-3xl
                font-bold
                text-white
                transition-all duration-300
                group-hover:text-[#00E5FF]
                group-hover:drop-shadow-[0_0_10px_rgba(0,229,255,0.7)]
              "
            >
              250+
            </p>

            <p className="text-xs uppercase tracking-wide text-richblack-300">
              Quality<br />Courses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;