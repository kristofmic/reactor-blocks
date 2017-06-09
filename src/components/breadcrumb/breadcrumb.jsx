import React from 'react';
import PropTypes from 'prop-types';

export default function Breadcrumb(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <ol className={`breadcrumb ${className}`} {...other}>
      {children}
    </ol>
  );
}

Breadcrumb.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Breadcrumb.defaultProps = {
  className: '',
};
