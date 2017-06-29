import React from 'react';
import PropTypes from 'prop-types';

export default function PopoverContent(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <div
      className={`popover-content ${className}`}
      {...other}
    >
      {children}
    </div>
  );
}

PopoverContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

PopoverContent.defaultProps = {
  className: '',
};
