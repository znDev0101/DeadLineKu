import React, { useState, useEffect, useRef, useContext } from "react"
import { MyContext } from "../../context/MyContext"
// import useAutoSizeTextArea from "../../hooks/useAutoSizeTextArea"

const Note = () => {
  const [valueCatatan, setValueCatatan] = useState("")
  const [valueNamaJobs, setValueNamaJobs] = useState("")
  const firstTextAreaRef = useRef()
  const secondTextAreaRef = useRef()
  const wrapperTextAreaRef = useRef()

  const { startDeadLine } = useContext(MyContext)

  // useAutoSizeTextArea(
  //   wrapperTextAreaRef.current,
  //   firstTextAreaRef.current,
  //   secondTextAreaRef.current,
  //   valueNamaJobs,
  //   valueCatatan
  // )

  const handleChangeCatatan = (e) => {
    const val = e.target.value
    setValueCatatan(val)
  }

  const handleChangeJobs = (e) => {
    const val = e.target.value
    setValueNamaJobs(val)
  }

  return (
    <div className="w-full mt-48 px-2 grid grid-cols-2 ">
      <div className="flex flex-col bg-[#288BFF] rounded-t-xl ">
        <label className="ps-4 pt-2 text-white">NAMA JOBS:</label>
        <textarea
          name="nama-jobs"
          className="w-full px-4 h-28 bg-transparent  placeholder:text-sm placeholder:text-white text-white focus-within:outline-none"
          placeholder="Ketik Disini..."
          value={valueNamaJobs}
          rows={1}
          onChange={handleChangeJobs}
          ref={firstTextAreaRef}
          disabled={startDeadLine}></textarea>
      </div>
      <div className="flex flex-col bg-[#FE41F6] rounded-t-xl">
        <label className="ps-4 pt-2 text-white">CATATAN:</label>
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
