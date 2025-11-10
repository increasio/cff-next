import { Fragment } from 'react/jsx-runtime'

import { BlockWithImage } from '@/components/blocks/block-with-image'
import { Cta } from '@/components/blocks/cta'
import Faq from '@/components/blocks/faq'
import { Hero } from '@/components/blocks/hero'
import { NewsletterCta } from '@/components/blocks/newsletter-cta'
import { Reviews } from '@/components/blocks/reviews'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { api } from '@/lib/api'

export default async function FeaturesPage() {
    const { features, featuresPage: data } = await api.GetFeaturesPage()
    return (
        <>
            <Breadcrumbs activePage="Features" />
            <Hero
                description={data?.Description}
                imageAlt={data?.HeroImageFile?.alternativeText}
                imageUrl={data?.HeroImageFile?.url}
                title={data?.Title}
            />
            {features.map((feature, index) => (
                <Fragment key={feature?.Name}>
                    {index === 4 && <NewsletterCta />}
                    <BlockWithImage
                        data={{
                            Description: feature?.Description,
                            ImageFile: feature?.ImageFile,
                            reverse: index % 2 === 1,
                            Title: feature?.Title,
                        }}
                    />
                </Fragment>
            ))}
            <Reviews />
            <Faq data={data?.Faq ?? []} />
            <Cta
                backgroundColor="primary-50"
                buttonLink="https://accounts.cashflowfrog.com/signup?action=signup&section=cta&page=features"
                buttonText="Start free trial now"
                title="Trusted by thousands of business owners"
            />
        </>
    )
}
