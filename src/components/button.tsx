import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cva } from 'class-variance-authority'

const buttonVariants = cva('inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2', {
  variants: {
    variant: {
      primary: 'bg-blue-600/85 text-white hover:bg-blue-600 focus:ring-blue-500',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonVariants>

export function Button({ variant, type, className, ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({ variant, className })}
      {...props}
    />
  )
}
