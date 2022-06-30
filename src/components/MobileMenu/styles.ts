import { styled } from '../../styles/themes/stitches.config';

export const Menu = styled('button', {
  display: 'none',
  alignItems: 'center',
  color: '$gray100',
  fontSize: '$md',
  gap: '$3',
  svg: {
    color: '$blue500',
  },
  '@lg': {
    display: 'flex',
  },
});
