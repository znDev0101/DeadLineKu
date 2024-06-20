import React, { useState, useEffect } from "react"
import {
  MdDoneOutline,
  MdOutlineContentCopy,
  MdOutlineDeleteForever,
} from "react-icons/md"

const TableAccountTimer = ({ data }) => {
  const handleClickCopyAllNamaAkun = () => {
    let results = ""
    newInputNamaAkunRef.current.forEach((data) => {
      if (data.current.value.length !== 0) {
        results += `${data.current.value}\n`
      }
    })
    navigator.clipboard.writeText(
      namaAkun.length !== 0 ? `${namaAkun}\n${results}\n` : `${results}\n`
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

  return (
    <div className="w-full">
      <div className="bg-black grid grid-cols-[max-content_1fr_1.25fr] mx-2">
        <div className="text-white  px-2">No.</div>
        <div className=" text-white relative">
          <span className="">NAMA AKUN</span>
        </div>
        <div className=" text-white ">NO PEMBAYARAN</div>
      </div>
      <div className="grid grid-cols-[max-content_1fr_1.3fr]">
        <div>
          {data.namaakun
            ?.replace(/[\[\]]/g)
            .split(",")
            .map((data, i) => {
              return (
                <div
                  className="h-[7.4rem] flex flex-col items-center gap-y-3 border border-b-black ms-2 px-2"
                  key={i}>
                  <div className="">{i + 1}</div>
                  <MdDoneOutline />
                </div>
              )
            })}
        </div>
        <div>
          {data.namaakun
            ?.replace(/[\[\]]/g, "")
            .split(",")
            .map((data, i) => {
              return (
                <div
                  className="h-[7.4rem] flex justify-center items-center border border-black"
                  key={i}>
                  {data.replace(/"/g, "")}
                </div>
              )
            })}
        </div>
        <div className="border border-black me-2">
          {data.nopembayaran
            ?.replace(/[\[\]]/g, "")
            .split(",")
            .map((data, i) => {
              return (
                <div
                  className="h-[7.4rem] flex justify-center items-center border border-black"
                  key={i}>
                  {data.replace(/"/g, "")}
                </div>
              )
            })}
        </div>
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
    </div>
  )
}

export default TableAccountTimer
