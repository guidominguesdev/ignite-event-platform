import { styled } from '../../styles/themes/stitches.config';

export const Header = styled('header', {
  width: '100%',
  height: '8.8rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'sticky',
  top: 0,
  left: 0,
  padding: '$8',
  backgroundColor: '$gray700',
  borderBottom: '1px solid $gray600',
  zIndex: '$modal',
  '@lg': {
    justifyContent: 'space-between',
  },
  '@sm': {
    padding: '$5',
  },
});
