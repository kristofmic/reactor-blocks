'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Table;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Table(props) {
  var bordered = props.bordered,
      children = props.children,
      className = props.className,
      hover = props.hover,
      inverse = props.inverse,
      responsive = props.responsive,
      small = props.small,
      striped = props.striped,
      other = _objectWithoutProperties(props, ['bordered', 'children', 'className', 'hover', 'inverse', 'responsive', 'small', 'striped']);

  return _react2.default.createElement(
    'table',
    _extends({
      className: (0, _classnames2.default)('table', {
        'table-bordered': bordered,
        'table-hover': hover,
        'table-inverse': inverse,
        'table-responsive': responsive,
        'table-sm': small,
        'table-striped': striped
      }, className)
    }, other),
    children
  );
}

Table.propTypes = {
  bordered: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  hover: _propTypes2.default.bool,
  inverse: _propTypes2.default.bool,
  responsive: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  striped: _propTypes2.default.bool
};

Table.defaultProps = {
  bordered: false,
  className: '',
  hover: false,
  inverse: false,
  responsive: false,
  small: false,
  striped: false
};