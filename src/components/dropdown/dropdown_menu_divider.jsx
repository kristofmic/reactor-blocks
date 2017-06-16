import React from 'react';
import PropTypes from 'prop-types';

export default function DropdownMenuDivider(props) {
  const {
    className,
    ...other
  } = props;

  return (
    <div className={`dropdown-divider ${className}`} {...other} />
  );
}

DropdownMenuDivider.propTypes = {
  className: PropTypes.string,
};

DropdownMenuDivider.defaultProps = {
  className: '',
};
