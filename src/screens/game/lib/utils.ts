import type { CharStatus } from '../hooks/use-game-screen'

export function getCharStatus(char: string, inputChar: string | undefined): CharStatus {
  if (inputChar === undefined)
    return 'pending'
  return inputChar === char ? 'correct' : 'incorrect'
}

export function calculateStats(correctChars: number, totalTyped: number, seconds: number) {
  const timeMinutes = seconds / 60 || 1 / 60
  return {
    totalTyped,
    accuracy: totalTyped > 0 ? Math.round((correctChars / totalTyped) * 100) : 100,
    charsPerMinute: seconds > 0 ? Math.round(correctChars / timeMinutes) : 0,
  }
}
