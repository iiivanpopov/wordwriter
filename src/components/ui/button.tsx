import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cva } from 'class-variance-authority'

const buttonVariants = cva('inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none', {
  variants: {
    variant: {
      primary: 'bg-orange-600/85 text-white hover:bg-orange-600 focus:ring-orange-500',
      secondary: 'bg-gray-300 text-gray-900 hover:bg-gray-300 focus:ring-gray-400',
      ghost: 'bg-transparent text-gray-900',
    },
    size: {
      small: 'px-3 py-1.5',
      medium: 'px-4 py-2',
      large: 'px-5 py-3',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonVariants>

export function Button({ variant, size, type, className, ...props }: ButtonProps) {
  return <button type={type} className={buttonVariants({ variant, size, className })} {...props} />
}
