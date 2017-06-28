/* global document */

export default function toggleBodyClass(className, add) {
  const {
    body,
  } = document;
  const hasClass = body.className.indexOf(className) > -1;

  if (hasClass && !add) {
    body.className = body.className.replace(className, '').trim();
  } else if (!hasClass && add) {
    body.className = `${body.className} ${className}`.trim();
  }
}
