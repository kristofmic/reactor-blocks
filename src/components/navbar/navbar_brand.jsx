import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../content/link';

import * as CLASSES from '../../utils/classes';

export default function NavbarBrand(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <Link
      className={`navbar-brand ${CLASSES.MARGIN.Y_0} ${className}`}
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
