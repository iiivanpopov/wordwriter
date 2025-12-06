import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cva } from 'class-variance-authority'

const typographyVariants = cva('text-gray-800', {
  variants: {
    variant: {
      heading: 'font-bold text-3xl md:text-4xl lg:text-5xl mb-4',
      subheading: 'font-semibold text-2xl md:text-3xl lg:text-4xl mb-3',
      body: 'text-base md:text-lg lg:text-xl mb-2 leading-relaxed',
      caption: 'text-sm md:text-base lg:text-lg text-gray-600',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
})

export type TypographyTag = 'h1' | 'h2' | 'div'
export type TypographyProps<T extends TypographyTag> = {
  tag?: T
} & ComponentProps<T> & VariantProps<typeof typographyVariants>

export function Typography<T extends TypographyTag>({ variant, className, tag, ...props }: TypographyProps<T>) {
  const Component = tag || 'div'

  return (
    <Component
      className={typographyVariants({ variant, className })}
      {...props}
    />
  )
}
