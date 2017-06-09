import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

import { BADGE_CONTEXT_TYPES } from '../../constants';

export default function Badge(props) {
  const {
    children,
    className,
    pill,
    type,
    ...other
  } = props;

  return (
    <span
      className={classnames(`badge badge-${type}`, {
        'badge-pill': pill,
      }, className)}
      {...other}
    >
      {children}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  pill: PropTypes.bool,
  type: PropTypes.oneOf(BADGE_CONTEXT_TYPES),
};

Badge.defaultProps = {
  className: '',
  pill: false,
  type: 'default',
};
