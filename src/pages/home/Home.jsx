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
      setTimeout(() => {
        if (seconds.length !== 0) {
          let convertSeconds = parseInt(seconds)
          let fSeconds =
            convertSeconds <= 10 && seconds !== "00"
              ? "0" + (convertSeconds - 1)
              : seconds > 10
              ? convertSeconds - 1
              : "00"

          setSeconds(
            minutes.length !== 0 && minutes !== "00" && seconds === "00"
              ? "59"
              : fSeconds
          )
        }
        if (minutes.length !== 0 && seconds === "00" && minutes !== "00") {
          let convertMinutes = parseInt(minutes)
          let fMinutes =
            convertMinutes <= 10 && seconds === "00"
              ? "0" + (convertMinutes - 1)
              : convertMinutes > 10 && seconds === "00" && convertMinutes - 1

          setMinutes(
            hours.length !== 0 && hours !== "00" && minutes === "00"
              ? "59"
              : fMinutes
          )
        }
        if (
          hours.length !== 0 &&
          hours !== "00" &&
          minutes === "00" &&
          seconds === "00"
        ) {
          let convertHours = parseInt(hours)
          let fHours =
            convertHours <= 10 && minutes === "00" && seconds === "00"
              ? "0" + (convertHours - 1)
              : convertHours > 10 &&
                minutes === "00" &&
                seconds === "00" &&
                convertHours - 1
          setHours(fHours)
          setSeconds("59")
          setMinutes("59")
        }
        if (
          day.length !== 0 &&
          day !== "00" &&
          hours === "00" &&
          minutes === "00" &&
          seconds === "00"
        ) {
          let convertDays = parseInt(day)
          let fDays =
            convertDays <= 10 &&
            hours === "00" &&
            minutes === "00" &&
            seconds === "00"
              ? "0" + (convertDays - 1)
              : convertDays > 10 &&
                hours === "00" &&
                minutes === "00" &&
                seconds === "00" &&
                convertDays - 1
          setDay(fDays)
          setSeconds("59")
          setMinutes("59")
          setHours("24")
        }
      }, 10)
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
