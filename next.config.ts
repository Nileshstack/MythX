import { NextConfig } from 'next';
import dotenv from 'dotenv';
import WebpackObfuscator from 'webpack-obfuscator';
import { Configuration } from 'webpack';

dotenv.config();

const nextConfig: NextConfig = {
  webpack(config: Configuration, { isServer }: { isServer: boolean }) {
    if (!isServer) {
      config.plugins = config.plugins || [];

      config.plugins.push(
        new WebpackObfuscator(
          {
            rotateStringArray: true,
            stringArrayThreshold: 0.75,
            deadCodeInjection: true,
            stringArray: true,
            numbersToExpressions: true,
          },
          [
            '**/node_modules/**',
            '**/.next/**',
            '**/react-dom/**',
            '**/react/**',
            '**/webpack-runtime*',
            '**/framework*',
            '**/main*',
            '**/polyfills*',
            '**/app-build-manifest*',
            '**/build-manifest*',
          ]
        )
      );
    }
    return config;
  },
  productionSourceMaps: false,
};

module.exports = nextConfig;
