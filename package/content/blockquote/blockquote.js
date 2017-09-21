'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Blockquote;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _classes = require('../../utils/classes');

var CLASSES = _interopRequireWildcard(_classes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Blockquote(props) {
  var children = props.children,
      citation = props.citation,
      className = props.className,
      footer = props.footer,
      other = _objectWithoutProperties(props, ['children', 'citation', 'className', 'footer']);

  return _react2.default.createElement(
    'blockquote',
    _extends({
      className: (0, _classnames2.default)('blockquote', className)
    }, other),
    _react2.default.Children.count(children) === 1 ? _react2.default.createElement(
      'p',
      { className: CLASSES.MARGIN.BOTTOM_0 },
      children
    ) : children,
    footer && _react2.default.createElement(
      'footer',
      { className: 'blockquote-footer' },
      footer,
      citation && _react2.default.createElement(
        'cite',
        { title: citation },
        citation
      )
    )
  );
}

Blockquote.propTypes = {
  children: _propTypes2.default.node,
  citation: _propTypes2.default.string,
  className: _propTypes2.default.string,
  footer: _propTypes2.default.string
};

Blockquote.defaultProps = {
  className: '',
  reverse: false
};