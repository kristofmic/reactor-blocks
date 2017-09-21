import React from 'react';
import PropTypes from 'prop-types';

import CardTitle from './card_title';
import CardText from './card_text';

import classnames from '../../utils/classnames';

export default function CardBlock(props) {
  const {
    children,
    className,
    overlay,
    subtitle,
    text,
    title,
    ...other
  } = props;

  return (
    <div
      className={classnames({
        'card-body': !overlay,
        'card-img-overlay': overlay,
      }, className)}
      {...other}
    >
      {!!title && (
        <CardTitle>{title}</CardTitle>
      )}
      {!!subtitle && (
        <CardTitle subtitle>{subtitle}</CardTitle>
      )}
      {!!text && (
        <CardText>{text}</CardText>
      )}
      {children}
    </div>
  );
}

CardBlock.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  overlay: PropTypes.bool,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

CardBlock.defaultProps = {
  className: '',
  overlay: false,
};
