export const COMMON_CONTEXT_TYPES = [
  'success',
  'info',
  'warning',
  'danger',
];

export const ALERT_CONTEXT_TYPES = COMMON_CONTEXT_TYPES;

export const BADGE_CONTEXT_TYPES = COMMON_CONTEXT_TYPES.concat([
  'default',
  'primary',
]);

export const BUTTON_CONTEXT_TYPES = COMMON_CONTEXT_TYPES.concat([
  'primary',
  'secondary',
  'link',
]);

export const LOADING_CONTEXT_TYPES = [
  'primary',
  'default',
  'white',
];

export const TABLE_CONTEXT_TYPES = COMMON_CONTEXT_TYPES.concat([
  'active',
]);
