'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CarouselIndicators;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _carousel_indicator = require('./carousel_indicator');

var _carousel_indicator2 = _interopRequireDefault(_carousel_indicator);

var _list = require('../../content/list');

var _list2 = _interopRequireDefault(_list);

var _times = require('../../utils/times');

var _times2 = _interopRequireDefault(_times);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function CarouselIndicators(props) {
  var activeIndex = props.activeIndex,
      className = props.className,
      count = props.count,
      onIndicatorClick = props.onIndicatorClick,
      other = _objectWithoutProperties(props, ['activeIndex', 'className', 'count', 'onIndicatorClick']);

  return _react2.default.createElement(
    _list2.default,
    _extends({
      className: 'carousel-indicators ' + className,
      ordered: true
    }, other),
    (0, _times2.default)(count, function (i) {
      return _react2.default.createElement(_carousel_indicator2.default, {
        active: activeIndex === i,
        key: i,
        index: i,
        onClick: onIndicatorClick
      });
    })
  );
}

CarouselIndicators.propTypes = {
  activeIndex: _propTypes2.default.number.isRequired,
  className: _propTypes2.default.string,
  count: _propTypes2.default.number.isRequired,
  onIndicatorClick: _propTypes2.default.func.isRequired
};

CarouselIndicators.defaultProps = {
  className: ''
};