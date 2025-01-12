module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    "storybook-addon-mantine",
  ],
  framework: "@storybook/nextjs",
  staticDirs: ['../public'], 
};