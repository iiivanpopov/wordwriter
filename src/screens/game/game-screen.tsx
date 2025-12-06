/* eslint-disable react-hooks/refs */
import { Typography } from '@/components/ui/typography'
import { cn, formatSecondsToMMSS } from '@/lib/utils'
import { useGameScreen } from './hooks/useGameScreen'

export function GameScreen() {
  const { state, actions, hooks, refs } = useGameScreen()

  return (
    <div className="flex min-h-[600px] w-[700px] flex-col items-center gap-4">
      <Typography variant="subheading">{formatSecondsToMMSS(hooks.timer.seconds)}</Typography>

      <div
        ref={refs.containerRef}
        tabIndex={0}
        onKeyDown={actions.onKeyDown}
        className="cursor-text font-roboto-mono text-2xl leading-relaxed outline-none"
      >
        <div className="flex flex-wrap">
          {state.chars.map(charState => (
            <span
              key={charState.id}
              className={cn(
                charState.status === 'correct' && 'text-gray-800',
                charState.status === 'incorrect' && 'bg-red-200 text-red-600',
                charState.status === 'pending' && 'text-gray-400',
                charState.isCurrent && 'relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:animate-pulse before:bg-blue-500',
              )}
            >
              {charState.char === ' ' ? '\u00A0' : charState.char}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GameScreen
