import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

import {
  TEXT_CONTEXT_TYPES,
} from '../../constants';

export default function HelpText(props) {
  const {
    children,
    className,
    inline,
    type,
    ...other
  } = props;

  return (
    <small
      className={classnames(`text-${type}`, {
        'form-text': !inline,
      }, className)}
      {...other}
    >
      {children}
    </small>
  );
}

HelpText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  inline: PropTypes.bool,
  type: PropTypes.oneOf(TEXT_CONTEXT_TYPES),
};

HelpText.defaultProps = {
  className: '',
  inline: false,
  type: 'muted',
};
