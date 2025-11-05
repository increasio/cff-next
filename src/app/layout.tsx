import type { Metadata } from 'next'

import { Urbanist } from 'next/font/google'

import { Layout } from '@/components/layout'

import './globals.css'

const urbanist = Urbanist({
    subsets: ['latin'],
    variable: '--font-geist-sans',
})

export const metadata: Metadata = {
    description: 'Cash Flow Frog',
    openGraph: {
        url: 'https://cashflowfrog.com',
    },
    title: {
        absolute: 'Cash Flow Frog',
        template: '%s · Cash Flow Frog',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${urbanist.variable} antialiased`}>
                <Layout>{children}</Layout>
            </body>
        </html>
    )
}
