/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.BASE_PATH || '',
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    images: {
        unoptimized: true,
        domains: ['tailwindui.com'],
    },
};

export default nextConfig;
