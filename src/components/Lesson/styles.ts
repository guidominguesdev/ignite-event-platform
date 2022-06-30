import { styled } from '../../styles/themes/stitches.config';

export const Date = styled('span', {
  color: '$gray300',
  fontWeight: '$medium',
  fontSize: '$sm',
  marginBottom: '$1',
});

export const Status = styled('span', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$white',
  gap: '$2',
  variants: {
    variant: {
      released: {
        color: '$blue500',
      },
      soon: {
        marginTop: '$1',
        color: '$orange500',
      },
    },
  },
});

export const Class = styled('div', {
  position: 'relative',
  display: 'block',
  borderBottom: '1px solid $gray500',
  padding: '$4',
  '&.active': {
    backgroundColor: '$green500',
    borderColor: '$green500',
    [`${Date}`]: {
      color: '$white',
    },
    [`${Status}`]: {
      color: '$white',
    },
  },
});

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
});

export const Type = styled('span', {
  color: '$gray200',
  fontSize: '$xs',
  fontWeight: '$bold',
  padding: '0 $2',
  borderRadius: '$xxs',
  border: '1px solid $gray500',
  '&.active': {
    color: '$green700',
    borderColor: '$white',
    backgroundColor: '$white',
  },
});

export const Title = styled('strong', {
  display: 'block',
  marginTop: '$3',
  color: '$gray200',
  '&.active': {
    color: '$white',
  },
});

// export const LessonArrow = styled('div', {
//   borderRadius: '2px',
//   position: 'absolute',
//   transform: 'rotate(45deg)',
//   top: 0,
//   bottom: 0,
//   right: '-0.6rem',
//   margin: 'auto 0',
//   width: '1.2rem',
//   height: '1.2rem',
//   backgroundColor: '$green500',
// });
