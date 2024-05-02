import React, { useState, forwardRef, useContext } from "react"
import { MyContext } from "../../context/MyContext"

import {
  MdDoneOutline,
  MdOutlineContentCopy,
  MdOutlineDeleteForever,
} from "react-icons/md"
import { toast, Bounce } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

const NewTable = forwardRef(({ index }, ref) => {
  const [noPembayaran, setNoPembayaran] = useState("")
  const [namaAkun, setNamaAkun] = useState("")

  // const newInputNamaAkunRef = useRef()
  const { startDeadLine, seconds, minutes, hours, day } = useContext(MyContext)

  const handleDeleteNoPembayaran = () => {
    if (noPembayaran.length !== 0 || namaAkun.length !== 0) {
      setNoPembayaran("")
      setNamaAkun("")
      toast.success("berhasil di hapus 🗑️", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    }
  }

  const handleCopyNoPembayaran = () => {
    if (noPembayaran.length !== 0) {
      navigator.clipboard.writeText(noPembayaran)
      toast.success("copy success", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    }
  }

  return (
    <>
      <div className="h-28 text-center px-1  text-white relative border border-b-black">
        <input
          type="text"
          className="h-full bg-transparent ms-7 ps-2 w-[85%] text-black placeholder:text-center"
          name="namaAkun"
          placeholder="KETIK DISINI..."
          value={namaAkun}
          disabled={
            startDeadLine &&
            seconds === "00" &&
            minutes === "00" &&
            hours === "00" &&
            day === "00"
          }
          onChange={(e) => setNamaAkun(e.target.value)}
          ref={ref}
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
            disabled={
              startDeadLine &&
              seconds === "00" &&
              minutes === "00" &&
              hours === "00" &&
              day === "00"
            }
            onChange={(e) => setNoPembayaran(e.target.value)}
          />
          <div className="flex items-center justify-between">
            <MdOutlineContentCopy
              className="text-[#128DFF] text-3xl"
              onClick={handleCopyNoPembayaran}
            />
            <MdOutlineDeleteForever
              className="text-[#FF0000] text-4xl"
              onClick={handleDeleteNoPembayaran}
            />
          </div>
        </div>
      </div>
    </>
  )
})
export default NewTable
