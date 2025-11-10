import { Fragment } from 'react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface BreadcrumbsProps {
    activePage: string
    pages?: { href: string; name: string }[]
}

export function Breadcrumbs({ activePage, pages }: BreadcrumbsProps) {
    return (
        <section className="relative z-10 container mx-auto flex items-center py-3">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    {pages?.map((page) => (
                        <Fragment key={page.name}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={page.href}>{page.name}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </Fragment>
                    ))}
                    <BreadcrumbItem>
                        <BreadcrumbPage>{activePage}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </section>
    )
}
