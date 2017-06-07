import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

export default function Image(props) {
  const {
    alt,
    center,
    className,
    responsive,
    rounded,
    source,
    src,
    thumbnail,
    ...other
  } = props;

  if (source == null && src == null) {
    console.warn(new Error('Image missing the "source" or "src" prop.'));
  }

  return (
    <img
      alt={alt}
      className={classnames({
        'img-fluid': responsive,
        'img-thumbnail': thumbnail,
        'mx-auto d-block': center,
        rounded,
      }, className)}
      src={source || src}
      {...other}
    />
  );
}

Image.propTypes = {
  alt: PropTypes.string,
  center: PropTypes.bool,
  className: PropTypes.string,
  responsive: PropTypes.bool,
  rounded: PropTypes.bool,
  source: PropTypes.string,
  src: PropTypes.string,
  thumbnail: PropTypes.bool,
};

Image.defaultProps = {
  center: false,
  className: '',
  responsive: false,
  rounded: false,
  thumbnail: false,
};
