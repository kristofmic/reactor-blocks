import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../loading';

import classnames from '../../utils/classnames';

import * as CLASSES from '../../utils/classes';

import {
  BUTTON_CONTEXT_TYPES,
  SIZES,
} from '../../constants';

export default class Button extends React.PureComponent {
  handleClick = (...args) => {
    const {
      disabled,
      loading,
      onClick,
    } = this.props;

    if (!disabled && !loading) {
      onClick(...args);
    }
  }

  render() {
    const {
      active,
      block,
      children,
      className,
      disabled,
      icon,
      loading,
      onClick,
      outline,
      size,
      submit,
      type,
      ...other
    } = this.props;

    return (
      <button
        className={classnames(`btn btn-${size}`, {
          [`btn-${type}`]: !outline,
          [`btn-outline-${type}`]: outline,
          'btn-block': block,
          active,
          disabled: disabled || loading,
          loading,
          icon,
        }, className)}
        disabled={disabled || loading}
        onClick={this.handleClick}
        type={classnames({ submit }) || 'button'}
        {...other}
      >
        <div className="btn-body">
          {loading && (
            <Loading
              size="sm"
              type={classnames({
                default: outline || type === 'secondary' || type === 'link',
              }) || 'white'}
            />
          )}
          {(!!icon && !loading) && (
            <i className={`${CLASSES.MARGIN.RIGHT_1} ${icon}`} />
          )}
          {children}
        </div>
      </button>
    );
  }
}

Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(SIZES),
  submit: PropTypes.bool,
  type: PropTypes.oneOf(BUTTON_CONTEXT_TYPES),
};

Button.defaultProps = {
  active: false,
  block: false,
  className: '',
  disabled: false,
  loading: false,
  outline: false,
  size: 'md',
  submit: false,
  type: 'secondary',
};
