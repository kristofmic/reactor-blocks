import React from 'react';
import PropTypes from 'prop-types';

export default function Static(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <p className={`form-control-static ${className}`} {...other}>
      {children}
    </p>
  );
}

Static.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Static.defaultProps = {
  className: '',
};
