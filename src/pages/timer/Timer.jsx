import React, { useState, useEffect } from "react"
import { FaPlus } from "react-icons/fa6"
import { IoLinkSharp } from "react-icons/io5"
import { useParams } from "react-router-dom"
import NoteTimer from "../../components/notetimer/NoteTimer"
import TableTimer from "../../components/tabletimer/TableTimer"
import { ToastContainer } from "react-toastify"
import TimerDeadline from "../../components/timerDeadline/TimerDeadline"
import { toast, Bounce } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

const Timer = () => {
  const { id } = useParams()

  const [data, setData] = useState([])
  const [timeRemaining, setTimeRemaining] = useState(0)

  const getData = async () => {
    const response = await fetch(
      `https://deadline-ku-api.vercel.app/api/timer/${id}`
    )

    const results = await response.json()
    setData(results)
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    const counterEndTimer = () => {
      try {
        const endTime = new Date(data.timer)
        updateRemainingTime(endTime)
      } catch (error) {
        console.error("Error fetching timer:", error)
      }
    }

    const updateRemainingTime = (endTime) => {
      const now = new Date()
      const difference = endTime - now
      setTimeRemaining(difference > 0 ? difference : 0)
    }

    counterEndTimer()
    const timer = setInterval(() => {
      counterEndTimer()
    }, 1000)

    return () => clearInterval(timer)
  }, [data])

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const days = Math.floor(totalSeconds / (3600 * 24))
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return {
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    }
  }

  const handleBagikan = () => {
    navigator.clipboard.writeText(location.href)
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
  }

  return (
    <>
      <header className="flex justify-between px-4 py-3">
        <div className="flex items-center gap-x-2">
          <FaPlus />
          <h1 className="font-bold ">HALAMAN BARU</h1>
        </div>
        <div
          className="flex items-center gap-x-2 hover:cursor-pointer"
          onClick={handleBagikan}>
          <IoLinkSharp />
          <h1 className="font-bold">BAGIKAN LINK</h1>
        </div>
      </header>
      <TimerDeadline formatTime={formatTime} timeRemaining={timeRemaining} />
      <ToastContainer />
      <NoteTimer data={data} />
      <TableTimer data={data} />
    </>
  )
}

export default Timer
