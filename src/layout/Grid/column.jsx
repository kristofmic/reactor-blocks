import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

import {
  COLUMN_ORDER,
  COLUMN_WIDTHS,
  VERTICAL_ALIGNMENT,
} from '../../constants';

export default function Column(props) {
  const {
    children,
    className,
    newLine,
    order,
    width,
    widths,
    verticalAlignment,
    ...other
  } = props;
  let classNameProp = '';

  if (newLine) {
    classNameProp = 'w-100';
  } else {
    const widthClassNames = widths && Object.getOwnPropertyNames(widths).reduce((acc, size) => (
      `${acc} col-${size}-${widths[size]}`
    ), '');

    classNameProp = classnames({
      col: !width,
      [`col-${width}`]: width,
      [`align-self-${verticalAlignment}`]: verticalAlignment,
      [`flex-${order}`]: order,
    }, widthClassNames);
  }

  return (
    <div
      className={`${classNameProp} ${className}`}
      {...other}
    >
      {children}
    </div>
  );
}

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  newLine: PropTypes.bool,
  order: PropTypes.oneOf(COLUMN_ORDER),
  width: PropTypes.oneOf(COLUMN_WIDTHS),
  widths: PropTypes.shape({
    sm: PropTypes.oneOf(COLUMN_WIDTHS),
    md: PropTypes.oneOf(COLUMN_WIDTHS),
    lg: PropTypes.oneOf(COLUMN_WIDTHS),
    xl: PropTypes.oneOf(COLUMN_WIDTHS),
  }),
  verticalAlignment: PropTypes.oneOf(VERTICAL_ALIGNMENT),
};

Column.defaultProps = {
  className: '',
  newLine: false,
};
