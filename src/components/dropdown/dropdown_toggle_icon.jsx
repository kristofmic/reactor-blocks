import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

export default function DropdownToggleIcon(props) {
  const {
    className,
    show,
    up,
    ...other
  } = props;

  return (
    <i
      className={classnames('dropdown-toggle-icon fa fa-chevron-down', {
        'fa-rotate-180': (show && !up) || (!show && up),
      }, className)}
      {...other}
    />
  );
}

DropdownToggleIcon.propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
  up: PropTypes.bool,
};

DropdownToggleIcon.defaultProps = {
  className: '',
  show: false,
  up: false,
};
