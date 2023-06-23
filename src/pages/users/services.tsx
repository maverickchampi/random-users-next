import { getUsersRandoms } from './api'
import { IListUsers } from './props'

export const listUsers = async ({ result, setLoading, setUsers }: IListUsers) => {
  try{
    setLoading(true)
    const users = await getUsersRandoms(result)
    setUsers(users)
  }catch{
    alert('Error al obtener los usuarios, intente de nuevo')
    setUsers([])
  }finally{
    setLoading(false)
  }
}