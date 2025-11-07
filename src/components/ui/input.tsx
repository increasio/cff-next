import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
    return (
        <input
            className={cn(
                `
                  h-9 w-full min-w-0 rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-xs
                  transition-[color,box-shadow] outline-none
                  selection:bg-neutral-800 selection:text-neutral-200
                  file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium
                  file:text-neutral-800
                  placeholder:text-neutral-500
                  disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50
                  md:text-sm
                `,
                `focus-visible:border-neutral-800 focus-visible:ring-[3px] focus-visible:ring-neutral-800/50`,
                `aria-invalid:border-red-500 aria-invalid:ring-red-500/20`,
                className,
            )}
            data-slot="input"
            type={type}
            {...props}
        />
    )
}

export { Input }
