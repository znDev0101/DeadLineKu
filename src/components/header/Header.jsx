import React, { useContext } from "react"
import { FaPlus } from "react-icons/fa6"
import { IoLinkSharp } from "react-icons/io5"
import { MyContext } from "../../context/MyContext"
import { toast, Bounce } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

const Header = () => {
  const {
    uuid,
    setUuid,
    days,
    hours,
    minutes,
    seconds,
    setNamaJobs,
    setCatatan,
    newInputNamaAkunRef,
    newInputNoPembayaran,
    setResetPage,
    setNumber,
    setNoPembayaran,
    setNamaAkun,
  } = useContext(MyContext)

  const handleAllReset = () => {
    setNamaJobs("")
    setCatatan("")
    setNamaAkun("")
    setNoPembayaran("")
    setUuid("")
    setResetPage(true)
    setNumber(0)
    while (
      newInputNamaAkunRef.current.length > 0 &&
      newInputNoPembayaran.current.length > 0
    ) {
      newInputNamaAkunRef.current.pop()
      newInputNoPembayaran.current.pop()
    }
  }

  const handleShareLink = () => {
    if (
      days !== "00" ||
      hours !== "00" ||
      minutes !== "00" ||
      seconds !== "00"
    ) {
      navigator.clipboard.writeText(location.href + uuid)
      toast.success("bagikan link berhasil di copy", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    } else {
      console.log("gagal di tekan")
    }
  }

  return (
    <header className="flex justify-between px-4 py-3">
      <div
        className="flex items-center gap-x-2 hover:cursor-pointer"
        onClick={handleAllReset}>
        <FaPlus />
        <h1 className="font-bold ">HALAMAN BARU</h1>
      </div>
      <div
        className="flex items-center gap-x-2 hover:cursor-pointer"
        onClick={handleShareLink}>
        <IoLinkSharp />
        <h1 className="font-bold">BAGIKAN LINK</h1>
      </div>
    </header>
  )
}

export default Header
