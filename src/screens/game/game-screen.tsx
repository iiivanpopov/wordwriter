import { Typography, typographyVariants } from '@/components/ui/typography'
import { cn, formatSecondsToMMSS } from '@/lib/utils'
import { useGameScreen } from './hooks/useGameScreen'

export function GameScreen() {
  const { timer, state, actions } = useGameScreen()

  return (
    <div className="flex min-h-[600px] w-[600px] flex-col items-center">
      <Typography variant="subheading">{formatSecondsToMMSS(timer.seconds)}</Typography>

      <div className="relative flex w-full flex-1">
        <textarea className={cn(typographyVariants(), 'z-10 m-0! w-full flex-1 resize-none font-roboto-mono! outline-none')} onChange={actions.onInput} value={state.input} />
        <Typography className="absolute inset-0 -z-10 m-0! h-full font-roboto-mono! text-gray-400!">
          <span className="invisible">{state.text.slice(0, state.input.length)}</span>
          {state.text.slice(state.input.length, state.text.length)}
        </Typography>
      </div>
    </div>
  )
}

export default GameScreen
