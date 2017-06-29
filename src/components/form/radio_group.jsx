import React from 'react';
import PropTypes from 'prop-types';

import getChildDisplayName from '../../utils/get_child_display_name';
import noop from '../../utils/noop';

export default class RadioGroup extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
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

  cloneChildren() {
    const {
      children,
      inline,
    } = this.props;
    const {
      value,
    } = this.state;

    return React.Children.map(children, (child) => {
      if (getChildDisplayName(child) !== 'Radio') {
        console.error(new Error('RadioGroup children should only be Radio components.'), child);
        return child;
      }

      return React.cloneElement(child, {
        inline,
        onChange: this.handleChange,
        selected: child.props.value === value,
      });
    });
  }

  handleChange = (selected, value, e) => {
    const {
      onChange,
    } = this.props;
    const {
      value: stateValue,
    } = this.state;

    if (value === stateValue) {
      return;
    }

    this.setState({
      value,
    });

    onChange(selected, value, e);
  }

  render() {
    const {
      children,
      className,
      inline,
      onChange,
      value,
      ...other
    } = this.props;
    const radioChildren = this.cloneChildren();

    return (
      <div className={`form-radio-group ${className}`} {...other}>
        {radioChildren}
      </div>
    );
  }
}

RadioGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  inline: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.any,
};

RadioGroup.defaultProps = {
  className: '',
  inline: false,
  onChange: noop,
};
