import { api } from '@/lib/api'

import { HeaderClient } from './header.client'

export async function Header({ onlySeo }: { onlySeo?: boolean }) {
    const data = await api.GetHeaderData()
    return <HeaderClient data={data} onlySeo={onlySeo} />
}
