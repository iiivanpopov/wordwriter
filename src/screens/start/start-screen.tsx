import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { useStartScreen } from './hooks/useStartScreen'

const TEXT_SIZES = ['small', 'medium', 'large'] as const

export function StartScreen() {
  const { actions, state } = useStartScreen()

  return (
    <div className="flex-justify-center flex w-64 flex-col items-center gap-6">
      <Typography tag="h1" variant="heading">
        WordWriter
      </Typography>
      <div className="flex w-full justify-between">
        {TEXT_SIZES.map(size => (
          <div key={size} onClick={() => actions.onTextSizeSelect(size)} tabIndex={1} className={cn('cursor-pointer rounded border-2 border-transparent px-4 py-2', state.game.textSize === size && 'border-blue-500')}>
            {size}
          </div>
        ))}
      </div>
      <Button onClick={actions.onStart}>Get Started</Button>
    </div>
  )
}

export default StartScreen
