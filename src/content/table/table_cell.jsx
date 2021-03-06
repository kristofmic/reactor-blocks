import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

import { TABLE_CONTEXT_TYPES } from '../../constants';

export default function TableCell(props) {
  const {
    children,
    className,
    heading,
    inverse,
    type,
    ...other
  } = props;

  const Tag = heading ? 'th' : 'td';

  return (
    <Tag
      className={classnames({
        [`table-${type}`]: type && !inverse,
        [`bg-${type}`]: type && inverse,
      }, className)}
      {...other}
    >
      {children}
    </Tag>
  );
}

TableCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.bool,
  inverse: PropTypes.bool,
  type: PropTypes.oneOf(TABLE_CONTEXT_TYPES),
};

TableCell.defaultProps = {
  className: '',
  heading: false,
  inverse: false,
};
