import React from 'react';
import PropTypes from 'prop-types';

export default function Accordion(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <div
      className={`accordion ${className}`}
      role="tablist"
      {...other}
    >
      {children}
    </div>
  );
}

Accordion.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Accordion.defaultProps = {
  className: '',
};
