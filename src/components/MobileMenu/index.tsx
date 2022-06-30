import { List, X } from 'phosphor-react';
import { useState } from 'react';
import { Menu } from './styles';

export function MobileMenu() {
  const [show, setShow] = useState(true);
  return (
    <Menu onClick={() => setShow(!show)}>
      <span>Aulas</span>
      {show ? <List size={32} /> : <X size={32} />}
    </Menu>
  );
}
