import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
}

export default withPayload(nextConfig)
