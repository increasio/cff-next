'use client'

import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import { BreadcrumbList as BreadcrumbListSchema, WithContext } from 'schema-dts'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { SITE_URL } from '@/constants'

interface BreadcrumbsProps {
    activePage: string
    pages?: { href: string; name: string }[]
}

export function Breadcrumbs({ activePage, pages }: BreadcrumbsProps) {
    const pathname = usePathname()

    const jsonLd: WithContext<BreadcrumbListSchema> = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                item: `${SITE_URL}/`,
                name: 'Home',
                position: 1,
            },
            ...(pages
                ? pages.map((page, index) => {
                      return {
                          '@type': 'ListItem' as const,
                          item: `${SITE_URL}${page.href}`,
                          name: page.name,
                          position: index + 2,
                      }
                  })
                : []),
            {
                '@type': 'ListItem',
                item: `${SITE_URL}${pathname}`,
                name: activePage,
                position: pages ? pages.length + 2 : 2,
            },
        ],
    }

    return (
        <>
            <script
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replaceAll('<', '\\u003c') }}
                id="breadcrumb-jsonld"
                type="application/ld+json"
            />
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
        </>
    )
}
