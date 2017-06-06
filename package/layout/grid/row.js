'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Row;

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

function Row(props) {
  var _classnames;

  var children = props.children,
      className = props.className,
      horizontalItemAlignment = props.horizontalItemAlignment,
      noGutters = props.noGutters,
      verticalItemAlignment = props.verticalItemAlignment,
      other = _objectWithoutProperties(props, ['children', 'className', 'horizontalItemAlignment', 'noGutters', 'verticalItemAlignment']);

  var classNameProp = (0, _classnames3.default)('row', (_classnames = {}, _defineProperty(_classnames, 'align-items-' + verticalItemAlignment, verticalItemAlignment), _defineProperty(_classnames, 'justify-content-' + horizontalItemAlignment, horizontalItemAlignment), _defineProperty(_classnames, 'no-gutters', noGutters), _classnames));

  return _react2.default.createElement(
    'div',
    _extends({
      className: classNameProp + ' ' + className
    }, other),
    children
  );
}

Row.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  horizontalItemAlignment: _propTypes2.default.oneOf(_constants.HORIZONTAL_ALIGNMENT),
  noGutters: _propTypes2.default.bool,
  verticalItemAlignment: _propTypes2.default.oneOf(_constants.VERTICAL_ALIGNMENT)
};

Row.defaultProps = {
  className: '',
  noGutters: false
};