import Image from 'next/image'
import Link from 'next/link'

interface IntegrationsCardsProps {
    description?: null | string
    integrations: ({
        Description?: null | string
        IconFile?: {
            alternativeText?: null | string
            url?: null | string
        } | null
        Name?: null | string
        Slug?: null | string
    } | null)[]
    title?: null | string
}

export default function IntegrationsCards({ description, integrations, title }: IntegrationsCardsProps) {
    return (
        <section className="container mx-auto py-10 md:py-20">
            <div className="mx-auto text-center md:w-1/2">
                {title && <h2 className="text-[28px] leading-[120%] font-semibold md:text-[32px]">{title}</h2>}
                {description && <p className="mt-4 text-neutral-600">{description}</p>}
            </div>
            <div className="mt-16 grid grid-cols-1 gap-x-5 gap-y-16 md:grid-cols-2">
                {integrations.map((item, idx) => {
                    if (!item) return null
                    return (
                        <div
                            className={`
                              relative space-y-2 rounded-[20px] bg-white px-8 py-10
                              shadow-[0px_0.5px_7.01px_0px_#54535F09,0px_4px_30px_0px_#82818812]
                            `}
                            key={idx}
                        >
                            {item.IconFile?.url && (
                                <Image
                                    alt={item.IconFile.alternativeText ?? ''}
                                    className="absolute top-0 h-[90px] w-auto -translate-y-1/2"
                                    height={100}
                                    loading="lazy"
                                    src={item.IconFile.url}
                                    width={100}
                                />
                            )}
                            <p className="text-[28px] font-semibold">{item.Name}</p>
                            <p className="text-neutral-600">{item.Description}</p>
                            <Link
                                className="group flex items-center space-x-1 text-primary-200"
                                href={`/integrations/${item.Slug}/`}
                            >
                                <p>Learn more</p>
                                <svg
                                    className="-mb-1 size-2 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.5 1.25L5.25 5 1.5 8.75"
                                        stroke="#00906B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
