import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { formatSecondsToMMSS } from '@/lib/utils'
import { useEndScreen } from './hooks/useEndScreen'

export function EndScreen() {
  const { state, actions } = useEndScreen()

  return (
    <div className="flex w-80 flex-col items-center gap-4">
      <Typography variant="subheading">{formatSecondsToMMSS(state.game.result!.timeSeconds)}</Typography>
      <div>
        <Typography className="flex gap-[1ch]">
          ACCURACY:
          <span className="font-bold text-green-600">
            {state.game.result!.accuracy}
            %
          </span>
        </Typography>
        <Typography className="flex gap-[1ch]">
          CHAR/M:
          <span className="font-bold">{state.game.result!.charsPerMinute}</span>
        </Typography>
        <Typography className="flex gap-[1ch]">
          TOTAL:
          <span className="font-bold">{state.game.result!.totalChars}</span>
        </Typography>
      </div>
      <Button onClick={actions.handleRestart}>Try Again</Button>
    </div>
  )
}

export default EndScreen
