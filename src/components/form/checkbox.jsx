import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';
import noop from '../../utils/noop';

import {
  INPUT_CONTEXT_STATES,
} from '../../constants';

export default class Checkbox extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked || false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.checked != null &&
        nextProps.checked !== this.props.checked &&
        nextProps.checked !== this.state.checked) {
      this.setState({
        checked: nextProps.checked,
      });
    }
  }

  handleChange = (e) => {
    const {
      disabled,
      onChange,
      value,
    } = this.props;
    let {
      checked,
    } = this.state;

    if (disabled) {
      return;
    }

    checked = !checked;

    this.setState({
      checked,
    });

    onChange(checked, value, e);
  }


  render() {
    const {
      checked,
      children,
      className,
      disabled,
      id,
      inline,
      label,
      onChange,
      state,
      value,
      ...other
    } = this.props;
    const {
      checked: stateChecked,
    } = this.state;

    return (
      <div
        className={classnames('form-check', {
          checked: stateChecked,
          disabled,
          'form-check-inline': inline,
        }, className)}
        onClick={this.handleChange}
        {...other}
      >
        <label
          className={classnames('form-check-label', {
            [`text-${state}`]: state,
          })}
          htmlFor={id}
        >
          <div className="form-check-input form-check-input-checkbox">
            <i className="fa fa-check" />
          </div>
          {label}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  state: PropTypes.oneOf(INPUT_CONTEXT_STATES),
  value: PropTypes.any,
};

Checkbox.defaultProps = {
  checked: false,
  className: '',
  disabled: false,
  inline: false,
  onChange: noop,
};
