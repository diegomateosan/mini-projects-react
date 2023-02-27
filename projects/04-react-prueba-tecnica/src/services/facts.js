const URL_RANDOM_FACT = 'https://catfact.ninja/fact'
export const getRandomFact = () => {
  return fetch(URL_RANDOM_FACT)
    .then(response => response.json())
    .then((data) => {
      const { fact } = data
      return fact
    })
}
