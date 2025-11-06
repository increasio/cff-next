import Script from 'next/script'

import { api } from '@/lib/api'

import { HeaderClient } from './header.client'

export async function Header({ onlySeo }: { onlySeo?: boolean }) {
    const data = await api.GetHeaderData()
    return (
        <>
            {data.setting?.headScript && (
                <Script dangerouslySetInnerHTML={{ __html: data.setting.headScript }} id="header-head-script" />
            )}
            {data.setting?.bodyNoScript && <noscript dangerouslySetInnerHTML={{ __html: data.setting.bodyNoScript }} />}
            <HeaderClient data={data} onlySeo={onlySeo} />
        </>
    )
}
