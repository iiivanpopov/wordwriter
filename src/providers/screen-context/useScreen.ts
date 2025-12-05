import { use } from 'react'
import { ScreenContext } from './screen-context'

export function useScreen() {
  const context = use(ScreenContext)

  return context
}
