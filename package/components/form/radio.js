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

var _classnames2 = require('../../utils/classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _noop = require('../../utils/noop');

var _noop2 = _interopRequireDefault(_noop);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = function (_React$PureComponent) {
  _inherits(Radio, _React$PureComponent);

  function Radio(props) {
    _classCallCheck(this, Radio);

    var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

    _this.handleChange = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange,
          value = _this$props.value;
      var selected = _this.state.selected;


      if (disabled) {
        return;
      }

      selected = !selected;

      _this.setState({
        selected: selected
      });

      onChange(selected, value, e);
    };

    _this.state = {
      selected: props.selected || false
    };
    return _this;
  }

  _createClass(Radio, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selected != null && nextProps.selected !== this.props.selected && nextProps.selected !== this.state.selected) {
        this.setState({
          selected: nextProps.selected
        });
      }
    }

    // public method exposed via ref binding

  }, {
    key: 'value',
    value: function value() {
      return this.state.selected;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          id = _props.id,
          inline = _props.inline,
          label = _props.label,
          onChange = _props.onChange,
          selected = _props.selected,
          state = _props.state,
          value = _props.value,
          other = _objectWithoutProperties(_props, ['children', 'className', 'disabled', 'id', 'inline', 'label', 'onChange', 'selected', 'state', 'value']);

      var stateSelected = this.state.selected;


      return _react2.default.createElement(
        'div',
        _extends({
          className: (0, _classnames3.default)('form-check', {
            selected: stateSelected,
            disabled: disabled,
            'form-check-inline': inline
          }, className),
          onClick: this.handleChange
        }, other),
        _react2.default.createElement(
          'label',
          {
            className: (0, _classnames3.default)('form-check-label', _defineProperty({}, 'text-' + state, state)),
            htmlFor: id
          },
          _react2.default.createElement(
            'div',
            { className: 'form-check-input form-check-input-radio' },
            _react2.default.createElement('i', { className: 'fa fa-circle' })
          ),
          label
        )
      );
    }
  }]);

  return Radio;
}(_react2.default.PureComponent);

exports.default = Radio;


Radio.displayName = 'Radio';

Radio.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  inline: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  selected: _propTypes2.default.bool,
  state: _propTypes2.default.oneOf(_constants.INPUT_CONTEXT_STATES),
  value: _propTypes2.default.any
};

Radio.defaultProps = {
  className: '',
  disabled: false,
  inline: false,
  onChange: _noop2.default,
  selected: false
};