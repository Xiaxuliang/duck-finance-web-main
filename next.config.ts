import type { NextConfig } from 'next';

// if (process.env.NODE_ENV === 'development') {
// }

const config: NextConfig = {
  webpack: config => {
    config.externals.push('pino-pretty');
    return config;
  },
};

export default config;
