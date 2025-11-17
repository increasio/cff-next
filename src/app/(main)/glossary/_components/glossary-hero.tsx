'use client'

import { ALPHABET } from '@/constants'
import { cn } from '@/lib/utils'

import GlossaryHeroWrapper from './glossary-hero-wrapper'

interface GlossaryHeroProps {
    data: Record<string, { Name: string; Slug: string }[]>
}
export function GlossaryHero({ data }: GlossaryHeroProps) {
    const alphabetWithStatus = ALPHABET.map((letter) => ({
        active: !!data[letter],
        letter,
    }))

    return (
        <GlossaryHeroWrapper>
            <div className={`relative z-70 mx-auto flex max-w-[550px] flex-col items-center justify-center gap-8`}>
                <div className="flex flex-col items-center justify-center gap-3 text-center">
                    <h1 className="text-[30px] leading-[110%] font-semibold md:text-[48px]">
                        Cash Flow <br /> Performance Glossary
                    </h1>
                    <p className="text-base">Understand key financial terms to stay in control of your cash flow.</p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2.5">
                    {alphabetWithStatus.map(({ active, letter }, index) => (
                        <button
                            className={cn(
                                'flex size-[30px] items-center justify-center rounded-[5px] p-[5px] text-center',
                                {
                                    'bg-primary-50 text-neutral-600': !active,
                                    'cursor-pointer bg-white text-black': active,
                                },
                            )}
                            disabled={!active}
                            key={index}
                            onClick={() => {
                                window.location.href = `#${letter.toLowerCase()}`
                            }}
                        >
                            {letter}
                        </button>
                    ))}
                </div>
            </div>
        </GlossaryHeroWrapper>
    )
}
