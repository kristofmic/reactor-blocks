import React from 'react';
import PropTypes from 'prop-types';

import List from '../../content/list';

import classnames from '../../utils/classnames';

import {
  HORIZONTAL_POSITION,
} from '../../constants';

export default function DropdownMenu(props) {
  const {
    children,
    className,
    horizontalPosition,
    show,
    up,
    ...other
  } = props;

  return (
    <List
      className={classnames('dropdown-menu', {
        dropup: up,
        'dropdown-menu-right': horizontalPosition === 'right',
        show,
      }, className)}
      unstyled
      {...other}
    >
      {children}
    </List>
  );
}

DropdownMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  horizontalPosition: PropTypes.oneOf(HORIZONTAL_POSITION),
  show: PropTypes.bool,
  up: PropTypes.bool,
};

DropdownMenu.defaultProps = {
  className: '',
  horizontalPosition: 'left',
  show: false,
  up: false,
};
