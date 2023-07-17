import { configureStore } from '@reduxjs/toolkit'
import reducer from './slices'

const store = configureStore({
  reducer,
  devTools: true,
})

export type RootState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch

export default store