import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

import { CONTEXT_TYPES } from '../../constants';

export default function TableRow(props) {
  const {
    children,
    className,
    inverse,
    type,
    ...other
  } = props;

  return (
    <tr
      className={classnames({
        [`table-${type}`]: type && !inverse,
        [`bg-${type}`]: type && inverse,
      })}
      {...other}
    >
      {children}
    </tr>
  );
}

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  inverse: PropTypes.bool,
  type: PropTypes.oneOf(CONTEXT_TYPES),
};

TableRow.defaultProps = {
  className: '',
  inverse: false,
};
