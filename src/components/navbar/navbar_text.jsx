import React from 'react';
import PropTypes from 'prop-types';

export default function NavbarText(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <span
      className={`navbar-text ${className}`}
      {...other}
    >
      {children}
    </span>
  );
}

NavbarText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

NavbarText.defaultProps = {
  className: '',
};
