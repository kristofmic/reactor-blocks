'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popover_content = require('./popover_content');

var _popover_content2 = _interopRequireDefault(_popover_content);

var _popover_title = require('./popover_title');

var _popover_title2 = _interopRequireDefault(_popover_title);

var _animate_in_hoc = require('../../utils/animate_in_hoc');

var _animate_in_hoc2 = _interopRequireDefault(_animate_in_hoc);

var _bindref = require('../../utils/bindref');

var _bindref2 = _interopRequireDefault(_bindref);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OPPOSITE_PLACEMENT = {
  bottom: 'top',
  left: 'right',
  right: 'left',
  top: 'bottom'
};

var Popover = function (_React$PureComponent) {
  _inherits(Popover, _React$PureComponent);

  function Popover(props) {
    _classCallCheck(this, Popover);

    var _this = _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));

    _this.bindPopover = (0, _bindref2.default)('popover', _this);
    return _this;
  }

  _createClass(Popover, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          enter = _props.enter,
          placement = _props.placement,
          show = _props.show,
          title = _props.title,
          other = _objectWithoutProperties(_props, ['children', 'className', 'enter', 'placement', 'show', 'title']);

      return _react2.default.createElement(
        'div',
        _extends({
          className: (0, _classnames2.default)('popover fade', 'popover-' + placement + ' bs-tether-element-attached-' + OPPOSITE_PLACEMENT[placement], {
            'd-none': !enter,
            show: show,
            'popover-no-title': !title
          }, className),
          ref: this.bindPopover
        }, other),
        !!title && _react2.default.createElement(
          _popover_title2.default,
          null,
          title
        ),
        _react2.default.createElement(
          _popover_content2.default,
          null,
          children
        )
      );
    }
  }]);

  return Popover;
}(_react2.default.PureComponent);

Popover.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  enter: _propTypes2.default.bool.isRequired,
  placement: _propTypes2.default.oneOf(_constants.DIRECTIONS),
  show: _propTypes2.default.bool.isRequired,
  title: _propTypes2.default.string
};

Popover.defaultProps = {
  className: '',
  placement: 'right'
};

var WrappedPopover = (0, _animate_in_hoc2.default)(Popover);

WrappedPopover.displayName = 'Popover';

exports.default = WrappedPopover;