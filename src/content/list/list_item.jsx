import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

import {
  LIST_ITEM_CONTEXT_TYPES,
} from '../../constants';

export default function ListItem(props) {
  const {
    action,
    active,
    children,
    className,
    disabled,
    group,
    inline,
    type,
    ...other
  } = props;

  return (
    <li
      className={classnames({
        'list-group-item-action': group && action,
        active,
        disabled,
        'list-group-item': group,
        'list-inline-item': inline,
        [`list-group-item-${type}`]: group && type,
      }, className)}
      {...other}
    >
      {children}
    </li>
  );
}

ListItem.propTypes = {
  action: PropTypes.bool,
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  group: PropTypes.bool,
  inline: PropTypes.bool,
  type: PropTypes.oneOf(LIST_ITEM_CONTEXT_TYPES),
};

ListItem.defaultProps = {
  action: false,
  active: false,
  className: '',
  disabled: false,
  group: false,
  inline: false,
};
