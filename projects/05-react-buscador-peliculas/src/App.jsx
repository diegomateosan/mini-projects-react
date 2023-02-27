import { useCallback, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { query, setQuery, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ query, sort })

  const debounceGetMovies = useCallback(debounce((query) => {
    getMovies({ query })
  }, 500), [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    /* const { query } = Object.fromEntries(new window.FormData(event.target)) <- Forma no controlada */
    getMovies({ query })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return // <- Prevalidación
    setQuery(event.target.value)
    debounceGetMovies(newQuery)
  }

  const handleShort = () => {
    setSort(!sort)
  }

  return (
    <div className='app'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' placeholder='Star Wars, Avengers, ...' />
          <input type='checkbox' onChange={handleShort} checked={sort} />
          <button>Buscar</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>

      <main>
        {loading ? <p>Cargando ....</p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
