import type { ReactNode } from 'react'
import type { GameResult, TextSize } from './game-context'
import { useMemo, useState } from 'react'
import { GameContext } from './game-context'

interface GameProviderProps {
  children: ReactNode
}

export function GameProvider({ children }: GameProviderProps) {
  const [textSize, setTextSize] = useState<TextSize>('medium')
  const [result, setResult] = useState<GameResult | null>(null)

  const contextValue = useMemo(() => ({
    textSize,
    setTextSize,
    result,
    setResult,
  }), [result, textSize])

  return <GameContext value={contextValue}>{children}</GameContext>
}
