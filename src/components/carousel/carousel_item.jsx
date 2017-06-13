import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../content/image';

import bindref from '../../utils/bindref';
import classnames from '../../utils/classnames';
import noop from '../../utils/noop';

export default class CarouselItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.bindCarouselItem = bindref('carouselItem', this);
  }

  componentDidMount() {
    if (this.carouselItem) {
      this.carouselItem.addEventListener('transitionend', this.props.onTransitionEnd, false);
    }
  }

  componentWillUnmount() {
    if (this.carouselItem) {
      this.carouselItem.removeEventListener('transitionend', this.props.onTransitionEnd);
    }
  }

  render() {
    const {
      active,
      className,
      imageAlt,
      imageSource,
      next,
      onSiblingEnter,
      onTransitionEnd,
      prev,
      transition,
      ...other
    } = this.props;

    return (
      <div
        className={classnames('carousel-item', {
          active,
          'carousel-item-next': next,
          'carousel-item-prev': prev,
          [`carousel-item-${transition}`]: transition && (active || next || prev),
        }, className)}
        ref={this.bindCarouselItem}
        {...other}
      >
        <Image
          alt={imageAlt}
          className="d-block"
          responsive
          source={imageSource}
        />
      </div>
    );
  }
}

CarouselItem.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
  next: PropTypes.bool,
  onSiblingEnter: PropTypes.func,
  onTransitionEnd: PropTypes.func,
  prev: PropTypes.bool,
  transition: PropTypes.oneOf(['left', 'right']),
};

CarouselItem.defaultProps = {
  active: false,
  className: '',
  next: false,
  onSiblingEnter: noop,
  onTransitionEnd: noop,
  prev: false,
};
