import { styled } from '../../styles/themes/stitches.config';

export const Sidebar = styled('aside', {
  width: '100%',
  maxWidth: '34.8rem',
  backgroundColor: '$gray700',
  borderRight: '1px solid $gray600',
  '.teste': {
    overflowX: 'hidden',
    overflowY: 'auto',
    height: 'calc(100vh - 8.8rem)',
    position: 'sticky',
    top: '8.8rem',
  },
  '.teste > span': {
    padding: '$4',
    fontSize: '2.4rem',
    fontWeight: '$bold',
    lineHeight: '$base',
    display: 'block',
    borderBottom: '1px solid $gray600',
  },
  '@lg': {
    maxWidth: '100%',
    position: 'fixed',
    top: 88,
    left: 0,
    zIndex: '$modal',
    display: 'none',
  },
});

export const Classes = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
});
