import React from 'react';
import PropTypes from 'prop-types';

import navbarToggleHOC from './navbar_toggle_hoc';

import classnames from '../../utils/classnames';

import {
  NAVBAR_CONTEXT_TYPES,
  NAVBAR_POSITION,
  NAVBAR_THEMES,
  NAVBAR_TOGGLEABLE_SIZES,
} from '../../constants';

class Navbar extends React.PureComponent {
  render() {
    const {
      children,
      className,
      hideMenu,
      isMenuVisible,
      position,
      showMenu,
      theme,
      toggleMenu,
      toggleSize,
      type,
      ...other
    } = this.props;

    const navChildren = React.Children.map(children, (child) => {
      if (child.type.name === 'NavbarCollapse') {
        return React.cloneElement(child, {
          show: isMenuVisible,
        });
      }

      if (child.type.name === 'NavbarToggler') {
        return React.cloneElement(child, {
          active: isMenuVisible,
          onClick: toggleMenu,
        });
      }

      return child;
    });

    return (
      <nav
        className={classnames(`navbar navbar-toggleable-${toggleSize} navbar-${theme}`, {
          [`bg-${type}`]: type,
          position,
        }, className)}
        {...other}
      >
        {navChildren}
      </nav>
    );
  }
}

Navbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hideMenu: PropTypes.func.isRequired,
  isMenuVisible: PropTypes.bool.isRequired,
  position: PropTypes.oneOf(NAVBAR_POSITION),
  showMenu: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(NAVBAR_THEMES),
  toggleMenu: PropTypes.func.isRequired,
  toggleSize: PropTypes.oneOf(NAVBAR_TOGGLEABLE_SIZES),
  type: PropTypes.oneOf(NAVBAR_CONTEXT_TYPES),
};

Navbar.defaultProps = {
  className: '',
  theme: 'light',
  toggleSize: 'xl',
};

export default navbarToggleHOC(Navbar);
export { Navbar };
