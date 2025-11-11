import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Cta } from '@/components/blocks/cta'
import Faq from '@/components/blocks/faq'
import { BlogContent } from '@/components/blog/blog-content'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { api } from '@/lib/api'
import { formatDate } from '@/lib/utils'

interface BlogPageProps {
    params: Promise<{ slug: string }>
}

export default async function BlogPage({ params }: BlogPageProps) {
    const { slug } = await params

    const { interestedPosts, newPosts, posts, relatedPosts } = await api.GetPostPage({ slug })
    const [post] = posts
    if (!post) {
        notFound()
    }
    return (
        <>
            <Breadcrumbs activePage={post.Title} pages={[{ href: '/blog', name: 'Blog' }]} />
            <section
                className={`
                  relative z-10 container mx-auto flex flex-col items-center justify-center pt-12 pb-6 text-center
                `}
            >
                <span className="mb-0.5 leading-[140%]">{formatDate(post.publishedAt)}</span>
                <h1 className="mb-5 text-[30px] leading-[100%] font-bold lg:text-[48px] lg:font-semibold">
                    {post.Title}
                </h1>
                <div className="flex items-center gap-4">
                    {post.author?.ImageFile?.url && (
                        <Image
                            alt={post.author.ImageFile.alternativeText ?? 'Author Image'}
                            className="size-10 overflow-hidden rounded-full"
                            height={40}
                            src={post.author.ImageFile.url}
                            width={40}
                        />
                    )}
                    <span className="leading-[140%]">{post.author?.Name}</span>
                </div>
            </section>
            <BlogContent data={post} />
            <Faq data={post.Faq ?? []} />
            <Cta backgroundColor="primary-50" />
        </>
    )
}
