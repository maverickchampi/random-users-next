import { combineReducers } from '@reduxjs/toolkit'
import authors from './authors'
import books from './books'

const reducer = combineReducers({
  books,
  authors,
})

export default reducer