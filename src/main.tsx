import { createRoot } from 'react-dom/client'
import { Entrypoint } from '@/app/entrypoint'
import { GameProvider } from '@/providers/game-context'
import { ScreenProvider } from '@/providers/screen-context'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <GameProvider>
    <ScreenProvider>
      <Entrypoint />
    </ScreenProvider>
  </GameProvider>,
)
