'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = NavbarToggler;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function NavbarToggler(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      horizontalPosition = props.horizontalPosition,
      onClick = props.onClick,
      other = _objectWithoutProperties(props, ['active', 'children', 'className', 'horizontalPosition', 'onClick']);

  return _react2.default.createElement(
    'button',
    _extends({
      className: (0, _classnames2.default)('navbar-toggler navbar-toggler-' + horizontalPosition, {
        active: active
      }, className),
      onClick: onClick,
      type: 'button'
    }, other),
    _react2.default.createElement(
      'span',
      { className: 'navbar-toggler-icon' },
      _react2.default.createElement('div', { className: 'navbar-toggler-icon-bar' }),
      _react2.default.createElement('div', { className: 'navbar-toggler-icon-bar' }),
      _react2.default.createElement('div', { className: 'navbar-toggler-icon-bar' })
    )
  );
}

NavbarToggler.propTypes = {
  active: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  horizontalPosition: _propTypes2.default.oneOf(_constants.HORIZONTAL_POSITION),
  onClick: _propTypes2.default.func
};

NavbarToggler.defaultProps = {
  active: false,
  className: '',
  horizontalPosition: 'right'
};