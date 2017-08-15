import React from 'react';
import PropTypes from 'prop-types';

import navbarToggleHOC from './navbar_toggle_hoc';

import classnames from '../../utils/classnames';
import getChildDisplayName from '../../utils/get_child_display_name';

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
      hideNavbar,
      isNavbarVisible,
      position,
      showNavbar,
      theme,
      toggleNavbar,
      toggleSize,
      type,
      ...other
    } = this.props;

    const navChildren = React.Children.map(children, (child) => {
      const childName = getChildDisplayName(child);

      if (childName === 'NavbarCollapse') {
        return React.cloneElement(child, {
          show: isNavbarVisible,
        });
      }

      if (childName === 'NavbarToggler') {
        return React.cloneElement(child, {
          active: isNavbarVisible,
          onClick: toggleNavbar,
        });
      }

      return child;
    });

    return (
      <nav
        className={classnames(`navbar navbar-toggleable-${toggleSize} navbar-${theme}`, {
          [`bg-${type}`]: type,
          [position]: position,
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
  hideNavbar: PropTypes.func.isRequired,
  isNavbarVisible: PropTypes.bool.isRequired,
  position: PropTypes.oneOf(NAVBAR_POSITION),
  showNavbar: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(NAVBAR_THEMES),
  toggleNavbar: PropTypes.func.isRequired,
  toggleSize: PropTypes.oneOf(NAVBAR_TOGGLEABLE_SIZES),
  type: PropTypes.oneOf(NAVBAR_CONTEXT_TYPES),
};

Navbar.defaultProps = {
  className: '',
  theme: 'light',
  toggleSize: 'xl',
};

const WrappedNavbar = navbarToggleHOC(Navbar);

WrappedNavbar.displayName = 'Navbar';

export default WrappedNavbar;
