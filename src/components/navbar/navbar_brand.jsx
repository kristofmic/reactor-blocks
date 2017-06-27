import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../content/link';

export default function NavbarBrand(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <Link
      className={`navbar-brand my-0 ${className}`}
      {...other}
    >
      {children}
    </Link>
  );
}

NavbarBrand.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

NavbarBrand.defaultProps = {
  className: '',
};
