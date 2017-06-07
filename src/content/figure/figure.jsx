import React from 'react';
import PropTypes from 'prop-types';

import Image from '../image';

import { HORIZONTAL_POSITION } from '../../constants';

export default function Figure(props) {
  const {
    caption,
    captionHorizontalPosition,
    className,
    imageAlt,
    imageSource,
    ...other
  } = props;

  return (
    <figure className={`figure ${className}`} {...other}>
      <Image
        alt={imageAlt}
        className="figure-img"
        responsive
        rounded
        source={imageSource}
      />
      <figcaption className={`figure-caption text-${HORIZONTAL_POSITION}`}>
        {caption}
      </figcaption>
    </figure>
  );
}

Figure.propTypes = {
  caption: PropTypes.string.isRequired,
  captionHorizontalPosition: PropTypes.oneOf(HORIZONTAL_POSITION),
  className: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
};

Figure.defaultProps = {
  className: '',
  captionHorizontalPosition: 'left',
};
