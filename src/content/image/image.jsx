import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

export default function Image(props) {
  const {
    alt,
    center,
    className,
    responsive,
    src,
    thumbnail,
    ...other
  } = props;

  return (
    <img
      alt={alt}
      className={classnames({
        'img-fluid': responsive,
        'img-thumbnail': thumbnail,
        'mx-auto d-block': center,
      }, className)}
      src={src}
      {...other}
    />
  );
}

Image.propTypes = {
  alt: PropTypes.string,
  center: PropTypes.bool,
  className: PropTypes.string,
  responsive: PropTypes.bool,
  src: PropTypes.string.isRequired,
  thumbnail: PropTypes.bool,
};

Image.defaultProps = {
  center: false,
  className: '',
  responsive: false,
  thumbnail: false,
};
