import { BlockWithImage } from '@/components/blocks/block-with-image'
import { Cta } from '@/components/blocks/cta'
import Faq from '@/components/blocks/faq'
import { Hero } from '@/components/blocks/hero'
import IntegrationsCards from '@/components/blocks/integrations-cards'
import SingleReview from '@/components/blocks/single-review'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { api } from '@/lib/api'

export default async function IntegrationsPage() {
    const { integrations, integrationsPage: data } = await api.GetIntegrationPage()

    return (
        <>
            <Breadcrumbs activePage="Integrations" />
            <Hero
                description={data?.Description}
                imageAlt={data?.HeroImageFile?.alternativeText}
                imageUrl={data?.HeroImageFile?.url}
                title={data?.Title}
            />
            {data?.Ladder?.map((item) => (
                <BlockWithImage data={item} key={item?.Title} />
            ))}
            <SingleReview />
            <IntegrationsCards
                description={data?.IntegrationDescription}
                integrations={integrations}
                title={data?.IntegrationTitle}
            />
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
