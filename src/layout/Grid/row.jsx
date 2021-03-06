import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

import {
  HORIZONTAL_JUSTIFICATION,
  VERTICAL_ALIGNMENT,
} from '../../constants';

export default function Row(props) {
  const {
    children,
    className,
    horizontalItemAlignment,
    noGutters,
    verticalItemAlignment,
    ...other
  } = props;
  const classNameProp = classnames('row', {
    [`align-items-${verticalItemAlignment}`]: verticalItemAlignment,
    [`justify-content-${horizontalItemAlignment}`]: horizontalItemAlignment,
    'no-gutters': noGutters,
  });

  return (
    <div
      className={`${classNameProp} ${className}`}
      {...other}
    >
      {children}
    </div>
  );
}

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  horizontalItemAlignment: PropTypes.oneOf(HORIZONTAL_JUSTIFICATION),
  noGutters: PropTypes.bool,
  verticalItemAlignment: PropTypes.oneOf(VERTICAL_ALIGNMENT),
};

Row.defaultProps = {
  className: '',
  noGutters: false,
};
