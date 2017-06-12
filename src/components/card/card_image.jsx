import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../content/image';

import classnames from '../../utils/classnames';

import {
  VERTICAL_POSITION,
} from '../../constants';

export default function CardImage(props) {
  const {
    className,
    verticalPosition,
    ...other
  } = props;

  return (
    <Image
      className={classnames({
        'card-img': !verticalPosition,
        [`card-img-${verticalPosition}`]: verticalPosition,
      }, className)}
      {...other}
    />
  );
}

CardImage.propTypes = {
  className: PropTypes.string,
  verticalPosition: PropTypes.oneOf(VERTICAL_POSITION),
};

CardImage.defaultProps = {
  className: '',
};
