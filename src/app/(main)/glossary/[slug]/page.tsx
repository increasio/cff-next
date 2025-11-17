import Markdown from 'markdown-to-jsx'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Article, CreativeWorkSeries, WithContext } from 'schema-dts'

import { Cta } from '@/components/blocks/cta'
import { Faq } from '@/components/blocks/faq'
import { BlogCta } from '@/components/blog/post-content/blog-cta'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { GenerateJsonLd } from '@/components/shared/generate-jsonld'
import { generateSeo } from '@/components/shared/generate-seo'
import { SITE_URL } from '@/constants'
import { api } from '@/lib/api'
import { stripIndent } from '@/lib/utils'

import GlossaryHeroWrapper from '../_components/glossary-hero-wrapper'
import { HelpCentreCta } from '../_components/help-centre-cta'

const getData = (slug: string) => api.GetGlossaryTemplate({ slug })

export const revalidate = 3600

interface GlossaryPageTemplateProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: GlossaryPageTemplateProps) {
    const { slug } = await params
    const { glossaries } = await getData(slug)
    const [data] = glossaries

    return generateSeo({ pathname: `/glossary/${slug}`, seo: data?.Seo })
}

export async function generateStaticParams() {
    const { glossaries } = await api.GetGlossaryTemplateSlugs()
    return glossaries.map((glossary) => {
        if (!glossary?.Slug) return null
        return {
            slug: glossary.Slug,
        }
    })
}

export default async function GlossaryPageTemplate({ params }: GlossaryPageTemplateProps) {
    const { slug } = await params
    const { glossaries } = await getData(slug)
    const [data] = glossaries

    if (!data) {
        notFound()
    }

    const articleJsonLdSchema: WithContext<Article> = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        dateModified: data.updatedAt ?? '',
        datePublished: data.publishedAt ?? '',
        description: data.ShortDescription ?? '',
        headline: data.Name,
        image: data.Image?.url,
        mainEntityOfPage: {
            '@id': `${SITE_URL}/glossary/${data.Slug}`,
            '@type': 'WebPage',
        },
    }

    const creativeWorkSeriesSchema: WithContext<CreativeWorkSeries> = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWorkSeries',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: 20,
        },
        name: data.Name,
    }

    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleJsonLdSchema).replaceAll('<', '\\u003c'),
                }}
                id="jsonld-article"
                type="application/ld+json"
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(creativeWorkSeriesSchema).replaceAll('<', '\\u003c'),
                }}
                id="jsonld-creative-work-series"
                type="application/ld+json"
            />
            <GenerateJsonLd faqData={data.Faq} seo={data.Seo} />
            <Breadcrumbs
                activePage={data.Name}
                className="bg-primary-50"
                pages={[{ href: '/glossary', name: 'Glossary' }]}
            />
            <GlossaryHeroWrapper>
                <div
                    className={`
                      relative z-70 mx-auto flex max-w-[550px] flex-col place-items-center justify-center gap-3
                      text-center
                    `}
                >
                    <h1 className="text-[30px] leading-[110%] font-semibold md:text-[48px]">{data.Name}</h1>
                    <p className="text-base">{data.ShortDescription}</p>
                </div>
            </GlossaryHeroWrapper>
            <section className={`relative z-60 container mx-auto flex flex-col items-start gap-12 py-12 lg:py-[60px]`}>
                <div className="flex flex-col">
                    <h2 className="mb-6 text-2xl font-bold lg:text-[32px]">{data.PageTitle}</h2>
                    {data.PageDescription && <div className="prose mb-12">{data.PageDescription}</div>}
                    {data.Image?.url && (
                        <Image
                            alt={data.Image.alternativeText ?? ''}
                            className="h-auto w-full"
                            height={400}
                            loading="lazy"
                            src={data.Image.url}
                            width={600}
                        />
                    )}
                </div>
                <div
                    className={`
                      relative z-60 flex w-full flex-col gap-4 rounded-xl bg-primary-50 px-5 py-6
                      shadow-[0px_4px_8px_-123px_#18274B0A,0px_4px_4px_-6px_#18274B1F]
                    `}
                >
                    <span className="text-xl font-medium lg:text-2xl">Table of Contents</span>
                    <div className="flex flex-col gap-3 pl-6 lg:pl-12">
                        {data.Content?.match(/^##\s(.*?)(?=\n|$)/gm)?.map((header, index) => {
                            return (
                                <Link
                                    className=""
                                    href={`#${header
                                        .replaceAll('## ', '')
                                        .replaceAll(/[^a-z0-9- ]/gi, '')
                                        .replaceAll(/ /gi, '-')
                                        .toLowerCase()}`}
                                    key={index}
                                >
                                    {index}. <span className="underline">{header.replace('## ', '')}</span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className="prose w-full overflow-hidden">
                    <Markdown
                        options={{
                            overrides: {
                                a: {
                                    props: {
                                        rel: 'noopener noreferrer',
                                        target: '_blank',
                                    },
                                },
                                CTA: {
                                    component: (props) => <BlogCta {...props} />,
                                },

                                h2: {
                                    component: (props: { children: React.ReactNode[]; id: string }) => {
                                        return <h2 id={props.id}>{props.children[0]}</h2>
                                    },
                                },
                            },
                        }}
                    >
                        {stripIndent(data.Content ?? '')}
                    </Markdown>
                </div>
                <div
                    className={`
                      flex w-full flex-col gap-4 rounded-xl bg-primary-50 px-5 py-6
                      shadow-[0px_4px_8px_-123px_#18274B0A,0px_4px_4px_-6px_#18274B1F]
                    `}
                >
                    <h3 className="text-xl font-medium lg:text-2xl">Related Terms</h3>
                    <div className="flex flex-col gap-3 pl-6 lg:pl-12">
                        {data.relatedGlossaries.map((item) => {
                            if (!item) return null
                            return (
                                <Link
                                    className={`
                                      text-base leading-[26px] text-primary-200 underline transition-colors
                                      hover:text-primary-200
                                    `}
                                    href={`/glossary/${item.Slug}`}
                                    key={item.Slug}
                                >
                                    {item.Name}
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className="px-3 py-2.5">
                    <Link className="flex items-center gap-2.5 px-3 py-2.5" href="/glossary/">
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m7.825 13 5.6 5.6L12 20l-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825Z" fill="#005841" />
                        </svg>
                        <span className="font-semibold text-[#005841]">Back to Glossary Page</span>
                    </Link>
                </div>
            </section>
            {data.Faq && <Faq data={data.Faq} />}
            <HelpCentreCta
                buttonText="Help Centre"
                buttonUrl={`https://help.cashflowfrog.com/en`}
                description="Visit our help center to find answers to your questions about CashFlowFrog."
                text="Looking for more help?"
            />
            <Cta />
        </>
    )
}
