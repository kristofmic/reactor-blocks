import React from 'react';
import PropTypes from 'prop-types';

export default function ModalBody(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <div
      className={`modal-body ${className}`}
      {...other}
    >
      {children}
    </div>
  );
}

ModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

ModalBody.defaultProps = {
  className: '',
};
