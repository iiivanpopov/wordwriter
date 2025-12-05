import type { ReactNode } from 'react'

interface LetterProps {
  children: ReactNode
}

export function Letter({ children }: LetterProps) {
  return <div>{children}</div>
}
