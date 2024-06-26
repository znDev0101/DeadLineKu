import React, { useState } from "react"

import { MdOutlineContentCopy, MdOutlineDeleteForever } from "react-icons/md"
import { FiSave } from "react-icons/fi"
import { useParams } from "react-router-dom"

import { toast, Bounce } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

const TableNoPembayaranTimer = ({
  value,
  dataInputNamaAkun,
  setDataInputNamaAkun,
  dataInputNoPembayaran,
  setDataInputNoPembayaran,
  index,
  onChange,
}) => {
  const { id } = useParams()

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    onChange(index, e.target.value)
  }

  const updateNamaAkun = async () => {
    try {
      const response = await fetch(
        `https://deadline-ku-api.vercel.app/api/timer/updateakun/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            index: index,
            newData: dataInputNamaAkun[index],
          }),
        }
      )
      return response.json()
    } catch (error) {
      console.log("error message:" + error)
    }
  }

  const updateNoPembayaran = async () => {
    try {
      const response = await fetch(
        `https://deadline-ku-api.vercel.app/api/timer/updatenopembayaran/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            index: index,
            newData: parseInt(value),
          }),
        }
      )
      return response.json()
    } catch (error) {
      console.log("error message :" + error)
    }
  }

  const deleteNamaAkun = async () => {
    let deleteAkun = dataInputNamaAkun[index]
    deleteAkun = ""

    try {
      const response = await fetch(
        `https://deadline-ku-api.vercel.app/api/timer/deleteakun/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ index: index, deleteData: deleteAkun }),
        }
      )
      return response.json()
    } catch (error) {
      console.log("error message :" + error)
    }
  }

  const deleteNoPembayaran = async () => {
    let deleteNoPembayaran = value
    deleteNoPembayaran = 0

    try {
      const response = await fetch(
        `https://deadline-ku-api.vercel.app/api/timer/deletenopembayaran/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            index: index,
            deleteData: deleteNoPembayaran,
          }),
        }
      )
      return response.json()
    } catch (error) {
      console.log("error message :" + error)
    }
  }

  const handleDelete = async () => {
    // JUST FOR DELTE FORM
    let deleteAkun = [...dataInputNamaAkun]
    deleteAkun[index] = ""
    setDataInputNamaAkun(deleteAkun)

    let deleteNoPemba = [...dataInputNoPembayaran]
    deleteNoPemba[index] = 0
    setDataInputNoPembayaran(deleteNoPemba)
    // JUST FOR DELTE FORM

    if (dataInputNamaAkun[index] !== "" && value !== "") {
      setLoading(true)
      try {
        const namaakunDeleteData = deleteNamaAkun()
        const nopembayaranDeleteData = deleteNoPembayaran()

        const [namaAkun, noPembayaran] = await Promise.all([
          namaakunDeleteData,
          nopembayaranDeleteData,
        ])
        toast.success("hapus data berhasil 🗑️", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
      } catch (error) {
        console.log("error message :" + error)
      } finally {
        setLoading(false)
      }
    }
  }

  const handleUpdateData = async () => {
    if (dataInputNamaAkun[index] !== "" && value !== "") {
      setLoading(true)
      try {
        const namaakunNewData = updateNamaAkun()
        const noPembayaranNewData = updateNoPembayaran()

        const [namaakun, noPembayaran] = await Promise.all([
          namaakunNewData,
          noPembayaranNewData,
        ])

        toast.success("insert data berhasil", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
      } catch (error) {
        console.log("error message : " + error)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div className="flex flex-col h-28 border border-black">
      <input
        type="number"
        value={value !== 0 ? value : ""}
        className={`w-full h-full px-2 `}
        onChange={handleChange}
      />
      <div className="flex items-center justify-between px-1">
        <MdOutlineContentCopy className="text-[#128DFF] text-3xl" />
        <MdOutlineDeleteForever
          className="text-[#FF0000] text-4xl"
          onClick={handleDelete}
        />
        <button onClick={handleUpdateData} disabled={loading}>
          <FiSave className="text-green-600 text-3xl" />
        </button>
      </div>
    </div>
  )
}

export default TableNoPembayaranTimer
