import type { ReactNode } from 'react'
import type { TextSize } from './game-context'
import { useMemo, useState } from 'react'
import { GameContext } from './game-context'

interface GameProviderProps {
  children: ReactNode
}

export function GameProvider({ children }: GameProviderProps) {
  const [textSize, setTextSize] = useState<TextSize>('medium')
  const [textId, setTextId] = useState(0)

  const contextValue = useMemo(
    () => ({
      textSize,
      setTextSize,
      textId,
      setTextId,
    }),
    [textId, textSize],
  )

  return <GameContext value={contextValue}>{children}</GameContext>
}
