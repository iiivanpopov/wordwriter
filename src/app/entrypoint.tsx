import type { JSX, LazyExoticComponent } from 'react'
import type { Screen } from '@/providers/screen-context'
import { lazy, Suspense } from 'react'
import { LoadingScreen } from '@/components/loading-screen'
import { useScreen } from '@/providers/screen-context'
import { Layout } from './layout'

const screens: Record<Screen, LazyExoticComponent<() => JSX.Element>> = {
  start: lazy(() => import('@/screens/start/start-screen')),
  game: lazy(() => import('@/screens/game/game-screen')),
  end: lazy(() => import('@/screens/end/end-screen')),
}

export function Entrypoint() {
  const { screen } = useScreen()

  const ActiveScreen = screens[screen]

  return (
    <Layout>
      <Suspense fallback={<LoadingScreen />}>
        <ActiveScreen />
      </Suspense>
    </Layout>
  )
}
