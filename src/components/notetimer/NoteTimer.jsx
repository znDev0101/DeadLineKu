import React from "react"

const NoteTimer = ({ data }) => {
  return (
    <div className="w-full mt-12 px-2 grid grid-cols-2 ">
      <div className="flex flex-col bg-[#288BFF] rounded-t-xl ">
        <label className="ps-4 pt-2 text-white font-bold">NAMA JOBS:</label>

        <textarea
          name="nama-jobs"
          className="w-full px-4 h-28 bg-transparent  placeholder:text-sm placeholder:text-white text-white focus-within:outline-none"
          placeholder="Ketik Disini..."
          value={data.namajobs}></textarea>
      </div>
      <div className="flex flex-col bg-[#FE41F6] rounded-t-xl">
        <label className="ps-4 pt-2 text-white font-bold">CATATAN:</label>
        <textarea
          name="nama-jobs"
          className="w-full px-4 h-28 bg-transparent  placeholder:text-sm placeholder:text-white text-white focus-within:outline-none  "
          placeholder="Ketik Disini..."
          value={data.catatan}></textarea>
      </div>
    </div>
  )
}

export default NoteTimer
