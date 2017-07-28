import React from 'react';
import PropTypes from 'prop-types';

import List from '../../content/list';

import classnames from '../../utils/classnames';

import * as CLASSES from '../../utils/classes';

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
    <List
      className={classnames('nav', {
        [`justify-content-${alignment}`]: alignment && !vertical,
        [`align-items-${alignment}`]: alignment && vertical,
        [CLASSES.FLEXBOX.DIRECTION.COLUMN]: vertical,
        [`nav-${type}`]: type,
        [`nav-${spacing}`]: spacing,
      }, className)}
      {...other}
    >
      {children}
    </List>
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
