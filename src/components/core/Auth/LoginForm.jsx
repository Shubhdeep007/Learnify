import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { FaArrowRight } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { login } from "../../../services/operations/authAPI"

function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className="mt-8 flex w-full flex-col gap-y-5"
    >
      {/* Email */}
      <label className="w-full">
        <p className="mb-2 text-[0.875rem] font-medium leading-[1.375rem] text-richblack-5">
          Email Address
          <sup className="ml-1 text-pink-200">*</sup>
        </p>

        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter your email"
          className="
            w-full rounded-lg
            border border-richblack-700
            bg-richblack-800
            p-3
            text-richblack-5
            outline-none
            transition-all duration-200
            placeholder:text-richblack-400
            focus:border-yellow-50
            focus:ring-1
            focus:ring-yellow-50/40
          "
        />
      </label>

      {/* Password */}
      <label className="relative w-full">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[0.875rem] font-medium leading-[1.375rem] text-richblack-5">
            Password
            <sup className="ml-1 text-pink-200">*</sup>
          </p>

          <Link
            to="/forgot-password"
            className="
              text-xs font-medium
              text-blue-100
              transition-all duration-200
              hover:text-yellow-50
            "
          >
            Forgot Password?
          </Link>
        </div>

        <input
          required
          // minLength={6}
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter your password"
          className="
            w-full rounded-lg
            border border-richblack-700
            bg-richblack-800
            p-3 pr-12
            text-richblack-5
            outline-none
            transition-all duration-200
            placeholder:text-richblack-400
            focus:border-yellow-50
            focus:ring-1
            focus:ring-yellow-50/40
          "
        />

        {/* Eye icon */}
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="
            absolute right-3 top-[38px]
            cursor-pointer
            text-richblack-300
            transition-colors
            hover:text-yellow-50
          "
        >
          {showPassword ? (
            <AiOutlineEye fontSize={22} />
          ) : (
            <AiOutlineEyeInvisible fontSize={22} />
          )}
        </span>
      </label>

      {/* Sign In Button */}
      <button
        type="submit"
        className="
          group mt-3
          flex items-center justify-center gap-2
          rounded-lg
          bg-yellow-50
          py-3 px-4
          font-semibold
          text-richblack-900
          transition-all duration-200
          hover:scale-[1.01]
          hover:shadow-[0_0_20px_rgba(242,190,34,0.25)]
          active:scale-[0.98]
        "
      >
        Sign In

        <FaArrowRight
          className="
            transition-transform duration-200
            group-hover:translate-x-1
          "
        />
      </button>

      {/* Signup section */}
      <div className="mt-2 flex items-center justify-center gap-2 text-sm">
        <span className="text-richblack-400">
          Don't have an account?
        </span>

        <Link
          to="/signup"
          className="
            font-semibold
            text-blue-100
            transition-colors duration-200
            hover:text-yellow-50
          "
        >
          Create Account
        </Link>
      </div>
    </form>
  )
}

export default LoginForm