import React from "react"

const TableAccount = () => {
  return (
    <div className="w-full px-2">
      <div className="w-full ">
        <div className="grid grid-cols-[max-content_1fr_1fr]  border border-black bg-black">
          <div className="text-white w-8 px-2">
            <span className="text-sm ">No.</span>
          </div>
          <div className="text-white text-center flex-1">
            <span className="text-sm">NAMA AKUN</span>
          </div>
          <div className="text-white text-center flex-1">
            <span className="text-sm">NO PEMBAYARAN:...</span>
          </div>
        </div>
        <div className="h-20 grid grid-cols-[max-content_1fr_1fr]">
          <input
            type="text"
            className="w-8 px-2 border-b border-black"
            defaultValue={1}
            disabled
          />
          <input
            type="text"
            className="w-full placeholder:text-center px-2 border-l border-b border-black"
            placeholder="Ketik Disini..."
          />
          <input
            type="text"
            className="w-full placeholder:text-center px-2 border-b border-l border-black"
            placeholder="Ketik Disini..."
          />
        </div>
        <div className="h-20 grid grid-cols-[max-content_1fr_1fr]">
          <input
            type="text"
            className="w-8 px-2 border-b border-black"
            value={10}
            disabled
          />
          <input
            type="text"
            className="w-full placeholder:text-center px-2 border-l border-b border-black"
            placeholder="Ketik Disini..."
          />
          <input
            type="text"
            className="w-full placeholder:text-center px-2 border-b border-l border-black"
            placeholder="Ketik Disini..."
          />
        </div>
        <div className="bg-[#26BC00] w-full py-3 rounded-b-xl">
          <div className="flex items-center justify-end px-5 text-white">
            <span>Salin Semua</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableAccount
