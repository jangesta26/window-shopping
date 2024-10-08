/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'flowbite.s3.amazonaws.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'readymadeui.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.paypalobjects.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'logos-world.net',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '1000logos.net',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'png.pngtree.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.brooksrunning.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.pngarts.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn3.gstatic.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'img.lazcdn.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn1.gstatic.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn2.gstatic.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
