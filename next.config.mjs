import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here

  experimental: {
    serverActions: {
      bodySizeLimit: '4mb',
    },
  },
  serverActions: {
    bodySizeLimit: '4mb',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
}

export default withPayload(nextConfig)
