import { Button } from '@/components/button'
import { Typography } from '@/components/typography'
import { cn } from '@/lib/utils'
import { useStartScreen } from './hooks/useStartScreen'

export function StartScreen() {
  const { actions, state } = useStartScreen()

  return (
    <div className="flex-justify-center flex w-64 flex-col items-center gap-4">
      <Typography tag="h1" variant="heading">WordWriter</Typography>
      <div>
        <button
          type="button"
          onClick={() => actions.onTextSizeSelect('small')}
          className={cn(
            'cursor-pointer',
            state.game.textSize === 'small' && 'text-blue-500',
          )}
        >
          small
        </button>
        /
        <button
          type="button"
          onClick={() => actions.onTextSizeSelect('medium')}
          className={cn(
            'cursor-pointer',
            state.game.textSize === 'medium' && 'text-blue-500',
          )}
        >
          medium
        </button>
        /
        <button
          type="button"
          onClick={() => actions.onTextSizeSelect('large')}
          className={cn(
            'cursor-pointer',
            state.game.textSize === 'large' && 'text-blue-500',
          )}
        >
          large
        </button>
      </div>
      <Button onClick={actions.onStart}>Start writing</Button>
    </div>
  )
}

export default StartScreen
