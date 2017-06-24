'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = List;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function List(props) {
  var children = props.children,
      className = props.className,
      group = props.group,
      inline = props.inline,
      ordered = props.ordered,
      unstyled = props.unstyled,
      other = _objectWithoutProperties(props, ['children', 'className', 'group', 'inline', 'ordered', 'unstyled']);

  var Tag = ordered ? 'ol' : 'ul';
  var listItems = _react2.default.Children.map(children, function (child) {
    if (child.displayName === 'ListItem' || child.type.name === 'ListItem') {
      return _react2.default.cloneElement(child, {
        group: group,
        inline: inline
      });
    }

    return child;
  });

  return _react2.default.createElement(
    Tag,
    _extends({
      className: (0, _classnames2.default)({
        'list-group': group,
        'list-inline': inline,
        'list-unstyled': unstyled
      }, className)
    }, other),
    listItems
  );
}

List.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  group: _propTypes2.default.bool,
  inline: _propTypes2.default.bool,
  ordered: _propTypes2.default.bool,
  unstyled: _propTypes2.default.bool
};

List.defaultProps = {
  className: '',
  group: false,
  inline: false,
  ordered: false,
  unstyled: false
};