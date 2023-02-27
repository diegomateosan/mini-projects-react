import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      return
    }
    if (query === '') {
      setError('No se puede busacr una películas vacía')
      return
    }
    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }
    setError(null)
  }, [query])

  return { query, setQuery, error }
}
