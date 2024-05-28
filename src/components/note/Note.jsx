import React, { useState, useRef, useContext, useEffect } from "react"
import { MyContext } from "../../context/MyContext"
// import useAutoSizeTextArea from "../../hooks/useAutoSizeTextArea"

const Note = () => {
  const [valueCatatan, setValueCatatan] = useState("")
  const [valueNamaJobs, setValueNamaJobs] = useState("")
  const [resultNamaJobs, setResultNamaJobs] = useState("")
  const [urlNamaJobs, setUrlNamaJobs] = useState("")
  const firstTextAreaRef = useRef()
  const secondTextAreaRef = useRef()
  const namaJobsRef = useRef(null)

  const { startDeadLine, setStartDeadLine } = useContext(MyContext)

  const handleChangeCatatan = (e) => {
    const val = e.target.value
    setValueCatatan(val)
  }

  const handleChangeJobs = (e) => {
    const val = e.target.value
    setValueNamaJobs(val)
  }

  const checkIfInputUrl = (input) => {
    let urlPattern =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=%]+$/g

    let url = []
    Array.from(input).forEach((str) => {
      if (str.includes(urlPattern)) {
        url.push(str)
      }
    })

    console.log(url)
  }

  useEffect(() => {
    if (startDeadLine) checkIfInputUrl(valueNamaJobs)
  }, [startDeadLine])

  return (
    <div className="w-full mt-36 px-2 grid grid-cols-2 ">
      <div className="flex flex-col bg-[#288BFF] rounded-t-xl ">
        <label className="ps-4 pt-2 text-white font-bold">NAMA JOBS:</label>
        {startDeadLine ? (
          <div ref={namaJobsRef}></div>
        ) : (
          <textarea
            name="nama-jobs"
            className="w-full px-4 h-28 bg-transparent  placeholder:text-sm placeholder:text-white text-white focus-within:outline-none"
            placeholder="Ketik Disini..."
            value={valueNamaJobs}
            rows={1}
            onChange={handleChangeJobs}
            ref={firstTextAreaRef}
            disabled={startDeadLine}></textarea>
        )}
      </div>
      <div className="flex flex-col bg-[#FE41F6] rounded-t-xl">
        <label className="ps-4 pt-2 text-white font-bold">CATATAN:</label>
        <textarea
          name="nama-jobs"
          className="w-full px-4 h-28 bg-transparent  placeholder:text-sm placeholder:text-white text-white focus-within:outline-none  "
          placeholder="Ketik Disini..."
          value={valueCatatan}
          rows={1}
          onChange={handleChangeCatatan}
          ref={secondTextAreaRef}
          disabled={startDeadLine}></textarea>
      </div>
    </div>
  )
}

export default Note
