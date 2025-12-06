import { use } from 'react'
import { ScreenContext } from './screen-context'

export function useScreen() {
  return use(ScreenContext)
}
