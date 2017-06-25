'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = NavLink;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = require('../../content/link');

var _link2 = _interopRequireDefault(_link);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function NavLink(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      disabled = props.disabled,
      other = _objectWithoutProperties(props, ['active', 'children', 'className', 'disabled']);

  return _react2.default.createElement(
    _link2.default,
    _extends({
      className: (0, _classnames2.default)('nav-link', {
        active: active,
        disabled: disabled
      }, className)
    }, other),
    children
  );
}

NavLink.propTypes = {
  active: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool
};

NavLink.defaultProps = {
  active: false,
  className: '',
  disabled: false
};