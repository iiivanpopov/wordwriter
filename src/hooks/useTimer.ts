import { useEffect, useRef, useState } from 'react'

export function useTimer(defaultStarted = false) {
  const [seconds, setSeconds] = useState(0)
  const [started, setStarted] = useState(defaultStarted)
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null!)

  useEffect(() => {
    if (started) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1)
      }, 1000)
    }

    return () => clearInterval(intervalRef.current)
  }, [started])

  const start = () => {
    setStarted(true)
  }

  const stop = () => {
    setStarted(false)
    clearInterval(intervalRef.current)
  }

  return {
    seconds,
    started,
    start,
    stop,
  }
}
