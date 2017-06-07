'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Figure;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _image = require('../image');

var _image2 = _interopRequireDefault(_image);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Figure(props) {
  var caption = props.caption,
      captionHorizontalPosition = props.captionHorizontalPosition,
      className = props.className,
      imageAlt = props.imageAlt,
      imageSource = props.imageSource,
      other = _objectWithoutProperties(props, ['caption', 'captionHorizontalPosition', 'className', 'imageAlt', 'imageSource']);

  return _react2.default.createElement(
    'figure',
    _extends({ className: 'figure ' + className }, other),
    _react2.default.createElement(_image2.default, {
      alt: imageAlt,
      className: 'figure-img',
      responsive: true,
      rounded: true,
      source: imageSource
    }),
    _react2.default.createElement(
      'figcaption',
      { className: 'figure-caption text-' + _constants.HORIZONTAL_POSITION },
      caption
    )
  );
}

Figure.propTypes = {
  caption: _propTypes2.default.string.isRequired,
  captionHorizontalPosition: _propTypes2.default.oneOf(_constants.HORIZONTAL_POSITION),
  className: _propTypes2.default.string,
  imageAlt: _propTypes2.default.string,
  imageSource: _propTypes2.default.string.isRequired
};

Figure.defaultProps = {
  className: '',
  captionHorizontalPosition: 'left'
};