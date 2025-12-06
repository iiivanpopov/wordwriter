import type { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

export type TextSize = 'small' | 'medium' | 'large'

export interface GameResult {
  charsPerMinute: number
  accuracy: number
  totalChars: number
  timeSeconds: number
}

export interface GameContextState {
  textSize: TextSize
  setTextSize: Dispatch<SetStateAction<TextSize>>
  result: GameResult | null
  setResult: Dispatch<SetStateAction<GameResult | null>>
}

export const GameContext = createContext<GameContextState>(null!)
