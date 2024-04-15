import React from "react"

const CatatanJobs = () => {
  return (
    <div className="w-full h-[120px] px-2 grid grid-cols-2 gap-x-2 mt-48">
      <div className="relative bg-[#288BFF] rounded-t-lg ">
        <textarea
          name="nama-jobs"
          className="w-full absolute top-0 bottom-0 bg-transparent px-5 placeholder:text-sm placeholder:text-white"
          placeholder="Nama Jobs: Ketik Disini..."></textarea>
      </div>
      <div className=" relative bg-[#FE41F6] rounded-t-lg">
        <textarea
          name="nama-jobs"
          className="w-full absolute top-0 bottom-0 bg-transparent px-5 placeholder:text-sm placeholder:text-white"
          placeholder="Catatan: Ketik Disini..."></textarea>
      </div>
    </div>
  )
}

export default CatatanJobs
