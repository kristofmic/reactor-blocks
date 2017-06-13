/* global window */
import React from 'react';
import PropTypes from 'prop-types';

import CarouselControl from './carousel_control';
import CarouselIndicators from './carousel_indicators';
import CarouselItem from './carousel_item';

export default class Carousel extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      next: null,
      prev: null,
      transition: null,
    };
    this.isTransitioning = false;
  }

  componentDidMount() {
    this.recycleInterval();
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.cycle !== this.props.cycle) || (nextProps.interval !== this.props.interval)) {
      this.recycleInterval(nextProps.cycle, nextProps.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.cycleInterval);
  }

  setActiveItem = (nextIndex) => {
    const {
      images,
    } = this.props;
    const {
      activeIndex,
    } = this.state;
    let transition = 'left';
    let sibling = 'next';

    if (nextIndex === activeIndex || this.isTransitioning) {
      return;
    }

    this.isTransitioning = true;

    if (nextIndex < activeIndex) {
      transition = 'right';
      sibling = 'prev';
    }

    if (nextIndex >= images.length) {
      nextIndex = 0; // eslint-disable-line no-param-reassign
    } else if (nextIndex < 0) {
      nextIndex = images.length - 1; // eslint-disable-line no-param-reassign
    }

    this.setState({
      [sibling]: nextIndex,
    }, () => {
      window.requestAnimationFrame(() => {
        this.setState({
          transition,
        });
      });
    });
  }

  nextItem = () => {
    const {
      activeIndex,
    } = this.state;

    this.setActiveItem(activeIndex + 1);
  }

  prevItem = () => {
    const {
      activeIndex,
    } = this.state;

    this.setActiveItem(activeIndex - 1);
  }

  handleTransitionEnd = () => {
    const {
      activeIndex,
      next,
      prev,
    } = this.state;
    let nextActiveIndex = activeIndex;

    if (!this.isTransitioning) {
      return;
    }

    if (next != null || prev != null) {
      nextActiveIndex = next || prev || 0;
    }

    this.setState({
      activeIndex: nextActiveIndex,
      next: null,
      prev: null,
      transition: null,
    }, () => {
      this.recycleInterval();
      this.isTransitioning = false;
    });
  }

  recycleInterval = (cycle = this.props.cycle, interval = this.props.interval) => {
    if (this.cycleInterval) {
      clearInterval(this.cycleInterval);
    }

    if (cycle) {
      this.cycleInterval = setInterval(this.nextItem, interval);
    }
  }

  render() {
    const {
      children,
      className,
      controls,
      cycle,
      images,
      indicators,
      interval,
      ...other
    } = this.props;
    const {
      activeIndex,
      next,
      prev,
      transition,
    } = this.state;
    let activeIndicatorIndex = activeIndex;

    if (next != null || prev != null) {
      activeIndicatorIndex = next || prev || 0;
    }

    return (
      <div className={`carousel slide d-inline-block ${className}`} {...other}>
        {indicators && (
          <CarouselIndicators
            activeIndex={activeIndicatorIndex}
            count={images.length}
            onIndicatorClick={this.setActiveItem}
          />
        )}
        <div className="carousel-inner" role="listbox">
          {images.map((image, i) => (
            <CarouselItem
              active={i === activeIndex}
              key={image.imageSource}
              next={i === next}
              onTransitionEnd={this.handleTransitionEnd}
              prev={i === prev}
              transition={transition}
              {...image}
            />
          ))}
        </div>
        {controls && (
          <CarouselControl onClick={this.prevItem} type="prev" />
        )}
        {controls && (
          <CarouselControl onClick={this.nextItem} type="next" />
        )}
      </div>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  controls: PropTypes.bool,
  cycle: PropTypes.bool,
  images: PropTypes.arrayOf(PropTypes.shape({
    imageAlt: PropTypes.string,
    imageSource: PropTypes.string.isRequired,
  })),
  indicators: PropTypes.bool,
  interval: PropTypes.number,
};

Carousel.defaultProps = {
  className: '',
  controls: false,
  cycle: false,
  images: [],
  indicators: false,
  interval: 5000,
};
