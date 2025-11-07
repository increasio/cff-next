import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
    return (
        <textarea
            className={cn(
                `
                  flex field-sizing-content min-h-16 w-full rounded-md border border-neutral-200 bg-transparent px-3
                  py-2 text-base shadow-xs transition-[color,box-shadow] outline-none
                  placeholder:text-neutral-500
                  focus-visible:border-neutral-800 focus-visible:ring-[3px] focus-visible:ring-neutral-800/50
                  disabled:cursor-not-allowed disabled:opacity-50
                  aria-invalid:border-red-500 aria-invalid:ring-red-500/20
                  md:text-sm
                `,
                className,
            )}
            data-slot="textarea"
            {...props}
        />
    )
}

export { Textarea }
