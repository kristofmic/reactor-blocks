import React from 'react';
import PropTypes from 'prop-types';

import List from '../../content/list';

import classnames from '../../utils/classnames';

import {
  HORIZONTAL_ALIGNMENT,
  SIZES,
} from '../../constants';

export default function Pagination(props) {
  const {
    children,
    className,
    horizontalAlignment,
    size,
    ...other
  } = props;

  return (
    <nav className={className} {...other}>
      <List
        className={classnames('pagination', {
          [`justify-content-${horizontalAlignment}`]: horizontalAlignment,
          [`pagination-${size}`]: size,
        })}
      >
        {children}
      </List>
    </nav>
  );
}

Pagination.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  horizontalAlignment: PropTypes.oneOf(HORIZONTAL_ALIGNMENT),
  size: PropTypes.oneOf(SIZES),
};

Pagination.defaultProps = {
  className: '',
  size: 'md',
};
