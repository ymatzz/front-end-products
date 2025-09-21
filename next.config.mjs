/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.awsli.com.br',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'mais1nerd.com.br',
                port: '',
                pathname: '/**',
            },
                        {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
                port: '',
                pathname: '/**',
            },
            // Você pode adicionar outros domínios aqui se precisar no futuro
            // Exemplo: { protocol: 'https', hostname: 'outro-dominio.com' }
        ],
    },
}

export default nextConfig;
