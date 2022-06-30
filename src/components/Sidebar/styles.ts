import { styled } from '../../styles/themes/stitches.config';

export const Sidebar = styled('aside', {
  width: '100%',
  maxWidth: '38.4rem',
  padding: '$8',
  backgroundColor: '$gray700',
  borderLeft: '1px solid $gray600',
  '> span': {
    fontSize: '2.4rem',
    fontWeight: '$bold',
    lineHeight: '$base',
    display: 'block',
    borderBottom: '1px solid $gray600',
    marginBottom: '$6',
    paddingBottom: '$6',
  },
  '@lg': {
    display: 'none',
  },
});

export const Classes = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: '$8',
});
