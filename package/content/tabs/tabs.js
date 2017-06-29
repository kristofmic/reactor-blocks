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

var _get_child_display_name = require('../../utils/get_child_display_name');

var _get_child_display_name2 = _interopRequireDefault(_get_child_display_name);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global window */


var Tabs = function (_React$PureComponent) {
  _inherits(Tabs, _React$PureComponent);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.handleTabTransitionEnd = function () {
      var _this$props = _this.props,
          activeTab = _this$props.activeTab,
          fade = _this$props.fade;
      var showTab = _this.state.showTab;


      if (fade && showTab == null && showTab !== activeTab) {
        window.requestAnimationFrame(function () {
          _this.setState({
            activeTab: activeTab
          }, function () {
            window.requestAnimationFrame(function () {
              _this.setState({
                showTab: activeTab
              });

              _this.isTransitioning = false;
            });
          });
        });
      }
    };

    _this.state = {
      activeTab: props.activeTab,
      showTab: props.activeTab
    };

    _this.isTransitioning = false;
    return _this;
  }

  _createClass(Tabs, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.activeTab !== this.props.activeTab) {
        if (nextProps.fade) {
          this.transitionTab();
        } else {
          this.setState({
            activeTab: nextProps.activeTab,
            showTab: nextProps.activeTab
          });
        }
      }
    }
  }, {
    key: 'transitionTab',
    value: function transitionTab() {
      if (this.isTransitioning) {
        return;
      }

      this.isTransitioning = true;

      this.setState({
        showTab: null
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          activeTab = _props.activeTab,
          children = _props.children,
          className = _props.className,
          fade = _props.fade,
          other = _objectWithoutProperties(_props, ['activeTab', 'children', 'className', 'fade']);

      var _state = this.state,
          activeTabState = _state.activeTab,
          showTab = _state.showTab;


      var childrenTabs = _react2.default.Children.map(children, function (child) {
        if ((0, _get_child_display_name2.default)(child) === 'Tab') {
          return _react2.default.cloneElement(child, {
            active: child.props.value === activeTabState,
            fade: fade,
            onTransitionEnd: _this2.handleTabTransitionEnd,
            show: fade && child.props.value === showTab
          });
        }

        return child;
      });

      return _react2.default.createElement(
        'div',
        _extends({
          className: 'tab-content ' + className
        }, other),
        childrenTabs
      );
    }
  }]);

  return Tabs;
}(_react2.default.PureComponent);

exports.default = Tabs;


Tabs.propTypes = {
  activeTab: _propTypes2.default.any,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  fade: _propTypes2.default.bool
};

Tabs.defaultProps = {
  className: '',
  fade: false
};