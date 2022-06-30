import { Logo } from '../Logo';
import { MobileMenu } from '../MobileMenu';
import { Header } from './styles';

export function MainHeader() {
  return (
    <Header>
      <Logo />
      <MobileMenu />
    </Header>
  );
}
