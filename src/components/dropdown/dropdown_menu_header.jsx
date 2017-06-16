import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../content/heading';

export default function DropdownMenuHeader(props) {
  const {
    children,
    className,
    size,
    ...other
  } = props;

  return (
    <Heading
      className={`dropdown-header ${className}`}
      size={size}
      {...other}
    >
      {children}
    </Heading>
  );
}

DropdownMenuHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf([1, '1', 2, '2', 3, '3', 4, '4', 5, '5', 6, '6']),
};

DropdownMenuHeader.defaultProps = {
  className: '',
  size: 6,
};
