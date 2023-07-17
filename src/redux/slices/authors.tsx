import { createSlice } from '@reduxjs/toolkit'
import { IAuthorsState } from '../types/authors'

const initialState: IAuthorsState = {
  list: [],
}

const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = action.payload
    },
  }
})

export const {
  setList,
} = authorSlice.actions

export default authorSlice.reducer