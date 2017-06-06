import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

import {
  HORIZONTAL_POSITION,
  VERTICAL_ALIGNMENT,
} from '../../constants';

export default function Media(props) {
  const {
    children,
    className,
    heading,
    imageAlt,
    imageSource,
    imageStyle,
    imageHorizontalPosition,
    imageVerticalAlignment,
    imageMargin,
    ...other
  } = props;
  const imagePositionLeft = imageHorizontalPosition === 'left';
  const imagePositionRight = imageHorizontalPosition === 'right';

  const Img = (
    <img
      className={classnames('d-flex', {
        [`align-self-${imageVerticalAlignment}`]: imageVerticalAlignment,
        [`mr-${imageMargin}`]: imagePositionLeft,
        [`ml-${imageMargin}`]: imagePositionRight,
      })}
      src={imageSource}
      style={imageStyle}
      alt={imageAlt}
    />
  );

  return (
    <div className={`media ${className}`} {...other}>
      {imagePositionLeft && Img}
      <div className="media-body">
        <h5 className="mt-0">{heading}</h5>
        {children}
      </div>
      {imagePositionRight && Img}
    </div>
  );
}

Media.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSource: PropTypes.string,
  imageStyle: PropTypes.object,
  imageHorizontalPosition: PropTypes.oneOf(HORIZONTAL_POSITION),
  imageVerticalAlignment: PropTypes.oneOf(VERTICAL_ALIGNMENT),
  imageMargin: PropTypes.number,
};

Media.defaultProps = {
  className: '',
  imageHorizontalPosition: 'left',
  imageVerticalAlignment: 'start',
  imageMargin: 3,
  imageStyle: {},
};
