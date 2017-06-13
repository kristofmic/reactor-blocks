export default function bindref(name, context) {
  return function bindrefElement(el) {
    if (el) {
      context[name] = el; // eslint-disable-line no-param-reassign
    }
  };
}
