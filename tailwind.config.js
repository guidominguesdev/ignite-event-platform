/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur-background.png)',
      },
      fonts: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A',
        },
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '18px',
        full: '99999px',
      },
      boxShadow: {
        base: '0px 1px 2px rgba(35, 47, 59, 0.05), 0px 1px 3px rgba(35, 47, 59, 0.04);',
        md: '0px 2px 4px rgba(35, 47, 59, 0.04), 0px 4px 6px rgba(35, 47, 59, 0.03)',
        lg: '0px 10px 15px rgba(35, 47, 59, 0.03), 0px 4px 6px rgba(35, 47, 59, 0.04)',
      },
      screens: {
        xl: { max: '1280px' },
        lg: { max: '992px' },
        md: { max: '768px' },
        sm: { max: '576px' },
      },
      opacity: {
        default: '1',
        'semi-opaque': '0.90',
        intense: '0.75',
        medium: '0.50',
        light: '0.25',
        'semi-transparent': '0.10',
      },
    },
  },
  plugins: [],
};
