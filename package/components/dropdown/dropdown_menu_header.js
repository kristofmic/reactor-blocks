'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = DropdownMenuHeader;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _heading = require('../../content/heading');

var _heading2 = _interopRequireDefault(_heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function DropdownMenuHeader(props) {
  var children = props.children,
      className = props.className,
      size = props.size,
      other = _objectWithoutProperties(props, ['children', 'className', 'size']);

  return _react2.default.createElement(
    _heading2.default,
    _extends({
      className: 'dropdown-header ' + className,
      size: size
    }, other),
    children
  );
}

DropdownMenuHeader.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  size: _propTypes2.default.oneOf([1, '1', 2, '2', 3, '3', 4, '4', 5, '5', 6, '6'])
};

DropdownMenuHeader.defaultProps = {
  className: '',
  size: 6
};