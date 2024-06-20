import axios from "axios"
import React, { useState, useEffect } from "react"
import { FaPlus } from "react-icons/fa6"
import { IoLinkSharp } from "react-icons/io5"
import { useParams } from "react-router-dom"
import NoteTimer from "../../components/notetimer/NoteTimer"
import TableAccountTimer from "../../components/tableaccounttimer/TableAccountTimer"

const Timer = () => {
  const { uuidUrl } = useParams()
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get(
      `https://api-v1.timlist.my.id/api/timer/${uuidUrl}`
    )
    const results = await response.data
    setData(results)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <header className="flex justify-between px-4 py-3">
        <div className="flex items-center gap-x-2">
          <FaPlus />
          <h1 className="font-bold ">HALAMAN BARU</h1>
        </div>
        <div className="flex items-center gap-x-2 hover:cursor-pointer">
          <IoLinkSharp />
          <h1 className="font-bold">BAGIKAN LINK</h1>
        </div>
      </header>
      <NoteTimer data={data} />
      <TableAccountTimer data={data} />
    </>
  )
}

export default Timer
