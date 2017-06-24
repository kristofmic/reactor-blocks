'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ModalHeader;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dismiss = require('../dismiss');

var _dismiss2 = _interopRequireDefault(_dismiss);

var _modal_title = require('./modal_title');

var _modal_title2 = _interopRequireDefault(_modal_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ModalHeader(props) {
  var children = props.children,
      className = props.className,
      onDismiss = props.onDismiss,
      title = props.title,
      other = _objectWithoutProperties(props, ['children', 'className', 'onDismiss', 'title']);

  return _react2.default.createElement(
    'div',
    _extends({ className: 'modal-header ' + className }, other),
    !!title && _react2.default.createElement(
      _modal_title2.default,
      null,
      title
    ),
    children,
    typeof onDismiss === 'function' && _react2.default.createElement(_dismiss2.default, { onClick: onDismiss })
  );
}

ModalHeader.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  onDismiss: _propTypes2.default.func,
  title: _propTypes2.default.string
};

ModalHeader.defaultProps = {
  className: ''
};