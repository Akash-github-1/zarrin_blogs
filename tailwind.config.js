
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font1: 'Raleway,sans-serif',
        font2: 'Roboto , sans-serif',
      },
      colors: {
        primary: '#7C4EE4',
        dark: '#333333',
        secondary: '#666666',
        tertiary: '#FFFFFF',
        secondaryGray: '#999999',
      },
      lineHeight: {
        'custom-para': '24px',
        'custom-heading': '32px',
        'custom-heading-xl': '45px',
        'custom-heading-xxl': '84px',
      },
      fontSize: {
        "custom-2xl":"86px",  
      },
      spacing:{
        'custom-3xl':'1232px',
        'custom-2xl':'796px',
        'custom-xl':'750px',
        'custom-lg':'610px',
        'custom-md':'530px',
        'custom-sm':'450px',
      }
    },
  },
  plugins: [],
}

