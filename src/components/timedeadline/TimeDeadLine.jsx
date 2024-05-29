import React, { useState, useRef, useContext } from "react"
import { FaRegPlayCircle } from "react-icons/fa"
import { MyContext } from "../../context/MyContext"

const TimeDeadLine = () => {
  const {
    startDeadLine,
    toggleStartDeadLine,
    days,
    getInputDay,
    hours,
    getInputHours,
    minutes,
    getInputMinutes,
    seconds,
    getInputSecond,
  } = useContext(MyContext)

  return (
    <div className="w-full relative">
      <h1 className="w-max  bg-[#F2F8FF] text-black py-2 font-bold px-20 pb-5 mx-auto mt-10 rounded-full ">
        DEADLINE
      </h1>
      <div
        className={` absolute top-7 left-3 right-3 bg-[#F2F8FF]  rounded-md `}>
        <div className="grid grid-cols-2 items-center justify-center text-center  gap-y-5  mt-10">
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
                      days === "00" &&
                      `text-[#E51E1E]`
                    } `}>
                    {days}
                  </span>
                </div>
              ) : (
                <input
                  type="text"
                  placeholder="00"
                  value={days === "00" ? "" : days}
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
                      days === "00" &&
                      `text-[#E51E1E]`
                    } `}>
                    {hours}
                  </span>
                </div>
              ) : (
                <input
                  type="text"
                  placeholder="00"
                  value={hours === "00" ? "" : hours}
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
                    className={`text-4xl   ${
                      startDeadLine &&
                      seconds === "00" &&
                      minutes === "00" &&
                      hours === "00" &&
                      days === "00" &&
                      `text-[#E51E1E]`
                    } `}>
                    {minutes}
                  </span>
                </div>
              ) : (
                <input
                  type="text"
                  placeholder="00"
                  value={minutes === "00" ? "" : minutes}
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
                    className={`text-4xl    ${
                      startDeadLine &&
                      seconds === "00" &&
                      minutes === "00" &&
                      hours === "00" &&
                      days === "00" &&
                      `text-[#E51E1E]`
                    } `}>
                    {seconds}
                  </span>
                </div>
              ) : (
                <input
                  type="text"
                  placeholder="00"
                  value={seconds === "00" ? "" : seconds}
                  onChange={getInputSecond}
                  className={` text-center w-10 bg-transparent text-4xl  focus-within:outline-none  `}
                />
              )}

              <label htmlFor="detik">Detik</label>
            </div>
          </div>
        </div>
        <FaRegPlayCircle
          className={`mx-auto text-4xl hover:cursor-pointer ${
            startDeadLine && "hidden"
          }`}
          onClick={toggleStartDeadLine}
        />
      </div>
    </div>
  )
}

export default TimeDeadLine
