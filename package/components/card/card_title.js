'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CardTitle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _heading = require('../../content/heading');

var _heading2 = _interopRequireDefault(_heading);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function CardTitle(props) {
  var children = props.children,
      className = props.className,
      subtitle = props.subtitle,
      other = _objectWithoutProperties(props, ['children', 'className', 'subtitle']);

  return _react2.default.createElement(
    _heading2.default,
    _extends({
      className: (0, _classnames2.default)({
        'card-title': !subtitle,
        'card-subtitle text-muted mb-2': subtitle
      }, className),
      size: (0, _classnames2.default)({ 6: subtitle }) || 4
    }, other),
    children
  );
}

CardTitle.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  subtitle: _propTypes2.default.bool
};

CardTitle.defaultProps = {
  className: '',
  subtitle: false
};