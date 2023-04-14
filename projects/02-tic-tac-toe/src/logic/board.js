import { WINNER_COMBOS } from '../constants'

export const checkWinner = (boardToCheck) => {
  // revisamos todas los casos posibles de victoria
  // para ver si ganó el X u O
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  // si no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  // revisamos si hay un empate
  return newBoard.every((square) => square !== null)
}
