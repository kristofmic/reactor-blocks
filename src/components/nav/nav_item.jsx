import React from 'react';
import PropTypes from 'prop-types';

export default function NavItem(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <li className={`nav-item ${className}`} {...other}>
      {children}
    </li>
  );
}

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

NavItem.defaultProps = {
  className: '',
};
