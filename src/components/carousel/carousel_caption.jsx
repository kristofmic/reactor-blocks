import React from 'react';
import PropTypes from 'prop-types';

export default function CarouselCaption(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <div
      className={`carousel-caption d-none d-md-block ${className}`}
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
