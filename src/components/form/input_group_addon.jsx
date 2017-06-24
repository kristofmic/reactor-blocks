import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

export default function InputGroupAddon(props) {
  const {
    button,
    children,
    className,
    ...other
  } = props;

  return (
    <span
      className={classnames({
        'input-group-addon': !button,
        'input-group-btn': button,
      }, className)}
      {...other}
    >
      {children}
    </span>
  );
}

InputGroupAddon.propTypes = {
  button: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

InputGroupAddon.defaultProps = {
  button: false,
  className: '',
};
