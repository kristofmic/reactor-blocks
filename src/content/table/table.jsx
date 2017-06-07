import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

export default function Table(props) {
  const {
    bordered,
    children,
    className,
    hover,
    inverse,
    responsive,
    small,
    striped,
    ...other
  } = props;

  return (
    <table
      className={classnames('table', {
        'table-bordered': bordered,
        'table-hover': hover,
        'table-inverse': inverse,
        'table-responsive': responsive,
        'table-sm': small,
        'table-striped': striped,
      }, className)}
      {...other}
    >
      {children}
    </table>
  );
}

Table.propTypes = {
  bordered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  hover: PropTypes.bool,
  inverse: PropTypes.bool,
  responsive: PropTypes.bool,
  small: PropTypes.bool,
  striped: PropTypes.bool,
};

Table.defaultProps = {
  bordered: false,
  className: '',
  hover: false,
  inverse: false,
  responsive: false,
  small: false,
  striped: false,
};
