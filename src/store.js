import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

export const store = configureStore({
  reducer: {
    namaAkun: namaAkunSlice,
  },
})

setupListeners(store.dispatch)
