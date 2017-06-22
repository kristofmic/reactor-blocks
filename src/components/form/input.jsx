import React from 'react';
import PropTypes from 'prop-types';

import noop from '../../utils/noop';

import {
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
      type,
      value,
      ...other
    } = this.props;
    const {
      value: stateValue,
    } = this.state;

    return (
      <input
        className={`form-control form-control-${size} ${className}`}
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
