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

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _noop = require('../../utils/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_React$PureComponent) {
  _inherits(Checkbox, _React$PureComponent);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.handleChange = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange,
          value = _this$props.value;
      var checked = _this.state.checked;


      if (disabled) {
        return;
      }

      checked = !checked;

      _this.setState({
        checked: checked
      });

      onChange(checked, value, e);
    };

    _this.state = {
      checked: props.checked || false
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.checked != null && nextProps.checked !== this.props.checked && nextProps.checked !== this.state.checked) {
        this.setState({
          checked: nextProps.checked
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          checked = _props.checked,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          id = _props.id,
          inline = _props.inline,
          label = _props.label,
          onChange = _props.onChange,
          value = _props.value,
          other = _objectWithoutProperties(_props, ['checked', 'children', 'className', 'disabled', 'id', 'inline', 'label', 'onChange', 'value']);

      var stateChecked = this.state.checked;


      return _react2.default.createElement(
        'div',
        _extends({
          className: (0, _classnames2.default)('form-check', {
            checked: stateChecked,
            disabled: disabled,
            'form-check-inline': inline
          }, className),
          onClick: this.handleChange
        }, other),
        _react2.default.createElement(
          'label',
          {
            className: 'form-check-label',
            htmlFor: id
          },
          _react2.default.createElement(
            'div',
            { className: 'form-check-input form-check-input-checkbox' },
            _react2.default.createElement('i', { className: 'fa fa-check' })
          ),
          label
        )
      );
    }
  }]);

  return Checkbox;
}(_react2.default.PureComponent);

exports.default = Checkbox;


Checkbox.propTypes = {
  checked: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  inline: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.any
};

Checkbox.defaultProps = {
  checked: false,
  className: '',
  disabled: false,
  inline: false,
  onChange: _noop2.default
};