import type { TextSize } from '@/providers/game-context'
import { TEXTS } from '@/data/texts'
import { useGame } from '@/providers/game-context'
import { useScreen } from '@/providers/screen-context'

export function useStartScreen() {
  const screen = useScreen()
  const game = useGame()

  const onStart = () => {
    screen.setScreen('game')
    game.setTextId(Math.round(Math.random() * (TEXTS.small.length - 1)))
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
