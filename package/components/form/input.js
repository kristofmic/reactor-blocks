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

var Input = function (_React$PureComponent) {
  _inherits(Input, _React$PureComponent);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.handleChange = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          formatter = _this$props.formatter,
          onChange = _this$props.onChange;
      var value = e.target.value;


      if (disabled) {
        return;
      }

      if (formatter && typeof formatter === 'function') {
        value = formatter(value);
      }

      _this.setState({
        value: value
      });

      onChange(value, e);
    };

    _this.state = {
      value: props.initialValue || props.value || ''
    };
    return _this;
  }

  _createClass(Input, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value != null && nextProps.value !== this.props.value && nextProps.value !== this.state.value) {
        this.setState({
          value: nextProps.value
        });
      }
    }

    // public method exposed via ref binding

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          initialValue = _props.initialValue,
          formatter = _props.formatter,
          onChange = _props.onChange,
          placeholder = _props.placeholder,
          size = _props.size,
          state = _props.state,
          type = _props.type,
          value = _props.value,
          other = _objectWithoutProperties(_props, ['children', 'className', 'disabled', 'initialValue', 'formatter', 'onChange', 'placeholder', 'size', 'state', 'type', 'value']);

      var stateValue = this.state.value;


      return _react2.default.createElement('input', _extends({
        className: (0, _classnames3.default)('form-control form-control-' + size, _defineProperty({}, 'has-' + state, state), className),
        disabled: disabled,
        onChange: this.handleChange,
        placeholder: placeholder,
        type: type,
        value: stateValue
      }, other));
    }
  }, {
    key: 'value',
    get: function get() {
      return this.state.value;
    }
  }]);

  return Input;
}(_react2.default.PureComponent);

exports.default = Input;


Input.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  formatter: _propTypes2.default.func,
  initialValue: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(_constants.SIZES),
  state: _propTypes2.default.oneOf(_constants.INPUT_CONTEXT_STATES),
  type: _propTypes2.default.oneOf(_constants.INPUT_TYPES),
  value: _propTypes2.default.string
};

Input.defaultProps = {
  className: '',
  disabled: false,
  onChange: _noop2.default,
  size: 'md',
  type: 'text'
};