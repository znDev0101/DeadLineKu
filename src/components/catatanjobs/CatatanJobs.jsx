import React, { useEffect, useRef, useState } from "react"
import useAutoSizeTextArea from "../../hooks/useAutoSizeTextArea"
const CatatanJobs = () => {
  const [valueCatatan, setValueCatatan] = useState("")
  const [valueNamaJobs, setValueNamaJobs] = useState("")
  const firstTextAreaRef = useRef()
  const secondTextAreaRef = useRef()
  const wrapperTextAreaRef = useRef()

  useAutoSizeTextArea(
    wrapperTextAreaRef.current,
    firstTextAreaRef.current,
    secondTextAreaRef.current,
    valueNamaJobs,
    valueCatatan
  )

  const handleChangeCatatan = (e) => {
    const val = e.target.value
    setValueCatatan(val)
  }

  const handleChangeJobs = (e) => {
    const val = e.target.value
    setValueNamaJobs(val)
  }

  return (
    <div
      className={`w-full h-36 grid grid-cols-2 gap-x-1 mt-52 px-2`}
      ref={wrapperTextAreaRef}>
      <textarea
        name="nama-jobs"
        className="w-full px-5  placeholder:text-sm placeholder:text-white text-white rounded-t-xl bg-[#288BFF]"
        placeholder="Nama Jobs: Ketik Disini..."
        value={valueNamaJobs}
        rows={1}
        onChange={handleChangeJobs}
        ref={firstTextAreaRef}></textarea>

      <textarea
        name="nama-jobs"
        className="w-full px-5  placeholder:text-sm placeholder:text-white text-white rounded-t-xl bg-pink-500 "
        placeholder="Catatan: Ketik Disini..."
        value={valueCatatan}
        rows={1}
        onChange={handleChangeCatatan}
        ref={secondTextAreaRef}></textarea>
    </div>
  )
}

export default CatatanJobs
