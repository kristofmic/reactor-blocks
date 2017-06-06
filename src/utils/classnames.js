export default function classnames(...names) {
  return names.reduce(reduceNames, '').trim();
}

function reduceNames(names, name) {
  let additionalName = '';

  if (typeof name === 'string') {
    additionalName += ` ${name}`;
  } else if (name instanceof Array) {
    additionalName += ` ${classnames(...name)}`;
  } else if (typeof name === 'object' && name != null) {
    additionalName += reduceObjectNames(name);
  }

  return names + additionalName;
}

function reduceObjectNames(obj) {
  return Object.getOwnPropertyNames(obj).reduce(reduceObjectName, '');

  function reduceObjectName(names, key) {
    const additionalName = obj[key] ? ` ${key}` : '';
    return names + additionalName;
  }
}
