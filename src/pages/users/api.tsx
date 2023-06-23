import { API } from '@/api/api'

export const getUsersRandoms = async (results : number) => {
  try{
    const data = await API({ params: { results }})
    return data.results
  }catch{
    return []
  }
}