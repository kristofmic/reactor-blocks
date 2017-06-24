import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button';

export default function ModalFooter(props) {
  const {
    children,
    className,
    primaryLabel,
    primaryOnClick,
    secondaryLabel,
    secondaryOnClick,
    ...other
  } = props;

  return (
    <div
      className={`modal-footer ${className}`}
      {...other}
    >
      {!!(primaryLabel && primaryOnClick) && (
        <Button
          onClick={primaryOnClick}
          type="primary"
        >
          {primaryLabel}
        </Button>
      )}
      {!!(secondaryLabel && secondaryOnClick) && (
        <Button
          onClick={secondaryOnClick}
          type="secondary"
        >
          {secondaryLabel}
        </Button>
      )}
      {children}
    </div>
  );
}

ModalFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  primaryLabel: PropTypes.string,
  primaryOnClick: PropTypes.func,
  secondaryLabel: PropTypes.string,
  secondaryOnClick: PropTypes.func,
};

ModalFooter.defaultProps = {
  className: '',
};
