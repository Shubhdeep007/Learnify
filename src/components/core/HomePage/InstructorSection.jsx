import React from "react"
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from "./HighlightText"
import CTAButton from "../HomePage/Button"
import { FaArrowRight, FaCheckCircle } from "react-icons/fa"

const InstructorSection = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-row items-center gap-20">

        {/* Left Image */}
        <div className="w-[50%]">
          <img
            src={Instructor}
            alt="Become a Learnify Instructor"
            className="w-full rounded-xl shadow-[0_0_25px_rgba(0,229,255,0.15)]"
          />
        </div>

        {/* Right Content */}
        <div className="flex w-[50%] flex-col gap-7">

          {/* Heading */}
          <div className="w-[90%] text-4xl font-semibold leading-[1.3]">
            Share Your{" "}
            <HighlightText text="Knowledge" />
            <br />
            Shape Future{" "}
            <HighlightText text="Developers" />
          </div>

          {/* Description */}
          <p className="w-[90%] text-[16px] font-medium leading-7 text-richblack-300">
            Turn your expertise into impact. Join Learnify and help aspiring
            developers build real-world skills through practical lessons,
            hands-on projects, and industry-focused experiences.
          </p>

          {/* Benefits */}
          <div className="flex flex-col gap-4">

            <div className="flex items-center gap-3 text-richblack-100">
              <FaCheckCircle className="text-[#00E5FF]" />
              <span>Share your knowledge with thousands of learners</span>
            </div>

            <div className="flex items-center gap-3 text-richblack-100">
              <FaCheckCircle className="text-[#00E5FF]" />
              <span>Create courses and teach at your own pace</span>
            </div>

            <div className="flex items-center gap-3 text-richblack-100">
              <FaCheckCircle className="text-[#00E5FF]" />
              <span>Build your reputation as an industry expert</span>
            </div>

          </div>

          {/* Stats */}
          <div className="flex gap-10 border-y border-richblack-700 py-5">

            <div>
              <p className="text-2xl font-bold text-richblack-5">
                10K+
              </p>
              <p className="text-sm text-richblack-400">
                Active Learners
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-richblack-5">
                500+
              </p>
              <p className="text-sm text-richblack-400">
                Courses
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-richblack-5">
                100+
              </p>
              <p className="text-sm text-richblack-400">
                Instructors
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="w-fit">
            <CTAButton active={true} linkto="/signup">
              <div className="flex items-center gap-3">
                <span>Start Teaching Today</span>
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>

        </div>
      </div>
    </div>
  )
}

export default InstructorSection