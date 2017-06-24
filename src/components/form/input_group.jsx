import React from 'react';
import PropTypes from 'prop-types';

import {
  SIZES,
} from '../../constants';

export default function InputGroup(props) {
  const {
    children,
    className,
    size,
    ...other
  } = props;

  return (
    <div className={`input-group input-group-${size} ${className}`} {...other}>
      {children}
    </div>
  );
}

InputGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
};

InputGroup.defaultProps = {
  className: '',
  size: 'md',
};
