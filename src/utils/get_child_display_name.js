export default function getChildDisplayName(child = {}) {
  const {
    type = {},
  } = child;

  return type.displayName || type.name || type;
}
