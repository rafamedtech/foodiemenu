/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["'Montserrat'", 'sans-serif'],
      },
      container: {
        center: true,
        screens: {
          lg: '1124px',
          xl: '1124px',
          '2xl': '1124px',
        },
      },
      colors: {
        dark: {
          strong: '#1a1a1a',
          medium: '#222222',
        },
      },
      boxShadow: {
        pinterest: 'rgb(0 0 0 / 10%) 0px 5px 20px 0px',
      },
    },
  },

  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#00673c',
          secondary: '#3b82f6',
          accent: '#22c55e',
          neutral: '#d1d5db',
          'base-100': '#f3f4f6',
          info: '#3baee8',
          success: '#1c978b',
          warning: '#d8a118',
          error: '#f45286',
        },
      },
    ],
    darkTheme: 'mytheme',
  },
};
