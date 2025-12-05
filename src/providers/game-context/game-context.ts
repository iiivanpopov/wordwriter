import type { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

export type TextSize = 'small' | 'medium' | 'large'

export interface GameContextState {
  textSize: TextSize
  textId: number
  setTextSize: Dispatch<SetStateAction<TextSize>>
  setTextId: Dispatch<SetStateAction<number>>
}

export const GameContext = createContext<GameContextState>(null!)
