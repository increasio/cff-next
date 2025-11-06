import Link from 'next/link'

import { Button } from '../ui/button'

interface CtaProps {
    buttonLink: string
    buttonText: string
    title: string
}

export function Cta({ buttonLink, buttonText, title }: CtaProps) {
    return (
        <section className="relative z-10 py-20">
            <div className="mx-auto flex max-w-[911px] items-center gap-12">
                <h4 className="text-[40px] leading-[100%] font-semibold text-balance">{title}</h4>
                <Button asChild>
                    <Link href={buttonLink}>{buttonText}</Link>
                </Button>
            </div>
        </section>
    )
}
