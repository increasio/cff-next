import Faq from '@/components/blocks/faq'
import { Hero } from '@/components/blocks/hero'
import PricingSelector from '@/components/blocks/pricing-selector'
import { api } from '@/lib/api'

export default async function PricingPage() {
    const { pricingPage: data } = await api.GetPricingPage()
    return (
        <>
            <Hero
                description={data?.Description}
                imageAlt={data?.HeroImageFile?.alternativeText}
                imageUrl={data?.HeroImageFile?.url}
                title={data?.Title}
            />
            <PricingSelector />
            <Faq data={data?.PricingFaq ?? []} />
        </>
    )
}
