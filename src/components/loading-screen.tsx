import { Loader2Icon } from 'lucide-react'

export function LoadingScreen() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Loader2Icon className="animate-spin size-12 text-gray-400" />
    </div>
  )
}
