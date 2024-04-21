import React from "react"
import {
  MdDoneOutline,
  MdOutlineContentCopy,
  MdOutlineDeleteForever,
} from "react-icons/md"

const TableAccount = () => {
  return (
    <div className="w-full grid grid-cols-2 px-2">
      <div className="text-center px-1 bg-black text-white relative">
        <input
          type="text"
          className="bg-transparent ms-7 ps-2 w-[85%] placeholder:text-center"
          placeholder="NAMA AKUN"
        />
        <div className="text-white absolute left-1 top-0">No.</div>
      </div>
      <div className="bg-black text-white">
        <input
          type="text"
          className="bg-transparent ps-4 w-full"
          placeholder="NO PEMBAYARAN:..."
        />
      </div>
      <div className="h-16 text-center px-1  text-white relative border border-b-black">
        <input
          type="text"
          className="h-full bg-transparent ms-7 ps-2 w-[85%] placeholder:text-center"
          placeholder="KETIK DISINI..."
        />
        <div className="text-black absolute flex flex-col items-center w-8 left-0 top-0 pt-3 border border-r-black h-full">
          <span>1.</span>
          <MdDoneOutline className="text-[#148EFF]" />
        </div>
      </div>
      <div className="flex px-1 items-center text-white  border border-l-black border-b-black">
        <MdOutlineContentCopy className="text-[#128DFF] text-2xl" />
        <input
          type="text"
          className="h-full bg-transparent ps-4 w-full"
          placeholder="KETIK DISINI..."
        />
        <MdOutlineDeleteForever className="text-[#FF0000] text-3xl" />
      </div>
      <div className="h-16 text-center px-1  text-white relative border border-b-black">
        <input
          type="text"
          className="h-full bg-transparent ms-7 ps-2 w-[85%] placeholder:text-center"
          placeholder="KETIK DISINI..."
        />
        <div className="text-black absolute flex flex-col items-center w-8 left-0 top-0 pt-3 border border-r-black h-full">
          <span>10.</span>
          <MdDoneOutline className="text-[#148EFF]" />
        </div>
      </div>
      <div className="flex px-1 items-center text-white  border border-l-black border-b-black">
        <MdOutlineContentCopy className="text-[#128DFF] text-2xl" />
        <input
          type="text"
          className="h-full bg-transparent ps-4 w-full"
          placeholder="KETIK DISINI..."
        />
        <MdOutlineDeleteForever className="text-[#FF0000] text-3xl" />
      </div>
    </div>
  )
}

export default TableAccount
