import Banner from '../shared/banner'
import { Footer } from './footer'
import { Header } from './header'

interface LayoutProps {
    children?: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <Banner />
            <main className="pt-16 lg:pt-[100px]">{children}</main>
            <Footer />
        </>
    )
}
