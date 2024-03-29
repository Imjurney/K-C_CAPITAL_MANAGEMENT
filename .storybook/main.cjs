const path = require('path');
const tsconfigPaths = require('vite-tsconfig-paths').default;
const { mergeConfig, loadConfigFromFile } = require('vite');
// const { default: reactSvgPlugin } = require('vite-plugin-react-svg');
const { svgr } = require('vite-plugin-svgr');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-axios/register',
    'storybook-addon-react-router-v6',
    'storybook-addon-mock',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],

  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    });
  },
};

//   async viteFinal(config, { configType }) {
//     const { config: userConfig } = await loadConfigFromFile(
//       path.resolve(__dirname, '../vite.config.ts')
//     );
//
//     return mergeConfig(config, {
//       ...userConfig,
//       plugins: [],
//     });
//   },
