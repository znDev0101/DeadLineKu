import React from "react"
import Header from "../../components/header/Header"
import TimeDeadLine from "../../components/timedeadline/TimeDeadLine"
import CatatanJobs from "../../components/catatanjobs/CatatanJobs"
import TableAccount from "../../components/tableAccount/TableAccount"

const Home = () => {
  return (
    <>
      <Header />
      <TimeDeadLine />
      <CatatanJobs />
      <TableAccount />
    </>
  )
}

export default Home
