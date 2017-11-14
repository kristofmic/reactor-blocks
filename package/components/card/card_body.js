'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CardBody;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _card_title = require('./card_title');

var _card_title2 = _interopRequireDefault(_card_title);

var _card_text = require('./card_text');

var _card_text2 = _interopRequireDefault(_card_text);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function CardBody(props) {
  var children = props.children,
      className = props.className,
      overlay = props.overlay,
      subtitle = props.subtitle,
      text = props.text,
      title = props.title,
      other = _objectWithoutProperties(props, ['children', 'className', 'overlay', 'subtitle', 'text', 'title']);

  return _react2.default.createElement(
    'div',
    _extends({
      className: (0, _classnames2.default)({
        'card-body': !overlay,
        'card-img-overlay': overlay
      }, className)
    }, other),
    !!title && _react2.default.createElement(
      _card_title2.default,
      null,
      title
    ),
    !!subtitle && _react2.default.createElement(
      _card_title2.default,
      { subtitle: true },
      subtitle
    ),
    !!text && _react2.default.createElement(
      _card_text2.default,
      null,
      text
    ),
    children
  );
}

CardBody.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  overlay: _propTypes2.default.bool,
  subtitle: _propTypes2.default.string,
  text: _propTypes2.default.string,
  title: _propTypes2.default.string
};

CardBody.defaultProps = {
  className: '',
  overlay: false
};