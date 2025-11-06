import { Benefits } from '@/components/blocks/benefits'
import { BlockWithImage } from '@/components/blocks/block-with-image'
import { Cta } from '@/components/blocks/cta'
import { Hero } from '@/components/blocks/hero'
import { HowItWorks } from '@/components/blocks/how-it-works'
import { Integrations } from '@/components/blocks/integrations'
import { NewsletterCta } from '@/components/blocks/newsletter-cta'
import { Rating } from '@/components/blocks/rating'
import { Reviews } from '@/components/blocks/reviews'
import { api } from '@/lib/api'

export default async function Home() {
    const data = await api.GetHomePage()
    return (
        <>
            <Hero />
            <Rating />
            <Integrations />
            <BlockWithImage data={data.home?.Ladder} />
            <HowItWorks />
            <BlockWithImage data={data.home?.Ladder2} />
            <BlockWithImage data={data.home?.Ladder3} />
            <Benefits
                data={data.benefits.map(
                    (benefit) =>
                        benefit && {
                            description: benefit.Description ?? '',
                            imageAlt: benefit.ImageFile?.alternativeText ?? '',
                            imageSrc: benefit.ImageFile?.url ?? '',
                            title: benefit.Name ?? '',
                        },
                )}
            />
            <NewsletterCta />
            <Reviews />
            <Cta
                buttonLink="https://accounts.cashflowfrog.com/signup?action=signup&section=cta&page=home"
                buttonText="Start free trial now"
                title="Trusted by thousands of business owners"
            />
        </>
    )
}
