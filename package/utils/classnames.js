'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = classnames;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function classnames() {
  for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
    names[_key] = arguments[_key];
  }

  return names.reduce(reduceNames, '').trim();
}

function reduceNames(names, name) {
  var additionalName = '';

  if (typeof name === 'string') {
    additionalName += ' ' + name;
  } else if (name instanceof Array) {
    additionalName += ' ' + classnames.apply(undefined, _toConsumableArray(name));
  } else if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object' && name != null) {
    additionalName += reduceObjectNames(name);
  }

  return names + additionalName;
}

function reduceObjectNames(obj) {
  return Object.getOwnPropertyNames(obj).reduce(reduceObjectName, '');

  function reduceObjectName(names, key) {
    var additionalName = obj[key] ? ' ' + key : '';
    return names + additionalName;
  }
}