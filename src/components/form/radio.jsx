import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';
import noop from '../../utils/noop';

export default class Radio extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.selected || false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected != null &&
        nextProps.selected !== this.props.selected &&
        nextProps.selected !== this.state.selected) {
      this.setState({
        selected: nextProps.selected,
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
      selected,
    } = this.state;

    if (disabled) {
      return;
    }

    selected = !selected;

    this.setState({
      selected,
    });

    onChange(selected, value, e);
  }


  render() {
    const {
      children,
      className,
      disabled,
      id,
      inline,
      label,
      onChange,
      selected,
      value,
      ...other
    } = this.props;
    const {
      selected: stateSelected,
    } = this.state;

    return (
      <div
        className={classnames('form-check', {
          selected: stateSelected,
          disabled,
          'form-check-inline': inline,
        }, className)}
        onClick={this.handleChange}
        {...other}
      >
        <label
          className="form-check-label"
          htmlFor={id}
        >
          <div className="form-check-input form-check-input-radio">
            <i className="fa fa-circle" />
          </div>
          {label}
        </label>
      </div>
    );
  }
}

Radio.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  selected: PropTypes.bool,
  value: PropTypes.any,
};

Radio.defaultProps = {
  className: '',
  disabled: false,
  inline: false,
  onChange: noop,
  selected: false,
};
