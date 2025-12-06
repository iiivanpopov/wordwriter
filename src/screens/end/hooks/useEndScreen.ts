import { useGame } from '@/providers/game-context'
import { useScreen } from '@/providers/screen-context'

export function useEndScreen() {
  const game = useGame()
  const screen = useScreen()

  const handleRestart = () => {
    game.setResult(null)
    screen.setScreen('start')
  }

  return {
    state: { game, screen },
    actions: { handleRestart },
  }
}
