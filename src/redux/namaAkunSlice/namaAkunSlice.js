import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  allValueNamaAkun: [],
}

export const namaAkunSlice = createSlice({
  name: "namaAkunSlice",
  initialState,
  reducers: {
    addNamaAkun: (state, action) => {
      state.allValueNamaAkun.push()
    },
  },
})
