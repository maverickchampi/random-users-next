import { IBook } from '@/pages/test/props'
import * as booksSlices from '../slices/books'
import store from '../store'

export const setList = async(books: IBook) => {
  store.dispatch(booksSlices.setList(books))
}