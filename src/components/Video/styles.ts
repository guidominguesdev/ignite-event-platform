import { styled } from '../../styles/themes/stitches.config';

export const VideoArea = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '$gray900',
  '.video': {
    width: '100%',
    maxWidth: '110rem',
    height: '100%',
    maxHeight: '60vh',
    aspectRatio: '16 / 9',
  },
});

export const InfoArea = styled('div', {
  padding: '$8',
  maxWidth: '110rem',
  margin: '0 auto',
  '@lg': {
    '> div': {
      flexDirection: 'column',
    },
  },
  '@sm': {
    padding: '$5',
  },
});

export const Class = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$16',
  h1: {
    fontSize: '$2xl',
  },
  p: {
    marginTop: '$4',
    color: '$gray200',
  },
  '.teacher': {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
    marginTop: '$6',
    img: {
      width: '6.4rem',
      height: '6.4rem',
      borderRadius: '$full',
      border: '2px solid $blue500',
    },
    strong: {
      display: 'block',
      fontWeight: '$bold',
      fontSize: '$2xl',
      marginBottom: '$1',
    },
    span: {
      display: 'block',
      color: '$gray200',
      fontSize: '$sm',
    },
  },
  '@sm': {
    gap: '$10',
    h1: {
      fontSize: '$lg',
    },
    p: {
      fontSize: '$sm',
    },
  },
});

export const Buttons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  a: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    padding: '$4',
    fontSize: '$sm',
    borderRadius: '$xs',
    fontWeight: '$bold',
    gap: '$2',
  },
  'a:first-child': {
    color: '$white',
    backgroundColor: '$green500',
    '&:hover': {
      backgroundColor: '$green700',
    },
  },
  'a:last-child': {
    border: '1px solid $blue500',
    color: '$blue500',
    '&:hover': {
      color: '$gray900',
      backgroundColor: '$blue500',
    },
  },
  '@lg': {
    width: '100%',
  },
});

export const Downloads = styled('div', {
  display: 'flex',
  gap: '$8',
  marginTop: '$20',
  '.item': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    overflow: 'hidden',
    gap: '$6',
    backgroundColor: '$gray700',
    borderRadius: '$xs',
    '&:hover': {
      backgroundColor: '$gray600',
    },
    '.content': {
      display: 'flex',
      alignItems: 'stretch',
      gap: '$6',
      height: '100%',
    },
    '.icon': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '$green700',
      padding: '$6',
      color: '$white',
      svg: {
        maxWidth: 'inherit',
      },
    },
    '.text': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '$6 0',
    },
    '.title': {
      color: '$gray100',
      fontSize: '$2xl',
    },
    '.description': {
      fontSize: '$sm',
      color: '$gray200',
      lineHeight: '$base',
      marginTop: '$2',
    },
    '.arrow': {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      color: '$blue500',
      padding: '$6',
      svg: {
        maxWidth: 'inherit',
      },
    },
  },
  '@lg': {
    flexDirection: 'column',
  },
  '@sm': {
    '.item': {
      gap: '$4',
      '.content': {
        gap: '$4',
      },
      '.title': {
        fontSize: '$lg',
      },
      '.arrow': {
        padding: '$4',
      },
    },
  },
});
