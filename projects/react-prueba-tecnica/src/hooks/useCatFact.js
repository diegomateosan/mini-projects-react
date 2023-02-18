import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // Efecto para recuperar un hecho aleatorio de gatos de la primera API
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
