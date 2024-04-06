// @ts-check

import withPWAInit from '@ducanh2912/next-pwa'

const withPWA = withPWAInit({
  dest: 'public'
})

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    experimental: {
      typedRoutes: true
    },
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    reactStrictMode: true
  }

export default withPWA(nextConfig)
