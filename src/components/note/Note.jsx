import React, { useRef, useContext } from "react"
import { MyContext } from "../../context/MyContext"

const Note = () => {
  const firstTextAreaRef = useRef(null)
  const secondTextAreaRef = useRef(null)

  const { startDeadLine, namaJobs, setNamaJobs, catatan, setCatatan } =
    useContext(MyContext)

  const wrapURLs = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g

    // Split the text by spaces and newlines
    const parts = text.split(/(\s+)/g)

    // Process each part and wrap URLs
    return parts
      ?.map((part, index) => {
        if (urlRegex.test(part)) {
          return `<a href="${part}" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2 decoration-2  text-gray-200 font-bold decoration-gray-200">${part}</a>`
        }
        if (part === "\n") {
          return "<br/>"
        }
        return part
      })
      .join("")
  }

  const TextWithLinks = ({ text }) => {
    const wrappedText = wrapURLs(text)

    return (
      <div
        className="text-white px-5 "
        dangerouslySetInnerHTML={{ __html: wrappedText }}
      />
    )
  }

  return (
    <div className="w-full mt-36 px-2 grid grid-cols-2 ">
      <div className="flex flex-col bg-[#288BFF] rounded-t-xl ">
        <label className="ps-4 pt-2 text-white font-bold">NAMA JOBS:</label>
        {startDeadLine ? (
          <TextWithLinks text={namaJobs} />
        ) : (
          <textarea
            name="nama-jobs"
            className="w-full px-4 h-28 bg-transparent  placeholder:text-sm placeholder:text-white text-white focus-within:outline-none"
            placeholder="Ketik Disini..."
            value={namaJobs}
            rows={1}
            onChange={(e) => setNamaJobs(e.target.value)}
            ref={firstTextAreaRef}
            disabled={startDeadLine}></textarea>
        )}
      </div>
      <div className="flex flex-col bg-[#FE41F6] rounded-t-xl">
        <label className="ps-4 pt-2 text-white font-bold">CATATAN:</label>
        <textarea
          name="catatan"
          className="w-full px-4 h-28 bg-transparent  placeholder:text-sm placeholder:text-white text-white focus-within:outline-none  "
          placeholder="Ketik Disini..."
          value={catatan}
          rows={1}
          onChange={(e) => setCatatan(e.target.value)}
          ref={secondTextAreaRef}
          disabled={startDeadLine}></textarea>
      </div>
    </div>
  )
}

export default Note
