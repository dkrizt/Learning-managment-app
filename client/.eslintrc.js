module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn', // Change from "error" to "warn"
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused vars with "_"
    'no-console': 'warn', // Allow console logs with a warning instead of blocking
  },
};
