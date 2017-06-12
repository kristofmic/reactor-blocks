import React from 'react';
import PropTypes from 'prop-types';

export default function CardFooter(props) {
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

CardFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CardFooter.defaultProps = {
  className: '',
};
