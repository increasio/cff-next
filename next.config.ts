import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: '**',
            },
        ],
    },
    trailingSlash: true,
}

export default nextConfig
