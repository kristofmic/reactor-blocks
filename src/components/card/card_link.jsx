import React from 'react';
import PropTypes from 'prop-types';

export default function CardLink(props) {
  const {
    children,
    className,
    ...other
  } = props;

  // TODO: (LINK) support react-router links
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
