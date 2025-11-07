import { Breadcrumbs } from '@/components/shared/breadcrumbs'

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    return (
        <>
            <Breadcrumbs activePage="Feature" pages={[{ href: '/features', name: 'Features' }]} />
            {/* <Faq /> */}
            <div>FeaturePage: {slug}</div>
        </>
    )
}
