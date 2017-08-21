import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';
import noop from '../../utils/noop';

import {
  INPUT_CONTEXT_STATES,
  INPUT_TYPES,
  SIZES,
} from '../../constants';

export default class Input extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: props.initialValue || props.value || '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value != null &&
      nextProps.value !== this.props.value &&
      nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  // public method exposed via ref binding
  get value() {
    return this.state.value;
  }

  handleChange = (e) => {
    const {
      disabled,
      formatter,
      onChange,
    } = this.props;
    let {
      value,
    } = e.target;

    if (disabled) {
      return;
    }

    if (formatter && typeof formatter === 'function') {
      value = formatter(value);
    }

    this.setState({
      value,
    });

    onChange(value, e);
  }

  render() {
    const {
      children,
      className,
      disabled,
      initialValue,
      formatter,
      onChange,
      placeholder,
      size,
      state,
      type,
      value,
      ...other
    } = this.props;
    const {
      value: stateValue,
    } = this.state;

    return (
      <input
        className={classnames(`form-control form-control-${size}`, {
          [`has-${state}`]: state,
        }, className)}
        disabled={disabled}
        onChange={this.handleChange}
        placeholder={placeholder}
        type={type}
        value={stateValue}
        {...other}
      />
    );
  }
}

Input.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  formatter: PropTypes.func,
  initialValue: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  state: PropTypes.oneOf(INPUT_CONTEXT_STATES),
  type: PropTypes.oneOf(INPUT_TYPES),
  value: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  disabled: false,
  onChange: noop,
  size: 'md',
  type: 'text',
};
