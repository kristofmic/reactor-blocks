'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Card;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('../../utils/classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Card(props) {
  var _classnames;

  var border = props.border,
      children = props.children,
      className = props.className,
      type = props.type,
      other = _objectWithoutProperties(props, ['border', 'children', 'className', 'type']);

  return _react2.default.createElement(
    'div',
    _extends({
      className: (0, _classnames3.default)('card', (_classnames = {}, _defineProperty(_classnames, 'card-' + type, type && !border), _defineProperty(_classnames, 'border-' + type, type && border), _classnames), className)
    }, other),
    children
  );
}

Card.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  inverse: _propTypes2.default.bool,
  border: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(_constants.CARD_CONTEXT_TYPES)
};

Card.defaultProps = {
  className: '',
  border: false
};