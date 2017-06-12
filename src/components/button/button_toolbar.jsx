import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonToolbar(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <div className={`btn-toolbar ${className}`} role="toolbar" {...other}>
      {children}
    </div>
  );
}

ButtonToolbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

ButtonToolbar.defaultProps = {
  className: '',
};
