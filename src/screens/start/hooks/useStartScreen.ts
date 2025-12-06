import type { TextSize } from '@/providers/game-context'
import { useGame } from '@/providers/game-context'
import { useScreen } from '@/providers/screen-context'

export function useStartScreen() {
  const game = useGame()
  const screen = useScreen()

  const onStart = () => {
    screen.setScreen('game')
  }

  const onTextSizeSelect = (textSize: string) => {
    game.setTextSize(textSize as TextSize)
  }

  return {
    actions: {
      onStart,
      onTextSizeSelect,
    },
    state: {
      game,
    },
  }
}
