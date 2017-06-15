import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button';

import classnames from '../../utils/classnames';

export default function DropdownToggle(props) {
  const {
    children,
    className,
    split,
    ...other
  } = props;

  return (
    <Button
      className={classnames('dropdown-toggle', {
        'dropdown-toggle-split': split,
      }, className)}
      {...other}
    >
      {children}
    </Button>
  );
}

DropdownToggle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  split: PropTypes.bool,
};

DropdownToggle.defaultProps = {
  className: '',
  split: false,
};
