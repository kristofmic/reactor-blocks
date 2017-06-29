'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Progress;

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

function Progress(props) {
  var animated = props.animated,
      className = props.className,
      label = props.label,
      striped = props.striped,
      type = props.type,
      value = props.value,
      other = _objectWithoutProperties(props, ['animated', 'className', 'label', 'striped', 'type', 'value']);

  return _react2.default.createElement(
    'div',
    _extends({ className: 'progress ' + className }, other),
    _react2.default.createElement(
      'div',
      {
        className: (0, _classnames3.default)('progress-bar', _defineProperty({
          'progress-bar-animated': animated,
          'progress-bar-striped': animated || striped
        }, 'bg-' + type, type)),
        role: 'progressbar',
        style: {
          width: value + '%'
        }
      },
      label && value + '%'
    )
  );
}

Progress.propTypes = {
  animated: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  label: _propTypes2.default.bool,
  striped: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(_constants.PROGRESS_BAR_CONTEXT_TYPES),
  value: _propTypes2.default.number
};

Progress.defaultProps = {
  animated: false,
  className: '',
  label: false,
  striped: false,
  value: 0
};