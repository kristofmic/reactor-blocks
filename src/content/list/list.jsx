import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

export default function List(props) {
  const {
    children,
    className,
    group,
    inline,
    ordered,
    unstyled,
    ...other
  } = props;

  const Tag = ordered ? 'ol' : 'ul';
  const listItems = React.Children.map(children, (child) => {
    if (child.type.name === 'ListItem') {
      return React.cloneElement(child, {
        group,
        inline,
      });
    }

    return child;
  });

  return (
    <Tag
      className={classnames({
        'list-group': group,
        'list-inline': inline,
        'list-unstyled': unstyled,
      }, className)}
      {...other}
    >
      {listItems}
    </Tag>
  );
}

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  group: PropTypes.bool,
  inline: PropTypes.bool,
  ordered: PropTypes.bool,
  unstyled: PropTypes.bool,
};

List.defaultProps = {
  className: '',
  group: false,
  inline: false,
  ordered: false,
  unstyled: false,
};
