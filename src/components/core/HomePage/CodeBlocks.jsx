import React, { useEffect, useState } from "react";
import CTAButton from "../HomePage/Button";
import HighlightText from "./HighlightText";
import { FaArrowRight } from "react-icons/fa";

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  codeColor,
}) => {
  const [displayCode, setDisplayCode] = useState("");

  useEffect(() => {
  let interval;
  let timeout;

  const startTyping = () => {
    let index = 0;

    interval = setInterval(() => {
      setDisplayCode(codeblock.slice(0, index));
      index++;

      if (index > codeblock.length) {
        clearInterval(interval);

        timeout = setTimeout(() => {
          setDisplayCode("");
          startTyping();
        }, 3000);
      }
    }, 70
  
  );
  };

  startTyping();

  return () => {
    clearInterval(interval);
    clearTimeout(timeout);
  };
}, [codeblock]);

  return (
    <div className={`flex ${position} my-20 justify-between gap-10`}>

      {/* LEFT SECTION */}
      <div className="w-[50%] flex flex-col gap-8">

        {heading}

        <div className="text-richblack-300 font-bold">
          {subheading}
        </div>

        <div className="flex gap-7 mt-7">

          <CTAButton
            active={ctabtn1.active}
            linkto={ctabtn1.linkto}
          >
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>

          <CTAButton
            active={ctabtn2.active}
            linkto={ctabtn2.linkto}
          >
            {ctabtn2.btnText}
          </CTAButton>

        </div>
      </div>


      {/* RIGHT CODE SECTION */}
      <div className="h-fit flex flex-row w-full lg:w-[500px] py-4">

        {/* LINE NUMBERS */}
        <div className="w-[10%] flex flex-col text-center text-richblack-400 font-mono font-bold">
          {Array.from({ length: 11 }, (_, index) => (
            <p key={index}>
              {index + 1}
            </p>
          ))}
        </div>


        {/* CODE */}
        <div
          className={`
            w-[90%]
            ${codeColor}
            font-mono
            font-bold
            whitespace-pre
            overflow-x-auto
            `}
        >
          {displayCode}
          <span className="animate-pulse">|</span>
        </div>

      </div>

    </div>
  );
};

export default CodeBlocks;