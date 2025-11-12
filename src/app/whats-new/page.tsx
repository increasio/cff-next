import { Metadata } from 'next'

import BlogHero from '@/app/blog/_components/blog-hero'
import BlogListLoadMore from '@/app/blog/_components/blog-list-load-more'
import { Cta } from '@/components/blocks/cta'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { api } from '@/lib/api'

export const revalidate = 3600

export const metadata: Metadata = {
    title: 'What’s New',
}

export default async function WhatsNewPage() {
    const { posts } = await api.GetWhatsNewArticles()
    if (posts.length === 0) return null

    const [hero, ...rest] = posts
    return (
        <>
            <Breadcrumbs activePage="What’s New" />
            <BlogHero post={hero} title="What's New" />
            <BlogListLoadMore data={rest} />
            <Cta backgroundColor="primary-50" />
        </>
    )
}
