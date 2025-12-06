import { use } from 'react'
import { GameContext } from './game-context'

export function useGame() {
  return use(GameContext)
}
