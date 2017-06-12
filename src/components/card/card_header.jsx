import React from 'react';
import PropTypes from 'prop-types';

export default function CardHeader(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <div className={`card-header ${className}`} {...other}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CardHeader.defaultProps = {
  className: '',
};
