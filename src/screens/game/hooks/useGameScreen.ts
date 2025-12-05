import type { ChangeEvent } from 'react'
import { useMemo, useState } from 'react'
import { TEXTS } from '@/data/texts'
import { useTimer } from '@/hooks/useTimer'
import { useGame } from '@/providers/game-context'

export function useGameScreen() {
  const timer = useTimer()
  const game = useGame()
  const [input, setInput] = useState('')

  const text = useMemo(() => TEXTS[game.textSize][game.textId], [game.textId, game.textSize])

  const onInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (!timer.started)
      timer.start()

    setInput(event.target.value)
  }

  return {
    state: { game, input, text },
    actions: { onInput },
    timer,
  }
}
