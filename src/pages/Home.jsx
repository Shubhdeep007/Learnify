import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/core/HomePage/ExploreMore";

const Home = () => {
  return (
    <div>

     
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center text-white">

        {/* Become an Instructor */}
        <Link to={"/signup"}>
          <div
            className="
              group mt-16 mx-auto w-fit rounded-full bg-richblack-800
              p-1 font-bold text-richblack-200
              transition-all duration-200 hover:scale-95
            "
          >
            <div
              className="
                flex flex-row items-center gap-2 rounded-full
                px-10 py-[5px]
                transition-all duration-200
                group-hover:bg-richblack-900
              "
            >
              <p>Start Your Learning Journey</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Main Heading */}
        <div className="mt-7 text-center text-4xl font-semibold leading-[1.2] md:text-5xl">
          Turn Your Ideas Into
          <HighlightText text={" Real-World Skills"} />
        </div>

        {/* Hero Description */}
        <div
          className="
            mt-4 w-[90%] text-center text-lg
            font-medium leading-7 text-richblack-300
            md:w-[75%]
          "
        >
          Learn programming through structured courses, practical projects,
          and hands-on challenges. Build the skills you need to create,
          solve problems, and grow with confidence.
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            <div className="flex items-center gap-2">
              Start Learning
              <FaArrowRight />
            </div>
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}>
            Explore Courses
          </CTAButton>
        </div>

        {/* Hero Video */}
        <div className="mx-3 my-12 shadow-[0_0_40px_rgba(0,229,255,0.15)]">
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* ================= CODE SECTION 1 ================= */}

        <div className="w-full">
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold leading-tight">
                Learn the
                <HighlightText text={" fundamentals "} />
                that turn beginners into confident developers.
              </div>
            }
            subheading={
              "Follow practical lessons designed to help you understand concepts, write better code, and apply what you learn through real projects."
            }
            ctabtn1={{
              btnText: "Start Learning",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "View Courses",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
<html>
<head>
<title>Learnify</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<h1>Welcome to Learnify</h1>
<p>Learn. Build. Grow.</p>
</body>
</html>`}
            codeColor={"text-yellow-25"}
          />
        </div>
    {/* ================= CODE SECTION 2 ================= */}

<div className="w-full">
  <CodeBlocks
    position={"lg:flex-row-reverse"}

    heading={
      <div className="text-4xl font-semibold leading-tight">
        From
        <HighlightText text={" Learning to Building "} />
        Real Applications
      </div>
    }

    subheading={
      "Go beyond tutorials by combining your frontend, backend, and database skills to create complete applications that solve real problems."
    }

    ctabtn1={{
      btnText: "Start Building",
      linkto: "/signup",
      active: true,
    }}

    ctabtn2={{
      btnText: "Explore Paths",
      linkto: "/login",
      active: false,
    }}

    codeblock={`const app = {
name: "Learnify",
frontend: "React",
backend: "Node.js",
database: "MongoDB",
skills: ["JavaScript", "APIs", "Git"]
};
function buildProject() {
  return "Ideas become applications.";
}
console.log(buildProject());`}

    codeColor={"text-yellow-25"}
  />
</div>
        {/* Explore More */}
        <ExploreMore />
      </div>


      {/* ================= SECTION 2 : SKILLS ================= */}

      <div className="bg-pure-greys-5 text-richblack-700">

        {/* Background Banner */}
        <div className="homepage_bg h-[310px]">

          <div
            className="
              mx-auto flex h-full w-11/12 max-w-maxContent
              flex-col items-center justify-between gap-5
            "
          >

            <div className="h-[150px]"></div>

            <div className="flex flex-row gap-7">

              <div className="flex flex-row gap-5 mt-8">
  
  <div className="flex flex-row gap-5 mt-8">

  {/* Explore Courses */}
  <div className="flex flex-row gap-5 mt-8">

  {/* Explore Courses */}
  <Link
    to="/signup"
    className="
      flex items-center gap-2
      rounded-lg
      border border-[#00E5FF]
      bg-transparent
      px-6 py-3
      font-semibold
      text-black
      transition-all duration-300
      hover:bg-[#00E5FF]
      hover:text-black
      hover:shadow-[0_0_20px_rgba(0,229,255,0.45)]
    "
  >
    Explore Courses
    <FaArrowRight />
  </Link>

  {/* Learn More */}
  <Link
    to="/login"
    className="
      flex items-center
      rounded-lg
      border border-[#00E5FF]
      bg-transparent
      px-6 py-3
      font-semibold
      text-black
      transition-all duration-300
      hover:bg-[#00E5FF]
      hover:text-black
      hover:shadow-[0_0_20px_rgba(0,229,255,0.45)]
    "
  >
    Learn More
  </Link>

</div>

</div>
</div>

            </div>

          </div>

        </div>


        {/* Skills Section */}
        <div
          className="
            mx-auto flex w-11/12 max-w-maxContent
            flex-col items-center justify-between gap-7
          "
        >

          <div className="mb-10 mt-[95px] flex flex-col gap-8 md:flex-row md:gap-5">

            {/* Heading */}
            <div className="w-full text-4xl font-semibold md:w-[45%]">
              Build the skills that help you
              <HighlightText text={" stand out in the real world"} />
            </div>

            {/* Description */}
            <div className="flex w-full flex-col items-start gap-10 md:w-[40%]">

              <div className="text-[16px] leading-7">
                Learn more than syntax. Develop problem-solving abilities,
                understand modern technologies, and work on projects that
                turn your knowledge into practical experience.
              </div>

              <CTAButton active={true} linkto={"/about"}>
                Learn More About Us
              </CTAButton>

            </div>

          </div>


          {/* Timeline */}
          <TimelineSection />


          {/* Languages */}
          <LearningLanguageSection />

        </div>

      </div>


      {/* ================= SECTION 3 : INSTRUCTOR ================= */}

      <div
        className="
          mx-auto flex w-11/12 max-w-maxContent
          flex-col items-center justify-between gap-8
          bg-richblack-900 text-white
        "
      >

        <InstructorSection />

        {/* Reviews Heading */}
        <div className="mt-10 text-center">

          <h2 className="text-4xl font-semibold">
            Learn With Confidence
          </h2>

          <p className="mt-4 text-richblack-300">
            See how learners are turning their curiosity into real skills.
          </p>

        </div>

        {/* Review Slider */}
        {/* Review Slider can be added here */}

      </div>


    

      <Footer />

    </div>
  );
};

export default Home;