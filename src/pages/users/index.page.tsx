import { useState } from 'react'
import { getUsersRandoms } from './api'
import { IHome, IUserRandom } from './props'
import { listUsers } from './services'

export const getServerSideProps = async () => {
  const resultInitial = 1
  const usersInitial = await getUsersRandoms(resultInitial)
  return { props: { usersInitial, resultInitial }}
}

const HomePage = ({ usersInitial, resultInitial }: IHome) => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<IUserRandom[]>(usersInitial)
  const [result, setResult] = useState(resultInitial)

  return (
    <div>
      <h1 className='p-12 bg-slate-500 text-white text-center'>
        Búsqueda de usuarios aleatorios
      </h1>

      <div className='my-4 flex justify-center items-center gap-4'>
        <input
          className='p-2 border border-gray-400 rounded'
          type="number"
          value={result}
          onChange={(e) => setResult(Number(e.target.value))}
          readOnly={loading}
          min={1}
        />
        <button
          className={`p-2 border border-gray-400 rounded text-white ${loading ? 'bg-gray-900' : 'bg-red-500'}`}
          disabled={loading}
          onClick={() => listUsers({ result, setLoading, setUsers })}
        >
          {loading ? 'Loading...' : 'Get Users'}
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {loading && <div>Cargando...</div>}
  
        {!loading && users?.map((user, index) => (
          <div key={index} className='border border-gray-400 rounded p-4'>
            <div className='flex justify-center'>
              <img
                className='rounded-full'
                src={user.picture.medium}
                alt={`${user.name.first} ${user.name.last}`}
              />
            </div>

            <div className='my-4'>
              <h2 className='text-center text-xl'>
                {user.name.title} {user.name.first} {user.name.last}
              </h2>
              <p className='text-center'>{user.login.username}</p>
              <p className='text-center'>{user.email}</p>
              <p className='text-center'>{user.phone}</p>
              <p className='text-center'>{user.cell}</p>
              <p className='text-center'>
                {user.location.city}, {user.location.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
