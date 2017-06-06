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
    offset,
    offsets,
    order,
    pull,
    pulls,
    push,
    pushes,
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
    const offsetClassNames = offsets && Object.getOwnPropertyNames(offsets).reduce((acc, size) => (
      `${acc} col-${size}-${offsets[size]}`
    ), '');
    const pullClassNames = pulls && Object.getOwnPropertyNames(pulls).reduce((acc, size) => (
      `${acc} col-${size}-${pulls[size]}`
    ), '');
    const pushClassNames = pushes && Object.getOwnPropertyNames(pushes).reduce((acc, size) => (
      `${acc} col-${size}-${pushes[size]}`
    ), '');

    classNameProp = classnames({
      col: !width,
      [`col-${width}`]: width,
      [`align-self-${verticalAlignment}`]: verticalAlignment,
      [`flex-${order}`]: order,
      [`offset-${offset}`]: offset,
    }, widthClassNames, offsetClassNames, pullClassNames, pushClassNames);
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
  offset: PropTypes.oneOf(COLUMN_WIDTHS),
  offsets: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      sm: PropTypes.oneOf(COLUMN_WIDTHS),
      md: PropTypes.oneOf(COLUMN_WIDTHS),
      lg: PropTypes.oneOf(COLUMN_WIDTHS),
      xl: PropTypes.oneOf(COLUMN_WIDTHS),
    }),
  ]),
  order: PropTypes.oneOf(COLUMN_ORDER),
  pull: PropTypes.oneOf(COLUMN_WIDTHS),
  pulls: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      sm: PropTypes.oneOf(COLUMN_WIDTHS),
      md: PropTypes.oneOf(COLUMN_WIDTHS),
      lg: PropTypes.oneOf(COLUMN_WIDTHS),
      xl: PropTypes.oneOf(COLUMN_WIDTHS),
    }),
  ]),
  push: PropTypes.oneOf(COLUMN_WIDTHS),
  pushes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      sm: PropTypes.oneOf(COLUMN_WIDTHS),
      md: PropTypes.oneOf(COLUMN_WIDTHS),
      lg: PropTypes.oneOf(COLUMN_WIDTHS),
      xl: PropTypes.oneOf(COLUMN_WIDTHS),
    }),
  ]),
  width: PropTypes.oneOf(COLUMN_WIDTHS),
  widths: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      sm: PropTypes.oneOf(COLUMN_WIDTHS),
      md: PropTypes.oneOf(COLUMN_WIDTHS),
      lg: PropTypes.oneOf(COLUMN_WIDTHS),
      xl: PropTypes.oneOf(COLUMN_WIDTHS),
    }),
  ]),
  verticalAlignment: PropTypes.oneOf(VERTICAL_ALIGNMENT),
};

Column.defaultProps = {
  className: '',
  newLine: false,
  offsets: '',
  pulls: '',
  pushes: '',
  widths: '',
};
