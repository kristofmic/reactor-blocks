import React from 'react';
import PropTypes from 'prop-types';

import List from '../../content/list';

import animateInHOC from '../../utils/animate_in_hoc';
import classnames from '../../utils/classnames';

import {
  HORIZONTAL_POSITION,
} from '../../constants';

function DropdownMenu(props) {
  const {
    children,
    className,
    enter,
    horizontalPosition,
    show,
    up,
    ...other
  } = props;

  return (
    <List
      className={classnames('dropdown-menu fade', {
        collapse: !enter,
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
  enter: PropTypes.bool.isRequired,
  horizontalPosition: PropTypes.oneOf(HORIZONTAL_POSITION),
  show: PropTypes.bool.isRequired,
  up: PropTypes.bool,
};

DropdownMenu.defaultProps = {
  className: '',
  horizontalPosition: 'left',
  up: false,
};

const WrappedDropdownMenu = animateInHOC(DropdownMenu, {
  transitionDuration: 150,
});

WrappedDropdownMenu.displayName = 'DropdownMenu';

export default WrappedDropdownMenu;
