import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

export default function List(props) {
  const {
    children,
    className,
    inline,
    ordered,
    unstyled,
    ...other
  } = props;

  const LTag = ordered ? 'ol' : 'ul';

  return (
    <LTag
      className={classnames({
        'list-inline': inline,
        'list-unstyled': unstyled,
      }, className)}
      {...other}
    >
      {children}
    </LTag>
  );
}

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  inline: PropTypes.bool,
  ordered: PropTypes.bool,
  unstyled: PropTypes.bool,
};

List.defaultProps = {
  className: '',
  inline: false,
  ordered: false,
  unstyled: false,
};
