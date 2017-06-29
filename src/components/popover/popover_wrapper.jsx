import React from 'react';
import PropTypes from 'prop-types';

// NOTE: the primary purpose of this is to provide an entity with a position: relative;
// so that the menu can be positioned correctly.
export default function PopoverWrapper(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <div
      className={`popover-wrapper ${className}`}
      {...other}
    >
      {children}
    </div>
  );
}

PopoverWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

PopoverWrapper.defaultProps = {
  className: '',
};
