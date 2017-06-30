import React from 'react';
import PropTypes from 'prop-types';

// NOTE: the primary purpose of this is to provide an entity with a position: relative;
// so that the menu can be positioned correctly.
export default function TooltipWrapper(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <div
      className={`tooltip-wrapper ${className}`}
      {...other}
    >
      {children}
    </div>
  );
}

TooltipWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

TooltipWrapper.defaultProps = {
  className: '',
};
