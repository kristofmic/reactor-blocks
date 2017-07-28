'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var FLEXBOX = exports.FLEXBOX = {
  DISPLAY: {
    FLEX: 'd-flex',
    INLINE_FLEX: 'd-inline-flex',

    SM_FLEX: 'd-sm-flex',
    SM_INLINE_FLEX: 'd-sm-inline-flex',

    MD_FLEX: 'd-md-flex',
    MD_INLINE_FLEX: 'd-md-inline-flex',

    LG_FLEX: 'd-lg-flex',
    LG_INLINE_FLEX: 'd-lg-inline-flex',

    XL_FLEX: 'd-xl-flex',
    XL_INLINE_FLEX: 'd-xl-inline-flex'
  },
  DIRECTION: {
    ROW: 'flex-row',
    ROW_REVERSE: 'flex-row-reverse',
    COLUMN: 'flex-column',
    COLUMN_REVERSE: 'flex-column-reverse',

    SM_ROW: 'flex-sm-row',
    SM_ROW_REVERSE: 'flex-sm-row-reverse',
    SM_COLUMN: 'flex-sm-column',
    SM_COLUMN_REVERSE: 'flex-sm-column-reverse',

    MD_ROW: 'flex-md-row',
    MD_ROW_REVERSE: 'flex-md-row-reverse',
    MD_COLUMN: 'flex-md-column',
    MD_COLUMN_REVERSE: 'flex-md-column-reverse',

    LG_ROW: 'flex-lg-row',
    LG_ROW_REVERSE: 'flex-lg-row-reverse',
    LG_COLUMN: 'flex-lg-column',
    LG_COLUMN_REVERSE: 'flex-lg-column-reverse',

    XL_ROW: 'flex-xl-row',
    XL_ROW_REVERSE: 'flex-xl-row-reverse',
    XL_COLUMN: 'flex-xl-column',
    XL_COLUMN_REVERSE: 'flex-xl-column-reverse'
  },
  JUSTIFY: {
    START: 'justify-content-start',
    END: 'justify-content-end',
    CENTER: 'justify-content-center',
    BETWEEN: 'justify-content-between',
    AROUND: 'justify-content-around',

    SM_START: 'justify-content-sm-start',
    SM_END: 'justify-content-sm-end',
    SM_CENTER: 'justify-content-sm-center',
    SM_BETWEEN: 'justify-content-sm-between',
    SM_AROUND: 'justify-content-sm-around',

    MD_START: 'justify-content-md-start',
    MD_END: 'justify-content-md-end',
    MD_CENTER: 'justify-content-md-center',
    MD_BETWEEN: 'justify-content-md-between',
    MD_AROUND: 'justify-content-md-around',

    LG_START: 'justify-content-lg-start',
    LG_END: 'justify-content-lg-end',
    LG_CENTER: 'justify-content-lg-center',
    LG_BETWEEN: 'justify-content-lg-between',
    LG_AROUND: 'justify-content-lg-around',

    XL_START: 'justify-content-xl-start',
    XL_END: 'justify-content-xl-end',
    XL_CENTER: 'justify-content-xl-center',
    XL_BETWEEN: 'justify-content-xl-between',
    XL_AROUND: 'justify-content-xl-around'
  },
  ALIGN: {
    START: 'align-items-start',
    END: 'align-items-end',
    CENTER: 'align-items-center',
    BASELINE: 'align-items-baseline',
    STRETCH: 'align-items-stretch',

    SM_START: 'align-items-sm-start',
    SM_END: 'align-items-sm-end',
    SM_CENTER: 'align-items-sm-center',
    SM_BASELINE: 'align-items-sm-baseline',
    SM_STRETCH: 'align-items-sm-stretch',

    MD_START: 'align-items-md-start',
    MD_END: 'align-items-md-end',
    MD_CENTER: 'align-items-md-center',
    MD_BASELINE: 'align-items-md-baseline',
    MD_STRETCH: 'align-items-md-stretch',

    LG_START: 'align-items-lg-start',
    LG_END: 'align-items-lg-end',
    LG_CENTER: 'align-items-lg-center',
    LG_BASELINE: 'align-items-lg-baseline',
    LG_STRETCH: 'align-items-lg-stretch',

    XL_START: 'align-items-xl-start',
    XL_END: 'align-items-xl-end',
    XL_CENTER: 'align-items-xl-center',
    XL_BASELINE: 'align-items-xl-baseline',
    XL_STRETCH: 'align-items-xl-stretch'
  },
  ALIGN_SELF: {
    START: 'align-self-start',
    END: 'align-self-end',
    CENTER: 'align-self-center',
    BASELINE: 'align-self-baseline',
    STRETCH: 'align-self-stretch',

    SM_START: 'align-self-sm-start',
    SM_END: 'align-self-sm-end',
    SM_CENTER: 'align-self-sm-center',
    SM_BASELINE: 'align-self-sm-baseline',
    SM_STRETCH: 'align-self-sm-stretch',

    MD_START: 'align-self-md-start',
    MD_END: 'align-self-md-end',
    MD_CENTER: 'align-self-md-center',
    MD_BASELINE: 'align-self-md-baseline',
    MD_STRETCH: 'align-self-md-stretch',

    LG_START: 'align-self-lg-start',
    LG_END: 'align-self-lg-end',
    LG_CENTER: 'align-self-lg-center',
    LG_BASELINE: 'align-self-lg-baseline',
    LG_STRETCH: 'align-self-lg-stretch',

    XL_START: 'align-self-xl-start',
    XL_END: 'align-self-xl-end',
    XL_CENTER: 'align-self-xl-center',
    XL_BASELINE: 'align-self-xl-baseline',
    XL_STRETCH: 'align-self-xl-stretch'
  },
  WRAP: {
    NOWRAP: 'flex-nowrap',
    WRAP: 'flex-wrap',
    WRAP_REVERSE: 'flex-wrap-reverse',

    SM_NOWRAP: 'flex-sm-nowrap',
    SM_WRAP: 'flex-sm-wrap',
    SM_WRAP_REVERSE: 'flex-sm-wrap-reverse',

    MD_NOWRAP: 'flex-md-nowrap',
    MD_WRAP: 'flex-md-wrap',
    MD_WRAP_REVERSE: 'flex-md-wrap-reverse',

    LG_NOWRAP: 'flex-lg-nowrap',
    LG_WRAP: 'flex-lg-wrap',
    LG_WRAP_REVERSE: 'flex-lg-wrap-reverse',

    XL_NOWRAP: 'flex-xl-nowrap',
    XL_WRAP: 'flex-xl-wrap',
    XL_WRAP_REVERSE: 'flex-xl-wrap-reverse'
  },
  ORDER: {
    FIRST: 'flex-first',
    LAST: 'flex-last',
    UNORDERED: 'flex-unordered',

    SM_FIRST: 'flex-sm-first',
    SM_LAST: 'flex-sm-last',
    SM_UNORDERED: 'flex-sm-unordered',

    MD_FIRST: 'flex-md-first',
    MD_LAST: 'flex-md-last',
    MD_UNORDERED: 'flex-md-unordered',

    LG_FIRST: 'flex-lg-first',
    LG_LAST: 'flex-lg-last',
    LG_UNORDERED: 'flex-lg-unordered',

    XL_FIRST: 'flex-xl-first',
    XL_LAST: 'flex-xl-last',
    XL_UNORDERED: 'flex-xl-unordered'
  },
  ALIGN_CONTENT: {
    START: 'align-content-start',
    END: 'align-content-end',
    CENTER: 'align-content-center',
    AROUND: 'align-content-around',
    STETCH: 'align-content-stretch',

    SM_START: 'align-content-sm-start',
    SM_END: 'align-content-sm-end',
    SM_CENTER: 'align-content-sm-center',
    SM_AROUND: 'align-content-sm-around',
    SM_STETCH: 'align-content-sm-stretch',

    MD_START: 'align-content-md-start',
    MD_END: 'align-content-md-end',
    MD_CENTER: 'align-content-md-center',
    MD_AROUND: 'align-content-md-around',
    MD_STETCH: 'align-content-md-stretch',

    LG_START: 'align-content-lg-start',
    LG_END: 'align-content-lg-end',
    LG_CENTER: 'align-content-lg-center',
    LG_AROUND: 'align-content-lg-around',
    LG_STETCH: 'align-content-lg-stretch',

    XL_START: 'align-content-xl-start',
    XL_END: 'align-content-xl-end',
    XL_CENTER: 'align-content-xl-center',
    XL_AROUND: 'align-content-xl-around',
    XL_STETCH: 'align-content-xl-stretch'
  }
};