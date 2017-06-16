'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dropdown_menu_divider = require('./dropdown_menu_divider');

var _dropdown_menu_divider2 = _interopRequireDefault(_dropdown_menu_divider);

var _dropdown_menu_header = require('./dropdown_menu_header');

var _dropdown_menu_header2 = _interopRequireDefault(_dropdown_menu_header);

var _dropdown_menu_item = require('./dropdown_menu_item');

var _dropdown_menu_item2 = _interopRequireDefault(_dropdown_menu_item);

var _dropdown_menu = require('./dropdown_menu');

var _dropdown_menu2 = _interopRequireDefault(_dropdown_menu);

var _dropdown_toggle = require('./dropdown_toggle');

var _dropdown_toggle2 = _interopRequireDefault(_dropdown_toggle);

var _dropdown_wrapper = require('./dropdown_wrapper');

var _dropdown_wrapper2 = _interopRequireDefault(_dropdown_wrapper);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global window */


var Dropdown = function (_React$PureComponent) {
  _inherits(Dropdown, _React$PureComponent);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.handleMenuItemClick = function () {
      var onMenuItemClick = _this.props.onMenuItemClick;


      _this.hideMenu();

      onMenuItemClick.apply(undefined, arguments);
    };

    _this.handleWindowClick = function (e) {
      var showMenu = _this.state.showMenu;


      if (showMenu) {
        var thisNode = _reactDom2.default.findDOMNode(_this); // eslint-disable-line react/no-find-dom-node

        if (!thisNode.contains(e.target)) {
          _this.hideMenu();
        }
      }
    };

    _this.hideMenu = function () {
      var showMenu = _this.state.showMenu;


      if (showMenu) {
        _this.setState({
          showMenu: false
        });
      }
    };

    _this.showMenu = function () {
      var showMenu = _this.state.showMenu;


      if (!showMenu) {
        _this.setState({
          showMenu: true
        });
      }
    };

    _this.toggleMenu = function () {
      var showMenu = _this.state.showMenu;


      if (showMenu) {
        _this.hideMenu();
      } else {
        _this.showMenu();
      }
    };

    _this.state = {
      showMenu: false
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('click', this.handleWindowClick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('click', this.handleWindowClick);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          menuHorizontalPosition = _props.menuHorizontalPosition,
          menuItems = _props.menuItems,
          onMenuItemClick = _props.onMenuItemClick,
          up = _props.up,
          other = _objectWithoutProperties(_props, ['children', 'className', 'menuHorizontalPosition', 'menuItems', 'onMenuItemClick', 'up']);

      var showMenu = this.state.showMenu;


      return _react2.default.createElement(
        _dropdown_wrapper2.default,
        { className: className },
        _react2.default.createElement(
          _dropdown_toggle2.default,
          _extends({
            onClick: this.toggleMenu,
            show: showMenu,
            up: up
          }, other),
          children
        ),
        _react2.default.createElement(
          _dropdown_menu2.default,
          {
            horizontalPosition: menuHorizontalPosition,
            show: showMenu,
            up: up
          },
          menuItems.map(function (item) {
            var id = item.id,
                label = item.label,
                _item$type = item.type,
                type = _item$type === undefined ? 'item' : _item$type,
                other = _objectWithoutProperties(item, ['id', 'label', 'type']);

            switch (type) {
              case 'divider':
                return _react2.default.createElement(_dropdown_menu_divider2.default, _extends({ key: id }, other));
              case 'header':
                return _react2.default.createElement(
                  _dropdown_menu_header2.default,
                  _extends({ key: id }, other),
                  label
                );
              case 'item':
              default:
                return _react2.default.createElement(
                  _dropdown_menu_item2.default,
                  _extends({
                    key: id,
                    id: id,
                    onClick: _this2.handleMenuItemClick
                  }, other),
                  label
                );
            }
          })
        )
      );
    }
  }]);

  return Dropdown;
}(_react2.default.PureComponent);

exports.default = Dropdown;


Dropdown.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  menuHorizontalPosition: _propTypes2.default.oneOf(_constants.HORIZONTAL_POSITION),
  menuItems: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.any.isRequired,
    label: _propTypes2.default.string,
    type: _propTypes2.default.oneOf(_constants.DROPDOWN_MENU_ITEM_TYPES)
  })),
  onMenuItemClick: _propTypes2.default.func,
  up: _propTypes2.default.bool
};

Dropdown.defaultProps = {
  className: '',
  menuHorizontalPosition: 'left',
  menuItems: [],
  up: false
};