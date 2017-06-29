'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = PopoverWrapper;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// NOTE: the primary purpose of this is to provide an entity with a position: relative;
// so that the menu can be positioned correctly.
function PopoverWrapper(props) {
  var children = props.children,
      className = props.className,
      other = _objectWithoutProperties(props, ['children', 'className']);

  return _react2.default.createElement(
    'div',
    _extends({
      className: 'popover-wrapper ' + className
    }, other),
    children
  );
}

PopoverWrapper.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};

PopoverWrapper.defaultProps = {
  className: ''
};