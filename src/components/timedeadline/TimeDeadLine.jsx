import React, { useState, useRef, useContext } from "react"
import { FaRegPlayCircle } from "react-icons/fa"
import CatatanJobs from "../catatanjobs/CatatanJobs"
import { MyContext } from "../../context/MyContext"

const TimeDeadLine = () => {
  const {
    startDeadLine,
    toggleStartDeadLine,
    day,
    getInputDay,
    hours,
    getInputHours,
    minutes,
    getInputMinutes,
    seconds,
    getInputSecond,
  } = useContext(MyContext)

  const setDayRef = useRef()
  const setHoursRef = useRef()
  const setMinutesRef = useRef()
  const setSecondRef = useRef()

  return (
    <div className=" w-full relative">
      <h1 className="w-max  bg-[#F2F8FF] text-blue-500 py-2 font-bold px-20 pb-5 mx-auto mt-10 rounded-full ">
        DEADLINE
      </h1>
      <div className=" absolute top-7 left-3 right-3 bg-[#F2F8FF] rounded-md">
        <div className="grid grid-cols-2 items-center justify-center text-center  gap-y-5  mt-10 ">
          <div className="flex gap-x-10 mx-auto">
            <div className="flex flex-col items-center gap-y-5">
              {startDeadLine ? (
                <div className="">
                  <span
                    className={`text-4xl w-10 ${
                      startDeadLine &&
                      seconds === "00" &&
                      minutes === "00" &&
                      hours === "00" &&
                      day === "00" &&
                      `text-red-500`
                    } `}>
                    {day}
                  </span>
                </div>
              ) : (
                <input
                  type="number"
                  placeholder="00"
                  value={day === 0 ? "" : day}
                  onChange={getInputDay}
                  className=" text-center w-10 text-4xl bg-transparent focus-within:outline-none"
                />
              )}

              <label htmlFor="hari">Hari</label>
            </div>
            <div className="flex flex-col items-center gap-y-5">
              {startDeadLine ? (
                <div className="">
                  <span
                    className={`text-4xl w-10 ${
                      startDeadLine &&
                      seconds === "00" &&
                      minutes === "00" &&
                      hours === "00" &&
                      day === "00" &&
                      `text-red-500`
                    } `}>
                    {hours}
                  </span>
                </div>
              ) : (
                <input
                  type="number"
                  placeholder="00"
                  value={hours === 0 ? "" : hours}
                  onChange={getInputHours}
                  className=" text-center w-10 text-4xl bg-transparent focus-within:outline-none"
                />
              )}

              <label htmlFor="jam">Jam</label>
            </div>
          </div>
          <div className="flex gap-x-10 mx-auto">
            <div className="flex flex-col items-center gap-y-5">
              {startDeadLine ? (
                <div className="">
                  <span
                    className={`text-4xl  border ${
                      startDeadLine &&
                      seconds === "00" &&
                      minutes === "00" &&
                      hours === "00" &&
                      day === "00" &&
                      `text-red-500`
                    } `}>
                    {minutes}
                  </span>
                </div>
              ) : (
                <input
                  type="number"
                  placeholder="00"
                  value={minutes === 0 ? "" : minutes}
                  onChange={getInputMinutes}
                  className=" text-center w-10 text-4xl bg-transparent focus-within:outline-none"
                />
              )}

              <label htmlFor="menit">Menit</label>
            </div>
            <div className="flex flex-col items-center gap-y-5">
              {startDeadLine ? (
                <div className="">
                  <span
                    className={`text-4xl  border  ${
                      startDeadLine &&
                      seconds === "00" &&
                      minutes === "00" &&
                      hours === "00" &&
                      day === "00" &&
                      `text-red-500`
                    } `}>
                    {seconds}
                  </span>
                </div>
              ) : (
                <input
                  type="number"
                  placeholder="00"
                  value={seconds === 0 ? "" : seconds}
                  onChange={getInputSecond}
                  className={` text-center w-10 bg-transparent text-4xl  focus-within:outline-none  `}
                />
              )}

              <label htmlFor="detik">Detik</label>
            </div>
          </div>
        </div>
        <FaRegPlayCircle
          className="mx-auto mt-2 text-4xl hover:cursor-pointer"
          onClick={toggleStartDeadLine}
        />
      </div>
    </div>
  )
}

export default TimeDeadLine
