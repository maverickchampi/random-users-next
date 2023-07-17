import * as authorActions from '@/redux/actions/authors'
import * as bookActions from '@/redux/actions/books'
import { getAuthors, getBooks } from './api'
import { IData } from './props'

export const getData = async ({
  setLoading,
}: IData) => {
  try{
    setLoading(true)
    const authors = await getAuthors()
    const books = await getBooks()

    authorActions.setList(authors)
    bookActions.setList(books)
  }catch(err){
    console.log('Error fetching data', err)
    alert('Error al obtener datos')
  }finally{
    setLoading(false)
  }
}
