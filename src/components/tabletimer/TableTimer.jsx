import React, { useState, useEffect } from "react"
import TableNamaAkunTimer from "../tablenamaakuntimer/TableNamaAkunTimer"
import TableNoPembayaranTimer from "../tablenopembayarantimer/TableNoPembayaranTimer"

const TableTimer = ({ data }) => {
  const [dataInputNamaAkun, setDataInputNamaAkun] = useState([])
  const [dataInputNoPembayaran, setDataInputNoPembayaran] = useState([])

  useEffect(() => {
    setDataInputNamaAkun(data.namaakun?.map((data) => data))
    setDataInputNoPembayaran(data.nopembayaran?.map((data) => data))
  }, [data])

  const handleInputChangeNamaAkun = (index, newValue) => {
    let newInputValues = [...dataInputNamaAkun]
    newInputValues[index] = newValue
    setDataInputNamaAkun(newInputValues)
  }

  const handleInputChangeNoPembayaran = (index, newValue) => {
    let newInputValues = [...dataInputNoPembayaran]
    newInputValues[index] = newValue
    setDataInputNoPembayaran(newInputValues)
  }

  return (
    <div className="grid grid-cols-[max-content_.8fr_1fr] items-center px-2">
      <h5 className="border border-black px-2 py-1">No</h5>
      <h5 className="border border-black px-2 py-1">NAMA AKUN</h5>
      <h5 className="border border-black px-1 py-1">NOMOR PEMBAYARAN</h5>
      <div className="flex flex-col items-center justify-center">
        {data.namaakun?.map((data, i) => {
          return (
            <h5
              key={i}
              className="border border-black h-28 px-4 flex justify-center items-center">
              {i + 1}
            </h5>
          )
        })}
      </div>

      <div className="w-full flex flex-col justify-center items-center ">
        {dataInputNamaAkun?.map((value, i) => {
          return (
            <TableNamaAkunTimer
              key={i}
              index={i}
              value={value}
              onChange={handleInputChangeNamaAkun}
            />
          )
        })}
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        {dataInputNoPembayaran?.map((value, i) => {
          return (
            <TableNoPembayaranTimer
              index={i}
              key={i}
              value={value}
              dataInputNamaAkun={dataInputNamaAkun}
              dataInputNoPembayaran={dataInputNoPembayaran}
              setDataInputNamaAkun={setDataInputNamaAkun}
              setDataInputNoPembayaran={setDataInputNoPembayaran}
              onChange={handleInputChangeNoPembayaran}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TableTimer
