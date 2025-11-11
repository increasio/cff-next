import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'

interface PaginationComponentProps {
    page: number
    totalPages: number
}

export function PaginationComponent({ page, totalPages }: PaginationComponentProps) {
    const hasPrev = page > 1
    const hasNext = page < totalPages

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    {hasPrev ? (
                        <PaginationPrevious href={`/blog?page=${page - 1}`} />
                    ) : (
                        <span className="pointer-events-none opacity-20">
                            <PaginationPrevious href="#" />
                        </span>
                    )}
                </PaginationItem>
                {Array.from({ length: totalPages }).map((_, i) => {
                    const pageNum = i + 1
                    const isCurrent = pageNum === page

                    const shouldShow =
                        pageNum === 1 || pageNum === totalPages || (pageNum >= page - 2 && pageNum <= page + 2)

                    const showLeftEllipsis = pageNum === 2 && page > 4
                    const showRightEllipsis = pageNum === totalPages - 1 && page < totalPages - 3

                    if (showLeftEllipsis) {
                        return (
                            <PaginationItem key="left-ellipsis">
                                <PaginationEllipsis />
                            </PaginationItem>
                        )
                    }

                    if (showRightEllipsis) {
                        return (
                            <PaginationItem key="right-ellipsis">
                                <PaginationEllipsis />
                            </PaginationItem>
                        )
                    }

                    if (!shouldShow) return null

                    return (
                        <PaginationItem key={pageNum}>
                            <PaginationLink href={`/blog?page=${pageNum}`} isActive={isCurrent}>
                                {pageNum}
                            </PaginationLink>
                        </PaginationItem>
                    )
                })}
                <PaginationItem>
                    {hasNext ? (
                        <PaginationNext href={`/blog?page=${page + 1}`} />
                    ) : (
                        <span className="pointer-events-none opacity-20">
                            <PaginationNext href="#" />
                        </span>
                    )}
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
