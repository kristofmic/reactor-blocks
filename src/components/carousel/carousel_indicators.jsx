import React from 'react';
import PropTypes from 'prop-types';

import CarouselIndicator from './carousel_indicator';
import List from '../../content/list';

import times from '../../utils/times';

export default function CarouselIndicators(props) {
  const {
    activeIndex,
    className,
    count,
    onIndicatorClick,
    ...other
  } = props;

  return (
    <List
      className={`carousel-indicators ${className}`}
      ordered
      {...other}
    >
      {times(count, i => (
        <CarouselIndicator
          active={activeIndex === i}
          key={i}
          index={i}
          onClick={onIndicatorClick}
        />
      ))}
    </List>
  );
}

CarouselIndicators.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  className: PropTypes.string,
  count: PropTypes.number.isRequired,
  onIndicatorClick: PropTypes.func.isRequired,
};

CarouselIndicators.defaultProps = {
  className: '',
};
