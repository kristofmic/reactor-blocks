import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button';

export default function CarouselControl(props) {
  const {
    className,
    type,
    ...other
  } = props;
  const iconDirection = type === 'next' ? 'right' : 'left';

  return (
    <Button
      className={`carousel-control-${type} ${className}`}
      type="link"
      {...other}
    >
      <i className={`fa fa-chevron-${iconDirection}`} />
    </Button>
  );
}

CarouselControl.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['next', 'prev']).isRequired,
};

CarouselControl.defaultProps = {
  className: '',
};
