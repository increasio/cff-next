import { BlurCircle } from '@/components/shared/blur-circle'

interface GlossaryHeroWrapperProps {
    children?: React.ReactNode
}

export default function GlossaryHeroWrapper({ children }: GlossaryHeroWrapperProps) {
    return (
        <section
            className={`relative px-5 pt-[72px] pb-[104px] md:flex-col md:px-0 lg:py-20`}
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='560' fill='none' viewBox='0 0 1440 560'%3E%3Cpath fill='%23F1F9F5' d='M0 0h1440v526.196S1177 560 720 560 0 526.196 0 526.196V0Z'/%3E%3C/svg%3E")`,
                backgroundPosition: 'bottom center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <BlurCircle className="z-60" color="blue" left={-254} size={591} top={-60} />
            <BlurCircle className="z-60" color="green" left={-208} size={500} top={264} />
            <BlurCircle className="z-60" color="green" right={-198} size={500} top={0} />
            <BlurCircle className="z-60" color="blue" right={-367} size={591} top={233} />
            {children}
        </section>
    )
}
