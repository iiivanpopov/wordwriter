import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { useStartScreen } from './hooks/useStartScreen'

export function StartScreen() {
  const { actions, state } = useStartScreen()

  return (
    <div className="flex-justify-center flex w-64 flex-col items-center gap-4">
      <Typography tag="h1" variant="heading">WordWriter</Typography>
      <div className="flex w-full justify-between">
        {['small', 'medium', 'large'].map(size => (
          <button
            key={size}
            type="button"
            onClick={() => actions.onTextSizeSelect(size)}
            className={cn(
              'cursor-pointer rounded border-2 border-transparent px-4 py-1.5',
              state.game.textSize === size && 'border-blue-500',
            )}
          >
            {size}
          </button>
        ))}
      </div>
      <Button onClick={actions.onStart}>Get Started</Button>
    </div>
  )
}

export default StartScreen
