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

var _noop = require('../../utils/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioGroup = function (_React$PureComponent) {
  _inherits(RadioGroup, _React$PureComponent);

  function RadioGroup(props) {
    _classCallCheck(this, RadioGroup);

    var _this = _possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call(this, props));

    _this.handleChange = function (selected, value, e) {
      var onChange = _this.props.onChange;
      var stateValue = _this.state.value;


      if (value === stateValue) {
        return;
      }

      _this.setState({
        value: value
      });

      onChange(selected, value, e);
    };

    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(RadioGroup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value != null && nextProps.value !== this.props.value && nextProps.value !== this.state.value) {
        this.setState({
          value: nextProps.value
        });
      }
    }

    // public method exposed via ref binding

  }, {
    key: 'value',
    value: function value() {
      return this.state.value;
    }
  }, {
    key: 'cloneChildren',
    value: function cloneChildren() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          inline = _props.inline;
      var value = this.state.value;


      return _react2.default.Children.map(children, function (child) {
        if ((0, _get_child_display_name2.default)(child) !== 'Radio') {
          console.error(new Error('RadioGroup children should only be Radio components.'), child);
          return child;
        }

        return _react2.default.cloneElement(child, {
          inline: inline,
          onChange: _this2.handleChange,
          selected: child.props.value === value
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          inline = _props2.inline,
          onChange = _props2.onChange,
          value = _props2.value,
          other = _objectWithoutProperties(_props2, ['children', 'className', 'inline', 'onChange', 'value']);

      var radioChildren = this.cloneChildren();

      return _react2.default.createElement(
        'div',
        _extends({ className: 'form-radio-group ' + className }, other),
        radioChildren
      );
    }
  }]);

  return RadioGroup;
}(_react2.default.PureComponent);

exports.default = RadioGroup;


RadioGroup.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  inline: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.any
};

RadioGroup.defaultProps = {
  className: '',
  inline: false,
  onChange: _noop2.default
};