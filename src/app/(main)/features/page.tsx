import { cache, Fragment } from 'react'

import { BlockWithImage } from '@/components/blocks/block-with-image'
import { Cta } from '@/components/blocks/cta'
import CtaStatic from '@/components/blocks/cta-static'
import { Faq } from '@/components/blocks/faq'
import { Hero } from '@/components/blocks/hero'
import { NewsletterCta } from '@/components/blocks/newsletter-cta'
import { Reviews } from '@/components/blocks/reviews'
import SingleReview from '@/components/blocks/single-review'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { GenerateJsonLd } from '@/components/shared/generate-jsonld'
import { generateSeo } from '@/components/shared/generate-seo'
import { ACCOUNTS_URL } from '@/constants'
import { api } from '@/lib/api'

const getData = cache(() => api.GetFeaturesPage())

export const revalidate = 3600

export default async function FeaturesPage() {
    const { featuresPage: data } = await getData()
    return (
        <>
            <GenerateJsonLd faqData={data?.Faq} seo={data?.Seo} />
            <Breadcrumbs activePage="Features" />
            <Hero
                description={data?.Description}
                imageAlt={data?.HeroImageFile?.alternativeText}
                imageUrl={data?.HeroImageFile?.url}
                title={data?.Title}
            />
            {data?.Ladder?.map((item, index) => (
                <Fragment key={item?.Title ?? index}>
                    {index === 2 && (
                        <>
                            <CtaStatic
                                className="mb-10 lg:mb-16"
                                contained
                                title="Ready to take control of your cash flow?"
                            />
                            <SingleReview />
                        </>
                    )}
                    {index === 4 && <NewsletterCta />}
                    <BlockWithImage data={item} key={item?.Title} />
                </Fragment>
            ))}
            <Reviews />
            <Faq data={data?.Faq ?? []} />
            <Cta
                backgroundColor="primary"
                buttonLink={`${ACCOUNTS_URL}/signup?action=signup&section=cta&page=features`}
            />
        </>
    )
}

export async function generateMetadata() {
    const { featuresPage: data } = await getData()
    return generateSeo({ pathname: '/features', seo: data?.Seo })
}
