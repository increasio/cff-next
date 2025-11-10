import { Fragment } from 'react'

import { BlockWithImage } from '@/components/blocks/block-with-image'
import { Cta } from '@/components/blocks/cta'
import { Hero } from '@/components/blocks/hero'
import { Integrations } from '@/components/blocks/integrations'
import PricingSelector from '@/components/blocks/pricing-selector'
import PricingTable from '@/components/blocks/pricing-table'
import { Rating } from '@/components/blocks/rating'
import { Reviews } from '@/components/blocks/reviews'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/api'

export default async function AccountantsBookkeepersPage() {
    const { accountantsAndBookkeeper: data } = await api.GetAccountantsAndBookkeepers()

    return (
        <>
            <Hero
                buttonSlot={
                    <Button asChild variant="outline">
                        <a
                            href="https://accounts.cashflowfrog.com/signup?action=demo&section=hero&page=AccountantsAndBookkeepers"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Book a Demo
                        </a>
                    </Button>
                }
                description={data?.Description}
                imageAlt={data?.HeroImageFile?.alternativeText}
                imageUrl={data?.HeroImageFile?.url}
                title={data?.Title}
            />
            <Rating />
            {data?.AccountantsList?.map((ladderItem, index) => (
                <Fragment key={ladderItem?.Title ?? index}>
                    {index === 5 && (
                        <>
                            <div className="mb-[90px] flex items-center justify-center">
                                <Button asChild>
                                    <a
                                        href={`https://accounts.cashflowfrog.com/signup?action=signup&section=content&page=AccountantsAndBookkeepers`}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Start Free trial now
                                    </a>
                                </Button>
                            </div>
                            <Integrations backgroundColor="primary-50" />
                        </>
                    )}
                    <BlockWithImage data={ladderItem} key={ladderItem?.Title} />
                </Fragment>
            ))}
            <PricingSelector onlyPro />
            <PricingTable onlyPro />
            <Reviews backgroundColor="white" />
            <Cta
                backgroundColor="primary-50"
                buttonText="Start Free Trial Now"
                title="Trusted by thousands of business owners"
            />
        </>
    )
}
