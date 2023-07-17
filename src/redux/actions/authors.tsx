import { IAuthor } from '@/pages/test/props'
import * as authorsSlices from '../slices/authors'
import store from '../store'

export const setList = async(authors: IAuthor) => {
  store.dispatch(authorsSlices.setList(authors))
}