const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  assetPrefix: isProd ? '/portfolio-generator/' : '',
  basePath: isProd ? '/portfolio-generator' : '',
  output: 'export',
};

export default nextConfig;
