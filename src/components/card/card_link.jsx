import React from 'react';
import PropTypes from 'prop-types';

export default function CardLink(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <a className={`card-link ${className}`} {...other}>
      {children}
    </a>
  );
}

CardLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CardLink.defaultProps = {
  className: '',
};
