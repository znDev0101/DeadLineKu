import React, { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import TimeDeadLine from "../../components/timedeadline/TimeDeadLine"

import TableAccount from "../../components/tableAccount/TableAccount"
import Note from "../../components/note/Note"
import { toast, Bounce } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

import { MyContext } from "../../context/MyContext"

const Home = () => {
  const [startDeadLine, setStartDeadLine] = useState(false)
  // const [day, setDay] = useState("00")
  // const [hours, setHours] = useState("00")
  // const [minutes, setMinutes] = useState("00")
  // const [seconds, setSeconds] = useState("00")
  const [seconds, setSeconds] = useState("0" + 0)
  const [minutes, setMinutes] = useState("0" + 0)
  const [hours, setHours] = useState("0" + 0)
  const [day, setDay] = useState("0" + 0)

  const toggleStartDeadLine = () => {
    if (
      day !== "00" ||
      hours !== "00" ||
      minutes !== "00" ||
      seconds !== "00"
    ) {
      setStartDeadLine(!startDeadLine)
      createTimer()
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
    setDay(parseInt(e.target.value))
  }

  const getInputHours = (e) => {
    setHours(parseInt(e.target.value))
  }

  const getInputMinutes = (e) => {
    setMinutes(parseInt(e.target.value))
  }

  const getInputSecond = (e) => {
    setSeconds(parseInt(e.target.value))
  }

  const createTimer = async () => {
    const uuid = crypto.randomUUID()
    const data = {
      uuid: uuid,
      seconds: seconds,
      minutes: minutes,
      hours: hours,
      day: day,
    }
    const response = await fetch(
      "https://timer-api-henna.vercel.app/timer/create-timer",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
    return response.json()
  }

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
        day,
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
