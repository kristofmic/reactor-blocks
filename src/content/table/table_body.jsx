import React from 'react';
import PropTypes from 'prop-types';

export default function TableBody(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <tbody className={className} {...other}>
      {children}
    </tbody>
  );
}

TableBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

TableBody.defaultProps = {
  className: '',
};
