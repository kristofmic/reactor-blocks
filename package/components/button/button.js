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

var _loading = require('../loading');

var _loading2 = _interopRequireDefault(_loading);

var _classnames2 = require('../../utils/classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$PureComponent) {
  _inherits(Button, _React$PureComponent);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          active = _props.active,
          block = _props.block,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          icon = _props.icon,
          loading = _props.loading,
          onClick = _props.onClick,
          outline = _props.outline,
          size = _props.size,
          submit = _props.submit,
          type = _props.type,
          other = _objectWithoutProperties(_props, ['active', 'block', 'children', 'className', 'disabled', 'icon', 'loading', 'onClick', 'outline', 'size', 'submit', 'type']);

      return _react2.default.createElement(
        'button',
        _extends({
          className: (0, _classnames3.default)('btn btn-' + size, (_classnames = {}, _defineProperty(_classnames, 'btn-' + type, !outline), _defineProperty(_classnames, 'btn-outline-' + type, outline), _defineProperty(_classnames, 'btn-block', block), _defineProperty(_classnames, 'active', active), _defineProperty(_classnames, 'disabled', disabled || loading), _defineProperty(_classnames, 'loading', loading), _defineProperty(_classnames, 'icon', icon), _classnames), className),
          disabled: disabled || loading,
          onClick: this.handleClick,
          type: (0, _classnames3.default)({ submit: submit }) || 'button'
        }, other),
        _react2.default.createElement(
          'div',
          { className: 'btn-body' },
          loading && _react2.default.createElement(_loading2.default, {
            size: 'sm',
            type: (0, _classnames3.default)({
              default: outline || type === 'secondary' || type === 'link'
            }) || 'white'
          }),
          !!icon && !loading && _react2.default.createElement('i', { className: 'mr-1 ' + icon }),
          children
        )
      );
    }
  }]);

  return Button;
}(_react2.default.PureComponent);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleClick = function () {
    var _props2 = _this2.props,
        disabled = _props2.disabled,
        loading = _props2.loading,
        onClick = _props2.onClick;


    if (!disabled && !loading) {
      onClick.apply(undefined, arguments);
    }
  };
};

exports.default = Button;


Button.propTypes = {
  active: _propTypes2.default.bool,
  block: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  icon: _propTypes2.default.string,
  loading: _propTypes2.default.bool,
  onClick: _propTypes2.default.func.isRequired,
  outline: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(_constants.SIZES),
  submit: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(_constants.BUTTON_CONTEXT_TYPES)
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
  type: 'secondary'
};