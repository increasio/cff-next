import { api } from '@/lib/api'

export default async function Home() {
    const data = await api.GetHomePage()
    return <div>{JSON.stringify(data)}</div>
}
