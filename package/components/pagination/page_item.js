'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = PageItem;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = require('../../content/link');

var _link2 = _interopRequireDefault(_link);

var _list = require('../../content/list');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function PageItem(props) {
  var children = props.children,
      className = props.className,
      href = props.href,
      onClick = props.onClick,
      other = _objectWithoutProperties(props, ['children', 'className', 'href', 'onClick']);

  return _react2.default.createElement(
    _list.ListItem,
    _extends({ className: 'page-item ' + className }, other),
    _react2.default.createElement(
      _link2.default,
      {
        className: 'page-link',
        href: href,
        onClick: onClick
      },
      children
    )
  );
}

PageItem.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  href: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

PageItem.defaultProps = {
  className: ''
};