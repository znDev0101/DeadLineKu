import React, { useState, useRef, useEffect, useContext } from "react"
import {
  MdDoneOutline,
  MdOutlineContentCopy,
  MdOutlineDeleteForever,
} from "react-icons/md"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import NewTable from "../newtable/NewTable"
import { toast, Bounce } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { MyContext } from "../../context/MyContext"

const TableAccount = () => {
  const [number, setNumber] = useState(0)
  const [numberTable, setNumberTable] = useState(0)
  const [namaAkun, setNamaAkun] = useState("")
  const [noPembayaran, setNoPembayaran] = useState("")
  const [isClickDone, setIsClickDone] = useState(false)

  const tableRef = useRef()

  const inputNamaAkunRef = useRef()

  const newInputNamaAkunRef = useRef([])

  const { startDeadLine, seconds, minutes, hours, day } = useContext(MyContext)

  const handleClickCopyAllNamaAkun = () => {
    let results = ""
    newInputNamaAkunRef.current.forEach((data) => {
      if (data.current.value.length !== 0) {
        results += `${data.current.value}\n`
      }
    })
    navigator.clipboard.writeText(
      inputNamaAkunRef?.current?.value !== 0
        ? `${inputNamaAkunRef.current.value}\n${results}\n`
        : `${results}\n`
    )
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

  const handleClickCopyNoPembayaran = () => {
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

  const handleDeleteNoPembayaran = () => {
    if (noPembayaran.length !== 0 || namaAkun.length !== 0) {
      setNoPembayaran("")
      setNamaAkun("")
    }
  }

  useEffect(() => {
    if (numberTable.length !== 0) {
      for (let i = 1; i < numberTable; i++) {
        newInputNamaAkunRef.current.push(React.createRef())
      }
    }
  }, [numberTable])

  useEffect(() => {
    const time = setTimeout(() => {
      setNumberTable(number)
    }, 2000)

    return () => {
      clearTimeout(time)
    }
  }, [number])

  return (
    <>
      <div className="w-full grid grid-cols-2 px-2" ref={tableRef}>
        <div className="text-center px-1 bg-black text-white relative">
          <span>NAMA AKUN</span>
          <div className="text-white absolute left-1 top-0">No.</div>
        </div>
        <div className="flex bg-black ps-3">
          <label className="text-white">NO PEMBAYARAN</label>
        </div>
        <div className="h-28 text-center px-1  text-white relative border border-b-black">
          <input
            type="text"
            className="h-full bg-transparent ms-7 ps-2 w-[85%] placeholder:text-center text-black"
            placeholder="KETIK DISINI..."
            value={namaAkun}
            onChange={(e) => setNamaAkun(e.target.value)}
            ref={inputNamaAkunRef}
            disabled={
              startDeadLine &&
              seconds === "00" &&
              minutes === "00" &&
              hours === "00" &&
              day === "00"
            }
          />
          <div className="text-black absolute flex flex-col items-center w-8 left-0 top-0 pt-3 border border-r-black h-full">
            <span>1.</span>
            <MdDoneOutline
              className={`${
                isClickDone ? "text-[#148EFF]" : "text-[#B2ADAD] "
              } `}
              onClick={() => setIsClickDone(!isClickDone)}
            />
          </div>
        </div>
        <div className="flex px-1 items-center text-white  border border-l-black border-b-black">
          <div className="grid grid-rows-[2fr_1fr]">
            <input
              type="text"
              className=" w-full h-full bg-transparent ps-4 text-black"
              name="noPembayaran"
              value={noPembayaran}
              disabled={
                startDeadLine &&
                seconds === "00" &&
                minutes === "00" &&
                hours === "00" &&
                day === "00"
              }
              onChange={(e) => setNoPembayaran(e.target.value)}
              placeholder="KETIK DISINI..."
            />
            <div className="flex items-center justify-between">
              <MdOutlineContentCopy
                className="text-[#128DFF] text-3xl"
                onClick={handleClickCopyNoPembayaran}
              />
              <MdOutlineDeleteForever
                className="text-[#FF0000] text-4xl"
                onClick={handleDeleteNoPembayaran}
              />
            </div>
          </div>
        </div>

        {numberTable === 0 ? (
          <>
            <div className="h-28 text-center px-1  text-white relative border border-b-black">
              <input
                type="text"
                className="h-full bg-transparent ms-7 ps-2 w-[85%] text-black placeholder:text-center"
                placeholder="KETIK DISINI..."
              />
              <div className="text-black absolute flex flex-col items-center w-8 left-0 top-0 pt-6 border border-r-black h-full">
                <MdDoneOutline className="text-[#B2ADAD]" />
                <input
                  type="number"
                  value={number === 0 ? "" : number}
                  placeholder="10"
                  className="placeholder:text-[#B2ADAD] text-center w-full"
                  onChange={(e) => setNumber(e.target.value)}
                />
                <HiOutlineDotsHorizontal className="placeholder:text-[#B2ADAD]" />
              </div>
            </div>
            <div className="h-28 px-1 items-center text-white  border border-l-black border-b-black">
              <div className="grid grid-rows-[2fr_1fr]">
                <input
                  type="text"
                  className="w-full  bg-transparent ps-4 text-black "
                  placeholder="KETIK DISINI..."
                />
                <div className="flex items-center justify-between">
                  <MdOutlineContentCopy className="text-[#128DFF] text-3xl" />
                  <MdOutlineDeleteForever className="text-[#FF0000] text-4xl" />
                </div>
              </div>
            </div>
          </>
        ) : (
          numberTable !== 0 &&
          new Array(numberTable - 1).fill("")?.map((_, i) => {
            return (
              <NewTable
                key={i}
                index={i}
                ref={newInputNamaAkunRef.current[i]}
              />
            )
          })
        )}
        <ToastContainer />
      </div>
      <div className="w-[96vw] mx-auto py-2 mb-4 bg-[#26BC00] rounded-b-xl">
        <div className="flex justify-end items-center gap-x-2 text-white pe-2">
          <span className="font-bold">SALIN SEMUA</span>
          <MdOutlineContentCopy
            onClick={handleClickCopyAllNamaAkun}
            className="text-4xl"
          />
        </div>
      </div>
    </>
  )
}

export default TableAccount
