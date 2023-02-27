const API_KEY = '1ceb4fc6'

export async function searchMovies ({ query }) {
  if (query === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    const json = await response.json()
    const movies = json.Search
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (error) {
    throw new Error('Error serching movies')
  }
}
