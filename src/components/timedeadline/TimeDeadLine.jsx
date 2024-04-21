import React, { useState, useRef } from "react"
import { FaRegPlayCircle } from "react-icons/fa"
import CatatanJobs from "../catatanjobs/CatatanJobs"

const TimeDeadLine = () => {
  const [isStart, setIsStart] = useState(false)

  const [day, setDay] = useState("")
  const [hours, setHours] = useState("")
  const [minutes, setMinutes] = useState("")
  const [second, setSecond] = useState("")
  const setDayRef = useRef()
  const setHoursRef = useRef()
  const setMinutesRef = useRef()
  const setSecondRef = useRef()

  return (
    <div className=" w-full relative">
      <h1 className="w-max  bg-[#F2F8FF] py-2 font-bold px-20 pb-5 mx-auto mt-10 rounded-full ">
        DEADLINE
      </h1>
      <div className=" absolute  top-7 left-3 right-3 bg-[#F2F8FF] rounded-md">
        <div className="grid grid-cols-4 justify-center text-center mx-auto gap-x-2 -gap-y-5 px-10 mt-10">
          {/* <h1 className="text-3xl font-extralight text-[#959494]">30</h1>
          <h1 className="text-3xl font-extralight text-[#959494]">23</h1>
          <h1 className="text-3xl font-extralight text-[#959494]">59</h1>
          <h1 className="text-3xl font-extralight text-[#959494]">59</h1> */}

          <div className="flex flex-col h-28  overflow-y-scroll">
            <h1 className="text-3xl font-extralight text-[#959494]">30</h1>
            <h1 className="text-3xl font-extralight text-[#959494]">30</h1>
            <h1 className="text-3xl" ref={setDayRef}>
              00
            </h1>
            <h1 className="text-3xl font-extralight text-[#959494]">01</h1>
            <h1 className="text-3xl font-extralight text-[#959494]">01</h1>
          </div>
          <h1 className="text-3xl">00</h1>
          <h1 className="text-3xl">00</h1>
          <h1 className="text-3xl">00</h1>

          <h1 className="text-sm font-extralight text-[#1d1717]">Hari</h1>
          <h1 className="text-sm font-extralight text-[#1d1717]">Jam</h1>
          <h1 className="text-sm font-extralight text-[#1d1717]">Menit</h1>
          <h1 className="text-sm font-extralight text-[#1d1717]">Detik</h1>
        </div>
        <FaRegPlayCircle className="mx-auto text-4xl hover:cursor-pointer" />
      </div>
    </div>
  )
}

export default TimeDeadLine
