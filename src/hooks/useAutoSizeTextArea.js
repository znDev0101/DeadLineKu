import { useEffect } from "react"

function useAutoSizeTextArea(
  wrapperTextAreaRef,
  firstTextAreaRef,
  secondTextAreaRef,
  valueNamaJobs,
  valueCatatan
) {
  useEffect(() => {
    if (
      firstTextAreaRef?.clientHeight < firstTextAreaRef?.scrollHeight ||
      secondTextAreaRef?.clientHeight < secondTextAreaRef?.scrollHeight
    ) {
    }

    // if (textAreaRef?.clientHeight < textAreaRef?.scrollHeight) {
    //   // We need to reset the height momentarily to get the correct scrollHeight for the textarea

    //   // We then set the height directly, outside of the render loop
    //   // Trying to set this with state or a ref will product an incorrect value.
    //   // textAreaRef.style.height = "150px"
    //   // const scrollHeight = textAreaRef.scrollHeight

    //   // textAreaRef.style.height = scrollHeight + "px"

    //   console.log("true")
    // }
  }, [firstTextAreaRef, secondTextAreaRef, valueNamaJobs, valueCatatan])
}

export default useAutoSizeTextArea
