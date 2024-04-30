import React, { useState } from "react"
import Header from "../../components/header/Header"
import TimeDeadLine from "../../components/timedeadline/TimeDeadLine"
import CatatanJobs from "../../components/catatanjobs/CatatanJobs"
import TableAccount from "../../components/tableAccount/TableAccount"
import Note from "../../components/note/Note"

const Home = () => {
  const [startDeadLine, setStartDeadLine] = useState(false)
  const [day, setDay] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [second, setSecond] = useState(0)

  return (
    <>
      <Header />
      <TimeDeadLine
        startDeadLine={startDeadLine}
        setStartDeadLine={setStartDeadLine}
        day={day}
        setDay={setDay}
        hours={hours}
        setHours={setHours}
        minutes={minutes}
        setMinutes={setMinutes}
      />
      <Note startDeadLine={startDeadLine} />
      <TableAccount />
    </>
  )
}

export default Home
