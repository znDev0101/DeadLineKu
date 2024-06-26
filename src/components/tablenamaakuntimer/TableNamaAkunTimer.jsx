import React from "react"

const TableNamaAkunTimer = ({ value, index, onChange }) => {
  const handleChange = (e) => {
    onChange(index, e.target.value)
  }

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="w-full h-28 border border-black px-2"
      />
    </>
  )
}

export default TableNamaAkunTimer
