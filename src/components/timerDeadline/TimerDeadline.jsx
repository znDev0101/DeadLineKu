import React from "react"

const TimerDeadline = ({ formatTime, timeRemaining }) => {
  const { days, hours, minutes, seconds } = formatTime(timeRemaining)

  return (
    <div className="w-full relative">
      <div className="mt-5 w-36 mx-auto bg-[#f2f8ff] rounded-md">
        <h5 className="font-semibold text-center text-lg">DEADLINE</h5>
      </div>
      <div className=" absolute pt-10 h-40 top-[1.5rem] left-3 right-3 bg-[#f2f8ff]  rounded-md">
        <div className="flex justify-center gap-x-7">
          <div className="flex gap-x-5">
            <div className="flex flex-col items-center">
              <h5 className=" text-4xl">{days}</h5>
              <span className="text-lg">Hari</span>
            </div>
            <div className="flex flex-col items-center">
              <h5 className=" text-4xl">{hours}</h5>
              <span className="text-lg">Jam</span>
            </div>
          </div>
          <div className="flex gap-x-5">
            <div className="flex flex-col items-center">
              <h5 className=" text-4xl">{minutes}</h5>
              <span className="text-lg">Menit</span>
            </div>
            <div className="flex flex-col items-center">
              <h5 className=" text-4xl">{seconds}</h5>
              <span className="text-lg">Detik</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimerDeadline
