import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../content/heading';

import classnames from '../../utils/classnames';

export default function CardTitle(props) {
  const {
    children,
    className,
    subtitle,
    ...other
  } = props;

  return (
    <Heading
      className={classnames({
        'card-title': !subtitle,
        'card-subtitle': subtitle,
      }, className)}
      size={classnames({ 6: subtitle }) || 4}
      {...other}
    >
      {children}
    </Heading>
  );
}

CardTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  subtitle: PropTypes.bool,
};

CardTitle.defaultProps = {
  className: '',
  subtitle: false,
};
