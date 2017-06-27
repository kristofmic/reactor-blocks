import React from 'react';
import PropTypes from 'prop-types';

export default function NavbarNav(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <ul className={`navbar-nav ${className}`} {...other}>
      {children}
    </ul>
  );
}

NavbarNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

NavbarNav.defaultProps = {
  className: '',
};
