'use client'

import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { ACCOUNTS_URL } from '@/constants'
import { cn } from '@/lib/utils'

interface CtaProps {
    backgroundColor?: 'primary' | 'white'
    buttonLink?: string
    buttonText?: string
    title?: string
}

export function Cta({
    backgroundColor = 'white',
    buttonLink,
    buttonText = 'Start Free Trial Now',
    title = 'Trusted by thousands of business owners',
}: CtaProps) {
    const pathname = usePathname()

    const page = pathname === '/' ? 'home' : pathname.replace('/', '')
    return (
        <section
            className={cn('py-14 lg:py-20', {
                'bg-primary-100 text-white': backgroundColor === 'primary',
                'bg-white': backgroundColor === 'white',
            })}
        >
            <div
                className={`
                  relative z-20 mx-auto flex max-w-[911px] flex-col items-center justify-between gap-6 px-4
                  lg:flex-row lg:gap-12
                `}
            >
                <p
                    className={`
                      text-center text-2.5xl font-semibold text-balance
                      lg:text-left lg:text-3.5xl lg:leading-[100%]
                    `}
                >
                    {title}
                </p>
                <Button asChild>
                    <a
                        href={buttonLink ?? `${ACCOUNTS_URL}/signup?action=signup&section=cta&page=${page}`}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {buttonText}
                    </a>
                </Button>
            </div>
        </section>
    )
}
