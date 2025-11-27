import { Button } from '@/components/ui/button'
import { ACCOUNTS_URL } from '@/constants'
import { cn } from '@/lib/utils'

interface CtaStaticProps {
    className?: string
    contained?: boolean
    title?: string
}

export default function CtaStatic({ className, contained, title }: CtaStaticProps) {
    return (
        <section className={cn({ 'container mx-auto': contained }, className)}>
            <div
                className={cn(
                    `flex flex-col items-center justify-center gap-8 bg-primary-100 py-20 lg:flex-row lg:gap-12`,
                    {
                        'rounded-xl': contained,
                    },
                )}
            >
                <p className="max-w-[210px] text-center text-xl font-semibold text-white lg:text-left">
                    {title ?? 'Track your cash flow metrics in real time'}
                </p>
                <Button asChild>
                    <a href={`${ACCOUNTS_URL}/signup?action=signup&section=cta`} rel="noreferrer" target="_blank">
                        Start Free <span className="hidden lg:inline">Trial Now</span>
                    </a>
                </Button>
            </div>
        </section>
    )
}
