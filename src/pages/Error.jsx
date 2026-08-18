import React from "react"


const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-richblack-900 text-white px-4">
      
      {/* 404 Image */}
      <img
        src="/error-404.png"
        alt="404 - Page Not Found"
        className="w-[300px] md:w-[450px] mb-8"
      />

      {/* Error Text */}
      <h1 className="text-4xl md:text-5xl font-bold text-richblack-5 mb-4">
        Page Not Found
      </h1>

      <p className="text-lg text-richblack-300 text-center max-w-[500px] mb-8">
        Oops! The page you're looking for doesn't exist or may have been moved.
      </p>

      {/* Go Home Button */}
      <a
        href="/"
        className="rounded-md bg-yellow-50 px-6 py-3 font-semibold text-richblack-900 hover:bg-yellow-100 transition-all"
      >
        Go Back Home
      </a>
    </div>
  )
}

export default Error