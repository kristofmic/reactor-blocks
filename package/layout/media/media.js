'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Media;

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

function Media(props) {
  var _classnames;

  var children = props.children,
      className = props.className,
      heading = props.heading,
      imageAlt = props.imageAlt,
      imageSource = props.imageSource,
      imageStyle = props.imageStyle,
      imageHorizontalPosition = props.imageHorizontalPosition,
      imageVerticalAlignment = props.imageVerticalAlignment,
      imageMargin = props.imageMargin,
      other = _objectWithoutProperties(props, ['children', 'className', 'heading', 'imageAlt', 'imageSource', 'imageStyle', 'imageHorizontalPosition', 'imageVerticalAlignment', 'imageMargin']);

  var imagePositionLeft = imageHorizontalPosition === 'left';
  var imagePositionRight = imageHorizontalPosition === 'right';

  var Img = _react2.default.createElement('img', {
    className: (0, _classnames3.default)('d-flex', (_classnames = {}, _defineProperty(_classnames, 'align-self-' + imageVerticalAlignment, imageVerticalAlignment), _defineProperty(_classnames, 'mr-' + imageMargin, imagePositionLeft), _defineProperty(_classnames, 'ml-' + imageMargin, imagePositionRight), _classnames)),
    src: imageSource,
    style: imageStyle,
    alt: imageAlt
  });

  return _react2.default.createElement(
    'div',
    _extends({ className: 'media ' + className }, other),
    imagePositionLeft && Img,
    _react2.default.createElement(
      'div',
      { className: 'media-body' },
      _react2.default.createElement(
        'h5',
        { className: 'mt-0' },
        heading
      ),
      children
    ),
    imagePositionRight && Img
  );
}

Media.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  heading: _propTypes2.default.string,
  imageAlt: _propTypes2.default.string,
  imageSource: _propTypes2.default.string,
  imageStyle: _propTypes2.default.object,
  imageHorizontalPosition: _propTypes2.default.oneOf(_constants.HORIZONTAL_POSITION),
  imageVerticalAlignment: _propTypes2.default.oneOf(_constants.VERTICAL_ALIGNMENT),
  imageMargin: _propTypes2.default.number
};

Media.defaultProps = {
  className: '',
  imageHorizontalPosition: 'left',
  imageVerticalAlignment: 'start',
  imageMargin: 3,
  imageStyle: {}
};