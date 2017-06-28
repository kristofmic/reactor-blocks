'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Pagination;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _list = require('../../content/list');

var _list2 = _interopRequireDefault(_list);

var _classnames2 = require('../../utils/classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Pagination(props) {
  var _classnames;

  var children = props.children,
      className = props.className,
      horizontalAlignment = props.horizontalAlignment,
      size = props.size,
      other = _objectWithoutProperties(props, ['children', 'className', 'horizontalAlignment', 'size']);

  return _react2.default.createElement(
    'nav',
    _extends({ className: className }, other),
    _react2.default.createElement(
      _list2.default,
      {
        className: (0, _classnames3.default)('pagination', (_classnames = {}, _defineProperty(_classnames, 'justify-content-' + horizontalAlignment, horizontalAlignment), _defineProperty(_classnames, 'pagination-' + size, size), _classnames))
      },
      children
    )
  );
}

Pagination.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  horizontalAlignment: _propTypes2.default.oneOf(_constants.HORIZONTAL_ALIGNMENT),
  size: _propTypes2.default.oneOf(_constants.SIZES)
};

Pagination.defaultProps = {
  className: '',
  size: 'md'
};