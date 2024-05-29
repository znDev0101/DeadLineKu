import React, { useContext } from "react"
import { FaPlus } from "react-icons/fa6"
import { IoLinkSharp } from "react-icons/io5"
import { MyContext } from "../../context/MyContext"

const Header = () => {
  const { uuid } = useContext(MyContext)

  const handleShareLink = () => {
    console.log(location.href + uuid)
  }

  return (
    <header className="flex justify-between px-4 py-3">
      <div className="flex items-center gap-x-2">
        <FaPlus />
        <h1 className="font-bold ">HALAMAN BARU</h1>
      </div>
      <div className="flex items-center gap-x-2" onClick={handleShareLink}>
        <IoLinkSharp />
        <h1 className="font-bold">BAGIKAN LINK</h1>
      </div>
    </header>
  )
}

export default Header
