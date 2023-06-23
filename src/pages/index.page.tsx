import { useRouter } from 'next/router'
import { useEffect } from 'react'

const App = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/users')
  }, [])
  
  return <></>
}

export default App