import { createSlice } from '@reduxjs/toolkit'
import { IBooksState } from '../types/books'

const initialState: IBooksState = {
  list: [],
}

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = action.payload
    },
  }
})

export const {
  setList,
} = bookSlice.actions

export default bookSlice.reducer