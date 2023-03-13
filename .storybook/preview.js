// import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import ko from 'axe-core/locales/ko.json';
import 'tailwindcss/tailwind.css';
import '../src/index.css';
import { CUSTOM_VIEWPORT } from './customViewport.js';
import { RecoilRoot } from 'recoil';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: CUSTOM_VIEWPORT,
  },
  a11y: {
    config: {
      locale: ko,
      rules: [
        {
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
};
