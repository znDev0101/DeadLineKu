import React, { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import TimeDeadLine from "../../components/timedeadline/TimeDeadLine"

import TableAccount from "../../components/tableAccount/TableAccount"
import Note from "../../components/note/Note"
import { toast, Bounce } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

import { MyContext } from "../../context/MyContext"
import { useParams } from "react-router-dom"

const Home = () => {
  const [startDeadLine, setStartDeadLine] = useState(false)
  const { uuidUrl } = useParams()

  const [uuid, setUuid] = useState("")
  const [seconds, setSeconds] = useState("00")
  const [minutes, setMinutes] = useState("00")
  const [hours, setHours] = useState("00")
  const [days, setDays] = useState("00")
  const [timerFormatSecond, setTimerFormatSecond] = useState(null)

  const toggleStartDeadLine = () => {
    if (
      days !== "00" ||
      hours !== "00" ||
      minutes !== "00" ||
      seconds !== "00"
    ) {
      setStartDeadLine(!startDeadLine)
      createTimer()
      console.log("test")
    } else {
      toast.warn("anda belum sama sekali menset time deadline!", {
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
  }

  const getInputDay = (e) => {
    setDays(e.target.value)
  }

  const getInputHours = (e) => {
    setHours(e.target.value)
  }

  const getInputMinutes = (e) => {
    setMinutes(e.target.value)
  }

  const getInputSecond = (e) => {
    setSeconds(e.target.value)
  }

  const createTimer = async () => {
    const uuid = crypto.randomUUID()

    setUuid(uuid)

    let converDays = parseInt(days)
    let convertHours = parseInt(hours)
    let convertMinutes = parseInt(minutes)
    let convertSeconds = parseInt(seconds)

    let totalSeconds =
      converDays * 24 * 60 * 60 +
      convertHours * 60 * 60 +
      convertMinutes * 60 +
      convertSeconds

    const data = {
      uuid: uuid,
      setTimer: totalSeconds,
    }

    const response = await fetch(
      "https://deadline-api.vercel.app/timer/create-timer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )

    return response.json()
  }

  // FETCH DATA IF PARAMS URL NOT UNDEFINED
  useEffect(() => {
    if (uuidUrl !== undefined) {
      console.log("test")
    }
  }, [])

  useEffect(() => {
    if (timerFormatSecond !== null) {
      const timerInterval = setInterval(() => {
        let now = new Date().getTime()

        let distance = timerFormatSecond - now

        let days = Math.floor(distance / (1000 * 60 * 60 * 24))
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((distance % (1000 * 60)) / 1000)

        days = days.toString().padStart(2, "0")
        hours = hours.toString().padStart(2, "0")
        minutes = minutes.toString().padStart(2, "0")
        seconds = seconds.toString().padStart(2, "0")

        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      }, 1000)
      return () => {
        clearInterval(timerInterval)
      }
    }
  }, [seconds])

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
        toggleStartDeadLine,
        uuid,
        days,
        getInputDay,
        hours,
        getInputHours,
        minutes,
        getInputMinutes,
        seconds,
        getInputSecond,
      }}>
      <Header />
      <TimeDeadLine />
      <Note />
      <TableAccount />
    </MyContext.Provider>
  )
}

export default Home
