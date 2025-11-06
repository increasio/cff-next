import { Footer } from './footer'
import { Header } from './header'

interface LayoutProps {
    children?: React.ReactNode
    onlySeo?: boolean
}

export function Layout({ children, onlySeo }: LayoutProps) {
    return (
        <>
            <Header onlySeo={onlySeo} />
            <main className="pt-[100px]">{children}</main>
            {!onlySeo && <Footer />}
        </>
    )
}
