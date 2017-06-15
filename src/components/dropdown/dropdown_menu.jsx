import React from 'react';
import PropTypes from 'prop-types';

import List from '../../content/list';

import classnames from '../../utils/classnames';

export default function DropdownMenu(props) {
  const {
    children,
    className,
    show,
    ...other
  } = props;

  return (
    <List
      className={classnames('dropdown-menu', {
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
  show: PropTypes.bool,
};

DropdownMenu.defaultProps = {
  className: '',
  show: false,
};
