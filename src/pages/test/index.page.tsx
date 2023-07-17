import { useAppSelector } from '@/hooks'
import { upperCase } from '@/utils/functions'
import { useEffect, useState } from 'react'
import { getData } from './services'

const TestPage = () => {
  const books = useAppSelector(state => state.books.list)
  const authors = useAppSelector(state => state.authors.list)

  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    getData({
      setLoading,
    })
  }, [])

  return (
    <main style={{
      backgroundColor: '#f1f8ff',
      padding: '1rem 0',
      minHeight: '100vh',
    }}>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '1rem 3rem 2rem',
        }}
      >
        <h1
          style={{
            fontWeight: '500',
            color: 'red',
            fontSize: '2.5rem',
          }}
        >
          Best sellers all times
        </h1>
        <input
          type='text'
          style={{
            padding: '0.5rem',
            border: '1px solid #ccc',
            height: '50px',
          }}
          placeholder='write something to search...'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading &&
        <p
          style={{
            margin: '1rem 3rem',
          }}
        >
          Loading...
        </p>
      }
  

      <section>
        {!loading && <p>{
            books
              .filter(book => {
                if(!search) return true
                return (
                  book.title.toLowerCase().includes(search.toLowerCase()) ||
                  book.description.toString().includes(search)
                )
              })
              .map((book, index) => (
                <section
                  key={index}
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                    borderRadius: '10px',
                    padding: '1rem',
                    margin: '1rem 3rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}>
                    <h2
                      style={{
                        fontWeight: '500',
                        marginBottom: '1rem',
                      }}
                    >
                      {upperCase(book.title)}
                    </h2>
                    <span
                      style={{
                        fontWeight: '300',
                        fontSize: '0.7rem',
                        color: 'green',
                        backgroundColor: '#e3fee7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0.5rem',
                        borderRadius: '20px',
                      }}
                    >
                      AUTHOR ID: {book.authorId}
                    </span>
                  </div>
    
                  <h3
                    style={{
                      fontWeight: '400',
                      marginBottom: '1rem',
                    }}
                  >
                    {authors.find(author => author.id === book.authorId)?.name }
                  </h3>

                  <p
                    style={{
                      fontWeight: '300',
                      fontSize: '0.9rem',
                    }}
                  >
                    {book.description}
                  </p>

                  <button
                    style={{
                      backgroundColor: '#fff',
                      color: '#3671f0',
                      marginTop: '1rem',
                      width: 'max-content',
                      alignSelf: 'flex-end',
                    }}
                    onClick={() => alert('You clicked on the button!')}
                  >
                    SHOW BOOK
                  </button>
                </section>
              )) 
          }</p>}
      </section>
    </main>
  )
}

export default TestPage