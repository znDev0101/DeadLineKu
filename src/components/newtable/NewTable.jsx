import React, { useState, useEffect, forwardRef, useContext } from "react"
import { MyContext } from "../../context/MyContext"

import { FiSave } from "react-icons/fi"

import {
  MdDoneOutline,
  MdOutlineContentCopy,
  MdOutlineDeleteForever,
} from "react-icons/md"
import { toast, Bounce } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

const NewTable = ({ index, namaAkunRef, noPembayaranRef }) => {
  const [noPembayaran, setNoPembayaran] = useState("")
  const [namaAkun, setNamaAkun] = useState("")

  const [isClickDone, setIsClickDone] = useState(false)

  const {
    startDeadLine,
    seconds,
    minutes,
    hours,
    day,
    setResetPage,
    resetPage,
  } = useContext(MyContext)

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

  useEffect(() => {
    if (resetPage) {
      setNamaAkun("")
      setNoPembayaran("")
    }
  }, [resetPage])

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
          ref={namaAkunRef}
        />
        <div className="text-black absolute flex flex-col items-center w-8 left-0 top-0 pt-3 border border-r-black h-full">
          <span>{index + 2}</span>
          <MdDoneOutline
            className={`${isClickDone ? "text-[#148EFF]" : "text-[#B2ADAD]"} `}
            onClick={() => setIsClickDone(!isClickDone)}
          />
        </div>
      </div>
      <div className="flex px-1 items-center text-white  border border-l-black border-b-black">
        <div className="grid grid-rows-[2fr_1fr]">
          <input
            type="number"
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
            ref={noPembayaranRef}
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
            <FiSave className="text-green-600 text-3xl" />
          </div>
        </div>
      </div>
    </>
  )
}
export default NewTable
