import { createStitches, defaultThemeMap } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
    opacity: 'opacity',
  },
  theme: {
    colors: {
      white: '#FFFFFF',
      green300: '#00B37E',
      green500: '#00875F',
      green700: '#015F43',
      blue500: '#81D8F7',
      orange500: '#FBA94C',
      red500: '#FBA94C',
      gray100: '#E1E1E6',
      gray200: '#C4C4CC',
      gray300: '#8D8D99',
      gray500: '#323238',
      gray600: '#29292E',
      gray700: '#121214',
      gray900: '#09090A',
    },
    space: {
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
    fonts: {
      sans: '"Roboto", sans-serif',
    },
    fontSizes: {
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
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeights: {
      shorter: '120%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },
    borderWidths: {
      thin: '1px',
      medium: '1.5px',
      thick: '2px',
      heavy: '4px',
    },
    radii: {
      xxs: '2px',
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '18px',
      full: '99999px',
    },
    opacity: {
      default: '100%',
      semiOpaque: '90%',
      intense: '75%',
      medium: '50%',
      light: '25%',
      semiTransparent: '10%',
    },
    zIndices: {
      overlay: 9995,
      modal: 9999,
    },
    shadows: {
      base: '0px 1px 2px rgba(35, 47, 59, 0.05), 0px 1px 3px rgba(35, 47, 59, 0.04);',
      md: '0px 2px 4px rgba(35, 47, 59, 0.04), 0px 4px 6px rgba(35, 47, 59, 0.03)',
      lg: '0px 10px 15px rgba(35, 47, 59, 0.03), 0px 4px 6px rgba(35, 47, 59, 0.04)',
    },
  },
  utils: {
    mx: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: (value: string) => ({
      width: value,
      height: value,
    }),
  },
  media: {
    xl: '(max-width: 1280px)',
    lg: '(max-width: 992px)',
    md: '(max-width: 768px)',
    sm: '(max-width: 576px)',
  },
});

export const globalStyles = globalCss({
  '*': {
    padding: '0',
    margin: '0',
    outline: '0',
    border: '0',
    boxSizing: 'border-box',
  },
  'html, body': {
    '@media (prefers-reduced-motion: no-preference)': {
      scrollBehavior: 'smooth',
    },
  },
  html: {
    fontSize: '62.5%',
  },
  body: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    backgroundColor: '$gray900',
    color: '$gray100',
    fontFamily: '$sans',
    fontSize: '$md',
    lineHeight: '$base',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontWeight: '$bold',
  },
  'img, svg, picture, video, canvas ': {
    maxWidth: '100%',
    height: 'auto',
  },
  'hr, iframe': {
    border: '0',
  },
  'ol, ul': {
    listStyle: 'none',
  },
  'a, button': {
    cursor: 'pointer',
    backgroundColor: 'transparent',
  },
  a: {
    textDecoration: 'none',
  },
  '.google-map *': {
    borderStyle: 'none',
  },
  '::-webkit-scrollbar': {
    width: '0.6rem',
    height: '0.6rem',
    marginRight: '10px',
  },
  '::-webkit-scrollbar-corner': {
    border: 'none',
    background: 'none',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray500',
    borderRadius: '3px',
    cursor: 'move',
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: '$gray900',
    border: 'none',
  },
});
