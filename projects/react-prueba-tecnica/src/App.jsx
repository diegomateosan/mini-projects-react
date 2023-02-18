import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imgURL } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imgURL && <img src={imgURL} alt={`Image extracted using the first three words for ${imgURL}`} />}
      </section>
      <button onClick={handleClick}>Cambiar imagen</button>
    </main>

  )
}
