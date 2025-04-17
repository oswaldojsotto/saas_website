import type { NextConfig } from 'next';
import { RuleSetRule } from 'webpack';

const nextConfig: NextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module?.rules?.find((rule: RuleSetRule) =>
      rule.test instanceof RegExp && rule.test.test('.svg')
    );

    if (!fileLoaderRule) {
      return config;
    }

    config.module?.rules?.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] },
        use: ['@svgr/webpack'],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;