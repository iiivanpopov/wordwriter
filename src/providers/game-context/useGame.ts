import { use } from 'react'
import { GameContext } from './game-context'

export function useGame() {
  const context = use(GameContext)

  return context
}
