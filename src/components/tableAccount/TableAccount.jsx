import React from "react"
import {
  MdDoneOutline,
  MdOutlineContentCopy,
  MdOutlineDeleteForever,
} from "react-icons/md"
import { HiOutlineDotsHorizontal } from "react-icons/hi"

const TableAccount = () => {
  return (
    <>
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
        <div className="h-24 text-center px-1  text-white relative border border-b-black">
          <input
            type="text"
            className="h-full bg-transparent ms-7 ps-2 w-[85%] placeholder:text-center text-black"
            placeholder="KETIK DISINI..."
          />
          <div className="text-black absolute flex flex-col items-center w-8 left-0 top-0 pt-3 border border-r-black h-full">
            <span>1.</span>
            <MdDoneOutline className="text-[#148EFF]" />
          </div>
        </div>
        <div className="flex px-1 items-center text-white  border border-l-black border-b-black">
          <div className="grid grid-rows-[2fr_1fr]">
            <input
              type="text"
              className=" w-full h-full bg-transparent ps-4 text-black"
              placeholder="KETIK DISINI..."
            />
            <div className="flex items-center justify-between">
              <MdOutlineContentCopy className="text-[#128DFF] text-2xl" />
              <MdOutlineDeleteForever className="text-[#FF0000] text-3xl" />
            </div>
          </div>
        </div>
        <div className="h-24 text-center px-1  text-white relative border border-b-black">
          <input
            type="text"
            className="h-full bg-transparent ms-7 ps-2 w-[85%] text-black placeholder:text-center"
            placeholder="KETIK DISINI..."
          />
          <div className="text-black absolute flex flex-col items-center w-8 left-0 top-0 pt-6 border border-r-black h-full">
            <MdDoneOutline className="text-[#B2ADAD]" />
            <span className="text-[#B2ADAD]">10.</span>
            <HiOutlineDotsHorizontal className="text-[#B2ADAD]" />
          </div>
        </div>
        <div className="h-24 px-1 items-center text-white  border border-l-black border-b-black">
          <div className="grid grid-rows-[2fr_1fr]">
            <input
              type="text"
              className="w-full  bg-transparent ps-4 text-black "
              placeholder="KETIK DISINI..."
            />
            <div className="flex items-center justify-between">
              <MdOutlineContentCopy className="text-[#128DFF] text-2xl" />

              <MdOutlineDeleteForever className="text-[#FF0000] text-3xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[96vw] mx-auto py-2 bg-[#26BC00] rounded-b-xl">
        <div className="flex justify-end items-center gap-x-2 text-white pe-2">
          <span>SALIN SEMUA</span>
          <MdOutlineContentCopy />
        </div>
      </div>
    </>
  )
}

export default TableAccount
