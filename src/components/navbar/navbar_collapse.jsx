import React from 'react';
import PropTypes from 'prop-types';

import Collapse from '../collapse';

export default function NavbarCollapse(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <Collapse className={`navbar-collapse ${className}`} {...other}>
      {children}
    </Collapse>
  );
}

NavbarCollapse.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

NavbarCollapse.defaultProps = {
  className: '',
};
