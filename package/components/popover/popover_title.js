'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = PopoverTitle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _heading = require('../../content/heading');

var _heading2 = _interopRequireDefault(_heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function PopoverTitle(props) {
  var children = props.children,
      className = props.className,
      other = _objectWithoutProperties(props, ['children', 'className']);

  return _react2.default.createElement(
    _heading2.default,
    _extends({
      className: 'popover-title ' + className,
      size: 3
    }, other),
    children
  );
}

PopoverTitle.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};

PopoverTitle.defaultProps = {
  className: ''
};