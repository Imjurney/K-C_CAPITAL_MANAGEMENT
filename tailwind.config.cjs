/** @type {import('tailwindcss').Config} */
const BRANDCOLOR = {
  red: '#E7020F',
  bg_lightgray: '#F8F8F8',
  footer_lightgray: '#D3D3D3',
  footer_gray: '#848484',
  article_gray: '#666666',
  article_gray66: '#868686',
  article_bg: '#494949',
  contact_gray: '#7D8893',
  contact_border: '#CBD2DC',
  contents_dark: '#1A1A1A',
  content_darkgray: '#7D8695',
  outline_gray: '#D9D9D9',
  design_gray: '#616161',
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
      mobile: { max: '980px' },
      desktop: { min: '981px' },
    },
    maxWidth: {
      dx: '1024px',
    },
    boxShadow: {
      article_shadow:
        '0px -4px 10px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.1)',
      contents_shadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      shadow_sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      shadow_lg:
        'box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
