import React from 'react';
import PropTypes from 'prop-types';

import * as CLASSES from '../../utils/classes';

export default function CarouselCaption(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <div
      className={`carousel-caption ${CLASSES.DISPLAY.NONE} ${CLASSES.DISPLAY.MD_BLOCK} ${className}`}
      {...other}
    >
      {children}
    </div>
  );
}

CarouselCaption.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CarouselCaption.defaultProps = {
  className: '',
};
