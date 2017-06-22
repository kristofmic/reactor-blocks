import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

export default function Label(props) {
  const {
    children,
    className,
    col,
    htmlFor,
    ...other
  } = props;

  return (
    <label
      className={classnames({
        'col-form-label': col,
      }, className)}
      htmlFor={htmlFor}
      {...other}
    >
      {children}
    </label>
  );
}

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  col: PropTypes.bool,
  htmlFor: PropTypes.string.isRequired,
};

Label.defaultProps = {
  className: '',
  col: false,
};
