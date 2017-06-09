'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Badge;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Badge(props) {
  var children = props.children,
      className = props.className,
      pill = props.pill,
      type = props.type,
      other = _objectWithoutProperties(props, ['children', 'className', 'pill', 'type']);

  return _react2.default.createElement(
    'span',
    _extends({
      className: (0, _classnames2.default)('badge badge-' + type, {
        'badge-pill': pill
      }, className)
    }, other),
    children
  );
}

Badge.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  pill: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(_constants.BADGE_CONTEXT_TYPES)
};

Badge.defaultProps = {
  className: '',
  pill: false,
  type: 'default'
};