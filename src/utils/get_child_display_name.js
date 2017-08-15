export default function getChildDisplayName(child) {
  if (child != null) {
    return;
  }

  const {
    type = {},
  } = child;

  return type.displayName || type.name || type;
}
