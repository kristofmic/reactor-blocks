import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

export default function FormGroup(props) {
  const {
    children,
    className,
    row,
    ...other
  } = props;

  return (
    <div
      className={classnames('form-group', {
        row,
      }, className)}
      {...other}
    >
      {children}
    </div>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  row: PropTypes.bool,
};

FormGroup.defaultProps = {
  className: '',
  row: false,
};
