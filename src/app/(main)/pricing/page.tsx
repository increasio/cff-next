import Image from 'next/image'
import Link from 'next/link'
import { cache } from 'react'

import { Cta } from '@/components/blocks/cta'
import { Faq } from '@/components/blocks/faq'
import { Hero } from '@/components/blocks/hero'
import PricingSelector from '@/components/blocks/pricing-selector'
import PricingTable from '@/components/blocks/pricing-table'
import { Rating } from '@/components/blocks/rating'
import { Reviews } from '@/components/blocks/reviews'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { GenerateJsonLd } from '@/components/shared/generate-jsonld'
import { generateSeo } from '@/components/shared/generate-seo'
import { Button } from '@/components/ui/button'
import { CLOUDINARY_URL } from '@/constants'
import { api } from '@/lib/api'

const getData = cache(() => api.GetPricingPage())

export const revalidate = 3600

export async function generateMetadata() {
    const { pricingPage: data } = await getData()
    return generateSeo({ pathname: '/pricing', seo: data?.Seo })
}

export default async function PricingPage() {
    const { pricingPage: data } = await getData()
    return (
        <>
            <GenerateJsonLd faqData={data?.PricingFaq} seo={data?.Seo} />
            <Breadcrumbs activePage="Pricing" />
            <Hero
                description={data?.Description}
                imageAlt={data?.HeroImageFile?.alternativeText}
                imageUrl={data?.HeroImageFile?.url}
                title={data?.Title}
            />
            <Rating />
            <PricingSelector />
            <PricingTable />
            <Reviews backgroundColor="white" />
            <section className="relative bg-primary-50 py-12 lg:py-20">
                <div
                    className={`
                      relative z-30 container mx-auto flex flex-col items-center justify-center gap-12
                      lg:flex-row
                    `}
                >
                    <div className="flex max-w-[418px] flex-col gap-4">
                        <svg
                            fill="none"
                            height="20"
                            viewBox="0 0 122 20"
                            width="122"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clipRule="evenodd"
                                d="M10.92 3.48l1.523 3.043c.15.299.437.506.771.554l3.407.49c.842.122 1.177 1.142.568 1.726l-2.464 2.367a1.003 1.003 0 00-.295.896l.582 3.342c.143.827-.737 1.458-1.49 1.067l-3.044-1.58a1.04 1.04 0 00-.956 0l-3.045 1.58c-.752.39-1.632-.24-1.488-1.067l.58-3.342a1.002 1.002 0 00-.294-.896L2.81 9.293c-.609-.584-.274-1.604.568-1.726l3.407-.49c.334-.048.623-.255.772-.554L9.08 3.481c.376-.752 1.464-.752 1.84 0zM35.92 3.48l1.523 3.043c.15.299.437.506.772.554l3.406.49c.842.122 1.177 1.142.568 1.726l-2.464 2.367a1.003 1.003 0 00-.295.896l.581 3.342c.144.827-.736 1.458-1.489 1.067l-3.044-1.58a1.04 1.04 0 00-.956 0l-3.044 1.58c-.753.39-1.633-.24-1.489-1.067l.58-3.342a1.003 1.003 0 00-.294-.896L27.81 9.293c-.609-.584-.274-1.604.568-1.726l3.406-.49c.335-.048.624-.255.773-.554l1.522-3.042c.376-.752 1.464-.752 1.84 0zM61.92 3.48l1.523 3.043c.15.299.437.506.772.554l3.406.49c.842.122 1.177 1.142.568 1.726l-2.464 2.367a1.003 1.003 0 00-.295.896l.581 3.342c.144.827-.736 1.458-1.489 1.067l-3.044-1.58a1.04 1.04 0 00-.956 0l-3.044 1.58c-.753.39-1.633-.24-1.489-1.067l.58-3.342a1.003 1.003 0 00-.294-.896L53.81 9.293c-.609-.584-.274-1.604.568-1.726l3.407-.49c.334-.048.623-.255.772-.554l1.522-3.042c.376-.752 1.464-.752 1.84 0zM87.92 3.48l1.523 3.043c.15.299.437.506.772.554l3.406.49c.842.122 1.177 1.142.568 1.726l-2.464 2.367a1.003 1.003 0 00-.295.896l.581 3.342c.144.827-.736 1.458-1.489 1.067l-3.044-1.58a1.04 1.04 0 00-.956 0l-3.044 1.58c-.753.39-1.633-.24-1.489-1.067l.58-3.342a1.003 1.003 0 00-.294-.896L79.81 9.293c-.609-.584-.274-1.604.568-1.726l3.406-.49c.335-.048.624-.255.773-.554l1.522-3.042c.376-.752 1.464-.752 1.84 0zM112.92 3.48l1.523 3.043c.149.299.437.506.771.554l3.407.49c.842.122 1.177 1.142.568 1.726l-2.464 2.367a1.003 1.003 0 00-.295.896l.581 3.342c.144.827-.736 1.458-1.489 1.067l-3.044-1.58a1.041 1.041 0 00-.956 0l-3.044 1.58c-.753.39-1.633-.24-1.489-1.067l.581-3.342a1.003 1.003 0 00-.295-.896l-2.464-2.367c-.609-.584-.274-1.604.568-1.726l3.407-.49c.334-.048.623-.255.772-.554l1.522-3.042c.376-.752 1.464-.752 1.84 0z"
                                fill="#FFA412"
                                fillRule="evenodd"
                            />
                        </svg>
                        <p className="text-[28px] font-semibold">Are you an accountant or a bookkeeper?</p>
                        <Button asChild>
                            <Link href="/accountants-bookkeepers">See our Partners Program</Link>
                        </Button>
                    </div>
                    <Image
                        alt="Review"
                        height={320}
                        src={`${CLOUDINARY_URL}/v1763379619/strapi/undraw_key_insights_ex8y_6062340d33.png`}
                        width={500}
                    />
                </div>
            </section>
            <Faq data={data?.PricingFaq ?? []} title="Pricing FAQ" />
            <Cta backgroundColor="primary-50" />
        </>
    )
}
