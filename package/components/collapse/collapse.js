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

var _bindref = require('../../utils/bindref');

var _bindref2 = _interopRequireDefault(_bindref);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global window */


var Collapse = function (_React$PureComponent) {
  _inherits(Collapse, _React$PureComponent);

  function Collapse(props) {
    _classCallCheck(this, Collapse);

    var _this = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

    _this.getPXHeight = function () {
      return _this.collapseNode.scrollHeight + 'px';
    };

    _this.setHeight = function () {
      var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.getPXHeight();

      _this.setState({
        style: {
          height: height
        }
      });
    };

    _this.handleTransitionEnd = function () {
      _this.setState({
        style: null,
        transitioning: false
      });
    };

    _this.state = {
      style: null,
      transitioning: false
    };

    _this.bindCollapse = (0, _bindref2.default)('collapseNode', _this);
    return _this;
  }

  _createClass(Collapse, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (!this.state.transitioning) {
        if (nextProps.show && !this.props.show) {
          this.setState({
            transitioning: true
          }, this.setHeight);
        } else if (!nextProps.show && this.props.show) {
          this.setHeight();
          this.setState({
            transitioning: true
          }, function () {
            window.requestAnimationFrame(function () {
              _this2.setHeight(0);
            });
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          show = _props.show,
          other = _objectWithoutProperties(_props, ['children', 'className', 'show']);

      var _state = this.state,
          style = _state.style,
          transitioning = _state.transitioning;


      return _react2.default.createElement(
        'div',
        _extends({
          className: (0, _classnames2.default)({
            collapse: !show && !transitioning,
            'collapse show': show && !transitioning,
            collapsing: transitioning
          }),
          onTransitionEnd: this.handleTransitionEnd,
          ref: this.bindCollapse,
          style: style
        }, other),
        children
      );
    }
  }]);

  return Collapse;
}(_react2.default.PureComponent);

exports.default = Collapse;


Collapse.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  show: _propTypes2.default.bool
};

Collapse.defaultProps = {
  className: '',
  show: false
};