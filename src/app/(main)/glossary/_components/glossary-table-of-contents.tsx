import Link from 'next/link'

interface GlossaryTableOfContentsProps {
    content: null | string | undefined
}

export default function GlossaryTableOfContents({ content }: GlossaryTableOfContentsProps) {
    return (
        <div
            className={`
              relative z-60 flex w-full flex-col gap-4 rounded-xl bg-primary-50 px-5 py-6
              shadow-[0px_4px_8px_-123px_#18274B0A,0px_4px_4px_-6px_#18274B1F]
              lg:hidden
            `}
        >
            <span className="text-xl font-medium lg:text-2xl">Table of Contents</span>
            <div className="flex flex-col gap-3 pl-6 lg:pl-12">
                {content?.match(/^##\s(.*?)(?=\n|$)/gm)?.map((header, index) => {
                    return (
                        <Link
                            className=""
                            href={`#${header
                                .replaceAll('## ', '')
                                .replaceAll(/[^a-z0-9- ]/gi, '')
                                .replaceAll(/ /gi, '-')
                                .toLowerCase()}`}
                            key={index}
                        >
                            {index}. <span className="underline">{header.replace('## ', '')}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
