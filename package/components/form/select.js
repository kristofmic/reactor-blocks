'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dismiss = require('../dismiss');

var _dismiss2 = _interopRequireDefault(_dismiss);

var _dropdown = require('../dropdown');

var _classnames2 = require('../../utils/classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _noop = require('../../utils/noop');

var _noop2 = _interopRequireDefault(_noop);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_React$PureComponent) {
  _inherits(Select, _React$PureComponent);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.handleDismiss = function (e) {
      _this.handleOptionClick(null, e);
    };

    _this.handleOptionClick = function (option, e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          hideMenu = _this$props.hideMenu,
          onChange = _this$props.onChange;


      if (disabled) {
        return;
      }

      _this.setState({
        value: option
      });

      onChange(option, e);

      hideMenu();
    };

    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(Select, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value != null && nextProps.value !== this.props.value && nextProps.value !== this.state.value) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: 'cloneOptions',
    value: function cloneOptions() {
      var _this2 = this;

      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.children;
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.value;

      return _react2.default.Children.map(children, function (child) {
        if (child.displayName === 'SelectOption' || child.type.name === 'SelectOption') {
          return _react2.default.cloneElement(child, {
            active: value && child.props.value === value.value,
            onClick: _this2.handleOptionClick
          });
        }

        return child;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          hideMenu = _props.hideMenu,
          isMenuVisible = _props.isMenuVisible,
          menuHorizontalPosition = _props.menuHorizontalPosition,
          onChange = _props.onChange,
          placeholder = _props.placeholder,
          required = _props.required,
          showMenu = _props.showMenu,
          size = _props.size,
          state = _props.state,
          toggleMenu = _props.toggleMenu,
          up = _props.up,
          value = _props.value,
          other = _objectWithoutProperties(_props, ['children', 'className', 'disabled', 'hideMenu', 'isMenuVisible', 'menuHorizontalPosition', 'onChange', 'placeholder', 'required', 'showMenu', 'size', 'state', 'toggleMenu', 'up', 'value']);

      var stateValue = this.state.value;

      var options = this.cloneOptions();

      return _react2.default.createElement(
        _dropdown.DropdownWrapper,
        _extends({ className: 'd-block ' + className }, other),
        _react2.default.createElement(
          'div',
          {
            className: (0, _classnames3.default)('form-control form-control-' + size + ' select', _defineProperty({}, 'has-' + state, state)),
            onClick: toggleMenu
          },
          _react2.default.createElement(_dropdown.DropdownToggleIcon, {
            className: 'float-right',
            show: isMenuVisible,
            up: up
          }),
          !required && stateValue != null && _react2.default.createElement(_dismiss2.default, {
            className: 'float-right mr-1',
            onClick: this.handleDismiss
          }),
          placeholder != null && stateValue == null && _react2.default.createElement(
            'div',
            { className: 'select-placeholder' },
            placeholder
          ),
          stateValue != null && _react2.default.createElement(
            'div',
            { className: 'select-value' },
            stateValue.label
          )
        ),
        _react2.default.createElement(
          _dropdown.DropdownMenu,
          {
            horizontalPosition: menuHorizontalPosition,
            show: isMenuVisible,
            up: up
          },
          options
        )
      );
    }
  }]);

  return Select;
}(_react2.default.PureComponent);
// TODO: add validation, supporting success, warning, and danger states


Select.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  hideMenu: _propTypes2.default.func.isRequired,
  isMenuVisible: _propTypes2.default.bool.isRequired,
  menuHorizontalPosition: _propTypes2.default.oneOf(_constants.HORIZONTAL_POSITION),
  onChange: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  showMenu: _propTypes2.default.func.isRequired,
  size: _propTypes2.default.oneOf(_constants.SIZES),
  state: _propTypes2.default.oneOf(_constants.INPUT_CONTEXT_STATES),
  toggleMenu: _propTypes2.default.func.isRequired,
  up: _propTypes2.default.bool,
  value: _propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.any.isRequired
  })
};

Select.defaultProps = {
  className: '',
  disabled: false,
  menuHorizontalPosition: 'left',
  onChange: _noop2.default,
  required: false,
  size: 'md',
  up: false
};

exports.default = (0, _dropdown.dropdownHOC)(Select);