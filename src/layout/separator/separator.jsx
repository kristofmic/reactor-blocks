import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

export default function Separator(props) {
  const {
    className,
    spacing,
    ...other
  } = props;

  return (
    <hr
      className={classnames({
        [`my-${spacing}`]: spacing,
      }, className)}
      {...other}
    />
  );
}

Separator.propTypes = {
  className: PropTypes.string,
  spacing: PropTypes.oneOf([1, '1', 2, '2', 3, '3', 4, '4', 5, '5']),
};

Separator.defaultProps = {
  className: '',
};
