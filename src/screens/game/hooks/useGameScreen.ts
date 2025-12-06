import type { KeyboardEvent } from 'react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { TEXTS } from '@/data/texts'
import { useTimer } from '@/hooks/useTimer'
import { useGame } from '@/providers/game-context'
import { useScreen } from '@/providers/screen-context'

type CharStatus = 'correct' | 'incorrect' | 'pending'
interface Char {
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

  const chars = useMemo<Char[]>(() =>
    text.split('').map((char, index) => {
      let status: CharStatus = 'pending'

      if (index < input.length)
        status = input[index] === char ? 'correct' : 'incorrect'

      return {
        id: `char-${index}`,
        char,
        status,
        isCurrent: index === input.length,
      }
    }), [text, input])

  const stats = useMemo(() => {
    const totalTyped = input.length
    const correctChars = chars.filter(c => c.status === 'correct').length
    const accuracy = totalTyped > 0 ? Math.round((correctChars / totalTyped) * 100) : 100
    const timeMinutes = timer.seconds / 60
    const charsPerMinute = timeMinutes > 0 ? Math.round(correctChars / timeMinutes) : 0

    return {
      totalTyped,
      accuracy,
      charsPerMinute,
    }
  }, [input.length, chars, timer.seconds])

  const onKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault()

    const key = event.key

    if (key === 'Backspace' && timer.started) {
      setInput(prev => prev.slice(0, -1))
    }
    else if (key.length === 1) {
      if (!timer.started)
        timer.start()

      const nextIndex = input.length
      if (nextIndex < text.length) {
        const isCorrect = key === text[nextIndex]
        setInput(prev => prev + key)

        if (nextIndex + 1 === text.length) {
          timer.stop()

          const timeMinutes = timer.seconds / 60 || 1 / 60
          const correctChars = chars.filter(c => c.status === 'correct').length + (isCorrect ? 1 : 0)
          const totalTyped = input.length + 1

          game.setResult({
            charsPerMinute: Math.round(correctChars / timeMinutes),
            accuracy: Math.round((correctChars / totalTyped) * 100),
            totalChars: text.length,
            timeSeconds: timer.seconds,
          })
          screen.setScreen('end')
        }
      }
    }
  }, [timer, input, text, chars, game, screen])

  return {
    state: {
      game,
      input,
      text,
      chars,
      stats,
    },
    actions: {
      onKeyDown,
    },
    hooks: {
      timer,
    },
    refs: {
      containerRef,
    },
  }
}
