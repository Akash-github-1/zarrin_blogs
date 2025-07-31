
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font1: 'Raleway',
        font2: 'Roboto',
      },
      colors: {
        primary: '#7C4EE4',
        dark: '#333333',
        secondary: '#666666',
        tertiary: '#FFFFFF',
        secondaryGray: '#999999',
      },
      lineHeight: {
        custom-para: '24px',
        custom-heading: '32px',
        custom-heading-xl: '45px',
        custom-heading-xxl: '84px',
      },
      fontSize: {
        "custom-2xl":"86px",
        'custom-xl': "6xl",
        'custom-lg':"5xl",
        "custom-md":"3xl",
        "custom-sm":"2xl",
        "custom-xs":"base",

        
      }
    },
  },
  plugins: [],
}

