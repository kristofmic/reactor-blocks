import React from 'react';
import PropTypes from 'prop-types';

export default function CardText(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <p className={`card-text ${className}`} {...other}>
      {children}
    </p>
  );
}

CardText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CardText.defaultProps = {
  className: '',
};
