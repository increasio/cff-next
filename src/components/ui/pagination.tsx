import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

import { cn } from '@/lib/utils'

type PaginationLinkProps = {
    isActive?: boolean
} & React.ComponentProps<'button'> &
    React.ComponentProps<typeof Link>

function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
    return (
        <nav
            aria-label="pagination"
            className={cn('mx-auto flex w-full justify-center', className)}
            data-slot="pagination"
            role="navigation"
            {...props}
        />
    )
}

function PaginationContent({ className, ...props }: React.ComponentProps<'ul'>) {
    return (
        <ul className={cn('flex flex-row items-center gap-2', className)} data-slot="pagination-content" {...props} />
    )
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
    return (
        <span
            aria-hidden
            className={cn('flex size-10 items-center justify-center rounded-sm bg-white', className)}
            data-slot="pagination-ellipsis"
            {...props}
        >
            <MoreHorizontalIcon className="size-4" />
            <span className="sr-only">More pages</span>
        </span>
    )
}

function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
    return <li data-slot="pagination-item" {...props} />
}

function PaginationLink({ className, isActive, ...props }: PaginationLinkProps) {
    return (
        <Link
            aria-current={isActive ? 'page' : undefined}
            className={cn(
                'flex size-10 items-center justify-center rounded-sm bg-white transition-colors hover:bg-primary-50/50',
                {
                    'bg-primary-50': isActive,
                },
                className,
            )}
            data-active={isActive}
            data-slot="pagination-link"
            {...props}
        />
    )
}

function PaginationNext({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
    return (
        <PaginationLink
            aria-label="Go to next page"
            className={cn('w-full gap-1 px-2.5 sm:pr-2.5', className)}
            {...props}
        >
            <span className="hidden text-sm font-semibold sm:block">Next</span>
            <ChevronRightIcon className="size-3" />
        </PaginationLink>
    )
}

function PaginationPrevious({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
    return (
        <PaginationLink
            aria-label="Go to previous page"
            className={cn('w-full gap-1 px-2.5 sm:pl-2.5', className)}
            {...props}
        >
            <ChevronLeftIcon className="size-3" />
            <span className="hidden text-sm font-semibold sm:block">Previous</span>
        </PaginationLink>
    )
}

export {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
}
