import React, { useEffect, useState, useRef } from "react"

import Header from "../../components/header/Header"
import Note from "../../components/note/Note"
import TimeDeadLine from "../../components/timedeadline/TimeDeadLine"
import TableAccount from "../../components/tableAccount/TableAccount"

import { toast, Bounce } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

import { MyContext } from "../../context/MyContext"

const NewPage = () => {
  const [startDeadLine, setStartDeadLine] = useState(false)
  const [id, setId] = useState("")

  const [timeRemaining, setTimeRemaining] = useState(0)
  const [inputTime, setInputTime] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  })
  const [dataPost, setDataPost] = useState([])
  const newInputNamaAkunRef = useRef([])
  const [namaAkun, setNamaAkun] = useState("")
  const [noPembayaran, setNoPembayaran] = useState("")
  const [numberTable, setNumberTable] = useState(0)
  const [number, setNumber] = useState(0)
  const [namaJobs, setNamaJobs] = useState("")
  const [catatan, setCatatan] = useState("")

  const startTimer = async () => {
    const { days, hours, minutes, seconds } = inputTime

    if (
      (days === 0 || days === "") &&
      (hours === 0 || hours === "") &&
      (minutes === 0 || minutes === "") &&
      (seconds === 0 || seconds === "") &&
      namaJobs === "" &&
      catatan === ""
    ) {
      toast.warn("anda belum menginput data", {
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
    } else if (
      (days === 0 || days === "") &&
      (hours === 0 || hours === "") &&
      (minutes === 0 || minutes === "") &&
      (seconds === 0 || seconds === "")
    ) {
      toast.warn("anda belum mengisi data waktu ⚠️", {
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
    } else if (namaJobs === "" || catatan === "") {
      toast.warn("anda belum mengisi data input nama jobs atau catatan", {
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
    } else {
      const duration =
        (days === "" ? 0 : parseInt(days)) * 86400 +
        (hours === "" ? 0 : parseInt(hours)) * 3600 +
        (minutes === "" ? 0 : parseInt(minutes)) * 60 +
        (seconds === "" ? 0 : parseInt(seconds))
      const endTime = new Date(new Date().getTime() + duration * 1000)

      setStartDeadLine(true)
      const data = {
        timer: endTime,
        namajobs: namaJobs,
        catatan: catatan,
        namaakun: new Array(parseInt(number)).fill(""),
        nopembayaran: new Array(parseInt(number)).fill(0),
      }

      try {
        const loadingId = toast.loading("Loading....", {
          position: "top-center",
          theme: "light",
          transition: Bounce,
        })
        const response = await fetch(
          "https://deadline-ku-api.vercel.app/api/timer",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        )
        const resultPost = await response.json()

        setDataPost(resultPost)
        setId(resultPost._id)
        setTimeRemaining(endTime - new Date())

        toast.update(loadingId, {
          render: "Insert Data berhasil",
          position: "top-center",
          type: "success",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          isLoading: false,
          transition: Bounce,
        })
      } catch (error) {
        console.error("Error setting timer:", error)
      }
    }
  }

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

  useEffect(() => {
    if (numberTable.length !== 0) {
      for (let i = 1; i < numberTable; i++) {
        newInputNamaAkunRef.current.push(React.createRef())
      }
    }
  }, [numberTable])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (value.length <= 2 && /^\d*$/.test(value)) {
      setInputTime({ ...inputTime, [name]: parseInt(value) || 0 })
    }
  }

  useEffect(() => {
    if (startDeadLine) {
      const fetchEndTime = () => {
        try {
          const endTime = new Date(dataPost.timer)
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

      fetchEndTime()
      const timer = setInterval(() => {
        fetchEndTime()
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [id])

  return (
    <MyContext.Provider
      value={{
        startDeadLine,
        startTimer,
        namaJobs,
        setNamaJobs,
        catatan,
        setCatatan,
        inputTime,
        newInputNamaAkunRef,
        number,
        setNumber,
        numberTable,
        setNumberTable,
        namaAkun,
        setNamaAkun,
        noPembayaran,
        setNoPembayaran,
        formatTime,
        timeRemaining,
        handleInputChange,
        dataPost,
      }}>
      <Header />
      <TimeDeadLine />
      <Note />
      <TableAccount />
    </MyContext.Provider>
  )
}

export default NewPage
