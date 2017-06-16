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

var _list = require('../../content/list');

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _noop = require('../../utils/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownMenuItem = function (_React$PureComponent) {
  _inherits(DropdownMenuItem, _React$PureComponent);

  function DropdownMenuItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DropdownMenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropdownMenuItem.__proto__ || Object.getPrototypeOf(DropdownMenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          id = _this$props.id,
          onClick = _this$props.onClick;


      if (!disabled) {
        onClick(id, e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DropdownMenuItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          id = _props.id,
          onClick = _props.onClick,
          other = _objectWithoutProperties(_props, ['children', 'className', 'disabled', 'id', 'onClick']);

      return _react2.default.createElement(
        _list.ListItem,
        _extends({
          className: (0, _classnames2.default)('dropdown-item', {
            disabled: disabled
          }, className),
          onClick: this.handleClick
        }, other),
        children
      );
    }
  }]);

  return DropdownMenuItem;
}(_react2.default.PureComponent);

exports.default = DropdownMenuItem;


DropdownMenuItem.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  id: _propTypes2.default.any,
  onClick: _propTypes2.default.func
};

DropdownMenuItem.defaultProps = {
  className: '',
  disabled: false,
  onClick: _noop2.default
};