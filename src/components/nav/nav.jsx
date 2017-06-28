import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

import {
  NAV_SPACING,
  NAV_TYPES,
  ALIGNMENT,
} from '../../constants';

export default function Nav(props) {
  const {
    alignment,
    children,
    className,
    spacing,
    type,
    vertical,
    ...other
  } = props;

  return (
    <ul
      className={classnames('nav', {
        [`justify-content-${alignment}`]: alignment && !vertical,
        [`align-items-${alignment}`]: alignment && vertical,
        'flex-column': vertical,
        [`nav-${type}`]: type,
        [`nav-${spacing}`]: spacing,
      }, className)}
      {...other}
    >
      {children}
    </ul>
  );
}

Nav.propTypes = {
  alignment: PropTypes.oneOf(ALIGNMENT),
  children: PropTypes.node,
  className: PropTypes.string,
  spacing: PropTypes.oneOf(NAV_SPACING),
  type: PropTypes.oneOf(NAV_TYPES),
  vertical: PropTypes.bool,
};

Nav.defaultProps = {
  alignment: 'start',
  className: '',
  vertical: false,
};
