import { Hero } from '@/components/blocks/hero'
import { api } from '@/lib/api'

export default async function PricingPage() {
    const data = await api.GetPricingPage()
    return (
        <>
            <Hero description={data.pricingPage?.Description ?? ''} title={data.pricingPage?.Title ?? ''} />
        </>
    )
}
