import React from "react"

const HighlightText = ({ text }) => {
  return (
    <span
      className="
        font-bold
        bg-gradient-to-r
        from-[#00E5FF]
        to-[#2563EB]
        bg-clip-text
        text-transparent
      "
    >
      {" "}
      {text}
    </span>
  )
}

export default HighlightText