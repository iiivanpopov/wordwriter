import type { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

export type Screen = 'start' | 'game' | 'end'

export interface ScreenContextState {
  screen: Screen
  setScreen: Dispatch<SetStateAction<Screen>>
}

export const ScreenContext = createContext<ScreenContextState>(null!)
