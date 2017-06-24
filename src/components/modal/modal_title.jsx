import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../content/heading';

export default function ModalTitle(props) {
  const {
    children,
    className,
    size,
    ...other
  } = props;

  return (
    <Heading
      className={`modal-title ${className}`}
      size={size}
      {...other}
    >
      {children}
    </Heading>
  );
}

ModalTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

ModalTitle.defaultProps = {
  className: '',
  size: 5,
};
