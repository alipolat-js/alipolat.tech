module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GRAPHCMS_URL: process.env.NEXT_PUBLIC_GRAPHCMS_URL,
  },
  images: {
    domains: ['media.graphassets.com'],
    formats: ["image/webp"],
  },
}
