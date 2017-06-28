import React from 'react';
import PropTypes from 'prop-types';

import List from '../../content/list';

export default function NavbarNav(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <List className={`navbar-nav ${className}`} {...other}>
      {children}
    </List>
  );
}

NavbarNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

NavbarNav.defaultProps = {
  className: '',
};
