import React from "react"
import { FaRegPlayCircle } from "react-icons/fa"

const TimeDeadLine = () => {
  return (
    <div className=" w-full relative">
      <h1 className="w-max  bg-[#F2F8FF] py-2 font-bold px-20 pb-5 mx-auto mt-24 rounded-full ">
        DEADLINE
      </h1>
      <div className=" absolute  top-7 left-3 right-3 bg-[#F2F8FF] rounded-md">
        <div className="grid grid-cols-4 justify-center text-center mx-auto gap-x-2 px-10 mt-10">
          <h1 className="text-3xl font-extralight text-[#959494]">0</h1>
          <h1 className="text-3xl font-extralight text-[#959494]">0</h1>
          <h1 className="text-3xl font-extralight text-[#959494]">0</h1>
          <h1 className="text-3xl font-extralight text-[#959494]">0</h1>
          <h1 className="text-3xl">0</h1>
          <h1 className="text-3xl">0</h1>
          <h1 className="text-3xl">0</h1>
          <h1 className="text-3xl">0</h1>
          <h1 className="text-3xl font-extralight text-[#959494]">0</h1>
          <h1 className="text-3xl font-extralight text-[#959494]">0</h1>
          <h1 className="text-3xl font-extralight text-[#959494]">0</h1>
          <h1 className="text-3xl font-extralight text-[#1d1717]">0</h1>
        </div>
        <FaRegPlayCircle className="mx-auto text-4xl mb-10" />
      </div>
    </div>
  )
}

export default TimeDeadLine
