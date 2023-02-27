import { useState, useEffect } from 'react'
const URL_PREFIX_IMG = 'https://cataas.com/'

export function useCatImage ({ fact }) {
  const [imgURL, setImgURL] = useState()
  // Efecto para mostrar una imagen de un gato con la primera palabra del hecho recuperado usando la segunda API.
  useEffect(() => {
    if (!fact) return
    const firstThreeWords = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${firstThreeWords}?json=true`)
      .then(response => response.json())
      .then(data => {
        const { url } = data
        setImgURL(`${URL_PREFIX_IMG}${url}`)
      })
  }, [fact])
  return { imgURL }
}
