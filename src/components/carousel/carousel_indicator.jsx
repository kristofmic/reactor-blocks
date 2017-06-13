import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from '../../content/list';

import classnames from '../../utils/classnames';

export default class CarouselIndicator extends React.PureComponent {
  handleClick = () => {
    const {
      index,
      onClick,
    } = this.props;

    onClick(index);
  }

  render() {
    const {
      active,
      className,
      index,
      onClick,
      ...other
    } = this.props;

    return (
      <ListItem
        className={classnames({ active })}
        onClick={this.handleClick}
        {...other}
      />
    );
  }
}

CarouselIndicator.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

CarouselIndicator.defaultProps = {
  active: false,
  className: '',
};
