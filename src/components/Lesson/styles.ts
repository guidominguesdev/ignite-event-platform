import { styled } from '../../styles/themes/stitches.config';

export const Date = styled('span', {
  color: '$gray300',
});

export const Class = styled('div', {
  position: 'relative',
  border: '1px solid $gray500',
  padding: '$4',
  marginTop: '$2',
  borderRadius: '$xs',
  '&.active': {
    backgroundColor: '$green500',
    borderColor: '$green500',
  },
  '&:hover': {
    borderColor: '$green500',
  },
});

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Status = styled('span', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '$sm',
  fontWeight: '$semibold',
  color: '$white',
  gap: '$2',
  '&.released': {
    color: '$blue500',
  },
  '&.soon': {
    color: '$orange500',
  },
});

export const Type = styled('span', {
  color: '$white',
  fontSize: '$xs',
  fontWeight: '$bold',
  padding: '0 $2',
  borderRadius: '$xs',
  border: '1px solid $green300',
  '&.active': {
    borderColor: '$white',
  },
});

export const Title = styled('strong', {
  display: 'block',
  marginTop: '$4',
  color: '$gray200',
  '&.active': {
    color: '$white',
  },
});

export const LessonArrow = styled('div', {
  borderRadius: '2px',
  position: 'absolute',
  transform: 'rotate(45deg)',
  top: 0,
  bottom: 0,
  left: '-0.6rem',
  margin: 'auto 0',
  width: '1.2rem',
  height: '1.2rem',
  backgroundColor: '$green500',
});
