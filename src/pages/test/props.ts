export interface IBook{
  title: string
  authorId: number
  description: string
}

export interface IAuthor{
  id: number
  name: string
}

export interface IData{
  setLoading: Function
}