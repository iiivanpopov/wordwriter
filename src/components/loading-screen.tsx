import { Loader2Icon } from 'lucide-react'

export function LoadingScreen() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader2Icon className="size-12 animate-spin text-gray-400" />
    </div>
  )
}
