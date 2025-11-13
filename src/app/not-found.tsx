import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
    return (
        <div className="z-10 flex h-full min-h-[80vh] flex-col items-center space-y-5 py-20 text-center md:py-40">
            <h1 className="mt-1 text-2xl font-semibold text-black md:text-[48px] md:leading-[58px]">
                Oops! That page can’t be found.
            </h1>
            <p className="text-lg text-neutral-600">It looks like nothing was found at this location.</p>
            <Button asChild>
                <Link href="/">Return home</Link>
            </Button>
        </div>
    )
}
