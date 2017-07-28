import React from 'react';
import PropTypes from 'prop-types';

import Dismiss from '../dismiss';
import {
  dropdownHOC,
  DropdownMenu,
  DropdownToggleIcon,
  DropdownWrapper,
} from '../dropdown';

import classnames from '../../utils/classnames';
import getChildDisplayName from '../../utils/get_child_display_name';
import noop from '../../utils/noop';

import * as CLASSES from '../../utils/classes';

import {
  HORIZONTAL_POSITION,
  INPUT_CONTEXT_STATES,
  SIZES,
} from '../../constants';

class Select extends React.PureComponent {
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

  cloneOptions(children = this.props.children, value = this.state.value) {
    return React.Children.map(children, (child) => {
      if (getChildDisplayName(child) === 'SelectOption') {
        return React.cloneElement(child, {
          active: value && child.props.value === value.value,
          onClick: this.handleOptionClick,
        });
      }

      return child;
    });
  }

  handleDismiss = (e) => {
    this.handleOptionClick(null, e);
  }

  handleOptionClick = (option, e) => {
    const {
      disabled,
      hideMenu,
      onChange,
    } = this.props;

    if (disabled) {
      return;
    }

    this.setState({
      value: option,
    });

    onChange(option, e);

    hideMenu();
  }

  render() {
    const {
      children,
      className,
      disabled,
      hideMenu,
      isMenuVisible,
      menuHorizontalPosition,
      onChange,
      placeholder,
      required,
      showMenu,
      size,
      state,
      toggleMenu,
      up,
      value,
      ...other
    } = this.props;
    const {
      value: stateValue,
    } = this.state;
    const options = this.cloneOptions();

    return (
      <DropdownWrapper className={`${CLASSES.DISPLAY.BLOCK} ${className}`} {...other}>
        <div
          className={classnames(`form-control form-control-${size} select`, {
            [`has-${state}`]: state,
          })}
          onClick={toggleMenu}
        >
          <DropdownToggleIcon
            className={CLASSES.FLOAT.RIGHT}
            show={isMenuVisible}
            up={up}
          />
          {(!required && stateValue != null) && (
            <Dismiss
              className={`${CLASSES.FLOAT.RIGHT} ${CLASSES.MARGIN.RIGHT_1}`}
              onClick={this.handleDismiss}
            />
          )}
          {(placeholder != null && stateValue == null) && (
            <div className="select-placeholder">
              {placeholder}
            </div>
          )}
          {(stateValue != null) && (
            <div className="select-value">
              {stateValue.label}
            </div>
          )}
        </div>
        <DropdownMenu
          horizontalPosition={menuHorizontalPosition}
          show={isMenuVisible}
          up={up}
        >
          {options}
        </DropdownMenu>
      </DropdownWrapper>
    );
  }
}

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hideMenu: PropTypes.func.isRequired,
  isMenuVisible: PropTypes.bool.isRequired,
  menuHorizontalPosition: PropTypes.oneOf(HORIZONTAL_POSITION),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  showMenu: PropTypes.func.isRequired,
  size: PropTypes.oneOf(SIZES),
  state: PropTypes.oneOf(INPUT_CONTEXT_STATES),
  toggleMenu: PropTypes.func.isRequired,
  up: PropTypes.bool,
  value: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
  }),
};

Select.defaultProps = {
  className: '',
  disabled: false,
  menuHorizontalPosition: 'left',
  onChange: noop,
  required: false,
  size: 'md',
  up: false,
};

const WrappedSelect = dropdownHOC(Select);

WrappedSelect.displayName = 'Select';

export default WrappedSelect;
