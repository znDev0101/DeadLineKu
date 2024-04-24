import React, { useState, useEffect } from "react"

import {
  MdDoneOutline,
  MdOutlineContentCopy,
  MdOutlineDeleteForever,
} from "react-icons/md"

const NewTable = ({ index }) => {
  const [noPembayaran, setNoPembayaran] = useState("")

  const handleDeleteNoPembayaran = () => {
    if (noPembayaran.length !== 0) {
      setNoPembayaran("")
    }
  }

  const handleCopyNoPembayaran = () => {
    if (noPembayaran.length !== 0) {
    }
  }

  return (
    <>
      <div className="h-24 text-center px-1  text-white relative border border-b-black">
        <input
          type="text"
          className="h-full bg-transparent ms-7 ps-2 w-[85%] text-black placeholder:text-center"
          placeholder="KETIK DISINI..."
        />
        <div className="text-black absolute flex flex-col items-center w-8 left-0 top-0 pt-3 border border-r-black h-full">
          <span>{index + 2}</span>
          <MdDoneOutline className="text-[#148EFF]" />
        </div>
      </div>
      <div className="flex px-1 items-center text-white  border border-l-black border-b-black">
        <div className="grid grid-rows-[2fr_1fr]">
          <input
            type="text"
            className=" w-full h-full bg-transparent ps-4 text-black"
            placeholder="KETIK DISINI..."
            value={noPembayaran}
            onChange={(e) => setNoPembayaran(e.target.value)}
          />
          <div className="flex items-center justify-between">
            <MdOutlineContentCopy
              className="text-[#128DFF] text-2xl"
              onClick={handleCopyNoPembayaran}
            />
            <MdOutlineDeleteForever
              className="text-[#FF0000] text-3xl"
              onClick={handleDeleteNoPembayaran}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default NewTable
