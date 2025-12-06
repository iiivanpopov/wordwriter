import { Button } from '@/components/button'
import { Typography } from '@/components/typography'
import { formatSecondsToMMSS } from '@/lib/utils'
import { useEndScreen } from './hooks/useEndScreen'

export function EndScreen() {
  const { state, actions } = useEndScreen()

  return (
    <div className="flex w-80 flex-col items-center gap-4">
      <Typography variant="subheading">{formatSecondsToMMSS(state.game.result!.timeSeconds)}</Typography>
      <div>
        <Typography>
          <b>
            {state.game.result!.accuracy}
            %
          </b>
          {' '}
          accuracy
        </Typography>
        <Typography>
          <b>{state.game.result!.charsPerMinute}</b>
          {' '}
          char/m
        </Typography>
        <Typography>
          <b>{state.game.result!.totalChars}</b>
          {' '}
          total
        </Typography>
      </div>
      <Button onClick={actions.handleRestart}>Try Again</Button>
    </div>
  )
}

export default EndScreen
