import type { ReactNode } from 'react'
import type { Screen } from './screen-context'
import { useMemo, useState } from 'react'
import { ScreenContext } from './screen-context'

interface ScreenProviderProps {
  children: ReactNode
}

export function ScreenProvider({ children }: ScreenProviderProps) {
  const [screen, setScreen] = useState<Screen>('start')

  const contextValue = useMemo(() => ({
    screen,
    setScreen,
  }), [screen])

  return <ScreenContext value={contextValue}>{children}</ScreenContext>
}
