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

var _dropdown_menu = require('./dropdown_menu');

var _dropdown_menu2 = _interopRequireDefault(_dropdown_menu);

var _dropdown_toggle = require('./dropdown_toggle');

var _dropdown_toggle2 = _interopRequireDefault(_dropdown_toggle);

var _dropdown_wrapper = require('./dropdown_wrapper');

var _dropdown_wrapper2 = _interopRequireDefault(_dropdown_wrapper);

var _dropdown_hoc = require('./dropdown_hoc');

var _dropdown_hoc2 = _interopRequireDefault(_dropdown_hoc);

var _get_child_display_name = require('../../utils/get_child_display_name');

var _get_child_display_name2 = _interopRequireDefault(_get_child_display_name);

var _noop = require('../../utils/noop');

var _noop2 = _interopRequireDefault(_noop);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_React$PureComponent) {
  _inherits(Dropdown, _React$PureComponent);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.handleMenuItemClick = function () {
      var _this$props = _this.props,
          hideMenu = _this$props.hideMenu,
          onMenuItemClick = _this$props.onMenuItemClick;


      hideMenu();

      onMenuItemClick.apply(undefined, arguments);
    };

    _this.state = {
      menuItems: _this.cloneMenuItems(props.children)
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.children !== this.props.children) {
        this.setState({
          menuItems: this.cloneMenuItems(nextProps.children)
        });
      }
    }
  }, {
    key: 'cloneMenuItems',
    value: function cloneMenuItems() {
      var _this2 = this;

      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.children;

      return _react2.default.Children.map(children, function (child) {
        if ((0, _get_child_display_name2.default)(child) === 'DropdownMenuItem') {
          return _react2.default.cloneElement(child, {
            onClick: _this2.handleMenuItemClick
          });
        }

        return child;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          hideMenu = _props.hideMenu,
          isMenuVisible = _props.isMenuVisible,
          label = _props.label,
          link = _props.link,
          menuHorizontalPosition = _props.menuHorizontalPosition,
          onMenuItemClick = _props.onMenuItemClick,
          showMenu = _props.showMenu,
          toggleMenu = _props.toggleMenu,
          up = _props.up,
          other = _objectWithoutProperties(_props, ['children', 'className', 'hideMenu', 'isMenuVisible', 'label', 'link', 'menuHorizontalPosition', 'onMenuItemClick', 'showMenu', 'toggleMenu', 'up']);

      var menuItems = this.state.menuItems;


      return _react2.default.createElement(
        _dropdown_wrapper2.default,
        null,
        _react2.default.createElement(
          _dropdown_toggle2.default,
          _extends({
            className: className,
            link: link,
            onClick: toggleMenu,
            show: isMenuVisible,
            up: up
          }, other),
          label
        ),
        _react2.default.createElement(
          _dropdown_menu2.default,
          {
            horizontalPosition: menuHorizontalPosition,
            show: isMenuVisible,
            up: up
          },
          menuItems
        )
      );
    }
  }]);

  return Dropdown;
}(_react2.default.PureComponent);

Dropdown.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  hideMenu: _propTypes2.default.func.isRequired,
  isMenuVisible: _propTypes2.default.bool.isRequired,
  label: _propTypes2.default.string,
  link: _propTypes2.default.bool,
  menuHorizontalPosition: _propTypes2.default.oneOf(_constants.HORIZONTAL_POSITION),
  onMenuItemClick: _propTypes2.default.func,
  showMenu: _propTypes2.default.func.isRequired,
  toggleMenu: _propTypes2.default.func.isRequired,
  up: _propTypes2.default.bool
};

Dropdown.defaultProps = {
  className: '',
  link: false,
  menuHorizontalPosition: 'left',
  onMenuItemClick: _noop2.default,
  up: false
};

var WrappedDropdown = (0, _dropdown_hoc2.default)(Dropdown);

WrappedDropdown.displayName = 'Dropdown';

exports.default = WrappedDropdown;