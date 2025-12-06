import type { KeyboardEvent } from 'react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { TEXTS } from '@/data/texts'
import { useTimer } from '@/hooks/use-timer'
import { useGame } from '@/providers/game-context'
import { useScreen } from '@/providers/screen-context'
import { calculateStats, getCharStatus } from '../lib/utils'

export type CharStatus = 'correct' | 'incorrect' | 'pending'
export interface Char {
  id: string
  char: string
  status: CharStatus
  isCurrent: boolean
}

export function useGameScreen() {
  const [input, setInput] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  const game = useGame()
  const timer = useTimer()
  const screen = useScreen()

  useEffect(() => {
    containerRef.current?.focus()
  }, [])

  const text = useMemo(() => TEXTS[game.textSize], [game.textSize])

  const chars = useMemo<Char[]>(() => {
    return text.split('').map((char, index) => ({
      id: `char-${index}`,
      char,
      status: getCharStatus(char, input[index]),
      isCurrent: index === input.length,
    }))
  }, [text, input])

  const correctChars = useMemo(() => {
    return chars.filter(c => c.status === 'correct').length
  }, [chars])

  const isLastChar = input.length + 1 === text.length
  const canType = input.length < text.length

  const onKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault()

    const { key } = event

    if (key === 'Backspace')
      return setInput(prev => prev.slice(0, -1))

    if (key.length !== 1 || !canType)
      return

    if (!timer.started)
      timer.start()

    setInput(prev => prev + key)

    if (isLastChar) {
      timer.stop()

      const isLastCorrect = key === text[input.length]
      const finalStats = calculateStats(
        correctChars + Number(isLastCorrect),
        input.length + 1,
        timer.seconds,
      )

      game.setResult({
        charsPerMinute: finalStats.charsPerMinute,
        accuracy: finalStats.accuracy,
        totalChars: text.length,
        timeSeconds: timer.seconds,
      })
      screen.setScreen('end')
    }
  }, [canType, timer, isLastChar, text, input.length, game, screen, correctChars])

  return {
    state: { game, input, text, chars },
    actions: { onKeyDown },
    hooks: { timer },
    refs: { containerRef },
  }
}
