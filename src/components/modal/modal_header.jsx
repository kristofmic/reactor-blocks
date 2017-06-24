import React from 'react';
import PropTypes from 'prop-types';

import Dismiss from '../dismiss';

import ModalTitle from './modal_title';

export default function ModalHeader(props) {
  const {
    children,
    className,
    onDismiss,
    title,
    ...other
  } = props;

  return (
    <div className={`modal-header ${className}`} {...other}>
      {!!title && (
        <ModalTitle>
          {title}
        </ModalTitle>
      )}
      {children}
      {(typeof onDismiss === 'function') && (
        <Dismiss onClick={onDismiss} />
      )}
    </div>
  );
}

ModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onDismiss: PropTypes.func,
  title: PropTypes.string,
};

ModalHeader.defaultProps = {
  className: '',
};
