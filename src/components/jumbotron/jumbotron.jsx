import React from 'react';
import PropTypes from 'prop-types';

export default function Jumbotron(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <div className={`jumbotron ${className}`} {...other}>
      {children}
    </div>
  );
}

Jumbotron.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Jumbotron.defaultProps = {
  className: '',
};
