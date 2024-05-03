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
  const [day, setDay] = useState("")
  const [hours, setHours] = useState("")
  const [minutes, setMinutes] = useState("")
  const [seconds, setSeconds] = useState("")

  const toggleStartDeadLine = () => {
    if (
      day.length !== 0 ||
      hours.length !== 0 ||
      minutes.length !== 0 ||
      seconds.length !== 0
    ) {
      setStartDeadLine(!startDeadLine)
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
    setDay(String(e.target.value))
  }

  const getInputHours = (e) => {
    setHours(String(e.target.value))
  }

  const getInputMinutes = (e) => {
    setMinutes(String(e.target.value))
  }

  const getInputSecond = (e) => {
    setSeconds(String(e.target.value))
  }

  useEffect(() => {
    if (startDeadLine) {
      if (
        startDeadLine &&
        seconds === "00" &&
        minutes === "00" &&
        hours === "00" &&
        day === "00"
      ) {
        toast.warn("waktu time deadline anda sudah habis", {
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

      if (day.length === 0) {
        setDay("00")
      }

      if (hours.length === 0) {
        setHours("00")
      }
      if (minutes.length === 0) {
        setMinutes("00")
      }
      if (seconds.length === 0) {
        setSeconds("00")
        console.log("seconds")
      }

      setTimeout(() => {
        let convertSeconds = parseInt(seconds)
        let convertMinutes = parseInt(minutes)
        let convertHours = parseInt(hours)
        let convertDays = parseInt(day)

        // FOR SECOND
        let fSeconds =
          convertSeconds <= 10
            ? "0" +
              (minutes !== "00" && seconds !== "00" ? convertSeconds - 1 : "0")
            : convertSeconds > 10 - 1

        setSeconds(fSeconds)

        // FOR MINUTES
        if (seconds === "00") {
          let fMinutes =
            convertMinutes <= 10
              ? "0" +
                (minutes === "00" && seconds === "00" ? 0 : convertMinutes - 1)
              : convertMinutes - 1
          setMinutes(
            hours !== "00" && minutes === "00" && seconds === "00"
              ? "59"
              : fMinutes
          )
          setSeconds(
            (hours !== "00" || minutes !== "00") && seconds === "00" && "59"
          )
        }

        // FOR HOURS
        // if (minutes === "00" && seconds === "00") {
        //   let fHours =
        //     convertHours <= 10
        //       ? "0" + (day === "00" && hours === "00" ? "0" : convertHours - 1)
        //       : convertHours - 1
        //   setHours(fHours)
        // }

        // // FOR DAYS
        // if (hours === "00" && minutes === "00" && seconds === "00") {
        //   let fDays =
        //     convertDays <= 10
        //       ? "0" + (day === "00" ? "0" : convertDays - 1)
        //       : convertDays - 1
        //   setDay(fDays)
        //   setHours(day !== "00" && hours === "00" ? "23" : "")
        //   setMinutes(day !== "00" && hours === "00" ? "59" : "")
        //   setSeconds(
        //     day !== "00" && hours === "00" && minutes === "00" ? "59" : ""
        //   )
        // }
      }, 1000)
    }
  }, [startDeadLine, seconds])

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
