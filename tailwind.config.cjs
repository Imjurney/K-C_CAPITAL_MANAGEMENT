/** @type {import('tailwindcss').Config} */
const BRANDCOLOR = {
  red: '#E7020F',
  bg_lightgray: '#F8F8F8',
  footer_lightgray: '#D3D3D3',
  footer_gray: '#848484',
  article_gray: '#666666',
  article_gray66: '#868686',
  contact_gray: '#7D8893',
  contact_border: '#CBD2DC',
  contents_dark: '#1A1A1A',
};
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kc: {
          ...BRANDCOLOR,
          red: BRANDCOLOR.red,
          bg_lightgray: BRANDCOLOR.bg_lightgray,
          footer_lightgray: BRANDCOLOR.footer_lightgray,
          footer_gray: BRANDCOLOR.footer_gray,
          article_gray: BRANDCOLOR.article_gray,
          article_gray66: BRANDCOLOR.article_gray66,
          contact_gray: BRANDCOLOR.contact_gray,
          contact_border: BRANDCOLOR.contact_border,
          contents_dark: BRANDCOLOR.contents_dark,
        },
      },
    },
    screens: {
      mobile: '360px',
      laptop: '1024px',
      desktop: '1280px',
    },
    boxShadow: {
      article_shadow:
        '0px -4px 10px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.1)',
      contents_shadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    },
  },
  plugins: [],
};
