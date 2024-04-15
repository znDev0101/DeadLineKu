import React from "react"
import { FaPlus } from "react-icons/fa6"
import { IoLinkSharp } from "react-icons/io5"

const Header = () => {
  return (
    <header className="flex justify-between px-4 py-3">
      <div className="flex items-center gap-x-2">
        <FaPlus />
        <h1 className="font-bold">HALAMAN BARU</h1>
      </div>
      <div className="flex items-center gap-x-2">
        <IoLinkSharp />
        <h1 className="font-bold">BAGIKAN LINK</h1>
      </div>
    </header>
  )
}

export default Header
