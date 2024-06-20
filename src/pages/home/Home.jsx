import React, { useEffect, useState, useRef } from "react"
import Header from "../../components/header/Header"
import TimeDeadLine from "../../components/timedeadline/TimeDeadLine"

import TableAccount from "../../components/tableAccount/TableAccount"
import Note from "../../components/note/Note"
import { toast, Bounce } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
import { v4 as uuidv4 } from "uuid"

import { MyContext } from "../../context/MyContext"
import axios from "axios"

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*"
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8"

const Home = () => {
  const [startDeadLine, setStartDeadLine] = useState(false)

  const [uuid, setUuid] = useState("")

  // let getCurrentSeconds =
  //   seconds === "00"
  //     ? date.getSeconds()
  //     : date.getSeconds() + parseInt(seconds, 10)

  const [namaAkun, setNamaAkun] = useState("")
  const [noPembayaran, setNoPembayaran] = useState("")

  const [numberTable, setNumberTable] = useState(0)

  const [number, setNumber] = useState(0)

  const newInputNamaAkunRef = useRef([])
  const newInputNoPembayaran = useRef([])
  const [namaJobs, setNamaJobs] = useState("")
  const [catatan, setCatatan] = useState("")
  const [resetPage, setResetPage] = useState(false)
  // const [timeDeadLine, setTimeDeadLine] = useState(0)

  // const createTimer = async () => {
  //   const createUuid = crypto.randomUUID()
  //   const now = new Date().getTime()
  //   setUuid(createUuid)

  //   let convertDays = parseInt(days)
  //   let convertHours = parseInt(hours)
  //   let convertMinutes = parseInt(minutes)
  //   let convertSeconds = parseInt(seconds)
  //   let totalSeconds =
  //     (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds) * 1000

  //   setEndTime(now + totalSeconds)

  //   const data = {
  //     uuid: createUuid,
  //     timer: totalSeconds,
  //     namaakun: [namaAkun],
  //     nopembayaran: [noPembayaran],
  //   }

  //   newInputNamaAkunRef.current.forEach((datas) => {
  //     data.namaakun.push(datas.current.value)
  //   })

  //   newInputNoPembayaran.current.forEach((datas) => {
  //     data.nopembayaran.push(datas.current.value)
  //   })

  //   const response = await fetch(
  //     "http://localhost:3000/api/v1/settimers/create-timer",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     }
  //   )

  //   return response.json()
  // }

  // const date = new Date()
  // const [days, setDays] = useState("00")

  // const [hours, setHours] = useState("00")

  // const [minutes, setMinutes] = useState("00")

  // const [seconds, setSeconds] = useState("00")

  // date.getFullYear(),
  // date.getMonth(),
  // date.getDate() + parseInt(days, 10),
  // date.getHours() + parseInt(hours, 10),
  // date.getMinutes() + parseInt(minutes, 10),
  // date.getSeconds() + parseInt(seconds, 10)

  // const toggleStartDeadLine = () => {
  //   if (
  //     days !== "00" ||
  //     hours !== "00" ||
  //     minutes !== "00" ||
  //     seconds !== "00"
  //   ) {
  //     setStartDeadLine(!startDeadLine)
  //     const getCurrentHours = String(date.getHours() + parseInt(hours, 10))

  //     const getCurrentMonth = String(date.getMonth())
  //     const getCurrentDays = String(date.getDate() + parseInt(days, 10))
  //     const getCurrentYear = String(date.getFullYear())
  //     const getCurrentMinutes = String(
  //       date.getMinutes() + parseInt(minutes, 10)
  //     )
  //     const getCurrentSeconds = String(
  //       date.getSeconds() + parseInt(seconds, 10)
  //     )

  //     const targetTimeDeadline = new Date(
  //       `${getCurrentMonth} ${getCurrentDays}, ${getCurrentYear} ${getCurrentHours}:${getCurrentMinutes}:${getCurrentSeconds}`
  //     ).getTime()

  //     setTimeDeadLine(targetTimeDeadline)
  //   } else {
  //     toast.warn("anda belum sama sekali menset time deadline!", {
  //       position: "top-center",
  //       autoClose: 1500,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //       transition: Bounce,
  //     })
  //   }
  // }

  useEffect(() => {
    if (numberTable.length !== 0) {
      for (let i = 1; i < numberTable; i++) {
        newInputNamaAkunRef.current.push(React.createRef())
        newInputNoPembayaran.current.push(React.createRef())
      }
    }
  }, [numberTable])

  const handleInsertData = async () => {
    try {
      const createUuid = uuidv4()
      setUuid(createUuid)

      const data = {
        uuid: createUuid,
        timer: 752344,
        namaakun: [namaAkun],
        nopembayaran: [noPembayaran],
        namajobs: namaJobs,
        catatan: catatan,
      }

      newInputNamaAkunRef.current.forEach((datas) => {
        data.namaakun.push(datas.current.value)
      })

      newInputNoPembayaran.current.forEach((datas) => {
        data.nopembayaran.push(datas.current.value)
      })

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

      const response = await axios.post(
        "https://api-v1.timlist.my.id/api/timer",
        data
      )
      return response.data
    } catch (error) {
      console.log("Error Message" + error.message)
    }
  }

  useEffect(() => {
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
  }, [])

  // useEffect(() => {
  //   if (startDeadLine) {
  //     const time = setInterval(() => {
  //       // *Get today's date and time
  //       const now = new Date().getTime()

  //       // *Find the distance between now and the count down date
  //       const distance = timeDeadLine - now

  //       let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  //       let hours = Math.floor(
  //         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //       )
  //       let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  //       let seconds = Math.floor((distance % (1000 * 60)) / 1000)

  //       setDays(days)
  //       setHours(hours)
  //       setMinutes(minutes)
  //       setSeconds(seconds)

  //       if (distance < 0) {
  //         clearInterval(time)
  //       }
  //     }, 1000)
  //     return () => {
  //       clearInterval(time)
  //     }
  //   }
  // }, [seconds, startDeadLine])

  // useEffect(() => {
  //   if (startDeadLine) {
  //     if (
  //       startDeadLine &&
  //       seconds === "00" &&
  //       minutes === "00" &&
  //       hours === "00" &&
  //       day === "00"
  //     ) {
  //       toast.warn("waktu time deadline anda sudah habis", {
  //         position: "top-center",
  //         autoClose: 4000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //         transition: Bounce,
  //       })
  //     }

  //     setTimeout(
  //       () => {
  //         // FOR SECOND
  //         if (seconds !== "00" || minutes !== "00") {
  //           let convertSeconds = parseInt(seconds)
  //           let fSeconds =
  //             convertSeconds <= 10
  //               ? "0" +
  //                 (minutes === "00" && seconds === "00"
  //                   ? "0"
  //                   : --convertSeconds)
  //               : convertSeconds > 10 && --convertSeconds
  //           setSeconds(fSeconds)
  //         }

  //         // FOR MINUTES
  //         if (seconds === "00") {
  //           let convertMinutes = parseInt(minutes)
  //           let fMinutes =
  //             convertMinutes <= 10
  //               ? "0" +
  //                 (minutes === "00" && seconds === "00" ? 0 : --convertMinutes)
  //               : convertMinutes - 1
  //           setMinutes(
  //             hours !== "00" && minutes === "00" && seconds === "00"
  //               ? "59"
  //               : fMinutes
  //           )
  //           setSeconds(
  //             (hours !== "00" || minutes !== "00") && seconds === "00"
  //               ? "59"
  //               : seconds
  //           )
  //         }

  //         // FOR HOURS
  //         if (minutes === "00" && seconds === "00") {
  //           let convertHours = parseInt(hours)
  //           let fHours =
  //             convertHours <= 10
  //               ? "0" +
  //                 (day === "00" && hours === "00" ? "0" : convertHours - 1)
  //               : convertHours - 1
  //           setHours(fHours)
  //         }

  //         // // FOR DAYS
  //         if (hours === "00" && minutes === "00" && seconds === "00") {
  //           let convertDays = parseInt(day)
  //           let fDays =
  //             convertDays <= 10
  //               ? "0" + (day === "00" ? "0" : convertDays - 1)
  //               : convertDays - 1
  //           setDay(fDays)
  //           setHours(day !== "00" && hours === "00" ? "23" : hours)
  //           setMinutes(day !== "00" && hours === "00" ? "59" : minutes)
  //           setSeconds(
  //             day !== "00" && hours === "00" && minutes === "00"
  //               ? "59"
  //               : seconds
  //           )
  //         }
  //       },

  //       1000
  //     )
  //   }
  // }, [startDeadLine, seconds])

  return (
    <MyContext.Provider
      value={{
        startDeadLine,
        uuid,
        setUuid,
        namaJobs,
        setNamaJobs,
        catatan,
        setCatatan,
        newInputNamaAkunRef,
        number,
        setNumber,
        numberTable,
        setNumberTable,
        newInputNoPembayaran,
        namaAkun,
        setNamaAkun,
        noPembayaran,
        setNoPembayaran,
        resetPage,
        setResetPage,
      }}>
      <Header />
      {/* <TimeDeadLine /> */}
      <div className="flex justify-center mt-28">
        <button
          className=" border border-gray-500 px-5 py-1 rounded-full"
          onClick={handleInsertData}>
          Insert Data
        </button>
      </div>
      <Note />
      <TableAccount />
    </MyContext.Provider>
  )
}

export default Home
