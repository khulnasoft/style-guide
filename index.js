/**
 * KhulnaSoft Style Guide
 *
 * This is the main entry point for the @khulnasoft/style-guide package.
 *
 * For specific configurations, use the following exports:
 * - ESLint: require('@khulnasoft/style-guide/eslint')
 * - Prettier: require('@khulnasoft/style-guide/prettier')
 * - TypeScript: require('@khulnasoft/style-guide/typescript')
 */

module.exports = {
  // Re-export individual configurations for convenience
  eslint: require('./eslint'),
  prettier: require('./prettier'),
  typescript: require('./typescript'),
};
