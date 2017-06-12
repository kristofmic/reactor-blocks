import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

import {
  SIZES,
} from '../../constants';

export default function ButtonGroup(props) {
  const {
    children,
    className,
    size,
    vertical,
    ...other
  } = props;

  return (
    <div
      className={classnames(`btn-group btn-group-${size}`, {
        'btn-group-vertical': vertical,
      }, className)}
      role="group"
      {...other}
    >
      {children}
    </div>
  );
}

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  vertical: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  className: '',
  size: 'md',
  vertical: false,
};
