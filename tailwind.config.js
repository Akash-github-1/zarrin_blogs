
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font1: ['Raleway'],
        font2: ['Roboto'],
      },
      colors: {
        primary: '#7C4EE4',
        dark: '#333333',
        secondary: '#666666',
        tertiary: '#FFFFFF',
        secondaryGray: '#999999',
      },
    
        fontSize: {
        heading1: ['4rem', { lineHeight: '1.2' }],         // 64px
        heading2: ['3.25rem', { lineHeight: '1.2' }],      // 52px
        heading3: ['3rem', { lineHeight: '1.2' }],         // 48px
        heading4: ['2rem', { lineHeight: '1.3' }],         // 32px
        heading5: ['1.625rem', { lineHeight: '1.4' }],     // 26px
        heading6: ['1.5rem', { lineHeight: '1.4' }],       // 24px
      },
        'paragraph-big': ['1.125rem', { lineHeight: '1.5rem' }],
        'paragraph-small': ['1rem', { lineHeight: '1.5rem' }],
      },
    },
    plugins: [],
  }

