import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tw-merge'

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes))
}

export function formatSecondsToMMSS(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  const paddedMinutes = String(minutes).padStart(2, '0')
  const paddedSeconds = String(seconds).padStart(2, '0')
  return `${paddedMinutes}:${paddedSeconds}`
}
