import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

export default function ListItem(props) {
  const {
    children,
    className,
    inline,
    ...other
  } = props;

  return (
    <li
      className={classnames({
        'list-inline-item': inline,
      }, className)}
      {...other}
    >
      {children}
    </li>
  );
}

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  inline: PropTypes.bool,
};

ListItem.defaultProps = {
  className: '',
  inline: false,
};
