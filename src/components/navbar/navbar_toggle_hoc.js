import { dropdownHOC } from '../dropdown';

export default function navbarToggleHOC(Component) {
  const NavbarToggleHOC = dropdownHOC(Component);

  NavbarToggleHOC.displayName = 'NavbarToggleHOC';

  return NavbarToggleHOC;
}
