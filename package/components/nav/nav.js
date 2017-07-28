'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Nav;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _list = require('../../content/list');

var _list2 = _interopRequireDefault(_list);

var _classnames2 = require('../../utils/classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _classes = require('../../utils/classes');

var CLASSES = _interopRequireWildcard(_classes);

var _constants = require('../../constants');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Nav(props) {
  var _classnames;

  var alignment = props.alignment,
      children = props.children,
      className = props.className,
      spacing = props.spacing,
      type = props.type,
      vertical = props.vertical,
      other = _objectWithoutProperties(props, ['alignment', 'children', 'className', 'spacing', 'type', 'vertical']);

  return _react2.default.createElement(
    _list2.default,
    _extends({
      className: (0, _classnames3.default)('nav', (_classnames = {}, _defineProperty(_classnames, 'justify-content-' + alignment, alignment && !vertical), _defineProperty(_classnames, 'align-items-' + alignment, alignment && vertical), _defineProperty(_classnames, CLASSES.FLEXBOX.DIRECTION.COLUMN, vertical), _defineProperty(_classnames, 'nav-' + type, type), _defineProperty(_classnames, 'nav-' + spacing, spacing), _classnames), className)
    }, other),
    children
  );
}

Nav.propTypes = {
  alignment: _propTypes2.default.oneOf(_constants.ALIGNMENT),
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  spacing: _propTypes2.default.oneOf(_constants.NAV_SPACING),
  type: _propTypes2.default.oneOf(_constants.NAV_TYPES),
  vertical: _propTypes2.default.bool
};

Nav.defaultProps = {
  alignment: 'start',
  className: '',
  vertical: false
};