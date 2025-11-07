import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    `
      inline-flex shrink-0 items-center justify-center gap-2 rounded-sm font-medium whitespace-nowrap uppercase
      shadow-custom transition-all outline-none
      focus-visible:border-neutral-800 focus-visible:ring-[3px] focus-visible:ring-neutral-800/50
      disabled:pointer-events-none
      aria-invalid:border-red-500 aria-invalid:ring-red-500/20
      [&_svg]:pointer-events-none [&_svg]:shrink-0
      [&_svg:not([class*='size-'])]:size-4
    `,
    {
        defaultVariants: {
            size: 'default',
            variant: 'default',
        },
        variants: {
            size: {
                default: 'h-[51px] px-12 py-3 text-xl leading-[120%] font-semibold has-[>svg]:px-3',
                icon: 'size-10 p-2',
                sm: 'h-11 px-12 py-3 text-sm leading-[120%] font-bold has-[>svg]:px-3',
            },
            variant: {
                default: `
                  bg-primary-200 text-white
                  hover:bg-primary-300
                  active:bg-primary-200 active:shadow-none
                  disabled:bg-neutral-400 disabled:shadow-none
                `,
                outline: `
                  border-2 border-primary-100 bg-white text-primary-200
                  hover:border-primary-200 hover:bg-primary-50
                  active:border-primary-300 active:shadow-none
                  disabled:border-neutral-400 disabled:bg-white disabled:text-neutral-400 disabled:shadow-none
                `,
            },
        },
    },
)

function Button({
    asChild = false,
    className,
    size,
    variant,
    ...props
}: {
    asChild?: boolean
} & React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants>) {
    const Comp = asChild ? Slot : 'button'

    return <Comp className={cn(buttonVariants({ className, size, variant }))} data-slot="button" {...props} />
}

export { Button, buttonVariants }
