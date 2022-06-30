/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur-background.png)',
      },
      spacing: {
        px: '1px',
        1: '0.4rem',
        2: '0.8rem',
        3: '1.2rem',
        4: '1.6rem',
        5: '2rem',
        6: '2.4rem',
        7: '2.8rem',
        8: '3.2rem',
        10: '4rem',
        12: '4.8rem',
        14: '5.6rem',
        16: '6.4rem',
        20: '8rem',
        24: '9.6rem',
        28: '11.2rem',
        36: '14.4rem',
        40: '16rem',
        50: '20rem',
        64: '25.6rem',
        80: '32rem',
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      fontSize: {
        xxs: '1rem',
        xs: '1.2rem',
        sm: '1.4rem',
        md: '1.6rem',
        lg: '1.8rem',
        xl: '2rem',
        '2xl': '2.4rem',
        '4xl': '3.2rem',
        '5xl': '3.6rem',
        '6xl': '4.8rem',
        '7xl': '5.6rem',
        '8xl': '6.4rem',
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
      lineHeight: {
        shorter: '120%',
        short: '140%',
        base: '160%',
        tall: '180%',
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
        xxs: '2px',
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
  corePlugins: {
    preflight: false,
  },
};
