import React, { useState } from "react"
import { useForm } from "react-hook-form"
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { changePassword } from "../../../../services/operations/SettingsAPI"
import IconBtn from "../../../common/IconBtn"

export default function UpdatePassword() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()

  const newPassword = watch("newPassword")

  const submitPasswordForm = async (data) => {
    try {
      await changePassword(token, {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      })
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit(submitPasswordForm)}>
      <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">

        <h2 className="text-lg font-semibold text-richblack-5">
          Password
        </h2>

        <div className="flex flex-col gap-5">

          {/* Current Password */}
          <div className="relative flex flex-col gap-2">
            <label htmlFor="oldPassword" className="lable-style">
              Current Password
            </label>

            <input
              type={showOldPassword ? "text" : "password"}
              id="oldPassword"
              placeholder="Enter Current Password"
              className="form-style"
              {...register("oldPassword", {
                required: "Please enter your Current Password",
              })}
            />

            <span
              onClick={() =>
                setShowOldPassword((prev) => !prev)
              }
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {!showOldPassword ? (
                <AiOutlineEyeInvisible
                  fontSize={24}
                  fill="#AFB2BF"
                />
              ) : (
                <AiOutlineEye
                  fontSize={24}
                  fill="#AFB2BF"
                />
              )}
            </span>

            {errors.oldPassword && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                {errors.oldPassword.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">

            {/* New Password */}
            <div className="relative flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="newPassword" className="lable-style">
                New Password
              </label>

              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                placeholder="Enter New Password"
                className="form-style"
                {...register("newPassword", {
                  required: "Please enter your New Password",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />

              <span
                onClick={() =>
                  setShowNewPassword((prev) => !prev)
                }
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {!showNewPassword ? (
                  <AiOutlineEyeInvisible
                    fontSize={24}
                    fill="#AFB2BF"
                  />
                ) : (
                  <AiOutlineEye
                    fontSize={24}
                    fill="#AFB2BF"
                  />
                )}
              </span>

              {errors.newPassword && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.newPassword.message}
                </span>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative flex flex-col gap-2 lg:w-[48%]">
              <label
                htmlFor="confirmPassword"
                className="lable-style"
              >
                Confirm New Password
              </label>

              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm New Password"
                className="form-style"
                {...register("confirmPassword", {
                  required: "Please confirm your New Password",
                  validate: (value) =>
                    value === newPassword ||
                    "Passwords do not match",
                })}
              />

              <span
                onClick={() =>
                  setShowConfirmPassword((prev) => !prev)
                }
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {!showConfirmPassword ? (
                  <AiOutlineEyeInvisible
                    fontSize={24}
                    fill="#AFB2BF"
                  />
                ) : (
                  <AiOutlineEye
                    fontSize={24}
                    fill="#AFB2BF"
                  />
                )}
              </span>

              {errors.confirmPassword && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2">

        <button
          type="button"
          onClick={() => navigate("/dashboard/my-profile")}
          className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
        >
          Cancel
        </button>

        <IconBtn type="submit" text="Update" />

      </div>
    </form>
  )
}